import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  User, 
  Phone, 
  Mail, 
  Tractor,
  CheckCircle,
  Send
} from "lucide-react";

const Quote = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('product');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    productType: '',
    specificProduct: '',
    requirements: ''
  });

  // Product categories from our website
  const productCategories = [
    {
      type: "Machinery",
      subcategories: [
        "Tractors",
        "Power Tillers", 
        "Harvesters",
        "Sprayers",
        "Transplanters",
        "Specialized Equipment",
        "Rotavators",
        "Balers"
      ]
    },
    {
      type: "Spare Parts",
      subcategories: [
        "Linkage Parts",
        "Pins & Fasteners", 
        "Adjustment Systems",
        "Tillage Parts",
        "Engine Parts",
        "Drive Components",
        "Lifting Equipment",
        "Towing Equipment",
        "Hitch Components",
        "Fasteners & Hardware",
        "Brand Specific"
      ]
    }
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Product data for pre-filling
  const products: Record<string, { name: string; price: string; type: string }> = {
    '1': { name: 'VST 135 DI Ultra Power Tiller', price: '₹1,85,000', type: 'Power Tiller' },
    '2': { name: 'Sonalika Power Tiller 13 HP', price: '₹1,75,000', type: 'Power Tiller' },
    '3': { name: 'Mahindra Power Tiller 12-14 HP', price: '₹1,95,000', type: 'Power Tiller' },
    '4': { name: 'Kubota PEM 140 DI Power Tiller', price: '₹2,25,000', type: 'Power Tiller' },
    '12': { name: 'Kaira Harvester', price: '₹25,50,000', type: 'Harvester' },
    '15': { name: 'Deutz Fahr Agrolux 50 - 4WD', price: '₹11,70,000', type: 'Tractor' }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">Quote Request Submitted!</h1>
              <p className="text-muted-foreground mb-8">
                Thank you for your interest in our agricultural machinery. Our team will review your requirements 
                and get back to you within 24 hours with a detailed quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary" onClick={() => window.location.href = '/machinery'}>
                  View More Products
                </Button>
                <Button variant="outline" onClick={() => window.location.href = '/contact'}>
                  Contact Us Directly
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="heading-primary mb-4">Request Quote</h1>
            <p className="body-text max-w-3xl mx-auto mb-6">
              Get personalized pricing for agricultural machinery that fits your farming needs. 
              Our experts will provide you with the best deals and financing options.
            </p>
            {productId && products[productId] && (
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full">
                <Tractor className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">
                  Quote for: {products[productId].name} ({products[productId].price})
                </span>
              </div>
            )}
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-primary" />
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Location *
                      </label>
                      <Input
                        type="text"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        placeholder="City, District, Tamil Nadu"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Tractor className="w-5 h-5 mr-2 text-primary" />
                    Product Requirements
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Product Type *
                      </label>
                      <select
                        value={formData.productType}
                        onChange={(e) => handleInputChange('productType', e.target.value)}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      >
                        <option value="">Select Product Type</option>
                        {productCategories.map((category) => (
                          <optgroup key={category.type} label={category.type}>
                            {category.subcategories.map((subcategory) => (
                              <option key={subcategory} value={subcategory}>
                                {subcategory}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Specific Product
                      </label>
                      <Input
                        type="text"
                        value={formData.specificProduct}
                        onChange={(e) => handleInputChange('specificProduct', e.target.value)}
                        placeholder="e.g., Mahindra 575 DI, Top Link Assembly, Oil Filter"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Requirements or Questions
                  </label>
                  <Textarea
                    value={formData.requirements}
                    onChange={(e) => handleInputChange('requirements', e.target.value)}
                    placeholder="Tell us about your specific needs, farm size, budget, or any questions..."
                    rows={4}
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full btn-cta h-12"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Submitting Quote Request...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Quote Request
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Quote;
