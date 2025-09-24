import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, Wrench, Clock } from "lucide-react";
import heroImage from "@/assets/hero-farmer-tractor.jpg";

const Hero = () => {
  const trustIndicators = [
    { icon: Star, text: "4.8★ Customer Rating" },
    { icon: Shield, text: "25+ Years Experience" },
    { icon: Wrench, text: "Complete After-Sales" },
    { icon: Clock, text: "Quick Parts Delivery" },
  ];

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Farmer operating tractor in field" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-1 w-12 bg-accent rounded" />
                <span className="text-accent font-medium">Tamil Nadu's Trusted Partner</span>
              </div>
              
              <h1 className="heading-primary text-white">
                Reliable Machines for 
                <span className="block text-accent">Every Farmer</span>
              </h1>
              
              <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                Premium tractors, tillers, harvesters, and spare parts. 
                Empowering Tamil Nadu farmers with quality machinery and dedicated service since 1998.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-3">
              {trustIndicators.map((item, index) => (
                <div key={index} className="trust-badge bg-white/10 border-white/20 text-white backdrop-blur">
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="btn-cta group"
                asChild
              >
                <Link to="/quote">
                  Request Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground backdrop-blur"
                asChild
              >
                <Link to="/shop">Shop Spare Parts</Link>
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="flex items-center space-x-6 pt-4 text-sm text-gray-300">
              <a href="tel:+919876543210" className="hover:text-accent transition-colors">
                📞 +91 98765 43210
              </a>
              <a href="https://wa.me/919876543210" className="hover:text-accent transition-colors">
                💬 WhatsApp Now
              </a>
            </div>
          </div>

          {/* Right Content - Key Benefits */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold text-white">Quality Machinery</h4>
                    <p className="text-gray-300 text-sm">Premium tractors, tillers, and harvesters from trusted brands</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold text-white">Genuine Spare Parts</h4>
                    <p className="text-gray-300 text-sm">Original parts with warranty and quick delivery across Tamil Nadu</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold text-white">Expert Service</h4>
                    <p className="text-gray-300 text-sm">25+ years experience with dedicated after-sales support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold text-white">Competitive Pricing</h4>
                    <p className="text-gray-300 text-sm">Best prices with flexible payment options for farmers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;