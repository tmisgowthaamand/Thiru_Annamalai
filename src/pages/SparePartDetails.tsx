import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  ShoppingCart, 
  Phone, 
  Mail, 
  Star, 
  Check, 
  Truck, 
  Shield, 
  RefreshCw,
  ImageIcon
} from "lucide-react";

interface SparePart {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  compatibility: string[];
  image: string;
  fallbackImage?: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
}

const ProductImage = ({ src, alt, fallback }: { src: string; alt: string; fallback?: string }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    if (!imageError && fallback) {
      setImageSrc(fallback);
      setImageError(true);
    }
  };

  if (imageError && !fallback) {
    return (
      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
        <ImageIcon className="h-12 w-12 text-gray-400" />
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      onError={handleImageError}
      className="w-full h-full object-cover"
    />
  );
};

const PriceDisplay = ({ price, originalPrice }: { price: number; originalPrice?: number }) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="flex items-center gap-3">
      <span className="text-3xl font-bold text-primary">₹{price.toLocaleString()}</span>
      {originalPrice && (
        <>
          <span className="text-lg text-muted-foreground line-through">
            ₹{originalPrice.toLocaleString()}
          </span>
          <Badge variant="secondary" className="text-green-600 bg-green-50">
            {discount}% OFF
          </Badge>
        </>
      )}
    </div>
  );
};

const SparePartDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sparePart, setSparePart] = useState<SparePart | null>(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<{[key: number]: number}>({});
  const [showCartNotification, setShowCartNotification] = useState(false);

  // Complete spare parts data matching the Shop page
  const spareParts: SparePart[] = [
    {
      id: 1,
      name: "Top Link Assembly",
      category: "Linkage Parts",
      description: "Complete top link assembly for tractor three-point hitch system. This high-quality assembly ensures reliable connection between your tractor and implements, providing smooth operation and long-lasting performance.",
      features: ["100% OEM Compatible", "High-grade steel construction", "Corrosion resistant", "Easy installation", "Precision engineered"],
      compatibility: ["Harvesters", "Combine", "Farm Machinery", "Tractors", "Three-point hitch systems"],
      image: "/shop/top-link-assembly.jpg",
      fallbackImage: "/placeholder.svg",
      price: 2850,
      originalPrice: 3200,
      inStock: true
    },
    {
      id: 2,
      name: "Top Link End",
      category: "Linkage Parts",
      description: "High-quality top link end for reliable tractor implement connections. Precision machined for perfect fit and long-lasting performance in all farming conditions.",
      features: ["Precision machined", "Durable construction", "OEM compatible", "Easy installation"],
      compatibility: ["Three-point hitches", "Top link assemblies", "Farm implements"],
      image: "/shop/top-link-end.jpg",
      fallbackImage: "/placeholder.svg",
      price: 1850,
      originalPrice: 2100,
      inStock: true
    },
    {
      id: 3,
      name: "Top Link Ball",
      category: "Linkage Parts",
      description: "Premium top link ball for smooth implement operation. Features hardened surface and precise tolerances for reliable performance.",
      features: ["Hardened surface", "Precise tolerances", "Corrosion resistant", "Long service life"],
      compatibility: ["Top link assemblies", "Three-point hitches", "Agricultural implements"],
      image: "/shop/top-link-ball.jpg",
      fallbackImage: "/placeholder.svg",
      price: 1250,
      inStock: true
    },
    {
      id: 4,
      name: "Lower Link Ball",
      category: "Linkage Parts",
      description: "Heavy-duty lower link ball for reliable implement connections. Built to withstand high loads and harsh farming conditions.",
      features: ["Heavy-duty construction", "High load capacity", "Weather resistant", "Precision fit"],
      compatibility: ["Lower link assemblies", "Three-point hitches", "Heavy implements"],
      image: "/shop/lower-link-ball.jpg",
      fallbackImage: "/placeholder.svg",
      price: 1450,
      originalPrice: 1650,
      inStock: true
    },
    {
      id: 5,
      name: "Weld on End",
      category: "Linkage Parts",
      description: "Versatile weld-on end for custom implement connections. High-strength steel construction for permanent installations.",
      features: ["High-strength steel", "Weldable design", "Custom applications", "Durable finish"],
      compatibility: ["Custom implements", "Fabrication projects", "Repair applications"],
      image: "/shop/weld-on-end.jpg",
      fallbackImage: "/placeholder.svg",
      price: 850,
      inStock: true
    },
    {
      id: 6,
      name: "Linch Pins",
      category: "Pins & Fasteners",
      description: "Essential linch pins for secure implement connections. Spring-loaded design ensures reliable fastening and easy removal.",
      features: ["Spring-loaded", "Secure fastening", "Easy removal", "Corrosion resistant"],
      compatibility: ["Universal applications", "Implement connections", "Quick release systems"],
      image: "/shop/linch-pins1.jpg",
      fallbackImage: "/placeholder.svg",
      price: 125,
      inStock: true
    },
    {
      id: 7,
      name: "Hitch Pins",
      category: "Pins & Fasteners",
      description: "Heavy-duty hitch pins for secure trailer and implement connections. Built for high-stress applications.",
      features: ["Heavy-duty construction", "High tensile strength", "Secure locking", "Weather resistant"],
      compatibility: ["Trailer hitches", "Implement connections", "Heavy-duty applications"],
      image: "/shop/hitch-pins1.jpg",
      fallbackImage: "/placeholder.svg",
      price: 285,
      originalPrice: 320,
      inStock: true
    },
    {
      id: 8,
      name: "PTO Pins/Shaft Pins",
      category: "Pins & Fasteners",
      description: "Precision PTO pins for reliable power transmission connections. Essential for safe and efficient PTO operation.",
      features: ["Precision machined", "High strength", "Safety critical", "Easy installation"],
      compatibility: ["PTO shafts", "Power transmission", "Agricultural machinery"],
      image: "/shop/pto-pins1.jpg",
      fallbackImage: "/placeholder.svg",
      price: 195,
      inStock: true
    },
    {
      id: 9,
      name: "Levelling Assembly",
      category: "Adjustment Systems",
      description: "Complete levelling assembly for precise implement adjustment. Ensures optimal working angles and performance.",
      features: ["Precise adjustment", "Complete assembly", "Easy operation", "Durable construction"],
      compatibility: ["Ploughs", "Cultivators", "Tillage equipment"],
      image: "/shop/levelling-assembly.jpg",
      fallbackImage: "/placeholder.svg",
      price: 2450,
      originalPrice: 2750,
      inStock: true
    },
    {
      id: 10,
      name: "Replacement/Tine Bushes",
      category: "Tillage Parts",
      description: "High-quality replacement bushes for tillage tines. Extends equipment life and maintains optimal performance.",
      features: ["Wear resistant", "Easy replacement", "OEM specifications", "Cost effective"],
      compatibility: ["Tillage tines", "Cultivator parts", "Harrow components"],
      image: "/shop/replacement1.jpg",
      fallbackImage: "/placeholder.svg",
      price: 180,
      inStock: true
    },
    {
      id: 11,
      name: "Hitch Balls",
      category: "Hitch Components",
      description: "Standard and heavy-duty hitch balls for reliable trailer connections. Chrome plated for corrosion resistance.",
      features: ["Chrome plated", "Multiple sizes", "High load capacity", "Corrosion resistant"],
      compatibility: ["Trailer hitches", "Implement connections", "Towing applications"],
      image: "/shop/hitch-ball1.jpg",
      fallbackImage: "/placeholder.svg",
      price: 750,
      originalPrice: 850,
      inStock: true
    },
    {
      id: 12,
      name: "Guide Cone Ball",
      category: "Hitch Components",
      description: "Guide cone ball for easy implement alignment and connection. Self-centering design for smooth operation.",
      features: ["Self-centering", "Smooth finish", "Precise machining", "Easy alignment"],
      compatibility: ["Three-point hitches", "Quick attachments", "Implement connections"],
      image: "/shop/guide-cone-ball.jpg",
      fallbackImage: "/placeholder.svg",
      price: 680,
      inStock: true
    },
    {
      id: 13,
      name: "Top Link Locking Collar",
      category: "Linkage Parts",
      description: "Locking collar for top link length adjustment. Provides secure locking and easy adjustment for optimal implement positioning.",
      features: ["Secure locking", "Easy adjustment", "Corrosion resistant", "Precise fit"],
      compatibility: ["Adjustable top links", "Category I & II hitches", "Length adjustment systems"],
      image: "/shop/top-link-locking-collar1.jpg",
      fallbackImage: "/placeholder.svg",
      price: 420,
      inStock: true
    },
    {
      id: 14,
      name: "Top Link Pipe",
      category: "Linkage Parts",
      description: "High-strength pipe for top link construction. Seamless construction with precision bore for reliable performance.",
      features: ["Seamless construction", "Precision bore", "Quality steel", "Custom lengths available"],
      compatibility: ["Top link assemblies", "Custom applications", "Repair projects"],
      image: "/shop/top-link-pipe.jpg",
      fallbackImage: "/placeholder.svg",
      price: 1850,
      originalPrice: 2100,
      inStock: true
    },
    {
      id: 15,
      name: "Top Link Pins",
      category: "Pins & Fasteners",
      description: "Precision pins for top link connections. Hardened surface and tight tolerances ensure long service life.",
      features: ["Hardened surface", "Tight tolerances", "Long service life", "Precision machined"],
      compatibility: ["Top link ends", "Ball joints", "Connection points"],
      image: "/shop/top-link-pin.jpg",
      fallbackImage: "/placeholder.svg",
      price: 320,
      inStock: true
    },
    {
      id: 16,
      name: "Lower Link Pin",
      category: "Pins & Fasteners",
      description: "Heavy-duty pins for lower link connections. High strength steel with corrosion protection for reliable service.",
      features: ["High strength steel", "Corrosion protection", "Precise fit", "Heavy-duty design"],
      compatibility: ["Lower link assemblies", "Implement mounting", "Heavy applications"],
      image: "/shop/lower-link-pin.jpg",
      fallbackImage: "/placeholder.svg",
      price: 380,
      originalPrice: 420,
      inStock: true
    },
    {
      id: 17,
      name: "Double Implement/Mounting Pin",
      category: "Pins & Fasteners",
      description: "Dual-purpose mounting pins for implements. Versatile design with double locking mechanism for secure connections.",
      features: ["Versatile design", "Double locking", "Heavy-duty construction", "Multi-purpose"],
      compatibility: ["Multiple implements", "Quick change systems", "Mounting applications"],
      image: "/shop/double-implement1.jpg",
      fallbackImage: "/placeholder.svg",
      price: 520,
      inStock: true
    },
    {
      id: 18,
      name: "Hair Pin",
      category: "Pins & Fasteners",
      description: "Spring-loaded hair pins for quick fastening applications. Reusable design for temporary and permanent connections.",
      features: ["Spring steel", "Quick release", "Reusable", "Universal fit"],
      compatibility: ["Universal applications", "Temporary fastening", "Quick connections"],
      image: "/shop/hair-pin1.jpg",
      fallbackImage: "/placeholder.svg",
      price: 85,
      inStock: true
    },
    {
      id: 19,
      name: "Stabilizer Assembly",
      category: "Adjustment Systems",
      description: "Complete stabilizer assembly for implement stability. Adjustable tension with smooth operation for optimal performance.",
      features: ["Adjustable tension", "Smooth operation", "Robust design", "Complete assembly"],
      compatibility: ["Three-point implements", "Heavy machinery", "Stability systems"],
      image: "/shop/stablizer-assembly1.jpg",
      fallbackImage: "/placeholder.svg",
      price: 2650,
      originalPrice: 3000,
      inStock: true
    },
    {
      id: 20,
      name: "Adjustable Levelling Arm",
      category: "Adjustment Systems",
      description: "Precision levelling arm for implement adjustment. Fine adjustment capability with locking mechanism for precise positioning.",
      features: ["Fine adjustment", "Locking mechanism", "Durable construction", "Precision control"],
      compatibility: ["Ploughs", "Seeders", "Cultivators", "Tillage equipment"],
      image: "/shop/adjustable-levelling-arm1.jpg",
      fallbackImage: "/placeholder.svg",
      price: 1950,
      inStock: true
    },
    {
      id: 21,
      name: "Ratchet Jack",
      category: "Lifting Equipment",
      description: "Heavy-duty ratchet jack for lifting applications. High lift capacity with safety lock and portable design.",
      features: ["High lift capacity", "Safety lock", "Portable design", "Heavy-duty construction"],
      compatibility: ["Trailers", "Implements", "Maintenance", "Lifting applications"],
      image: "/shop/ratchet-jack.jpg",
      fallbackImage: "/placeholder.svg",
      price: 4200,
      originalPrice: 4800,
      inStock: true
    },
    {
      id: 22,
      name: "Kubota Kits",
      category: "Brand Specific",
      description: "Complete parts kits for Kubota equipment. OEM compatibility with quality assured components for reliable performance.",
      features: ["OEM compatibility", "Complete kit", "Quality assured", "Brand specific"],
      compatibility: ["Kubota tractors", "Kubota implements", "Kubota machinery"],
      image: "/shop/kubota-kits1.jpg",
      fallbackImage: "/placeholder.svg",
      price: 8500,
      originalPrice: 9500,
      inStock: true
    },
    {
      id: 23,
      name: "U-Bolts & Shackles",
      category: "Fasteners & Hardware",
      description: "Heavy-duty U-bolts and shackles for mounting applications. Galvanized finish with multiple sizes for various applications.",
      features: ["Galvanized finish", "Multiple sizes", "High strength", "Corrosion resistant"],
      compatibility: ["Leaf springs", "Mounting brackets", "Suspension systems"],
      image: "/shop/u-bolts-shackles1.jpg",
      fallbackImage: "/placeholder.svg",
      price: 350,
      inStock: true
    },
    {
      id: 24,
      name: "Clevises",
      category: "Linkage Parts",
      description: "Precision machined clevises for linkage connections. Strong construction with accurate machining for reliable connections.",
      features: ["Accurate machining", "Strong construction", "Multiple sizes", "Precision fit"],
      compatibility: ["Hydraulic cylinders", "Linkage systems", "Connection points"],
      image: "/shop/clevises1.jpg",
      fallbackImage: "/placeholder.svg",
      price: 580,
      originalPrice: 650,
      inStock: true
    },
    {
      id: 25,
      name: "Eye End",
      category: "Linkage Parts",
      description: "Eye end fittings for hydraulic and linkage systems. Forged construction with precise bore and corrosion resistance.",
      features: ["Forged construction", "Precise bore", "Corrosion resistant", "High strength"],
      compatibility: ["Hydraulic cylinders", "Tie rods", "Linkage connections"],
      image: "/shop/eye-end1.jpg",
      fallbackImage: "/placeholder.svg",
      price: 720,
      inStock: true
    },
    {
      id: 26,
      name: "Draw Bar",
      category: "Towing Equipment",
      description: "Heavy-duty draw bar for towing applications. High tensile strength with adjustable height and durable finish.",
      features: ["High tensile strength", "Adjustable height", "Durable finish", "Heavy-duty design"],
      compatibility: ["Tractors", "Heavy equipment", "Towing applications"],
      image: "/shop/draw-bar1.jpg",
      fallbackImage: "/placeholder.svg",
      price: 3800,
      originalPrice: 4200,
      inStock: true
    },
    {
      id: 27,
      name: "Trailer Jacks",
      category: "Lifting Equipment",
      description: "Mechanical trailer jacks for support and leveling. High load capacity with smooth operation and weather resistance.",
      features: ["High load capacity", "Smooth operation", "Weather resistant", "Mechanical design"],
      compatibility: ["Agricultural trailers", "Equipment trailers", "Support applications"],
      image: "/shop/trailer-jacks1.jpg",
      fallbackImage: "/placeholder.svg",
      price: 2200,
      inStock: true
    },
    {
      id: 28,
      name: "Lower Link Assembly",
      category: "Linkage Parts",
      description: "Complete lower link assembly for three-point hitch systems. Ready to install with OEM quality construction.",
      features: ["Complete assembly", "Ready to install", "OEM quality", "Durable construction"],
      compatibility: ["Category I & II hitches", "Various tractors", "Three-point systems"],
      image: "/shop/lower-link-assembly1.jpg",
      fallbackImage: "/placeholder.svg",
      price: 3200,
      originalPrice: 3600,
      inStock: true
    },
    {
      id: 29,
      name: "Harrow Disc / Disc Blade",
      category: "Tillage Parts",
      description: "High-quality harrow discs and blades for soil preparation. Heat-treated steel construction provides excellent durability and cutting performance for effective soil cultivation.",
      features: ["Heat treated", "Sharp cutting edge", "Long wearing", "Precision balanced", "Corrosion resistant"],
      compatibility: ["Disc harrows", "Tillage equipment", "Soil preparation tools"],
      image: "/shop/harrow-disc1.jpg",
      fallbackImage: "/placeholder.svg",
      price: 1450,
      originalPrice: 1650,
      inStock: true
    },
    {
      id: 30,
      name: "Plough Parts",
      category: "Tillage Parts",
      description: "Complete range of plough parts and components. Wear resistant with precision fit and field tested performance.",
      features: ["Wear resistant", "Precision fit", "Field tested", "Complete range"],
      compatibility: ["Moldboard ploughs", "Disc ploughs", "Tillage systems"],
      image: "/shop/plough-parts.jpg",
      fallbackImage: "/placeholder.svg",
      price: 2800,
      inStock: true
    },
    {
      id: 31,
      name: "Y - Shaft",
      category: "Drive Components",
      description: "Y-shaft for power transmission applications. Balanced construction with high torque capacity and precision machining.",
      features: ["Balanced construction", "High torque capacity", "Precision machined", "Power transmission"],
      compatibility: ["PTO systems", "Gearboxes", "Drive systems"],
      image: "/shop/y-shaft.jpg",
      fallbackImage: "/placeholder.svg",
      price: 1850,
      originalPrice: 2100,
      inStock: true
    },
    {
      id: 32,
      name: "Cylinder Head",
      category: "Engine Parts",
      description: "Precision machined cylinder heads for agricultural engines. Perfect sealing with heat resistance and OEM specifications.",
      features: ["Perfect sealing", "Heat resistant", "OEM specifications", "Precision machined"],
      compatibility: ["Diesel engines", "Agricultural machinery", "Engine rebuilds"],
      image: "/shop/cylinder-head.jpg",
      fallbackImage: "/placeholder.svg",
      price: 12500,
      originalPrice: 14000,
      inStock: true
    },
    {
      id: 33,
      name: "Tractor Engine Oil Filter",
      category: "Engine Parts",
      description: "High-quality oil filter for tractor engines - AgriParts Pro. Superior filtration technology ensures clean oil circulation, protecting your engine from harmful contaminants and extending engine life.",
      features: ["Superior filtration", "Long service life", "OEM compatible", "Popular choice", "High-grade filter media"],
      compatibility: ["Diesel engines", "Agricultural machinery", "Tractors", "Various engine models"],
      image: "/images/oil filter.jpg",
      fallbackImage: "/placeholder.svg",
      price: 450,
      originalPrice: 520,
      inStock: true
    },
    {
      id: 34,
      name: "Cultivator Blade Set",
      category: "Tillage Parts",
      description: "Complete cultivator blade set for soil preparation. Heat treated steel with sharp cutting edge and durable construction.",
      features: ["Heat treated steel", "Sharp cutting edge", "Durable construction", "Complete set"],
      compatibility: ["Cultivators", "Tillage equipment", "Soil preparation"],
      image: "/images/Blade set.jpg",
      fallbackImage: "/placeholder.svg",
      price: 1200,
      originalPrice: 1350,
      inStock: true
    }
  ];

  useEffect(() => {
    // Load cart from localStorage
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      try {
        const cartItems = JSON.parse(savedCartItems);
        const cartState: {[key: number]: number} = {};
        cartItems.forEach((item: any) => {
          cartState[item.id] = item.quantity;
        });
        setCart(cartState);
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }

    // Find the spare part by ID
    const partId = parseInt(id || '');
    const foundPart = spareParts.find(part => part.id === partId);
    
    if (foundPart) {
      setSparePart(foundPart);
    }
    
    setLoading(false);
  }, [id]);

  const addToCart = (partId: number) => {
    const updatedCart = {
      ...cart,
      [partId]: (cart[partId] || 0) + 1
    };
    setCart(updatedCart);
    
    // Save cart to localStorage with product details
    const cartItems = Object.entries(updatedCart).map(([id, quantity]) => {
      const part = spareParts.find(p => p.id === parseInt(id));
      return part ? {
        id: part.id,
        name: part.name,
        category: part.category,
        price: part.price,
        originalPrice: part.originalPrice,
        image: part.image,
        quantity: quantity,
        inStock: part.inStock
      } : null;
    }).filter(Boolean);
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 2000);
  };

  const getCartItemCount = (partId: number) => cart[partId] || 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center h-64">
              <div className="text-center">
                <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
                <p>Loading product details...</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!sparePart) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-4">Product not found</h2>
              <p className="text-muted-foreground mb-8">The spare part you're looking for doesn't exist.</p>
              <Button onClick={() => navigate('/shop')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Shop
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/shop')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Shop
            </Button>
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/shop')}
              className="p-0 h-auto font-normal"
            >
              Shop
            </Button>
            <span>/</span>
            <span className="text-foreground">{sparePart.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <ProductImage 
                  src={sparePart.image} 
                  alt={sparePart.name}
                  fallback={sparePart.fallbackImage}
                />
              </div>
              
              {/* Additional product info cards */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="text-center p-4">
                  <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs font-medium">OEM Compatible</p>
                </Card>
                <Card className="text-center p-4">
                  <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs font-medium">Free Shipping</p>
                </Card>
                <Card className="text-center p-4">
                  <RefreshCw className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-xs font-medium">Easy Returns</p>
                </Card>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <Badge variant="outline" className="mb-2">{sparePart.category}</Badge>
                <h1 className="text-3xl font-bold mb-4">{sparePart.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">(4.8/5 from 156 reviews)</span>
                </div>
              </div>

              {/* Price */}
              <div className="border-b pb-6">
                <PriceDisplay price={sparePart.price} originalPrice={sparePart.originalPrice} />
                <p className="text-sm text-muted-foreground mt-2">
                  Inclusive of all taxes • Free shipping on orders above ₹2000
                </p>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${sparePart.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className={`font-medium ${sparePart.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {sparePart.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{sparePart.description}</p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {sparePart.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compatibility */}
              <div>
                <h3 className="font-semibold mb-3">Compatible with</h3>
                <div className="flex flex-wrap gap-2">
                  {sparePart.compatibility.map((item, index) => (
                    <Badge key={index} variant="secondary">{item}</Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 pt-6">
                <div className="flex gap-3">
                  <Button 
                    className="flex-1" 
                    size="lg"
                    disabled={!sparePart.inStock}
                    onClick={() => addToCart(sparePart.id)}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                    {getCartItemCount(sparePart.id) > 0 && (
                      <Badge variant="secondary" className="ml-2">
                        {getCartItemCount(sparePart.id)}
                      </Badge>
                    )}
                  </Button>
                  <Button variant="outline" size="lg">
                    <Phone className="h-5 w-5 mr-2" />
                    Call
                  </Button>
                </div>
                
                <Button variant="outline" className="w-full" size="lg">
                  <Mail className="h-5 w-5 mr-2" />
                  Request Quote
                </Button>
              </div>

              {/* Contact Info */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Need Help?</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Our experts are available to help with product selection and technical support.
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <a href="tel:+919894377407" className="flex items-center gap-1 text-primary hover:underline">
                      <Phone className="h-3 w-3" />
                      +91 98943 77407
                    </a>
                    <a href="https://wa.me/919894377407" className="text-green-600 hover:underline">
                      💬 WhatsApp
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Cart Notification */}
        {showCartNotification && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-in slide-in-from-right">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              <span className="text-sm font-medium">Added to cart!</span>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SparePartDetails;
