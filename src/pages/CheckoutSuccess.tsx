import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { CheckCircle, Loader2 } from 'lucide-react';

const CheckoutSuccess = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    if (sessionId) {
      verifyPayment(sessionId);
    } else {
      setLoading(false);
      toast({
        title: "Error",
        description: "No session ID found",
        variant: "destructive",
      });
    }
  }, [searchParams]);

  const verifyPayment = async (sessionId: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('verify-payment', {
        body: { session_id: sessionId },
      });

      if (error) throw error;

      setOrderDetails(data);
      
      if (data.payment_status === 'paid') {
        toast({
          title: "Payment successful!",
          description: "Your order has been confirmed.",
        });
      }
    } catch (error) {
      console.error('Error verifying payment:', error);
      toast({
        title: "Error",
        description: "Failed to verify payment status",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Verifying your payment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <CardTitle className="text-2xl text-green-600">Payment Successful!</CardTitle>
              <CardDescription>
                Thank you for your purchase. Your order has been confirmed.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {orderDetails && (
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Order Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Order ID:</span>
                      <span className="font-mono">{orderDetails.order?.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Payment Status:</span>
                      <span className="capitalize font-semibold text-green-600">
                        {orderDetails.payment_status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Email:</span>
                      <span>{orderDetails.customer_email}</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">What happens next?</h3>
                <ul className="text-sm space-y-1">
                  <li>• You'll receive an order confirmation email shortly</li>
                  <li>• We'll notify you when your order ships</li>
                  <li>• You can track your order status in your dashboard</li>
                  <li>• Contact us if you have any questions</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => navigate('/dashboard')} className="flex-1">
                  View Order History
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/marketplace')}
                  className="flex-1"
                >
                  Continue Shopping
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;