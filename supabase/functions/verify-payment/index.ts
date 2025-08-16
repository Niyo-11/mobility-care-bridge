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
    const { session_id } = await req.json();

    if (!session_id) {
      throw new Error("Session ID is required");
    }

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    // Retrieve the session from Stripe
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (!session) {
      throw new Error("Session not found");
    }

    // Update order status based on payment status
    const orderStatus = session.payment_status === 'paid' ? 'completed' : 'failed';
    
    const { data: order, error: updateError } = await supabase
      .from('orders')
      .update({
        status: orderStatus,
        stripe_payment_intent_id: session.payment_intent,
        updated_at: new Date().toISOString(),
      })
      .eq('stripe_session_id', session_id)
      .select()
      .single();

    if (updateError) {
      console.error('Error updating order:', updateError);
      throw updateError;
    }

    return new Response(JSON.stringify({
      success: true,
      order,
      payment_status: session.payment_status,
      customer_email: session.customer_details?.email,
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error('Error verifying payment:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});