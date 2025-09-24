import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  
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

          <div className="text-center mb-12">
            <h1 className="heading-primary mb-4">Contact Us</h1>
            <p className="body-text max-w-2xl mx-auto">
              Get in touch with our agricultural machinery experts. We're here to help you find the right equipment for your farming needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-[var(--radius-card)] border">
              <h2 className="heading-tertiary mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input placeholder="Your full name" className="form-input" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone *</label>
                    <Input placeholder="Your phone number" className="form-input" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="form-input" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Product Interest</label>
                  <select className="form-input w-full">
                    <option>Select product type</option>
                    <option>Tractors</option>
                    <option>Tillers</option>
                    <option>Harvesters</option>
                    <option>Sprayers</option>
                    <option>Spare Parts</option>
                    <option>Service & Maintenance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea 
                    placeholder="Tell us about your requirements, farm size, budget, or any questions you have..."
                    className="form-input min-h-[120px]"
                  />
                </div>
                <Button className="w-full btn-cta" size="lg">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-card p-8 rounded-[var(--radius-card)] border">
                <h2 className="heading-tertiary mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Our Location</h3>
                      <p className="text-muted-foreground">
                        OPP TO NEW TALUK OFFICE, 14/88, A.C.K ROAD<br />
                        Madurantakam, Maduranthakam<br />
                        Chengalpattu, Tamil Nadu, 603306
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone Numbers</h3>
                      <p className="text-muted-foreground">
                        Main: <a href="tel:+919894377407" className="text-primary hover:underline">+91 98943 77407</a><br />
                        Parts: <a href="tel:+919894377407" className="text-primary hover:underline">+91 98943 77407</a><br />
                        Service: <a href="tel:+919894377407" className="text-primary hover:underline">+91 98943 77407</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        General: <a href="mailto:contact@annamalaiyaragriculturalmachinery.shop" className="text-primary hover:underline">contact@annamalaiyaragriculturalmachinery.shop</a><br />
                        Parts: <a href="mailto:contact@annamalaiyaragriculturalmachinery.shop" className="text-primary hover:underline">contact@annamalaiyaragriculturalmachinery.shop</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Saturday: 8:00 AM - 7:00 PM<br />
                        Sunday: 9:00 AM - 5:00 PM<br />
                        <span className="text-cta">Emergency Support: 24/7</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-primary/5 border border-primary/20 p-8 rounded-[var(--radius-card)]">
                <h3 className="heading-tertiary text-primary mb-4">Need Immediate Help?</h3>
                <div className="space-y-3">
                  <Button className="w-full btn-cta" asChild>
                    <a href="https://wa.me/919894377407">
                      💬 WhatsApp Now
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:+919894377407">
                      📞 Call Direct
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Our experts are available to help with machinery selection, parts ordering, and technical support.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-muted rounded-[var(--radius-card)] h-64 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive Map Coming Soon</p>
                  <p className="text-sm">Visit us at Madurantakam, Tamil Nadu</p>
                </div>
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

export default Contact;
