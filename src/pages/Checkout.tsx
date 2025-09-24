import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, User, Phone, Mail } from "lucide-react";

interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
  country: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
    country: "India"
  });

  const [errors, setErrors] = useState<Partial<ShippingAddress>>({});

  // G20 Countries with tax rates
  const g20Countries = [
    { code: "IN", name: "India", taxRate: 18, taxName: "GST" },
    { code: "US", name: "United States", taxRate: 8.5, taxName: "Sales Tax" },
    { code: "GB", name: "United Kingdom", taxRate: 20, taxName: "VAT" },
    { code: "DE", name: "Germany", taxRate: 19, taxName: "VAT" },
    { code: "FR", name: "France", taxRate: 20, taxName: "VAT" },
    { code: "IT", name: "Italy", taxRate: 22, taxName: "VAT" },
    { code: "CA", name: "Canada", taxRate: 13, taxName: "HST" },
    { code: "JP", name: "Japan", taxRate: 10, taxName: "Consumption Tax" },
    { code: "AU", name: "Australia", taxRate: 10, taxName: "GST" },
    { code: "BR", name: "Brazil", taxRate: 17, taxName: "ICMS" },
    { code: "MX", name: "Mexico", taxRate: 16, taxName: "IVA" },
    { code: "AR", name: "Argentina", taxRate: 21, taxName: "IVA" },
    { code: "ZA", name: "South Africa", taxRate: 15, taxName: "VAT" },
    { code: "KR", name: "South Korea", taxRate: 10, taxName: "VAT" },
    { code: "CN", name: "China", taxRate: 13, taxName: "VAT" },
    { code: "RU", name: "Russia", taxRate: 20, taxName: "VAT" },
    { code: "TR", name: "Turkey", taxRate: 18, taxName: "KDV" },
    { code: "SA", name: "Saudi Arabia", taxRate: 15, taxName: "VAT" },
    { code: "ID", name: "Indonesia", taxRate: 11, taxName: "PPN" }
  ];

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

  const getSelectedCountryTax = () => {
    const selectedCountry = g20Countries.find(country => country.name === shippingAddress.country);
    return selectedCountry || g20Countries[0]; // Default to India
  };

  const getSubtotal = () => {
    return getTotalPrice();
  };

  const getShippingCost = () => {
    return getTotalPrice() >= 2000 ? 0 : 100;
  };

  const getTaxAmount = () => {
    const countryTax = getSelectedCountryTax();
    const subtotal = getSubtotal();
    return Math.round((subtotal * countryTax.taxRate) / 100);
  };

  const getFinalTotal = () => {
    return getSubtotal() + getShippingCost() + getTaxAmount();
  };

  const handleInputChange = (field: keyof ShippingAddress, value: string) => {
    setShippingAddress(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<ShippingAddress> = {};

    if (!shippingAddress.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!shippingAddress.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(shippingAddress.email)) newErrors.email = "Invalid email format";
    if (!shippingAddress.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(shippingAddress.phone.replace(/\D/g, ''))) newErrors.phone = "Invalid phone number";
    if (!shippingAddress.address.trim()) newErrors.address = "Address is required";
    if (!shippingAddress.city.trim()) newErrors.city = "City is required";
    if (!shippingAddress.state.trim()) newErrors.state = "State is required";
    if (!shippingAddress.pincode.trim()) newErrors.pincode = "Pincode is required";
    else if (!/^\d{6}$/.test(shippingAddress.pincode)) newErrors.pincode = "Invalid pincode";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceedToPayment = () => {
    if (validateForm()) {
      // Store shipping address in localStorage or context
      localStorage.setItem('shippingAddress', JSON.stringify(shippingAddress));
      navigate('/payment');
    }
  };

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
              onClick={() => navigate('/cart')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cart
            </Button>
            <h1 className="text-3xl font-bold">Checkout</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Shipping Address Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Shipping Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={shippingAddress.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          placeholder="Enter your full name"
                          className={errors.fullName ? "border-red-500" : ""}
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={shippingAddress.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Enter your email"
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={shippingAddress.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter 10-digit phone number"
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Address Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Address Details
                    </h3>

                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Textarea
                        id="address"
                        value={shippingAddress.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="House/Flat No., Street, Area"
                        rows={3}
                        className={errors.address ? "border-red-500" : ""}
                      />
                      {errors.address && (
                        <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="landmark">Landmark (Optional)</Label>
                      <Input
                        id="landmark"
                        value={shippingAddress.landmark}
                        onChange={(e) => handleInputChange('landmark', e.target.value)}
                        placeholder="Near landmark for easy delivery"
                      />
                    </div>

                    <div>
                      <Label htmlFor="country">Country *</Label>
                      <select 
                        id="country"
                        value={shippingAddress.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        className="form-input w-full"
                      >
                        {g20Countries.map((country) => (
                          <option key={country.code} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={shippingAddress.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          placeholder="City"
                          className={errors.city ? "border-red-500" : ""}
                        />
                        {errors.city && (
                          <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          value={shippingAddress.state}
                          onChange={(e) => handleInputChange('state', e.target.value)}
                          placeholder="State"
                          className={errors.state ? "border-red-500" : ""}
                        />
                        {errors.state && (
                          <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="pincode">Pincode *</Label>
                        <Input
                          id="pincode"
                          value={shippingAddress.pincode}
                          onChange={(e) => handleInputChange('pincode', e.target.value)}
                          placeholder="6-digit pincode"
                          className={errors.pincode ? "border-red-500" : ""}
                        />
                        {errors.pincode && (
                          <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
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
                      <span>₹{getSubtotal().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-green-600">
                        {getShippingCost() === 0 ? 'Free' : `₹${getShippingCost()}`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>{getSelectedCountryTax().taxName} ({getSelectedCountryTax().taxRate}%)</span>
                      <span>₹{getTaxAmount().toLocaleString()}</span>
                    </div>
                    <hr />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>₹{getFinalTotal().toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Tax Information */}
                  <div className="bg-blue-50 p-3 rounded-lg text-sm">
                    <p className="text-blue-800 font-medium">
                      Tax Information for {shippingAddress.country}
                    </p>
                    <p className="text-blue-700 text-xs mt-1">
                      {getSelectedCountryTax().taxName} @ {getSelectedCountryTax().taxRate}% is applicable as per {shippingAddress.country} tax regulations
                    </p>
                  </div>

                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={handleProceedToPayment}
                  >
                    Proceed to Payment
                  </Button>
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

export default Checkout;
