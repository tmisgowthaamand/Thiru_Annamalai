import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CreditCard, Smartphone, Building2, Shield, CheckCircle } from "lucide-react";

type PaymentMethod = 'debit' | 'credit' | 'netbanking' | null;

const Payment = () => {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>(null);
  const [processing, setProcessing] = useState(false);

  // Get shipping address from localStorage
  const shippingAddress = JSON.parse(localStorage.getItem('shippingAddress') || '{}');

  // Load cart data from localStorage
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      try {
        const items = JSON.parse(savedCartItems);
        setCartItems(items);
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        setCartItems([]);
      }
    }
  }, []);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Get shipping address to calculate tax
  const getShippingCost = () => {
    return getTotalPrice() >= 2000 ? 0 : 100;
  };

  const getTaxAmount = () => {
    // Default to India GST if no country specified
    const taxRate = 18; // GST for India
    const subtotal = getTotalPrice();
    return Math.round((subtotal * taxRate) / 100);
  };

  const finalAmount = getTotalPrice() + getShippingCost() + getTaxAmount();

  const handlePayment = async () => {
    if (!selectedPayment) return;

    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      // Store order data
      const orderData = {
        orderId: 'TKC' + Date.now(),
        items: cartItems,
        shippingAddress,
        paymentMethod: selectedPayment,
        totalAmount: finalAmount,
        orderDate: new Date().toISOString(),
        status: 'confirmed'
      };

      localStorage.setItem('lastOrder', JSON.stringify(orderData));
      localStorage.removeItem('shippingAddress'); // Clear shipping address
      localStorage.removeItem('cartItems'); // Clear cart items
      
      setProcessing(false);
      navigate('/order-confirmation');
    }, 2000);
  };

  const paymentMethods = [
    {
      id: 'debit' as PaymentMethod,
      name: 'Debit Card',
      description: 'Pay securely with your debit card',
      icon: CreditCard,
      popular: true
    },
    {
      id: 'credit' as PaymentMethod,
      name: 'Credit Card',
      description: 'Pay with your credit card',
      icon: CreditCard,
      popular: false
    },
    {
      id: 'netbanking' as PaymentMethod,
      name: 'Net Banking',
      description: 'Pay directly from your bank account',
      icon: Building2,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/checkout')}
              disabled={processing}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Checkout
            </Button>
            <h1 className="text-3xl font-bold">Payment</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Methods */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Choose Payment Method
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Your payment information is secure and encrypted
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {paymentMethods.map((method) => {
                    const IconComponent = method.icon;
                    return (
                      <div
                        key={method.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          selectedPayment === method.id
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedPayment(method.id)}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-lg ${
                            selectedPayment === method.id ? 'bg-primary text-white' : 'bg-gray-100'
                          }`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          
                          <div className="flex-grow">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{method.name}</h3>
                              {method.popular && (
                                <Badge variant="secondary" className="text-xs">Popular</Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{method.description}</p>
                          </div>

                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedPayment === method.id
                              ? 'border-primary bg-primary'
                              : 'border-gray-300'
                          }`}>
                            {selectedPayment === method.id && (
                              <CheckCircle className="h-3 w-3 text-white" />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Security Notice */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-600" />
                      <div>
                        <h4 className="font-semibold text-green-800">Secure Payment</h4>
                        <p className="text-sm text-green-700">
                          Your payment is protected by 256-bit SSL encryption. We don't store your card details.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary & Shipping */}
            <div className="lg:col-span-1 space-y-6">
              {/* Shipping Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Shipping Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm space-y-1">
                    <p className="font-semibold">{shippingAddress.fullName}</p>
                    <p>{shippingAddress.address}</p>
                    {shippingAddress.landmark && <p>{shippingAddress.landmark}</p>}
                    <p>{shippingAddress.city}, {shippingAddress.state} - {shippingAddress.pincode}</p>
                    <p className="text-muted-foreground">{shippingAddress.phone}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Items List */}
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden flex-shrink-0">
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
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                          <p className="text-sm font-semibold">₹{(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <hr />

                  {/* Price Breakdown */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal ({getTotalItems()} items)</span>
                      <span>₹{getTotalPrice().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-green-600">
                        {getShippingCost() === 0 ? 'Free' : `₹${getShippingCost()}`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>GST (18%)</span>
                      <span>₹{getTaxAmount().toLocaleString()}</span>
                    </div>
                    <hr />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Amount</span>
                      <span>₹{finalAmount.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={handlePayment}
                    disabled={!selectedPayment || processing}
                  >
                    {processing ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing Payment...
                      </div>
                    ) : (
                      `Pay ₹${finalAmount.toLocaleString()}`
                    )}
                  </Button>

                  {!selectedPayment && (
                    <p className="text-sm text-muted-foreground text-center">
                      Please select a payment method to continue
                    </p>
                  )}
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

export default Payment;
