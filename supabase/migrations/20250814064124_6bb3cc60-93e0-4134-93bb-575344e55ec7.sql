-- Create some sample categories and products without requiring real merchants
-- First, let's create sample products directly with category relationships

-- Insert some sample products that appear to be from merchants but use placeholder merchant data
-- We'll create products that look realistic but don't require actual user accounts

INSERT INTO public.product_categories (name, description) VALUES
  ('Physical Therapy Equipment', 'Equipment for rehabilitation and physical therapy')
ON CONFLICT (name) DO NOTHING;

-- For now, let's create a simpler demo by just showing the UI without real merchant data
-- The front-end will handle the case where no products exist gracefully