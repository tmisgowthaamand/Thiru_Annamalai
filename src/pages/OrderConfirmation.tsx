import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Package, Truck, MapPin, Phone, Mail, Download, ArrowRight } from "lucide-react";

interface OrderData {
  orderId: string;
  items: Array<{
    id: number;
    name: string;
    category: string;
    price: number;
    originalPrice?: number;
    image: string;
    quantity: number;
  }>;
  shippingAddress: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    landmark?: string;
  };
  paymentMethod: string;
  totalAmount: number;
  orderDate: string;
  status: string;
}

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get order data from localStorage
    const lastOrder = localStorage.getItem('lastOrder');
    if (lastOrder) {
      setOrderData(JSON.parse(lastOrder));
    } else {
      // If no order data, redirect to shop
      navigate('/shop');
    }
    setLoading(false);
  }, [navigate]);

  const getPaymentMethodName = (method: string) => {
    switch (method) {
      case 'debit': return 'Debit Card';
      case 'credit': return 'Credit Card';
      case 'netbanking': return 'Net Banking';
      default: return method;
    }
  };

  const getEstimatedDelivery = () => {
    const orderDate = new Date(orderData?.orderDate || '');
    const deliveryDate = new Date(orderDate);
    deliveryDate.setDate(deliveryDate.getDate() + 5); // 5 days delivery
    return deliveryDate.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center h-64">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p>Loading order details...</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!orderData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center py-16">
              <Package className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
              <h2 className="text-2xl font-bold mb-4">No order found</h2>
              <p className="text-muted-foreground mb-8">Unable to find order details</p>
              <Button onClick={() => navigate('/shop')}>
                Continue Shopping
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-green-800 mb-2">Order Confirmed!</h1>
            <p className="text-lg text-muted-foreground mb-4">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 inline-block">
              <p className="text-green-800">
                <strong>Order ID:</strong> {orderData.orderId}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Items */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Order Items
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orderData.items.map((item) => (
                      <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/placeholder.svg";
                            }}
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-semibold">{item.name}</h3>
                          <Badge variant="outline" className="text-xs mt-1">
                            {item.category}
                          </Badge>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-sm text-muted-foreground">Qty: {item.quantity}</span>
                            <div className="text-right">
                              <p className="font-semibold">₹{(item.price * item.quantity).toLocaleString()}</p>
                              {item.originalPrice && (
                                <p className="text-sm text-muted-foreground line-through">
                                  ₹{(item.originalPrice * item.quantity).toLocaleString()}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Delivery Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Estimated Delivery</h4>
                      <p className="text-blue-700">{getEstimatedDelivery()}</p>
                      <p className="text-sm text-blue-600 mt-1">
                        We'll send you tracking details once your order is shipped.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Shipping Address
                      </h4>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-medium">{orderData.shippingAddress.fullName}</p>
                        <p>{orderData.shippingAddress.address}</p>
                        {orderData.shippingAddress.landmark && (
                          <p>{orderData.shippingAddress.landmark}</p>
                        )}
                        <p>
                          {orderData.shippingAddress.city}, {orderData.shippingAddress.state} - {orderData.shippingAddress.pincode}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {orderData.shippingAddress.phone}
                          </span>
                          <span className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {orderData.shippingAddress.email}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary & Actions */}
            <div className="lg:col-span-1 space-y-6">
              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{(orderData.totalAmount - (orderData.totalAmount >= 2000 ? 0 : 100)).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-green-600">
                        {orderData.totalAmount >= 2000 ? 'Free' : '₹100'}
                      </span>
                    </div>
                    <hr />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Paid</span>
                      <span>₹{orderData.totalAmount.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm">
                      <strong>Payment Method:</strong> {getPaymentMethodName(orderData.paymentMethod)}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Payment completed successfully
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>What's Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Download Invoice
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <Package className="h-4 w-4 mr-2" />
                    Track Your Order
                  </Button>

                  <Button 
                    className="w-full justify-start"
                    onClick={() => navigate('/shop')}
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Continue Shopping
                  </Button>
                </CardContent>
              </Card>

              {/* Support */}
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    If you have any questions about your order, feel free to contact us.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>+91 98943 77407</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>thiruannamalaiyar014@gmail.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
