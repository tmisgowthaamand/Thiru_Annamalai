import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, 
  Target, 
  Award, 
  Heart, 
  Tractor,
  Shield,
  Star,
  CheckCircle,
  MapPin,
  Calendar,
  TrendingUp,
  Handshake,
  ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Started as a small agricultural machinery dealer in Tamil Nadu"
    },
    {
      year: "2012",
      title: "Authorized Dealership",
      description: "Became authorized dealer for major brands like Mahindra and Sonalika"
    },
    {
      year: "2016",
      title: "Service Expansion",
      description: "Expanded to provide comprehensive after-sales service across Tamil Nadu"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched online platform for better customer service and support"
    },
    {
      year: "2024",
      title: "Market Leader",
      description: "Serving 10,000+ farmers with 50+ machinery models and comprehensive services"
    }
  ];

  const teamMembers = [
    {
      name: "Thirumurugan S",
      position: "Founder & Managing Director",
      experience: "15+ Years",
      expertise: "Agricultural Machinery & Business Development",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Rajesh Kumar",
      position: "Technical Head",
      experience: "12+ Years", 
      expertise: "Machinery Maintenance & Repair",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Priya Devi",
      position: "Customer Relations Manager",
      experience: "8+ Years",
      expertise: "Customer Service & Support",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Murugan P",
      position: "Sales Manager",
      experience: "10+ Years",
      expertise: "Agricultural Equipment Sales",
      image: "/api/placeholder/300/300"
    }
  ];

  const achievements = [
    {
      number: "10,000+",
      label: "Happy Farmers",
      icon: Users
    },
    {
      number: "50+",
      label: "Machinery Models",
      icon: Tractor
    },
    {
      number: "15+",
      label: "Years Experience",
      icon: Award
    },
    {
      number: "24/7",
      label: "Customer Support",
      icon: Shield
    }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We provide only genuine, high-quality agricultural machinery and spare parts from trusted brands.",
      icon: Shield,
      color: "text-primary"
    },
    {
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do. We strive to exceed their expectations every day.",
      icon: Heart,
      color: "text-red-500"
    },
    {
      title: "Innovation",
      description: "We embrace modern technology and innovative solutions to serve our customers better.",
      icon: TrendingUp,
      color: "text-blue-500"
    },
    {
      title: "Trust & Integrity",
      description: "We build lasting relationships based on trust, transparency, and honest business practices.",
      icon: Handshake,
      color: "text-green-500"
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
            <h1 className="heading-primary mb-6">About Thiru Annamalaiyar</h1>
            <p className="body-text max-w-4xl mx-auto mb-8">
              For over 15 years, we have been Tamil Nadu's trusted partner in agricultural machinery, 
              empowering farmers with quality equipment, reliable service, and expert guidance to enhance their farming productivity.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="bg-primary/10 text-primary">Est. 2008</Badge>
              <Badge className="bg-secondary/10 text-secondary">Tamil Nadu's Leading Dealer</Badge>
              <Badge className="bg-accent/10 text-accent">10,000+ Happy Farmers</Badge>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower Tamil Nadu farmers with modern, reliable, and affordable agricultural machinery 
                that enhances productivity, reduces manual labor, and contributes to sustainable farming practices. 
                We are committed to providing exceptional service and support throughout the farming journey.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-secondary mr-4" />
                <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and preferred agricultural machinery partner in South India, 
                known for quality products, exceptional service, and innovative solutions that transform 
                traditional farming into modern, efficient, and profitable agricultural practices.
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 mb-20">
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-4">Our Achievements</h2>
              <p className="body-text max-w-2xl mx-auto">
                Numbers that reflect our commitment to serving the farming community
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{achievement.number}</div>
                  <div className="text-muted-foreground font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Timeline */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-4">Our Journey</h2>
              <p className="body-text max-w-2xl mx-auto">
                From a small dealer to Tamil Nadu's leading agricultural machinery provider
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm">
                        <div className="flex items-center mb-3">
                          <Calendar className="w-5 h-5 text-primary mr-2" />
                          <span className="text-primary font-bold text-lg">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-4">Our Values</h2>
              <p className="body-text max-w-2xl mx-auto">
                The principles that guide our business and relationships with farmers
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-4">Meet Our Team</h2>
              <p className="body-text max-w-2xl mx-auto">
                Experienced professionals dedicated to serving the farming community
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border/50 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{member.position}</p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p><strong>Experience:</strong> {member.experience}</p>
                    <p><strong>Expertise:</strong> {member.expertise}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Contact */}
          <div className="bg-card rounded-2xl p-8 border border-border/50 mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Our Location</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Head Office:</strong><br />
                    Thiru Annamalaiyar<br />
                    123, Agricultural Market Road<br />
                    Coimbatore, Tamil Nadu - 641001
                  </p>
                  <p>
                    <strong className="text-foreground">Service Centers:</strong><br />
                    Chennai, Madurai, Salem, Erode, Tiruchirappalli
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">Why Farmers Trust Us</h3>
                <div className="space-y-3">
                  {[
                    "Authorized dealer for top brands",
                    "Genuine products with warranty",
                    "Expert technical support",
                    "Competitive pricing",
                    "Quick spare parts availability",
                    "24/7 customer service"
                  ].map((point, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Farming?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of satisfied farmers who trust Thiru Annamalaiyar for their agricultural machinery needs. 
                Let's discuss how we can help improve your farming productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-cta" asChild>
                  <Link to="/contact">Get In Touch</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/machinery">View Our Products</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">Our Services</Link>
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

export default About;
