-- Insert sample merchants
INSERT INTO public.merchants (user_id, business_name, business_description, business_address, business_city, business_country, business_phone, business_email, merchant_type, status, listing_fee_paid) VALUES
  ('00000000-0000-0000-0000-000000000001', 'MobilityFirst Nigeria', 'Leading provider of quality wheelchairs and mobility aids in Nigeria', '123 Victoria Island Road', 'Lagos', 'Nigeria', '+234-801-234-5678', 'contact@mobilityfirst.ng', 'partner', 'approved', true),
  ('00000000-0000-0000-0000-000000000002', 'Hope Mobility Rwanda', 'Specialized therapeutic footwear and orthotic solutions', '45 Kigali Business District', 'Kigali', 'Rwanda', '+250-788-123-456', 'info@hopemobility.rw', 'partner', 'approved', true),
  ('00000000-0000-0000-0000-000000000003', 'AfriCare Devices', 'Affordable mobility solutions for rural communities', '78 Independence Avenue', 'Abuja', 'Nigeria', '+234-802-456-7890', 'sales@africare.ng', 'vendor', 'approved', true);

-- Insert sample products
INSERT INTO public.products (merchant_id, category_id, name, description, price, market_price_min, market_price_max, stock_quantity, status, images) VALUES
  (
    (SELECT id FROM public.merchants WHERE business_name = 'MobilityFirst Nigeria'),
    (SELECT id FROM public.product_categories WHERE name = 'Mobility Aids'),
    'Standard Manual Wheelchair',
    'Lightweight, durable manual wheelchair with comfortable seating and easy-fold design. Perfect for daily use and transport.',
    250.00,
    300.00,
    450.00,
    15,
    'active',
    ARRAY['https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400']
  ),
  (
    (SELECT id FROM public.merchants WHERE business_name = 'MobilityFirst Nigeria'),
    (SELECT id FROM public.product_categories WHERE name = 'Mobility Aids'),
    'Electric Mobility Scooter',
    'Compact electric scooter with 25km range. Includes basket and LED headlight for safe travel.',
    850.00,
    1000.00,
    1500.00,
    8,
    'active',
    ARRAY['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400']
  ),
  (
    (SELECT id FROM public.merchants WHERE business_name = 'Hope Mobility Rwanda'),
    (SELECT id FROM public.product_categories WHERE name = 'Therapeutic Footwear'),
    'Diabetic Care Shoes',
    'Specially designed shoes for diabetic patients with extra depth and cushioning to prevent foot complications.',
    120.00,
    150.00,
    220.00,
    25,
    'active',
    ARRAY['https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400']
  ),
  (
    (SELECT id FROM public.merchants WHERE business_name = 'Hope Mobility Rwanda'),
    (SELECT id FROM public.product_categories WHERE name = 'Daily Living Aids'),
    'Ergonomic Walking Cane',
    'Adjustable walking cane with ergonomic grip and anti-slip tip. Available in multiple colors.',
    35.00,
    45.00,
    65.00,
    50,
    'active',
    ARRAY['https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400']
  ),
  (
    (SELECT id FROM public.merchants WHERE business_name = 'AfriCare Devices'),
    (SELECT id FROM public.product_categories WHERE name = 'Accessibility Equipment'),
    'Portable Wheelchair Ramp',
    'Lightweight aluminum ramp that folds for easy transport. Supports up to 300kg and works with most wheelchairs.',
    180.00,
    220.00,
    350.00,
    12,
    'active',
    ARRAY['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400']
  ),
  (
    (SELECT id FROM public.merchants WHERE business_name = 'AfriCare Devices'),
    (SELECT id FROM public.product_categories WHERE name = 'Exercise & Therapy'),
    'Physical Therapy Exercise Band Set',
    'Complete set of resistance bands for physical therapy and rehabilitation. Includes instruction guide.',
    45.00,
    55.00,
    75.00,
    30,
    'active',
    ARRAY['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400']
  );