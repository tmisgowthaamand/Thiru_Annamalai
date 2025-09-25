import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Tractors", href: "/machinery?category=Tractors" },
    { name: "Tillers", href: "/machinery?category=Power Tillers" },
    { name: "Spare Parts", href: "/shop" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const categories = [
    { name: "Tractors", href: "/machinery?category=Tractors" },
    { name: "Harvesters", href: "/machinery?category=Harvesters" },
    { name: "Tillers", href: "/machinery?category=Power Tillers" },
    { name: "Sprayers", href: "/machinery?category=Sprayers" },
    { name: "Engine Parts", href: "/shop" },
    { name: "Accessories", href: "/shop" },
  ];

  const services = [
    { name: "Machinery Repair", href: "/services" },
    { name: "Maintenance Plans", href: "/services" },
    { name: "Parts Delivery", href: "/services" },
    { name: "Emergency Support", href: "/services" },
    { name: "Training Programs", href: "/services" },
    { name: "Warranty Claims", href: "/services" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Thiru Annamalaiyar</h3>
              <p className="text-sm text-secondary-foreground/80">Agricultural Machinery</p>
            </div>
            
            <p className="text-sm text-secondary-foreground/80">
              Leading supplier of quality agricultural machinery and spare parts in Tamil Nadu since 1998. 
              Empowering farmers with reliable equipment and dedicated service.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="leading-tight">
                  OPP TO NEW TALUK OFFICE, 14/88, A.C.K ROAD<br />
                  Madurantakam, Maduranthakam<br />
                  Chengalpattu, Tamil Nadu, 603306
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+919894377407" className="hover:text-accent transition-colors">
                  +91 98943 77407
                </a>
              </div>
              <div className="flex flex-col space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  <a href="mailto:contact@annamalaiyaragriculturalmachinery.shop" className="hover:text-accent transition-colors">
                    contact@annamalaiyaragriculturalmachinery.shop
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  <a href="mailto:thiruannamalaiyar014@gmail.com" className="hover:text-accent transition-colors">
                    thiruannamalaiyar014@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="w-4 h-4 text-accent" />
                <span>Mon-Sat: 8AM-7PM, Sun: 9AM-5PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link 
                    to={category.href} 
                    className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter & Social */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-sm text-secondary-foreground/80 mb-4">
                Get the latest updates on new machinery arrivals and special offers.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 text-sm bg-white text-foreground rounded-l-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-r-md hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors">
                  <Youtube className="w-5 h-5 text-white" />
                </a>
                <a href="https://wa.me/919894377407" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <span className="text-white text-sm">💬</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-secondary-foreground/20 bg-secondary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/80">
            <div>
              © 2025 Thiru Annamalaiyar Agricultural Machinery. All rights reserved.
            </div>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
              <span>•</span>
              <Link to="/refund" className="hover:text-accent transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;