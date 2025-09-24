import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Raman Krishnan",
      location: "Coimbatore, Tamil Nadu",
      rating: 5,
      text: "Excellent service and genuine parts. My tractor has been running smoothly for 3 years with their maintenance.",
      product: "Mahindra 575 DI Tractor",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Suresh Kumar",
      location: "Salem, Tamil Nadu", 
      rating: 5,
      text: "Best prices in the region. Quick delivery of spare parts and very knowledgeable staff. Highly recommended!",
      product: "Engine Parts & Service",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Murugan P",
      location: "Tirupur, Tamil Nadu",
      rating: 5,
      text: "They helped me choose the right tiller for my farm. Professional advice and excellent after-sales support.",
      product: "Power Tiller",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Lakshmi Devi",
      location: "Erode, Tamil Nadu",
      rating: 5,
      text: "Female farmer here! They treat everyone with respect and provide honest guidance. Great experience.",
      product: "Small Tractor & Parts",
      image: "/api/placeholder/80/80"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">What Farmers Say About Us</h2>
          <p className="body-text max-w-2xl mx-auto">
            Trusted by thousands of farmers across Tamil Nadu for quality machinery and reliable service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-[var(--radius-card)] border border-border/50 hover:shadow-[var(--shadow-card)] transition-all duration-300">
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="body-text text-sm mb-4 italic">
                "{testimonial.text}"
              </p>

              {/* Product */}
              <div className="mb-4">
                <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                  {testimonial.product}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-semibold text-sm text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">5000+</div>
            <div className="text-sm text-muted-foreground">Happy Farmers</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">25+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">95%</div>
            <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;