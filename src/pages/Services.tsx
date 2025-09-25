import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Wrench, 
  Truck, 
  Shield, 
  Users, 
  Clock, 
  Phone, 
  CheckCircle, 
  Star,
  Settings,
  Headphones,
  MapPin,
  Award,
  ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      title: "Agricultural Machinery Sales",
      description: "Wide range of tractors, power tillers, harvesters, and farming equipment from top brands like Mahindra, Sonalika, VST Shakti, and Kubota.",
      icon: Settings,
      features: [
        "Latest Models Available",
        "Competitive Pricing",
        "Genuine Products",
        "Expert Consultation"
      ],
      color: "text-primary"
    },
    {
      id: 2,
      title: "After-Sales Service & Maintenance",
      description: "Comprehensive maintenance and repair services to keep your agricultural machinery running at peak performance throughout the year.",
      icon: Wrench,
      features: [
        "Regular Maintenance",
        "Emergency Repairs",
        "Genuine Spare Parts",
        "Skilled Technicians"
      ],
      color: "text-secondary"
    },
    {
      id: 3,
      title: "Spare Parts Supply",
      description: "Authentic spare parts for all major agricultural machinery brands. Quick delivery across Tamil Nadu with quality guarantee.",
      icon: Shield,
      features: [
        "Genuine Parts Only",
        "Quick Delivery",
        "Quality Assurance",
        "Competitive Rates"
      ],
      color: "text-accent"
    },
    {
      id: 4,
      title: "Equipment Rental Services",
      description: "Rent agricultural machinery for seasonal use. Cost-effective solution for small and medium farmers who need equipment occasionally.",
      icon: Truck,
      features: [
        "Flexible Rental Terms",
        "Well-Maintained Equipment",
        "Operator Training",
        "Affordable Rates"
      ],
      color: "text-cta"
    },
    {
      id: 5,
      title: "Technical Support & Training",
      description: "Expert guidance on machinery operation, maintenance tips, and farming best practices to maximize your agricultural productivity.",
      icon: Users,
      features: [
        "Operation Training",
        "Maintenance Guidance",
        "Farming Consultation",
        "Technical Support"
      ],
      color: "text-green-600"
    },
    {
      id: 6,
      title: "24/7 Customer Support",
      description: "Round-the-clock customer support for emergency repairs, technical queries, and assistance. Always available when you need us.",
      icon: Headphones,
      features: [
        "24/7 Availability",
        "Emergency Response",
        "Technical Helpline",
        "Multi-language Support"
      ],
      color: "text-blue-600"
    }
  ];

  const serviceAreas = [
    "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem",
    "Tirunelveli", "Erode", "Vellore", "Thoothukudi", "Dindigul",
    "Thanjavur", "Ranipet", "Sivakasi", "Karur", "Udhagamandalam"
  ];

  const whyChooseUs = [
    {
      title: "15+ Years Experience",
      description: "Serving Tamil Nadu farmers with dedication and expertise",
      icon: Award
    },
    {
      title: "Authorized Dealer",
      description: "Official dealer for major agricultural machinery brands",
      icon: Shield
    },
    {
      title: "Expert Team",
      description: "Skilled technicians and agricultural consultants",
      icon: Users
    },
    {
      title: "Quick Response",
      description: "Fast service delivery across Tamil Nadu",
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="heading-primary mb-6">Our Services</h1>
            <p className="body-text max-w-3xl mx-auto mb-8">
              Comprehensive agricultural machinery solutions for farmers across Tamil Nadu. 
              From sales to service, we're your trusted partner in modern farming.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge className="bg-primary/10 text-primary">Agricultural Machinery</Badge>
              <Badge className="bg-secondary/10 text-secondary">After-Sales Service</Badge>
              <Badge className="bg-accent/10 text-accent">Spare Parts</Badge>
              <Badge className="bg-cta/10 text-cta">24/7 Support</Badge>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service) => (
              <div key={service.id} className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center mr-4`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Button className="w-full btn-primary" asChild>
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="bg-muted/30 rounded-2xl p-8 mb-20">
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-4">Why Choose Thiru Annamalaiyar?</h2>
              <p className="body-text max-w-2xl mx-auto">
                Your trusted partner for all agricultural machinery needs in Tamil Nadu
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-4">Service Areas Across Tamil Nadu</h2>
              <p className="body-text max-w-2xl mx-auto">
                We provide sales and service support across major cities and districts in Tamil Nadu
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <div className="flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Coverage Areas</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="text-center p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Don't see your area? Contact us for service availability
                </p>
                <Button variant="outline" asChild>
                  <Link to="/contact">Check Service Availability</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">Need Agricultural Machinery Services?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get in touch with our experts for personalized consultation and competitive quotes. 
                We're here to help you choose the right machinery for your farming needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-cta" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/machinery">View Machinery</Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: +91 98765 43210
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
