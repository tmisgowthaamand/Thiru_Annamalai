import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, MessageCircle, ShoppingCart } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Machinery", href: "/machinery" },
    { name: "Spare Parts", href: "/shop" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">TA</span>
            </div>
            <div>
              <span className="font-bold text-lg text-foreground">Thiru Annamalaiyar</span>
              <p className="text-xs text-muted-foreground -mt-1">Agricultural Machinery</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={scrollToTop}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <Link to="/shop" onClick={scrollToTop}>
                <ShoppingCart className="w-4 h-4 mr-2" />
                Shop Parts
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
              asChild
            >
              <Link to="/cart" onClick={scrollToTop}>
                <ShoppingCart className="w-4 h-4 mr-2" />
                View Cart
              </Link>
            </Button>
            <Button 
              className="btn-cta" 
              size="sm"
              asChild
            >
              <Link to="/quote" onClick={scrollToTop}>Request Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => {
                      setIsOpen(false);
                      scrollToTop();
                    }}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t pt-4 space-y-3">
                  <Button 
                    className="w-full btn-primary" 
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to="/shop" onClick={scrollToTop}>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Shop Spare Parts
                    </Link>
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full" 
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to="/cart" onClick={scrollToTop}>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      View Cart
                    </Link>
                  </Button>
                  <Button 
                    className="w-full btn-cta" 
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to="/quote" onClick={scrollToTop}>Request Quote</Link>
                  </Button>
                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;