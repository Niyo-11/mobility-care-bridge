-- Check if types exist and create only missing ones
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'merchant_status') THEN
        CREATE TYPE public.merchant_status AS ENUM ('pending', 'approved', 'suspended');
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'merchant_type') THEN
        CREATE TYPE public.merchant_type AS ENUM ('partner', 'vendor');
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'product_status') THEN
        CREATE TYPE public.product_status AS ENUM ('draft', 'active', 'inactive');
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'order_status') THEN
        CREATE TYPE public.order_status AS ENUM ('pending', 'paid', 'processing', 'shipped', 'delivered', 'cancelled');
    END IF;
END $$;

-- Create profiles table for additional user information
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  address TEXT,
  city TEXT,
  country TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create merchants table
CREATE TABLE IF NOT EXISTS public.merchants (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  business_name TEXT NOT NULL,
  business_description TEXT,
  business_address TEXT,
  business_city TEXT,
  business_country TEXT,
  business_phone TEXT,
  business_email TEXT,
  merchant_type public.merchant_type NOT NULL DEFAULT 'vendor',
  status public.merchant_status NOT NULL DEFAULT 'pending',
  logo_url TEXT,
  website_url TEXT,
  listing_fee_paid BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create product categories table
CREATE TABLE IF NOT EXISTS public.product_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  parent_id UUID REFERENCES public.product_categories(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create products table
CREATE TABLE IF NOT EXISTS public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  merchant_id UUID NOT NULL REFERENCES public.merchants(id) ON DELETE CASCADE,
  category_id UUID REFERENCES public.product_categories(id),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  market_price_min DECIMAL(10,2),
  market_price_max DECIMAL(10,2),
  stock_quantity INTEGER DEFAULT 0,
  sku TEXT,
  status public.product_status NOT NULL DEFAULT 'draft',
  images TEXT[] DEFAULT '{}',
  specifications JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  merchant_id UUID NOT NULL REFERENCES public.merchants(id),
  total_amount DECIMAL(10,2) NOT NULL,
  status public.order_status NOT NULL DEFAULT 'pending',
  stripe_session_id TEXT,
  stripe_payment_intent_id TEXT,
  customer_email TEXT,
  customer_name TEXT,
  shipping_address JSONB,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS public.order_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES public.products(id),
  quantity INTEGER NOT NULL DEFAULT 1,
  unit_price DECIMAL(10,2) NOT NULL,
  total_price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user_favorites table
CREATE TABLE IF NOT EXISTS public.user_favorites (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, product_id)
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.merchants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_favorites ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create RLS policies for merchants
DROP POLICY IF EXISTS "Anyone can view approved merchants" ON public.merchants;
CREATE POLICY "Anyone can view approved merchants" ON public.merchants
  FOR SELECT USING (status = 'approved');
DROP POLICY IF EXISTS "Users can view their own merchant profile" ON public.merchants;
CREATE POLICY "Users can view their own merchant profile" ON public.merchants
  FOR SELECT USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users can create their own merchant profile" ON public.merchants;
CREATE POLICY "Users can create their own merchant profile" ON public.merchants
  FOR INSERT WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users can update their own merchant profile" ON public.merchants;
CREATE POLICY "Users can update their own merchant profile" ON public.merchants
  FOR UPDATE USING (auth.uid() = user_id);

-- Create RLS policies for product categories
DROP POLICY IF EXISTS "Anyone can view product categories" ON public.product_categories;
CREATE POLICY "Anyone can view product categories" ON public.product_categories
  FOR SELECT USING (true);

-- Create RLS policies for products
DROP POLICY IF EXISTS "Anyone can view active products" ON public.products;
CREATE POLICY "Anyone can view active products" ON public.products
  FOR SELECT USING (status = 'active');
DROP POLICY IF EXISTS "Merchants can manage their own products" ON public.products;
CREATE POLICY "Merchants can manage their own products" ON public.products
  FOR ALL USING (EXISTS (
    SELECT 1 FROM public.merchants 
    WHERE merchants.id = products.merchant_id 
    AND merchants.user_id = auth.uid()
  ));

-- Create RLS policies for orders
DROP POLICY IF EXISTS "Users can view their own orders" ON public.orders;
CREATE POLICY "Users can view their own orders" ON public.orders
  FOR SELECT USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "Merchants can view orders for their products" ON public.orders;
CREATE POLICY "Merchants can view orders for their products" ON public.orders
  FOR SELECT USING (EXISTS (
    SELECT 1 FROM public.merchants 
    WHERE merchants.id = orders.merchant_id 
    AND merchants.user_id = auth.uid()
  ));
DROP POLICY IF EXISTS "Anyone can create orders" ON public.orders;
CREATE POLICY "Anyone can create orders" ON public.orders
  FOR INSERT WITH CHECK (true);
DROP POLICY IF EXISTS "System can update orders" ON public.orders;
CREATE POLICY "System can update orders" ON public.orders
  FOR UPDATE USING (true);

-- Create RLS policies for order_items
DROP POLICY IF EXISTS "Users can view their order items" ON public.order_items;
CREATE POLICY "Users can view their order items" ON public.order_items
  FOR SELECT USING (EXISTS (
    SELECT 1 FROM public.orders 
    WHERE orders.id = order_items.order_id 
    AND orders.user_id = auth.uid()
  ));
DROP POLICY IF EXISTS "Merchants can view order items for their products" ON public.order_items;
CREATE POLICY "Merchants can view order items for their products" ON public.order_items
  FOR SELECT USING (EXISTS (
    SELECT 1 FROM public.products p
    JOIN public.merchants m ON p.merchant_id = m.id
    WHERE p.id = order_items.product_id 
    AND m.user_id = auth.uid()
  ));
DROP POLICY IF EXISTS "System can manage order items" ON public.order_items;
CREATE POLICY "System can manage order items" ON public.order_items
  FOR ALL USING (true);

-- Create RLS policies for user_favorites
DROP POLICY IF EXISTS "Users can manage their own favorites" ON public.user_favorites;
CREATE POLICY "Users can manage their own favorites" ON public.user_favorites
  FOR ALL USING (auth.uid() = user_id);

-- Insert default product categories (only if they don't exist)
INSERT INTO public.product_categories (name, description) 
SELECT * FROM (VALUES
  ('Mobility Aids', 'Wheelchairs, walkers, canes, and mobility devices'),
  ('Therapeutic Footwear', 'Specialized shoes and orthotics'),
  ('Accessibility Equipment', 'Ramps, lifts, and home modifications'),
  ('Daily Living Aids', 'Tools and devices for independent living'),
  ('Exercise & Therapy', 'Physical therapy and exercise equipment')
) AS v(name, description)
WHERE NOT EXISTS (SELECT 1 FROM public.product_categories WHERE name = v.name);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates (drop first if exists)
DROP TRIGGER IF EXISTS update_profiles_updated_at ON public.profiles;
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS update_merchants_updated_at ON public.merchants;
CREATE TRIGGER update_merchants_updated_at
  BEFORE UPDATE ON public.merchants
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS update_products_updated_at ON public.products;
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS update_orders_updated_at ON public.orders;
CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to handle new user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, first_name, last_name)
  VALUES (
    NEW.id, 
    NEW.raw_user_meta_data ->> 'first_name', 
    NEW.raw_user_meta_data ->> 'last_name'
  );
  RETURN NEW;
END;
$$;

-- Create trigger to automatically create profile on user signup (drop first if exists)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW 
  EXECUTE FUNCTION public.handle_new_user();