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

import adidasSneakersPallet from "@/assets/products/adidas-sneakers-pallet.jpg";
import inflatablePools from "@/assets/products/inflatable-pools.jpg";
import diapersPallet from "@/assets/products/diapers-pallet.jpg";
import adidasSneakers from "@/assets/products/adidas-sneakers.jpg";
import toiletPaper from "@/assets/products/adidas-sneakers.jpg";
import cloudWalkerNew from "@/assets/products/cloud-walker-new.jpg";
import hokaNew from "@/assets/products/hoka-clifton-new.jpg";
import stanleyCupNew from "@/assets/products/stanley-cup-new.jpg";
import sheinDress from "@/assets/products/shein-dress.jpg";
import appleWatchNew from "@/assets/products/apple-watch-new.jpg";
import cloudWalkerShoes from "@/assets/products/cloud-walker-shoes.jpg";
import nikeBasketball from "@/assets/products/nike-basketball.jpg";

const products: Product[] = [
  {
    id: 1,
    name: "Adidas Sport Sneakers Pallets",
    originalPrice: 1500,
    salePrice: 1200,
    image: adidasSneakersPallet,
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
    image: inflatablePools,
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
    image: diapersPallet,
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
    image: adidasSneakers,
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
    image: toiletPaper,
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
    image: cloudWalkerNew,
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
    image: hokaNew,
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
    image: stanleyCupNew,
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
    image: sheinDress,
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
    image: appleWatchNew,
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
    image: cloudWalkerShoes,
    description: "Premium fragrance collection from top brands",
    category: "beauty",
    discount: 17,
    quantity: "200 pieces per pallet",
    status: "Available"
  },
  {
    id: 12,
    name: "Nike Basketball shoes Pallets",
    originalPrice: 1500,
    salePrice: 1200,
    image: nikeBasketball,
    description: "High-quality Nike basketball shoes in various sizes",
    category: "shoes",
    discount: 20,
    quantity: "150 pairs per pallet",
    status: "Available"
  },
  {
    id: 13,
    name: "Christmas Decoration Pallets",
    originalPrice: 800,
    salePrice: 600,
    image: sheinDress,
    description: "Festive Christmas decorations and ornaments",
    category: "seasonal",
    discount: 25,
    quantity: "Mixed items per pallet",
    status: "Available"
  },
  {
    id: 14,
    name: "Electronics Mixed Pallets",
    originalPrice: 2000,
    salePrice: 1500,
    image: appleWatchNew,
    description: "Mixed electronics including phones, tablets, and accessories",
    category: "electronics",
    discount: 25,
    quantity: "Mixed electronics per pallet",
    status: "Available"
  },
  {
    id: 15,
    name: "Massage Chair Collection",
    originalPrice: 3000,
    salePrice: 2500,
    image: cloudWalkerShoes,
    description: "Premium massage chairs with multiple settings",
    category: "furniture",
    discount: 17,
    quantity: "1-2 chairs per pallet",
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
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const { toast } = useToast();

  const addToCart = (product: Product) => {
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "ALL" 
    ? products 
    : products.filter(product => {
        if (selectedCategory === "CHRISTMAS PALLET") return product.category === "seasonal";
        if (selectedCategory === "CLOTHES") return product.category === "clothing";
        if (selectedCategory === "ELECTRONIC PALLETS/TRUCKLOAD LIQUIDATION") return product.category === "electronics";
        if (selectedCategory === "SHOE PALLETS/TRUCKLOAD" || selectedCategory === "SNEAKER PALLETS") return product.category === "shoes";
        if (selectedCategory === "MASSAGE CHAIR") return product.category === "furniture";
        if (selectedCategory === "MIX COSMETIC") return product.category === "beauty";
        if (selectedCategory === "TISSUE PAPER") return product.category === "paper";
        return product.category.toLowerCase().includes(selectedCategory.toLowerCase());
      });

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
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
            <div 
              onClick={() => handleCategoryClick("ALL")}
              className={`cursor-pointer px-4 py-2 rounded transition-colors ${
                selectedCategory === "ALL" ? "bg-orange-500 text-white" : "bg-gray-800 hover:bg-gray-700 text-white"
              }`}
            >
              <span className="text-sm font-medium">ALL PRODUCTS</span>
              <span className="text-gray-400 text-xs ml-2">{products.length} Products</span>
            </div>
            {topCategories.map((category, index) => (
              <div 
                key={index} 
                onClick={() => handleCategoryClick(category)}
                className={`cursor-pointer px-4 py-2 rounded transition-colors ${
                  selectedCategory === category ? "bg-orange-500 text-white" : "bg-gray-800 hover:bg-gray-700 text-white"
                }`}
              >
                <span className="text-sm font-medium">{category}</span>
                <span className="text-gray-400 text-xs ml-2">
                  {category === "ELECTRONIC PALLETS/TRUCKLOAD LIQUIDATION" ? "2" : 
                   category === "SHOE PALLETS/TRUCKLOAD" ? "4" : 
                   category === "MASSAGE CHAIR" ? "1" : 
                   category === "CLOTHES" ? "1" : 
                   category === "CHRISTMAS PALLET" ? "1" : 
                   category === "SNEAKER PALLETS" ? "3" : 
                   category === "TISSUE PAPER" ? "1" : 
                   category === "TOOLS" ? "0" : 
                   category === "UNCATEGORIZED" ? "3" : "1"} Product{(category === "ELECTRONIC PALLETS/TRUCKLOAD LIQUIDATION" || 
                   category === "SHOE PALLETS/TRUCKLOAD" || 
                   category === "SNEAKER PALLETS" || 
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
                          onClick={(e) => {
                            e.preventDefault();
                            handleCategoryClick(category.name.toUpperCase());
                          }}
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

              {/* Product count and filter info */}
              <div className="mb-6 flex justify-between items-center">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                  {selectedCategory !== "ALL" && (
                    <span className="ml-2 text-sm text-orange-600">
                      - Filtered by: {selectedCategory}
                    </span>
                  )}
                </p>
                {selectedCategory !== "ALL" && (
                  <button
                    onClick={() => setSelectedCategory("ALL")}
                    className="text-sm text-blue-600 hover:text-blue-800 underline"
                  >
                    Clear filter
                  </button>
                )}
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
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

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg mb-4">
                    No products found in this category.
                  </p>
                  <button
                    onClick={() => setSelectedCategory("ALL")}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded"
                  >
                    View All Products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;