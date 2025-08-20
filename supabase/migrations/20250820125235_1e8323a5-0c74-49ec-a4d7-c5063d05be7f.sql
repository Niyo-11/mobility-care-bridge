-- Create a bootstrap function to allow the first authenticated user to become super_admin
create or replace function public.bootstrap_first_admin()
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  existing_count int;
begin
  -- Count existing admin users
  select count(*) into existing_count from public.admin_users;
  
  -- If there are no admin users yet, make the caller the first super_admin
  if existing_count = 0 then
    insert into public.admin_users (user_id, role, is_active)
    values (auth.uid(), 'super_admin'::admin_role, true);
    return true;
  end if;
  
  return false;
end;
$$;