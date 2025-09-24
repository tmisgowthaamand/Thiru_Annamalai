import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Heart, MessageSquare, Tractor, Scissors, Droplets, Wrench, Award, IndianRupee, Settings, Eye, X, Fuel, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface MachineryProduct {
  id: number;
  name: string;
  brand: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  hp?: string;
  features: string[];
  description: string;
  specifications: {
    engine?: string;
    fuelType?: string;
    weight?: string;
    suitable: string;
  };
  discount?: string;
  inStock: boolean;
  isPopular?: boolean;
  isNew?: boolean;
}

const ProductCard = ({ product, navigate }: { product: MachineryProduct; navigate: any }) => (
  <div className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer flex flex-col h-full">
    {/* Image Section */}
    <div className="relative overflow-hidden" onClick={() => navigate(`/machinery/${product.id}`)}>
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      
      {/* View Details Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <Button 
          size="sm" 
          variant="secondary" 
          className="bg-white/90 text-black hover:bg-white"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/machinery/${product.id}`);
          }}
        >
          <Eye className="w-4 h-4 mr-2" />
          View Details
        </Button>
      </div>
      
      {/* Badges */}
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        {product.isPopular && (
          <Badge className="bg-cta text-cta-foreground shadow-lg">
            <Award className="w-3 h-3 mr-1" />
            Popular
          </Badge>
        )}
        {product.isNew && (
          <Badge className="bg-accent text-accent-foreground shadow-lg">New</Badge>
        )}
        {product.discount && (
          <Badge variant="secondary" className="shadow-lg">{product.discount}</Badge>
        )}
      </div>

      {/* HP/Category Badge */}
      <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
        {product.hp || product.category}
      </div>
    </div>

    {/* Content Section - Flex grow to fill available space */}
    <div className="p-6 flex flex-col flex-grow">
      {/* Header */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-primary font-semibold">{product.brand}</span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-muted-foreground">{product.rating} ({product.reviews})</span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 cursor-pointer min-h-[3.5rem]" onClick={() => navigate(`/machinery/${product.id}`)}>
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 min-h-[4.5rem]">
          {product.description}
        </p>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-1 mb-4 min-h-[2rem]">
        {product.features.slice(0, 3).map((feature, idx) => (
          <span key={idx} className="text-xs bg-muted px-2 py-1 rounded-full border">
            {feature}
          </span>
        ))}
      </div>

      {/* Price & Actions - Push to bottom */}
      <div className="mt-auto space-y-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <IndianRupee className="w-5 h-5 text-foreground" />
            <span className="text-xl font-bold text-foreground">{product.price.replace('₹', '')}</span>
          </div>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
          )}
        </div>

        <div className="flex gap-2 w-full">
          <Button className="flex-1 btn-cta text-sm h-10" asChild>
            <Link to={`/quote?product=${product.id}`} className="flex items-center justify-center w-full h-full">
              Request Quote
            </Link>
          </Button>
          <Button variant="outline" className="w-10 h-10 p-0 flex items-center justify-center">
            <MessageSquare className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

