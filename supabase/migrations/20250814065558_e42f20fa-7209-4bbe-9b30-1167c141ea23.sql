-- Create cart table for shopping cart functionality
CREATE TABLE public.carts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, product_id)
);

-- Enable RLS
ALTER TABLE public.carts ENABLE ROW LEVEL SECURITY;

-- Create policies for cart
CREATE POLICY "Users can manage their own cart" ON public.carts
FOR ALL
USING (auth.uid() = user_id);

-- Create trigger for updated_at
CREATE TRIGGER update_carts_updated_at
BEFORE UPDATE ON public.carts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Update merchants table to require business details for approval
UPDATE public.merchants 
SET status = 'pending'::merchant_status 
WHERE status = 'approved'::merchant_status;

-- Add merchant application fields if they don't exist
ALTER TABLE public.merchants 
ADD COLUMN IF NOT EXISTS registration_number TEXT,
ADD COLUMN IF NOT EXISTS tax_id TEXT,
ADD COLUMN IF NOT EXISTS business_documents JSONB DEFAULT '{}';

-- Update products table to be linked to real merchants
UPDATE public.products 
SET merchant_id = NULL 
WHERE merchant_id IS NOT NULL;