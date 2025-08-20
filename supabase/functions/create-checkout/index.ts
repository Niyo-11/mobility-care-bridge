import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { cartItems, shippingAddress, userEmail } = await req.json();

    if (!cartItems || cartItems.length === 0) {
      throw new Error("No items in cart");
    }

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    // Get user info
    const authHeader = req.headers.get("Authorization");
    let user = null;
    if (authHeader) {
      const token = authHeader.replace("Bearer ", "");
      const { data } = await supabase.auth.getUser(token);
      user = data.user;
    }

    // Calculate total and create line items
    let totalAmount = 0;
    const lineItems = cartItems.map((item: any) => {
      const itemTotal = item.price * item.quantity;
      totalAmount += itemTotal;
      
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            description: item.description || "",
          },
          unit_amount: Math.round(item.price * 100), // Convert to cents
        },
        quantity: item.quantity,
      };
    });

    // Create or find Stripe customer
    let customerId;
    const email = user?.email || userEmail;
    if (email) {
      const customers = await stripe.customers.list({ email, limit: 1 });
      if (customers.data.length > 0) {
        customerId = customers.data[0].id;
      } else {
        const customer = await stripe.customers.create({ email });
        customerId = customer.id;
      }
    }

    // Get the first product's merchant as the main merchant
    const supabaseService = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    // Get merchant_id from first product or create a demo merchant
    let merchantId = null;
    const firstProductId = cartItems[0].productId || cartItems[0].id;
    const { data: firstProduct, error: productError } = await supabaseService
      .from('products')
      .select('merchant_id')
      .eq('id', firstProductId)
      .single();

    if (productError || !firstProduct?.merchant_id) {
      console.error('Product fetch error:', productError);
      // Create or get a demo merchant if none exists
      const { data: existingMerchant } = await supabaseService
        .from('merchants')
        .select('id')
        .eq('business_name', 'Demo Merchant')
        .limit(1)
        .single();
      
      if (existingMerchant) {
        merchantId = existingMerchant.id;
      } else {
        // Create a demo merchant
        const { data: newMerchant, error: merchantError } = await supabaseService
          .from('merchants')
          .insert({
            user_id: user?.id || '00000000-0000-0000-0000-000000000000',
            business_name: 'Demo Merchant',
            business_description: 'Demo merchant for testing',
            status: 'approved',
            merchant_type: 'vendor'
          })
          .select('id')
          .single();
        
        if (merchantError) {
          console.error('Error creating demo merchant:', merchantError);
          throw new Error('Unable to process order - no valid merchant');
        }
        merchantId = newMerchant.id;
      }
    } else {
      merchantId = firstProduct.merchant_id;
    }
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : email,
      line_items: lineItems,
      mode: "payment",
      success_url: `${req.headers.get("origin")}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/checkout/cancel`,
      shipping_address_collection: {
        allowed_countries: ['US', 'RW', 'NG'],
      },
      metadata: {
        user_id: user?.id || "",
        shipping_address: JSON.stringify(shippingAddress),
      },
    });

    // Create preliminary order record
    if (user) {
      const orderData = {
        user_id: user.id,
        merchant_id: merchantId,
        total_amount: totalAmount,
        status: 'pending',
        stripe_session_id: session.id,
        customer_email: email,
        customer_name: shippingAddress?.name || user.email,
        shipping_address: shippingAddress,
      };

      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert(orderData)
        .select()
        .single();

      if (orderError) {
        console.error('Error creating order:', orderError);
      } else {
        // Create order items
        const orderItems = cartItems.map((item: any) => ({
          order_id: order.id,
          product_id: item.id,
          quantity: item.quantity,
          unit_price: item.price,
          total_price: item.price * item.quantity,
        }));

        await supabase.from('order_items').insert(orderItems);
      }
    }

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});