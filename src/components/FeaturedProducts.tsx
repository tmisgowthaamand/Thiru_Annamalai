import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Heart, ShoppingCart, MessageSquare, Eye, X, Fuel, Settings, Award } from "lucide-react";
import { useState } from "react";

interface MachineryProduct {
  id: number;
  name: string;
  brand: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviews: number;
  features: string[];
  description: string;
  specifications: {
    engine?: string;
    fuelType?: string;
    weight?: string;
    suitable: string;
  };
  type: "machinery";
  discount?: string;
  inStock: boolean;
  isPopular?: boolean;
  isNew?: boolean;
}

interface SparePartProduct {
  id: number;
  name: string;
  brand: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  description: string;
  compatibility: string[];
  type: "spare-part";
  discount?: string;
  inStock: boolean;
  stockCount?: number;
  isPopular?: boolean;
  isNew?: boolean;
}

type Product = MachineryProduct | SparePartProduct;

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const machineryProducts: MachineryProduct[] = [
    {
      id: 1,
      name: "VST 135 DI Ultra Power Tiller",
      brand: "VST Shakti",
      price: "₹1,85,000",
      originalPrice: "₹1,95,000", 
      image: "/images/Tiller vst .jpg",
      rating: 4.8,
      reviews: 124,
      features: ["13.5 HP Engine", "Diesel", "Wet & Dry Farming", "Fuel Efficient"],
      description: "Most reliable power tiller for small farming. Perfect for both wet and dry soil farming with excellent fuel economy and simple operation design.",
      specifications: {
        engine: "13.5 HP Diesel",
        fuelType: "Diesel",
        weight: "180 kg",
        suitable: "Small to Medium Farms"
      },
      type: "machinery",
      discount: "5% Off",
      inStock: true,
      isPopular: true
    },
    {
      id: 2,
      name: "Sonalika Power Tiller 13 HP", 
      brand: "Sonalika",
      price: "₹1,75,000",
      image: "/images/Tiller Sonalika.jpg",
      rating: 4.6,
      reviews: 89,
      features: ["13 HP Engine", "Deep Tillage", "High Torque", "Low Maintenance"],
      description: "Perfect for deep tillage operations. Robust and consistent power tiller with great torque capacity and low maintenance requirements.",
      specifications: {
        engine: "13 HP Diesel",
        fuelType: "Diesel",
        weight: "175 kg",
        suitable: "Medium Farms"
      },
      type: "machinery",
      inStock: true,
      isNew: true
    }
  ];

  const sparePartProducts: SparePartProduct[] = [
    {
      id: 7,
      name: "Tractor Engine Oil Filter",
      brand: "Genuine Parts",
      price: "₹450",
      originalPrice: "₹520",
      image: "/images/oil filter.jpg", 
      rating: 4.9,
      reviews: 256,
      category: "Engine Parts",
      description: "High-quality engine oil filter for tractors and power tillers. Ensures clean oil circulation and extends engine life with superior filtration.",
      compatibility: ["Mahindra Tractors", "Sonalika Tractors", "VST Power Tillers", "Most Diesel Engines"],
      type: "spare-part",
      inStock: true,
      stockCount: 45,
      discount: "13% Off",
      isPopular: true
    },
    {
      id: 8,
      name: "Cultivator Blade Set",
      brand: "AgriParts Pro",
      price: "₹1,200",
      originalPrice: "₹1,350",
      image: "/images/Blade set.jpg",
      rating: 4.7, 
      reviews: 178,
      category: "Tillage Parts",
      description: "Premium quality cultivator blade set for effective soil preparation. Heat-treated steel construction ensures durability and long-lasting performance.",
      compatibility: ["Power Tillers", "Cultivators", "Rotavators", "Most Tillage Equipment"],
      type: "spare-part",
      inStock: true,
      stockCount: 23,
      discount: "11% Off",
      isPopular: true
    }
  ];

  const allProducts: Product[] = [...machineryProducts, ...sparePartProducts];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">Featured Products</h2>
          <p className="body-text max-w-3xl mx-auto">
            Discover our most popular machinery and spare parts, trusted by thousands of farmers across Tamil Nadu. 
            From reliable power tillers to genuine spare parts, we offer quality equipment at competitive prices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts.map((product) => (
            <div key={product.id} className={`${product.type === 'machinery' ? 'machinery-card' : 'spare-part-card'} cursor-pointer`} onClick={() => setSelectedProduct(product)}>
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-t-[var(--radius-card)]">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* View Details Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isPopular && (
                    <Badge className="bg-cta text-cta-foreground">Popular</Badge>
                  )}
                  {product.isNew && (
                    <Badge className="bg-accent text-accent-foreground">New</Badge>
                  )}
                  {product.discount && (
                    <Badge variant="secondary">{product.discount}</Badge>
                  )}
                </div>

                {/* Wishlist */}
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="absolute top-3 right-3 w-8 h-8 p-0 bg-white/80 hover:bg-white"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-medium">{product.brand}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-muted-foreground">{product.rating} ({product.reviews})</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm leading-tight">{product.name}</h3>
                </div>

                {/* Features/Category */}
                {product.type === 'machinery' && (
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                )}

                {product.type === 'spare-part' && (
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary font-medium">{product.category}</span>
                    {product.stockCount && (
                      <span className={`text-xs ${product.stockCount > 20 ? 'text-green-600' : 'text-orange-600'}`}>
                        {product.stockCount} in stock
                      </span>
                    )}
                  </div>
                )}

                {/* Price */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-lg text-foreground">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    )}
                  </div>

                  {/* Actions */}
                  {product.type === 'machinery' ? (
                    <div className="space-y-2">
                      <Button size="sm" className="w-full btn-cta" asChild>
                        <Link to={`/quote?product=${product.id}`}>Request Quote</Link>
                      </Button>
                      <Button size="sm" variant="outline" className="w-full">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Book Demo
                      </Button>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1 btn-primary">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button size="sm" variant="outline" className="px-3">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/machinery">View All Machinery</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/shop">Shop All Parts</Link>
          </Button>
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
            <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{selectedProduct.name}</h3>
                  <p className="text-primary font-semibold">{selectedProduct.brand}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setSelectedProduct(null)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Product Image */}
                  <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-xl">
                      <img 
                        src={selectedProduct.image} 
                        alt={selectedProduct.name}
                        className="w-full h-80 object-cover"
                      />
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {selectedProduct.isPopular && (
                          <Badge className="bg-cta text-cta-foreground shadow-lg">
                            <Award className="w-3 h-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                        {selectedProduct.isNew && (
                          <Badge className="bg-accent text-accent-foreground shadow-lg">New</Badge>
                        )}
                        {selectedProduct.discount && (
                          <Badge variant="secondary" className="shadow-lg">{selectedProduct.discount}</Badge>
                        )}
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${i < Math.floor(selectedProduct.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-lg font-semibold">{selectedProduct.rating}</span>
                      <span className="text-muted-foreground">({selectedProduct.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-6">
                    {/* Price */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-4">
                        <span className="text-3xl font-bold text-foreground">{selectedProduct.price}</span>
                        {selectedProduct.originalPrice && (
                          <span className="text-xl text-muted-foreground line-through">{selectedProduct.originalPrice}</span>
                        )}
                      </div>
                      {selectedProduct.discount && (
                        <p className="text-green-600 font-semibold">Save {selectedProduct.discount}</p>
                      )}
                    </div>

                    {/* Description */}
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Description</h4>
                      <p className="text-muted-foreground leading-relaxed">{selectedProduct.description}</p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedProduct.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specifications for Machinery */}
                    {selectedProduct.type === 'machinery' && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Specifications</h4>
                        <div className="grid grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <Settings className="w-4 h-4 text-primary" />
                            <div>
                              <p className="text-xs text-muted-foreground">Engine</p>
                              <p className="text-sm font-medium">{selectedProduct.specifications.engine}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Fuel className="w-4 h-4 text-primary" />
                            <div>
                              <p className="text-xs text-muted-foreground">Fuel Type</p>
                              <p className="text-sm font-medium">{selectedProduct.specifications.fuelType}</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Weight</p>
                            <p className="text-sm font-medium">{selectedProduct.specifications.weight}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Suitable For</p>
                            <p className="text-sm font-medium">{selectedProduct.specifications.suitable}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Compatibility for Spare Parts */}
                    {selectedProduct.type === 'spare-part' && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Compatibility</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.compatibility.map((item, idx) => (
                            <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                              {item}
                            </span>
                          ))}
                        </div>
                        {selectedProduct.stockCount && (
                          <p className={`text-sm mt-2 ${selectedProduct.stockCount > 20 ? 'text-green-600' : 'text-orange-600'}`}>
                            {selectedProduct.stockCount} units in stock
                          </p>
                        )}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="space-y-3">
                      {selectedProduct.type === 'machinery' ? (
                        <div className="space-y-3">
                          <Button size="lg" className="w-full btn-cta" asChild>
                            <Link to={`/quote?product=${selectedProduct.id}`}>Request Quote</Link>
                          </Button>
                          <Button size="lg" variant="outline" className="w-full">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Book Demo
                          </Button>
                        </div>
                      ) : (
                        <div className="flex space-x-3">
                          <Button size="lg" className="flex-1 btn-primary">
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Add to Cart
                          </Button>
                          <Button size="lg" variant="outline" className="px-6">
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
