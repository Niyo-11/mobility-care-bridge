-- Create admin role for merchant approval management
CREATE TYPE admin_role AS ENUM ('super_admin', 'merchant_admin', 'content_admin');

-- Create admin table
CREATE TABLE public.admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  role admin_role NOT NULL DEFAULT 'content_admin',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id),
  is_active BOOLEAN DEFAULT true
);

-- Enable RLS
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create policies for admin users
CREATE POLICY "Super admins can manage all admin users" ON public.admin_users
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE user_id = auth.uid() AND role = 'super_admin' AND is_active = true
    )
  );

CREATE POLICY "Admin users can view their own record" ON public.admin_users
  FOR SELECT USING (user_id = auth.uid());

-- Create trigger for updated_at
CREATE TRIGGER update_admin_users_updated_at
  BEFORE UPDATE ON public.admin_users
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert first super admin (you'll need to replace this UUID with actual user ID after sign up)
-- This is a placeholder - the actual implementation will need proper user management
INSERT INTO public.admin_users (user_id, role, is_active) 
VALUES ('00000000-0000-0000-0000-000000000000', 'super_admin', true);

-- Add admin notification system
CREATE TABLE public.admin_notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_user_id UUID REFERENCES public.admin_users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT DEFAULT 'info', -- info, warning, success, error
  is_read BOOLEAN DEFAULT false,
  related_merchant_id UUID REFERENCES public.merchants(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for notifications
ALTER TABLE public.admin_notifications ENABLE ROW LEVEL SECURITY;

-- Create policy for admin notifications
CREATE POLICY "Admins can view their notifications" ON public.admin_notifications
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE id = admin_notifications.admin_user_id AND user_id = auth.uid() AND is_active = true
    )
  );

-- Create function to notify admins when merchant application is submitted
CREATE OR REPLACE FUNCTION notify_admins_merchant_application()
RETURNS TRIGGER AS $$
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
$$ LANGUAGE plpgsql;

-- Create trigger for merchant application notifications
CREATE TRIGGER trigger_notify_admins_merchant_application
  AFTER INSERT ON public.merchants
  FOR EACH ROW
  EXECUTE FUNCTION notify_admins_merchant_application();

-- Create function to approve/reject merchants
CREATE OR REPLACE FUNCTION approve_merchant(merchant_id UUID, approved BOOLEAN, admin_notes TEXT DEFAULT NULL)
RETURNS BOOLEAN AS $$
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
$$ LANGUAGE plpgsql SECURITY DEFINER;