const Machinery = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Handle URL parameters for category filtering
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Update URL when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };
  
  const machineryProducts: MachineryProduct[] = [
    // Tractors
    {
      id: 1,
      name: "Mahindra 575 DI Tractor",
      brand: "Mahindra",
      price: "₹8,50,000",
      originalPrice: "₹9,00,000",
      image: "/images/tractor 1.jpg",
      rating: 4.8,
      reviews: 245,
      category: "Tractors",
      hp: "50 HP",
      features: ["4WD", "Power Steering", "12F+3R Gears", "Dual Clutch"],
      description: "Powerful 50HP tractor perfect for medium to large farms. Features advanced hydraulics, comfortable seating, and excellent fuel efficiency for all farming operations.",
      specifications: {
        engine: "50 HP, 4-Cylinder",
        fuelType: "Diesel",
        weight: "2,200 kg",
        suitable: "Medium to Large Farms"
      },
      discount: "6% Off",
      inStock: true,
      isPopular: true
    },
    {
      id: 2,
      name: "Sonalika DI 745 III Tractor",
      brand: "Sonalika",
      price: "₹7,25,000",
      image: "/images/tractor 2.jpg",
      rating: 4.6,
      reviews: 189,
      category: "Tractors",
      hp: "45 HP",
      features: ["High Torque", "Fuel Efficient", "Easy Maintenance", "Robust Build"],
      description: "Reliable 45HP tractor designed for Indian farming conditions. Excellent for cultivation, harvesting, and transportation with superior fuel economy.",
      specifications: {
        engine: "45 HP, 3-Cylinder",
        fuelType: "Diesel",
        weight: "2,000 kg",
        suitable: "Small to Medium Farms"
      },
      inStock: true,
      isNew: true
    },
    {
      id: 3,
      name: "New Holland 3630 TX Tractor",
      brand: "New Holland",
      price: "₹9,75,000",
      originalPrice: "₹10,25,000",
      image: "/images/tractor 3.jpg",
      rating: 4.9,
      reviews: 156,
      category: "Tractors",
      hp: "55 HP",
      features: ["Advanced Hydraulics", "Comfortable Cabin", "PTO", "High Lifting Capacity"],
      description: "Premium 55HP tractor with advanced features and superior comfort. Ideal for intensive farming operations with excellent build quality and reliability.",
      specifications: {
        engine: "55 HP, 4-Cylinder Turbo",
        fuelType: "Diesel",
        weight: "2,400 kg",
        suitable: "Large Commercial Farms"
      },
      discount: "5% Off",
      inStock: true,
      isPopular: true
    },
    {
      id: 4,
      name: "Deutz Fahr Agrolux 50 - 4WD",
      brand: "Deutz Fahr",
      price: "₹11,70,000",
      image: "/images/tractor DEUTZ.jpg",
      rating: 4.9,
      reviews: 89,
      category: "Tractors",
      hp: "50 HP",
      features: ["4WD", "German Engineering", "Advanced Hydraulics", "Comfortable Cabin"],
      description: "Premium German-engineered tractor with 4WD capability. Features advanced hydraulics, superior build quality, and excellent fuel efficiency for intensive farming.",
      specifications: {
        engine: "50 HP, 4-Cylinder Turbo",
        fuelType: "Diesel",
        weight: "2,800 kg",
        suitable: "Premium Commercial Farming"
      },
      inStock: true,
      isNew: true,
      isPopular: true
    },
    
    // Power Tillers
    {
      id: 5,
      name: "VST 135 DI Ultra Power Tiller",
      brand: "VST Shakti",
      price: "₹1,85,000",
      originalPrice: "₹1,95,000",
      image: "/images/Tiller vst .jpg",
      rating: 4.8,
      reviews: 124,
      category: "Power Tillers",
      hp: "13.5 HP",
      features: ["13.5 HP Engine", "Diesel", "Wet & Dry Farming", "Fuel Efficient"],
      description: "Most reliable power tiller for small farming. Perfect for both wet and dry soil farming with excellent fuel economy and simple operation design.",
      specifications: {
        engine: "13.5 HP Diesel",
        fuelType: "Diesel",
        weight: "180 kg",
        suitable: "Small to Medium Farms"
      },
      discount: "5% Off",
      inStock: true,
      isPopular: true
    },
    {
      id: 6,
      name: "Sonalika Power Tiller 13 HP",
      brand: "Sonalika",
      price: "₹1,75,000",
      image: "/images/Tiller Sonalika.jpg",
      rating: 4.6,
      reviews: 89,
      category: "Power Tillers",
      hp: "13 HP",
      features: ["13 HP Engine", "Deep Tillage", "High Torque", "Low Maintenance"],
      description: "Perfect for deep tillage operations. Robust and consistent power tiller with great torque capacity and low maintenance requirements.",
      specifications: {
        engine: "13 HP Diesel",
        fuelType: "Diesel",
        weight: "175 kg",
        suitable: "Medium Farms"
      },
      inStock: true,
      isNew: true
    },
    {
      id: 7,
      name: "Mahindra Power Tiller 12-14 HP",
      brand: "Mahindra",
      price: "₹1,95,000",
      originalPrice: "₹2,05,000",
      image: "/images/tiller mahindra.jpg",
      rating: 4.7,
      reviews: 156,
      category: "Power Tillers",
      hp: "12-14 HP",
      features: ["12-14 HP Engine", "Strong Build", "Wide Service Network", "Reliable"],
      description: "Dependable power tiller with strong build quality and wide service network. Perfect for various soil conditions and farming operations.",
      specifications: {
        engine: "12-14 HP Diesel",
        fuelType: "Diesel",
        weight: "190 kg",
        suitable: "All Farm Sizes"
      },
      discount: "5% Off",
      inStock: true,
      isPopular: true
    },
    {
      id: 8,
      name: "Kubota PEM 140 DI Power Tiller",
      brand: "Kubota",
      price: "₹2,25,000",
      image: "/images/tiller kubota.jpg",
      rating: 4.9,
      reviews: 78,
      category: "Power Tillers",
      hp: "14 HP",
      features: ["14 HP Engine", "Japanese Technology", "Precision Farming", "Compact Design"],
      description: "Premium power tiller with Japanese engineering. Ideal for precision farming with advanced features and superior performance.",
      specifications: {
        engine: "14 HP Diesel",
        fuelType: "Diesel",
        weight: "165 kg",
        suitable: "Precision Farming"
      },
      inStock: true,
      isNew: true
    },
    {
      id: 9,
      name: "KMW Mega T 12 LW Power Tiller",
      brand: "KMW",
      price: "₹1,65,000",
      image: "/images/tiller kmv.jpg",
      rating: 4.5,
      reviews: 92,
      category: "Power Tillers",
      hp: "12 HP",
      features: ["12 HP Engine", "Light Weight", "Multiple Attachments", "Paddy Fields"],
      description: "High-horsepower tiller designed for demanding operations. Perfect for dry as well as paddy fields with multiple attachments.",
      specifications: {
        engine: "12 HP Diesel",
        fuelType: "Diesel",
        weight: "160 kg",
        suitable: "Paddy & Dry Fields"
      },
      inStock: true
    },
    {
      id: 10,
      name: "Honda FJ 500 Power Tiller",
      brand: "Honda",
      price: "₹1,45,000",
      originalPrice: "₹1,55,000",
      image: "/images/tiller honda.jpg",
      rating: 4.8,
      reviews: 134,
      category: "Power Tillers",
      hp: "5 HP",
      features: ["5 HP Engine", "Easy Start", "Smooth Operation", "Small Farms"],
      description: "Premium quality power tiller with Honda's renowned engine technology. Perfect for small farms and kitchen gardens with easy operation.",
      specifications: {
        engine: "5 HP Petrol",
        fuelType: "Petrol",
        weight: "85 kg",
        suitable: "Small Farms & Gardens"
      },
      discount: "6% Off",
      inStock: true,
      isPopular: true
    },

    // Harvesters
    {
      id: 11,
      name: "Mahindra Arjun Novo 605 DI-i Harvester",
      brand: "Mahindra",
      price: "₹18,50,000",
      originalPrice: "₹19,75,000",
      image: "/images/Mahindra harvester.jpg",
      rating: 4.7,
      reviews: 67,
      category: "Harvesters",
      hp: "60 HP",
      features: ["60 HP Engine", "Large Grain Tank", "Advanced Threshing", "GPS Ready"],
      description: "Advanced combine harvester with superior threshing efficiency. Features large grain tank, advanced cleaning system, and GPS compatibility for precision farming.",
      specifications: {
        engine: "60 HP, 4-Cylinder Turbo",
        fuelType: "Diesel",
        weight: "4,200 kg",
        suitable: "Large Scale Harvesting"
      },
      discount: "6% Off",
      inStock: true,
      isPopular: true
    },
    {
      id: 12,
      name: "New Holland TC5.90 Combine Harvester",
      brand: "New Holland",
      price: "₹22,00,000",
      image: "/images/harvester 2.jpg",
      rating: 4.8,
      reviews: 45,
      category: "Harvesters",
      hp: "90 HP",
      features: ["90 HP Engine", "Twin Rotor Technology", "Intellisense System", "High Capacity"],
      description: "Premium combine harvester with twin rotor technology. Features intelligent sensing system, high capacity grain tank, and superior cleaning performance.",
      specifications: {
        engine: "90 HP, 6-Cylinder",
        fuelType: "Diesel",
        weight: "5,800 kg",
        suitable: "Commercial Harvesting"
      },
      inStock: true,
      isNew: true
    },
    {
      id: 13,
      name: "John Deere W70 Combine Harvester",
      brand: "John Deere",
      price: "₹25,50,000",
      originalPrice: "₹27,00,000",
      image: "/images/harvester 3.jpg",
      rating: 4.9,
      reviews: 38,
      category: "Harvesters",
      hp: "75 HP",
      features: ["75 HP Engine", "HillMaster Technology", "ProDrive Transmission", "Advanced Cleaning"],
      description: "World-class combine harvester with HillMaster technology. Perfect for challenging terrain with advanced transmission and superior grain quality.",
      specifications: {
        engine: "75 HP, 4-Cylinder Turbo",
        fuelType: "Diesel",
        weight: "5,200 kg",
        suitable: "All Terrain Harvesting"
      },
      discount: "6% Off",
      inStock: true,
      isPopular: true
    },

    // Sprayers
    {
      id: 14,
      name: "Mahindra Yuvraj 215 NXT Sprayer",
      brand: "Mahindra",
      price: "₹3,25,000",
      image: "/images/sprayer 3.jpg",
      rating: 4.6,
      reviews: 89,
      category: "Sprayers",
      hp: "15 HP",
      features: ["15 HP Engine", "400L Tank", "Boom Sprayer", "Precision Nozzles"],
      description: "Efficient boom sprayer for large field applications. Features precision nozzles, large tank capacity, and uniform spray distribution for effective crop protection.",
      specifications: {
        engine: "15 HP Diesel",
        fuelType: "Diesel",
        weight: "850 kg",
        suitable: "Large Field Spraying"
      },
      inStock: true
    },
    {
      id: 15,
      name: "Stihl SR 5600 Knapsack Sprayer",
      brand: "Stihl",
      price: "₹45,000",
      originalPrice: "₹50,000",
      image: "/images/sprayer 2.jpg",
      rating: 4.8,
      reviews: 156,
      category: "Sprayers",
      features: ["2-Stroke Engine", "Lightweight", "Easy Start", "Ergonomic Design"],
      description: "Professional knapsack sprayer with 2-stroke engine. Lightweight design with easy start system and ergonomic features for comfortable operation.",
      specifications: {
        engine: "2-Stroke Petrol",
        fuelType: "Petrol",
        weight: "9.5 kg",
        suitable: "Orchard & Garden Spraying"
      },
      discount: "10% Off",
      inStock: true,
      isPopular: true
    },

    // Specialized Equipment
    {
      id: 16,
      name: "Mahindra Straw Reaper",
      brand: "Mahindra",
      price: "₹2,85,000",
      image: "/images/Dharanee straw.jpg",
      rating: 4.5,
      reviews: 67,
      category: "Specialized",
      features: ["Self Propelled", "Efficient Cutting", "Straw Collection", "Fuel Efficient"],
      description: "Efficient straw reaper for post-harvest operations. Self-propelled design with efficient cutting mechanism and straw collection system.",
      specifications: {
        engine: "12 HP Diesel",
        fuelType: "Diesel",
        weight: "450 kg",
        suitable: "Straw & Stubble Management"
      },
      inStock: true
    },
    {
      id: 17,
      name: "Rotary Tiller Attachment",
      brand: "Universal",
      price: "₹85,000",
      originalPrice: "₹95,000",
      image: "/images/rotary.jpg",
      rating: 4.4,
      reviews: 123,
      category: "Specialized",
      features: ["Universal Fit", "Heavy Duty Blades", "Adjustable Depth", "Easy Maintenance"],
      description: "Heavy-duty rotary tiller attachment for tractors. Features universal mounting, heavy-duty blades, and adjustable working depth for various soil conditions.",
      specifications: {
        fuelType: "Tractor Attachment",
        weight: "320 kg",
        suitable: "Soil Preparation"
      },
      discount: "11% Off",
      inStock: true
    },
    {
      id: 18,
      name: "Disc Harrow 20 Disc",
      brand: "AgriTech",
      price: "₹1,25,000",
      image: "/images/disc harrow.jpg",
      rating: 4.6,
      reviews: 89,
      category: "Specialized",
      features: ["20 Disc Configuration", "Heavy Duty Frame", "Adjustable Angle", "Quality Bearings"],
      description: "Professional disc harrow with 20 disc configuration. Heavy-duty frame construction with adjustable disc angle and quality bearings for long life.",
      specifications: {
        fuelType: "Tractor Attachment",
        weight: "680 kg",
        suitable: "Field Preparation"
      },
      inStock: true
    },
    {
      id: 19,
      name: "Seed Drill 9 Tyne",
      brand: "FarmTech",
      price: "₹1,65,000",
      originalPrice: "₹1,80,000",
      image: "/images/seed drill.jpg",
      rating: 4.7,
      reviews: 76,
      category: "Specialized",
      features: ["9 Tyne Configuration", "Seed Metering", "Fertilizer Box", "Depth Control"],
      description: "Precision seed drill with 9 tyne configuration. Features accurate seed metering, fertilizer application, and precise depth control for optimal germination.",
      specifications: {
        fuelType: "Tractor Attachment",
        weight: "420 kg",
        suitable: "Precision Seeding"
      },
      discount: "8% Off",
      inStock: true,
      isPopular: true
    },

    // New KAIRA & DHARANEE Products
    {
      id: 20,
      name: "KAIRA HARVESTER",
      brand: "KAIRA",
      price: "₹25,50,000",
      image: "/images/harvester - kaira.jpg",
      rating: 4.9,
      reviews: 42,
      category: "Harvesters",
      hp: "85 HP",
      features: ["85 HP Engine", "Advanced Threshing", "Large Grain Tank", "GPS Compatible", "Fuel Efficient"],
      description: "Premium KAIRA combine harvester with advanced threshing technology. Features large grain tank capacity, GPS compatibility, and superior fuel efficiency for large-scale commercial harvesting operations.",
      specifications: {
        engine: "85 HP, 4-Cylinder Turbo",
        fuelType: "Diesel",
        weight: "5,500 kg",
        suitable: "Large Scale Commercial Harvesting"
      },
      inStock: true,
      isNew: true,
      isPopular: true
    },
    {
      id: 21,
      name: "KAIRA PADDY TRANSPLANTER",
      brand: "KAIRA",
      price: "₹3,50,000",
      image: "/images/paddy - kaira.jpg",
      rating: 4.7,
      reviews: 68,
      category: "Specialized",
      features: ["Precision Planting", "Adjustable Row Spacing", "High Speed Operation", "Low Maintenance", "Paddy Specialist"],
      description: "Advanced KAIRA paddy transplanter designed for precision rice planting. Features adjustable row spacing, high-speed operation, and specialized design for optimal paddy field performance.",
      specifications: {
        engine: "18 HP Diesel",
        fuelType: "Diesel",
        weight: "850 kg",
        suitable: "Paddy Field Transplanting"
      },
      inStock: true,
      isNew: true
    },
    {
      id: 22,
      name: "KAIRA RIDGER PLASTERING MACHINE",
      brand: "KAIRA",
      price: "₹3,40,000",
      image: "/images/kaira ridger.jpg",
      rating: 4.6,
      reviews: 35,
      category: "Specialized",
      features: ["Ridge Formation", "Plastering Function", "Dual Purpose", "Efficient Operation", "Precise Control"],
      description: "Innovative KAIRA ridger plastering machine for dual-purpose field preparation. Combines ridge formation and plastering functions for efficient field preparation and water management.",
      specifications: {
        engine: "16 HP Diesel",
        fuelType: "Diesel",
        weight: "720 kg",
        suitable: "Ridge & Plaster Operations"
      },
      inStock: true,
      isNew: true
    },
    {
      id: 23,
      name: "DHARANEE ROTAVATOR",
      brand: "DHARANEE",
      price: "₹1,20,000",
      image: "/images/rotavator.jpg",
      rating: 4.5,
      reviews: 89,
      category: "Specialized",
      features: ["Heavy Duty Blades", "Adjustable Depth", "Universal Mounting", "Soil Pulverization", "Easy Maintenance"],
      description: "Robust DHARANEE rotavator for effective soil preparation. Features heavy-duty blades, adjustable working depth, and universal mounting system for various tractor models.",
      specifications: {
        fuelType: "Tractor Attachment",
        weight: "380 kg",
        suitable: "Soil Preparation & Cultivation"
      },
      inStock: true,
      isPopular: true
    },
    {
      id: 24,
      name: "DHARANEE STRAW BALER",
      brand: "DHARANEE",
      price: "₹3,60,000",
      image: "/images/Dharanee straw.jpg",
      rating: 4.8,
      reviews: 56,
      category: "Specialized",
      features: ["Automatic Baling", "High Capacity", "Compact Bales", "Fuel Efficient", "Easy Operation"],
      description: "Advanced DHARANEE straw baler for efficient post-harvest straw management. Features automatic baling system, high capacity operation, and produces compact bales for easy storage and transport.",
      specifications: {
        engine: "25 HP Diesel",
        fuelType: "Diesel",
        weight: "1,200 kg",
        suitable: "Straw Baling & Management"
      },
      inStock: true,
      isNew: true,
      isPopular: true
    }
  ];

  const categories = [
    { name: "Tractors", icon: Tractor, count: 4, color: "text-primary" },
    { name: "Power Tillers", icon: Wrench, count: 6, color: "text-secondary" },
    { name: "Harvesters", icon: Scissors, count: 4, color: "text-accent" },
    { name: "Sprayers", icon: Droplets, count: 2, color: "text-cta" },
    { name: "Specialized", icon: Settings, count: 8, color: "text-green-600" }
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

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="heading-primary mb-6">Agricultural Machinery</h1>
            <p className="body-text max-w-3xl mx-auto mb-8">
              Explore our comprehensive range of tractors, power tillers, harvesters, and sprayers. 
              All machinery comes with warranty, genuine spare parts, and reliable after-sales support across Tamil Nadu.
            </p>
            
            {/* Category Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-8">
              <div 
                onClick={() => handleCategoryChange("All")}
                className={`bg-card rounded-lg p-4 border cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  selectedCategory === "All" ? "border-primary bg-primary/5 shadow-lg" : "border-border/50"
                }`}
              >
                <Settings className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm">All Products</h3>
                <p className="text-xs text-muted-foreground">{machineryProducts.length} Models</p>
              </div>
              {categories.map((category, index) => (
                <div 
                  key={index} 
                  onClick={() => handleCategoryChange(category.name)}
                  className={`bg-card rounded-lg p-4 border cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    selectedCategory === category.name ? "border-primary bg-primary/5 shadow-lg" : "border-border/50"
                  }`}
                >
                  <category.icon className={`w-8 h-8 ${category.color} mx-auto mb-2`} />
                  <h3 className="font-semibold text-sm">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.count} Models</p>
                </div>
              ))}
            </div>

            {/* Selected Category Display */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {selectedCategory === "All" ? "All Agricultural Machinery" : selectedCategory}
              </h2>
              <p className="text-muted-foreground">
                {selectedCategory === "All" 
                  ? `Showing all ${machineryProducts.length} products` 
                  : `Showing ${machineryProducts.filter(p => p.category === selectedCategory).length} ${selectedCategory.toLowerCase()}`
                }
              </p>
            </div>
          </div>

          {/* Filtered Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {machineryProducts
              .filter(product => selectedCategory === "All" || product.category === selectedCategory)
              .map((product) => (
                <ProductCard key={product.id} product={product} navigate={navigate} />
              ))
            }
          </div>

          {/* No Products Message */}
          {machineryProducts.filter(product => selectedCategory === "All" || product.category === selectedCategory).length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">
                No products available in the selected category.
              </p>
              <Button onClick={() => handleCategoryChange("All")}>
                View All Products
              </Button>
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">Need Expert Guidance?</h3>
              <p className="text-muted-foreground mb-6">
                Our agricultural machinery experts will help you choose the right equipment based on your farm size, 
                crop type, and budget. Get personalized recommendations and competitive quotes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-primary" asChild>
                  <Link to="/contact">Talk to Expert</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/quote">Get Quote</Link>
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

export default Machinery;
