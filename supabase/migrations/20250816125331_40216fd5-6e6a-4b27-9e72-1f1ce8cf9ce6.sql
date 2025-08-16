-- Fix function search path security issues by setting immutable search path

-- Update the notification function
CREATE OR REPLACE FUNCTION notify_admins_merchant_application()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Only notify on new merchant applications
  IF TG_OP = 'INSERT' THEN
    INSERT INTO public.admin_notifications (admin_user_id, title, message, type, related_merchant_id)
    SELECT 
      au.id,
      'New Merchant Application',
      'A new merchant application has been submitted by ' || NEW.business_name,
      'info',
      NEW.id
    FROM public.admin_users au
    WHERE au.role IN ('super_admin', 'merchant_admin') AND au.is_active = true;
  END IF;
  
  RETURN NEW;
END;
$$;

-- Update the approve merchant function
CREATE OR REPLACE FUNCTION approve_merchant(merchant_id UUID, approved BOOLEAN, admin_notes TEXT DEFAULT NULL)
RETURNS BOOLEAN 
LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  merchant_record RECORD;
BEGIN
  -- Check if user is admin
  IF NOT EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid() AND role IN ('super_admin', 'merchant_admin') AND is_active = true
  ) THEN
    RAISE EXCEPTION 'Unauthorized: Only admins can approve merchants';
  END IF;
  
  -- Update merchant status
  UPDATE public.merchants 
  SET 
    status = CASE WHEN approved THEN 'approved'::merchant_status ELSE 'rejected'::merchant_status END,
    updated_at = now()
  WHERE id = merchant_id
  RETURNING * INTO merchant_record;
  
  -- Create notification for the merchant
  INSERT INTO public.admin_notifications (admin_user_id, title, message, type, related_merchant_id)
  SELECT 
    au.id,
    CASE WHEN approved THEN 'Merchant Approved' ELSE 'Merchant Rejected' END,
    'Merchant application for ' || merchant_record.business_name || ' has been ' || 
    CASE WHEN approved THEN 'approved' ELSE 'rejected' END,
    CASE WHEN approved THEN 'success' ELSE 'warning' END,
    merchant_id
  FROM public.admin_users au
  WHERE au.role IN ('super_admin', 'merchant_admin') AND au.is_active = true;
  
  RETURN true;
END;
$$;