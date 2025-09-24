import { Link } from "react-router-dom";
import { ArrowRight, Tractor, Wrench, Cog, Droplets, Scissors, Package } from "lucide-react";

const CategoryGrid = () => {
  const categories = [
    {
      name: "Tractors",
      description: "Powerful tractors for all farming needs",
      icon: Tractor,
      href: "/machinery/tractors",
      type: "machinery",
      color: "from-primary to-primary/80"
    },
    {
      name: "Tillers",
      description: "Soil preparation and cultivation tools",
      icon: Wrench,
      href: "/machinery/tillers", 
      type: "machinery",
      color: "from-secondary to-secondary/80"
    },
    {
      name: "Harvesters",
      description: "Efficient crop harvesting machines",
      icon: Scissors,
      href: "/machinery/harvesters",
      type: "machinery", 
      color: "from-accent to-accent/80"
    },
    {
      name: "Sprayers",
      description: "Precision spraying equipment",
      icon: Droplets,
      href: "/machinery/sprayers",
      type: "machinery",
      color: "from-cta to-cta/80"
    },
    {
      name: "Spare Parts",
      description: "Genuine parts for all machinery",
      icon: Cog,
      href: "/shop",
      type: "ecommerce",
      color: "from-primary to-accent"
    },
    {
      name: "Accessories",
      description: "Tools and farming accessories", 
      icon: Package,
      href: "/shop/accessories",
      type: "ecommerce",
      color: "from-secondary to-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Package className="w-8 h-8 text-primary" />
          </div>
          <h2 className="heading-secondary mb-6">Our Product Categories</h2>
          <p className="body-text max-w-3xl mx-auto text-lg">
            From powerful tractors to genuine spare parts, we provide everything 
            Tamil Nadu farmers need for successful agriculture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.href}
              className="group block bg-card rounded-xl border border-border/50 p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 ${
                        category.type === 'machinery' 
                          ? 'bg-cta/10 text-cta border-cta/20 group-hover:bg-cta group-hover:text-white' 
                          : 'bg-primary/10 text-primary border-primary/20 group-hover:bg-primary group-hover:text-white'
                      }`}>
                        {category.type === 'machinery' ? 'Request Quote' : 'Shop Now'}
                      </span>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50 max-w-md mx-auto">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Need Help Choosing?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Our agricultural experts are here to help you find the perfect equipment for your farm.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-105"
            >
              <span>Talk to Our Experts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;