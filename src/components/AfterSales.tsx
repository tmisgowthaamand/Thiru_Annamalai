import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench, Truck, Phone, Clock, Shield, Users } from "lucide-react";
import workshopImage from "@/assets/workshop-service.jpg";

const AfterSales = () => {
  const services = [
    {
      icon: Wrench,
      title: "Expert Repairs",
      description: "Certified technicians for all machinery brands"
    },
    {
      icon: Truck,
      title: "Parts Delivery",
      description: "Fast delivery across Tamil Nadu within 24-48 hours"
    },
    {
      icon: Clock,
      title: "Maintenance Plans",
      description: "Scheduled servicing to prevent breakdowns"
    },
    {
      icon: Shield,
      title: "Warranty Support",
      description: "Comprehensive warranty on all repairs and parts"
    }
  ];

  const supportFeatures = [
    "24/7 Emergency Support Hotline",
    "On-site Repair Services Available", 
    "Genuine Spare Parts Guarantee",
    "Trained & Certified Technicians",
    "Preventive Maintenance Programs",
    "Quick Response Time"
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">Complete After-Sales Support</h2>
          <p className="body-text max-w-2xl mx-auto">
            Our commitment doesn't end with the sale. We provide comprehensive support 
            to keep your machinery running at peak performance.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Services Grid */}
          <div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {services.map((service, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Support Features */}
            <div className="space-y-3">
              <h3 className="heading-tertiary text-primary">Our Service Promise</h3>
              <div className="grid grid-cols-1 gap-2">
                {supportFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className="btn-cta" asChild>
                <Link to="/contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Get Support
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>

          {/* Right - Workshop Image */}
          <div className="relative">
            <img 
              src={workshopImage} 
              alt="Agricultural machinery workshop with technicians"
              className="w-full h-[500px] object-cover rounded-[var(--radius-card)]"
            />
            
            {/* Overlay Stats */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur rounded-lg p-4 border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-primary">25+</div>
                    <div className="text-xs text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">50+</div>
                    <div className="text-xs text-muted-foreground">Service Centers</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">24hr</div>
                    <div className="text-xs text-muted-foreground">Response Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact Banner */}
        <div className="mt-12 bg-cta/10 border border-cta/20 rounded-[var(--radius-card)] p-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Phone className="w-5 h-5 text-cta" />
            <h3 className="text-lg font-semibold text-cta">Emergency Breakdown Support</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Machinery breakdown during crucial farming season? Call our emergency hotline for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+919876543210" className="text-xl font-bold text-cta hover:text-cta/80 transition-colors">
              📞 +91 98765 43210
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="https://wa.me/919876543210" className="text-lg font-medium text-green-600 hover:text-green-700 transition-colors">
              💬 WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterSales;