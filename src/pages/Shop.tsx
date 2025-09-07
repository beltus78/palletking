import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Grid, Grid3x3, LayoutGrid } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShopProductGallery from "@/components/ShopProductGallery";
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
    image: "https://mypalletliquidationcenter.com/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-20-at-02.54.23-600x600.jpeg.webp",
    description: "Brand New Adidas sneakers sports shoes 200 pairs per pallet. All Authentic and first class",
    category: "shoes",
    discount: 20,
    quantity: "200 pairs per pallet",
    status: "Available"
  },
  {
    id: 2,
    name: "Affordables Inflatable Pools for Summer Fun-Pallet",
    originalPrice: 750,
    salePrice: 450,
    image: "https://mypalletliquidationcenter.com/wp-content/uploads/2023/01/inflatable-pool-2.jpg",
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
    salePrice: 400,
    image: "https://mypalletliquidationcenter.com/wp-content/uploads/2023/01/diaper-pallet.jpg",
    description: "High-quality all good diapers pallets from well-known brands",
    category: "baby",
    discount: 55,
    quantity: "200 pieces per pallet",
    status: "Available"
  }
];

const categories = [
  { name: "Christmas Pallet", count: 2 },
  { name: "Clothes", count: 3 },
  { name: "Electronic Pallets/Truckload Liquidation", count: 15 },
  { name: "General Merchandise", count: 1 },
  { name: "Housewares", count: 1 },
  { name: "Improvement Liquidation", count: 1 },
  { name: "Kids Wholesale Clothing", count: 1 },
  { name: "Mac Book", count: 1 },
  { name: "Massage Chair", count: 4 },
  { name: "Men's Clothing Pallet", count: 1 },
  { name: "Mix Cosmetic", count: 1 },
  { name: "Mixed Accessories Liquidation", count: 1 },
  { name: "Mystery Boxes", count: 1 },
  { name: "Rugs and Carpet", count: 1 },
  { name: "Sex Toys", count: 1 },
  { name: "Shoe Pallets/Truckload", count: 8 },
  { name: "Sneaker Pallets", count: 2 },
  { name: "Tissue Paper", count: 2 },
  { name: "Tools", count: 2 },
  { name: "Toys Pallets/Truckload", count: 1 },
  { name: "Women Clothing", count: 1 }
];

const topCategories = [
  "UNCATEGORIZED",
  "CHRISTMAS PALLET", 
  "CLOTHES",
  "ELECTRONIC PALLETS/TRUCKLOAD LIQUIDATION",
  "GENERAL MERCHANDISE",
  "HOUSEWARES",
  "IMPROVEMENT LIQUIDATION",
  "KIDS WHOLESALE CLOTHING",
  "MAC BOOK",
  "MASSAGE CHAIR",
  "MEN'S CLOTHING PALLET",
  "MIX COSMETIC",
  "MIXED ACCESSORIES LIQUIDATION",
  "MYSTERY BOXES",
  "RUGS AND CARPET",
  "SEX TOYS",
  "SHOE PALLETS/TRUCKLOAD",
  "SNEAKER PALLETS",
  "TISSUE PAPER",
  "TOOLS",
  "TOYS PALLETS/TRUCKLOAD",
  "WOMEN CLOTHING"
];

const Shop = () => {
  const [viewType, setViewType] = useState("grid");
  const [sortBy, setSortBy] = useState("default");
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const { toast } = useToast();

  const addToCart = (product: Product) => {
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-black font-inter">
      <Header />
      
      {/* Shop Hero Section with Dark Background */}
      <section className="bg-black text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8">Shop</h1>
          
          {/* Category Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {topCategories.map((category, index) => (
              <div key={index} className="bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer px-4 py-2 rounded">
                <span className="text-white text-sm font-medium">{category}</span>
                <span className="text-gray-400 text-xs ml-2">
                  {category === "ELECTRONIC PALLETS/TRUCKLOAD LIQUIDATION" ? "15" : 
                   category === "SHOE PALLETS/TRUCKLOAD" ? "8" : 
                   category === "MASSAGE CHAIR" ? "4" : 
                   category === "CLOTHES" ? "3" : 
                   category === "CHRISTMAS PALLET" ? "2" : 
                   category === "SNEAKER PALLETS" ? "2" : 
                   category === "TISSUE PAPER" ? "2" : 
                   category === "TOOLS" ? "2" : 
                   category === "UNCATEGORIZED" ? "7" : "1"} Product{(category === "ELECTRONIC PALLETS/TRUCKLOAD LIQUIDATION" || 
                   category === "SHOE PALLETS/TRUCKLOAD" || 
                   category === "MASSAGE CHAIR" || 
                   category === "CLOTHES" || 
                   category === "CHRISTMAS PALLET" || 
                   category === "SNEAKER PALLETS" || 
                   category === "TISSUE PAPER" || 
                   category === "TOOLS" || 
                   category === "UNCATEGORIZED") ? "s" : ""}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Categories */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-4 border-b">
                  <h2 className="text-lg font-semibold text-gray-900">CATEGORIES</h2>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a 
                          href="#" 
                          className="text-blue-600 hover:text-blue-800 text-sm transition-colors"
                        >
                          {category.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Products Section */}
            <div className="lg:w-3/4">
              {/* Breadcrumb */}
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <a href="/" className="hover:text-gray-700">Home</a>
                <span className="mx-2">/</span>
                <span className="text-gray-900">Shop</span>
              </div>

              {/* Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">Show:</span>
                  <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(Number(value))}>
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9">9</SelectItem>
                      <SelectItem value="24">24</SelectItem>
                      <SelectItem value="36">36</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <div className="flex items-center gap-2 ml-4">
                    <Button
                      variant={viewType === "grid" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewType("grid")}
                      className="p-2"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewType === "list" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewType("list")}
                      className="p-2"
                    >
                      <Grid3x3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewType === "large" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewType("large")}
                      className="p-2"
                    >
                      <LayoutGrid className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Default sorting" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default sorting</SelectItem>
                      <SelectItem value="popularity">Sort by popularity</SelectItem>
                      <SelectItem value="rating">Sort by average rating</SelectItem>
                      <SelectItem value="date">Sort by latest</SelectItem>
                      <SelectItem value="price">Sort by price: low to high</SelectItem>
                      <SelectItem value="price-desc">Sort by price: high to low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border">
                    <div className="relative overflow-hidden">
                      {product.discount > 0 && (
                        <Badge 
                          className="absolute top-2 left-2 z-10 bg-orange-500 text-white hover:bg-orange-600"
                        >
                          -{product.discount}%
                        </Badge>
                      )}
                      
                      <ShopProductGallery product={product} />
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-sm text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-3">
                        {product.originalPrice !== product.salePrice && (
                          <span className="text-gray-400 line-through text-sm">
                            ${product.originalPrice.toLocaleString()}.00
                          </span>
                        )}
                        <span className="text-lg font-bold text-orange-500">
                          ${product.salePrice.toLocaleString()}.00
                        </span>
                      </div>
                      
                      <Button
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                        onClick={() => addToCart(product)}
                      >
                        Add to cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;