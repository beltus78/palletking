import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart, Search, Heart, Eye } from "lucide-react";
import Header from "@/components/Header";
import { useToast } from "@/components/ui/use-toast";

interface Product {
  id: number;
  name: string;
  originalPrice: number;
  salePrice: number;
  image: string;
  description: string;
  category: string;
  discount: number;
  quantity: string;
  status: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Adidas Sport Sneakers Pallets",
    originalPrice: 1500,
    salePrice: 1200,
    image: "/api/placeholder/300/300",
    description: "Brand New Adidas sneakers sports shoes 200 pairs per pallet. All Authentic and first class",
    category: "shoes",
    discount: 20,
    quantity: "200 pairs per pallet",
    status: "Available"
  },
  {
    id: 2,
    name: "Affordables Inflatable Pools for Summer Fun-Pallet",
    originalPrice: 500,
    salePrice: 300,
    image: "/api/placeholder/300/300",
    description: "Transform your backyard into a summer paradise with a Inflatable Pool",
    category: "outdoor",
    discount: 40,
    quantity: "224 pallets available",
    status: "Available"
  },
  {
    id: 3,
    name: "All Good Diapers for Your Little One's Comfort All Day-Pallet",
    originalPrice: 1000,
    salePrice: 800,
    image: "/api/placeholder/300/300",
    description: "High-quality all good diapers pallets from well-known brands",
    category: "baby",
    discount: 20,
    quantity: "200 pieces per pallet",
    status: "Available"
  },
  {
    id: 4,
    name: "ALL STAR SHOE PALLET",
    originalPrice: 1500,
    salePrice: 1000,
    image: "/api/placeholder/300/300",
    description: "American lifestyle brand that are durable shoes thanks to high quality materials",
    category: "shoes",
    discount: 33,
    quantity: "100 pairs per pallet",
    status: "Available"
  },
  {
    id: 5,
    name: "Angel Soft Professional Series Premium 2-Ply Toilet Paper",
    originalPrice: 500,
    salePrice: 300,
    image: "/api/placeholder/300/300",
    description: "Premium 2-Ply Embossed Toilet Paper by GP PRO (Georgia-Pacific)",
    category: "paper",
    discount: 40,
    quantity: "80 Rolls Per Case",
    status: "Available"
  },
  {
    id: 6,
    name: "Cloud Walker Shoes",
    originalPrice: 1500,
    salePrice: 1000,
    image: "/api/placeholder/300/300",
    description: "Ultra-Lightweight, Breathable Footwear Designed for Everyday Wear",
    category: "shoes",
    discount: 33,
    quantity: "100 pairs per pallet",
    status: "Available"
  },
  {
    id: 7,
    name: "Shop Hoka Clifton-Pallets",
    originalPrice: 1200,
    salePrice: 1000,
    image: "/api/placeholder/300/300",
    description: "Experience top-tier comfort and performance with lightweight, cushioned running shoes",
    category: "shoes",
    discount: 17,
    quantity: "100 pairs per pallet",
    status: "Available"
  },
  {
    id: 8,
    name: "Stanley Cup Pallets",
    originalPrice: 1000,
    salePrice: 1000,
    image: "/api/placeholder/300/300",
    description: "Premium Stanley Cup collection for your beverage needs",
    category: "accessories",
    discount: 0,
    quantity: "50 cups per pallet",
    status: "Available"
  },
  {
    id: 9,
    name: "Discover the Best Shein Dress Deals Here-Pallets",
    originalPrice: 500,
    salePrice: 500,
    image: "/api/placeholder/300/300",
    description: "Trendy, chic, and affordable dresses. Elevate your style effortlessly",
    category: "clothing",
    discount: 0,
    quantity: "200 pieces per pallet",
    status: "Available"
  },
  {
    id: 10,
    name: "Series 8 Apple Watch Pallets",
    originalPrice: 1500,
    salePrice: 1000,
    image: "/api/placeholder/300/300",
    description: "Latest Series 8 Apple Watch collection",
    category: "electronics",
    discount: 33,
    quantity: "100 pieces per pallet",
    status: "Available"
  },
  {
    id: 11,
    name: "Perfume Pallets",
    originalPrice: 1200,
    salePrice: 1000,
    image: "/api/placeholder/300/300",
    description: "Premium fragrance collection from top brands",
    category: "beauty",
    discount: 17,
    quantity: "200 pieces per pallet",
    status: "Available"
  }
];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const { toast } = useToast();

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "shoes", label: "Shoes" },
    { value: "clothing", label: "Clothing" },
    { value: "electronics", label: "Electronics" },
    { value: "beauty", label: "Beauty & Health" },
    { value: "baby", label: "Baby Products" },
    { value: "outdoor", label: "Outdoor & Sports" },
    { value: "paper", label: "Paper Products" },
    { value: "accessories", label: "Accessories" }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.salePrice - b.salePrice;
      case "price-high":
        return b.salePrice - a.salePrice;
      case "discount":
        return b.discount - a.discount;
      default:
        return 0;
    }
  });

  const addToCart = (product: Product) => {
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const addToWishlist = (product: Product) => {
    toast({
      title: "Added to Wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Shop Liquidation Pallets
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Find the best deals on wholesale merchandise pallets
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="discount">Highest Discount</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {sortedProducts.length} of {products.length} products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-business transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    {product.discount > 0 && (
                      <Badge 
                        variant="destructive" 
                        className="absolute top-2 left-2 z-10 bg-red-500"
                      >
                        -{product.discount}%
                      </Badge>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                    
                    {/* Quick Actions */}
                    <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 w-8 p-0"
                        onClick={() => addToWishlist(product)}
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 w-8 p-0"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4">
                  <CardTitle className="text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-primary">
                      ${product.salePrice.toLocaleString()}
                    </span>
                    {product.originalPrice !== product.salePrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-3">
                    {product.quantity}
                  </p>
                  
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No products found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">First class customer support</h3>
              <p className="text-sm text-muted-foreground">
                Contact our dedicated support team via live chat, phone, or email.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Load sizes for any budget</h3>
              <p className="text-sm text-muted-foreground">
                Buy liquidation goods by the box, pallet or truckload.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Flexible shipping options</h3>
              <p className="text-sm text-muted-foreground">
                Utilize our shipping service, arrange your own shipping, or pick up lots yourself.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Multiple payment options</h3>
              <p className="text-sm text-muted-foreground">
                Pay by credit card, bank wire, apple pay, Bitcoin, or line of credit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;