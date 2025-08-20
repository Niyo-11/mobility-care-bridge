import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { AlertCircle, CheckCircle, Clock, X } from 'lucide-react';

interface MerchantApplication {
  id: string;
  business_name: string;
  business_email: string;
  business_phone: string;
  merchant_type: 'partner' | 'vendor';
  status: 'pending' | 'approved' | 'rejected' | 'suspended';
  created_at: string;
  business_description: string;
  business_address: string;
  business_city: string;
  business_country: string;
}

interface AdminNotification {
  id: string;
  title: string;
  message: string;
  type: string;
  is_read: boolean;
  created_at: string;
  related_merchant_id?: string;
}

const AdminDashboard = () => {
  const [merchants, setMerchants] = useState<MerchantApplication[]>([]);
  const [notifications, setNotifications] = useState<AdminNotification[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    checkAdminStatus();
  }, [user]);

  useEffect(() => {
    if (isAdmin) {
      fetchMerchants();
      fetchNotifications();
    }
  }, [isAdmin]);

  const checkAdminStatus = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      // First try to check if user is already an admin
      const { data, error } = await supabase
        .from('admin_users')
        .select('role')
        .eq('user_id', user.id)
        .eq('is_active', true)
        .single();

      if (error && error.code === 'PGRST116') {
        // User is not an admin, try to bootstrap as first admin
        const { data: bootstrapData, error: bootstrapError } = await supabase
          .rpc('bootstrap_first_admin');

        if (bootstrapError) {
          console.error('Bootstrap error:', bootstrapError);
          setIsAdmin(false);
        } else if (bootstrapData) {
          // Successfully became first admin
          setIsAdmin(true);
          toast({
            title: "Admin access granted",
            description: "You are now the system administrator.",
          });
        } else {
          setIsAdmin(false);
        }
      } else if (error) {
        throw error;
      } else {
        setIsAdmin(!!data && ['super_admin', 'merchant_admin'].includes(data.role));
      }
    } catch (error) {
      console.error('Error checking admin status:', error);
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  const fetchMerchants = async () => {
    try {
      const { data, error } = await supabase
        .from('merchants')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMerchants(data || []);
    } catch (error) {
      console.error('Error fetching merchants:', error);
      toast({
        title: "Error",
        description: "Failed to load merchant applications.",
        variant: "destructive",
      });
    }
  };

  const fetchNotifications = async () => {
    try {
      const { data: adminData } = await supabase
        .from('admin_users')
        .select('id')
        .eq('user_id', user?.id)
        .single();

      if (!adminData) return;

      const { data, error } = await supabase
        .from('admin_notifications')
        .select('*')
        .eq('admin_user_id', adminData.id)
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      setNotifications(data || []);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  const approveMerchant = async (merchantId: string, approved: boolean) => {
    try {
      const { error } = await supabase.rpc('approve_merchant', {
        merchant_id: merchantId,
        approved: approved,
        admin_notes: approved ? 'Approved by admin' : 'Rejected by admin'
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: `Merchant ${approved ? 'approved' : 'rejected'} successfully.`,
      });

      // Refresh data
      fetchMerchants();
      fetchNotifications();
    } catch (error) {
      console.error('Error updating merchant status:', error);
      toast({
        title: "Error",
        description: "Failed to update merchant status.",
        variant: "destructive",
      });
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'approved':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'rejected':
        return <X className="h-4 w-4 text-red-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'warning';
      case 'approved':
        return 'default';
      case 'rejected':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading...</div>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Access Denied</h2>
              <p className="text-muted-foreground">
                You don't have permission to access the admin dashboard.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage merchant applications and system notifications</p>
      </div>

      <Tabs defaultValue="merchants" className="space-y-6">
        <TabsList>
          <TabsTrigger value="merchants">Merchant Applications</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="merchants" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Merchant Applications</CardTitle>
              <CardDescription>
                Review and approve merchant applications to allow them to sell on the platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Business Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Applied</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {merchants.map((merchant) => (
                    <TableRow key={merchant.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{merchant.business_name}</div>
                          <div className="text-sm text-muted-foreground line-clamp-1">
                            {merchant.business_description}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={merchant.merchant_type === 'partner' ? 'default' : 'secondary'}>
                          {merchant.merchant_type}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{merchant.business_email}</div>
                          <div className="text-muted-foreground">{merchant.business_phone}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(merchant.status)}
                          <Badge variant={getStatusColor(merchant.status) as any}>
                            {merchant.status}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        {new Date(merchant.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        {merchant.status === 'pending' && (
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={() => approveMerchant(merchant.id, true)}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => approveMerchant(merchant.id, false)}
                            >
                              Reject
                            </Button>
                          </div>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {merchants.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No merchant applications found.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
              <CardDescription>
                System notifications and updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border rounded-lg ${
                      notification.is_read ? 'bg-muted/30' : 'bg-background'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium">{notification.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {notification.message}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant={notification.type === 'info' ? 'default' : 'secondary'}>
                            {notification.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {new Date(notification.created_at).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {notifications.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No notifications found.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;