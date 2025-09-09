import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Grid, Grid3x3, LayoutGrid } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShopProductGallery from "@/components/ShopProductGallery";
import { useToast } from "@/hooks/use-toast";

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
  shippingMethod: string;
  images?: { url: string; alt: string; angle: string }[];
}

import adidasSneakersPallet from "@/assets/products/adidas-sneakers-pallet.jpg";
import adidasVariety1 from "@/assets/products/adidas-variety-1.jpg";
import adidasVariety2 from "@/assets/products/adidas-variety-2.jpg";
import inflatablePools from "@/assets/products/inflatable-pools.jpg";
import poolsVariety1 from "@/assets/products/pools-variety-1.jpg";
import diapersPallet from "@/assets/products/diapers-pallet.jpg";
import diapersVariety1 from "@/assets/products/diapers-variety-1.jpg";
import adidasSneakers from "@/assets/products/adidas-sneakers.jpg";
import allstarVariety1 from "@/assets/products/allstar-variety-1.jpg";
import toiletPaper from "@/assets/products/diapers-pallet.jpg";
import cloudWalkerNew from "@/assets/products/cloud-walker-new.jpg";
import cloudWalkerVariety1 from "@/assets/products/cloud-walker-variety-1.jpg";
import hokaOriginal from "@/assets/products/hoka-clifton.jpg";
import hokaVariety1 from "@/assets/products/hoka-variety-1.jpg";
import stanleyCupNew from "@/assets/products/stanley-cup-new.jpg";
import stanleyVariety1 from "@/assets/products/stanley-variety-1.jpg";
import stanleyVariety2 from "@/assets/products/stanley-variety-2.jpg";
import sheinDress from "@/assets/products/shein-dress.jpg";
import sheinVariety1 from "@/assets/products/shein-variety-1.jpg";
import appleWatchNew from "@/assets/products/apple-watch.jpg";
import appleWatchVariety1 from "@/assets/products/apple-watch-variety-1.jpg";
import appleWatchVariety2 from "@/assets/products/apple-watch-variety-2.jpg";
import cloudWalkerShoes from "@/assets/products/cloud-walker-shoes.jpg";
import nikeBasketball from "@/assets/products/nike-basketball.jpg";
import nikeVariety1 from "@/assets/products/nike-variety-1.jpg";
import nikeVariety2 from "@/assets/products/nike-variety-2.jpg";
import electronicsVariety1 from "@/assets/products/electronics-variety-1.jpg";
import electronicsVariety2 from "@/assets/products/electronics-variety-2.jpg";
import christmasVariety1 from "@/assets/products/christmas-variety-1.jpg";
import perfumeVariety1 from "@/assets/products/perfume-variety-1.jpg";
import macbookCollection from "@/assets/products/macbook-collection.jpg";
import mensClothing from "@/assets/products/mens-clothing.jpg";
import womensClothing from "@/assets/products/womens-clothing.jpg";
import kidsClothing from "@/assets/products/kids-clothing.jpg";
import toolsHardware from "@/assets/products/tools-hardware.jpg";
import toysCollection from "@/assets/products/toys-collection.jpg";
import rugsCarpets from "@/assets/products/rugs-carpets.jpg";
import generalMerchandise from "@/assets/products/general-merchandise.jpg";
import massageChairs from "@/assets/products/massage-chairs.jpg";

const products: Product[] = [
  {
    id: 1,
    name: "Adidas Sport Sneakers Pallets",
    originalPrice: 1500,
    salePrice: 1200,
    image: adidasSneakersPallet,
    description: "Brand New Adidas sneakers sports shoes 200 pairs per pallet. All Authentic and first class. High-quality athletic footwear perfect for sports and casual wear.",
    category: "shoes",
    discount: 20,
    quantity: "200 pairs per pallet",
    status: "Available",
    shippingMethod: "Free shipping on orders over $1000, Standard shipping 5-7 business days, Express shipping 2-3 business days",
    images: [
      { url: adidasSneakersPallet, alt: "Adidas Sneakers Pallet", angle: "Product View" },
      { url: adidasVariety1, alt: "Adidas Collection", angle: "Variety View" },
      { url: adidasVariety2, alt: "Adidas Details", angle: "Detail View" }
    ]
  },
  {
    id: 2,
    name: "Affordables Inflatable Pools for Summer Fun-Pallet",
    originalPrice: 500,
    salePrice: 300,
    image: inflatablePools,
    description: "Transform your backyard into a summer paradise with a Inflatable Pool. Perfect for families and outdoor entertaining.",
    category: "outdoor",
    discount: 40,
    quantity: "224 pallets available",
    status: "Available",
    shippingMethod: "Standard shipping 3-5 business days, Freight delivery available for large orders",
    images: [
      { url: inflatablePools, alt: "Inflatable Pools Pallet", angle: "Product View" },
      { url: poolsVariety1, alt: "Pool Collection", angle: "Variety View" }
    ]
  },
  {
    id: 3,
    name: "All Good Diapers for Your Little One's Comfort All Day-Pallet",
    originalPrice: 1000,
    salePrice: 800,
    image: diapersPallet,
    description: "High-quality all good diapers pallets from well-known brands. Ultra-absorbent and gentle on sensitive skin.",
    category: "baby",
    discount: 20,
    quantity: "200 pieces per pallet",
    status: "Available",
    shippingMethod: "Free shipping on orders over $500, Standard delivery 2-4 business days",
    images: [
      { url: diapersPallet, alt: "Diapers Pallet", angle: "Product View" },
      { url: diapersVariety1, alt: "Diaper Collection", angle: "Variety View" }
    ]
  },
  {
    id: 4,
    name: "ALL STAR SHOE PALLET",
    originalPrice: 1500,
    salePrice: 1000,
    image: adidasSneakers,
    description: "American lifestyle brand that are durable shoes thanks to high quality materials. Classic design meets modern comfort.",
    category: "shoes",
    discount: 33,
    quantity: "100 pairs per pallet",
    status: "Available",
    shippingMethod: "Free shipping on orders over $1000, Express delivery 1-2 business days available",
    images: [
      { url: adidasSneakers, alt: "All Star Shoes", angle: "Product View" },
      { url: allstarVariety1, alt: "All Star Collection", angle: "Variety View" }
    ]
  },
  {
    id: 5,
    name: "Angel Soft Professional Series Premium 2-Ply Toilet Paper",
    originalPrice: 500,
    salePrice: 300,
    image: toiletPaper,
    description: "Premium 2-Ply Embossed Toilet Paper by GP PRO (Georgia-Pacific). Commercial grade quality for everyday use.",
    category: "paper",
    discount: 40,
    quantity: "80 Rolls Per Case",
    status: "Available",
    shippingMethod: "Standard shipping 2-3 business days, Bulk delivery options available"
  },
  {
    id: 6,
    name: "Cloud Walker Shoes",
    originalPrice: 1500,
    salePrice: 1000,
    image: cloudWalkerNew,
    description: "Ultra-Lightweight, Breathable Footwear Designed for Everyday Wear. Perfect for all-day comfort and style.",
    category: "shoes",
    discount: 33,
    quantity: "100 pairs per pallet",
    status: "Available",
    shippingMethod: "Free shipping on orders over $1000, Next-day delivery in select areas",
    images: [
      { url: cloudWalkerNew, alt: "Cloud Walker Shoes", angle: "Product View" },
      { url: cloudWalkerVariety1, alt: "Cloud Walker Collection", angle: "Variety View" }
    ]
  },
  {
    id: 7,
    name: "Shop Hoka Clifton-Pallets",
    originalPrice: 1200,
    salePrice: 1000,
    image: hokaOriginal,
    description: "Experience top-tier comfort and performance with lightweight, cushioned running shoes. Professional athlete grade quality.",
    category: "shoes",
    discount: 17,
    quantity: "100 pairs per pallet",
    status: "Available",
    shippingMethod: "Free shipping on all orders, Express delivery 1-3 business days",
    images: [
      { url: hokaOriginal, alt: "Hoka Clifton Shoes", angle: "Product View" },
      { url: hokaVariety1, alt: "Hoka Collection", angle: "Variety View" }
    ]
  },
  {
    id: 8,
    name: "Stanley Cup Pallets",
    originalPrice: 1000,
    salePrice: 1000,
    image: stanleyCupNew,
    description: "Premium Stanley Cup collection for your beverage needs. Durable, insulated drinkware for any adventure.",
    category: "accessories",
    discount: 0,
    quantity: "50 cups per pallet",
    status: "Available",
    shippingMethod: "Standard shipping 2-4 business days, Same-day delivery in major cities",
    images: [
      { url: stanleyCupNew, alt: "Stanley Cup Pallet", angle: "Product View" },
      { url: stanleyVariety1, alt: "Stanley Cup Collection", angle: "Variety View" },
      { url: stanleyVariety2, alt: "Stanley Cup Lifestyle", angle: "Lifestyle View" }
    ]
  },
  {
    id: 9,
    name: "Discover the Best Shein Dress Deals Here-Pallets",
    originalPrice: 500,
    salePrice: 500,
    image: sheinDress,
    description: "Trendy, chic, and affordable dresses. Elevate your style effortlessly with fashionable designs for every occasion.",
    category: "clothing",
    discount: 0,
    quantity: "200 pieces per pallet",
    status: "Available",
    shippingMethod: "Free shipping on orders over $300, Standard delivery 3-5 business days",
    images: [
      { url: sheinDress, alt: "Shein Dress", angle: "Product View" },
      { url: sheinVariety1, alt: "Shein Collection", angle: "Variety View" }
    ]
  },
  {
    id: 10,
    name: "Series 8 Apple Watch Pallets",
    originalPrice: 1500,
    salePrice: 1000,
    image: appleWatchNew,
    description: "Latest Series 8 Apple Watch collection. Advanced health monitoring and fitness tracking capabilities.",
    category: "electronics",
    discount: 33,
    quantity: "100 pieces per pallet",
    status: "Available",
    shippingMethod: "Free shipping on orders over $800, Overnight delivery available",
    images: [
      { url: appleWatchNew, alt: "Apple Watch Series 8", angle: "Product View" },
      { url: appleWatchVariety1, alt: "Apple Watch Collection", angle: "Variety View" },
      { url: appleWatchVariety2, alt: "Apple Watch Interface", angle: "Interface View" }
    ]
  },
  {
    id: 11,
    name: "Perfume Pallets",
    originalPrice: 1200,
    salePrice: 1000,
    image: perfumeVariety1,
    description: "Premium fragrance collection from top brands. Luxurious scents for every personality and occasion.",
    category: "beauty",
    discount: 17,
    quantity: "200 pieces per pallet",
    status: "Available",
    shippingMethod: "Standard shipping 2-4 business days, Gift wrapping available",
    images: [
      { url: perfumeVariety1, alt: "Perfume Pallet", angle: "Product View" },
      { url: perfumeVariety1, alt: "Perfume Collection", angle: "Variety View" }
    ]
  },
  {
    id: 12,
    name: "Nike Basketball shoes Pallets",
    originalPrice: 1500,
    salePrice: 1200,
    image: nikeBasketball,
    description: "High-quality Nike basketball shoes in various sizes. Professional grade performance for serious athletes.",
    category: "shoes",
    discount: 20,
    quantity: "150 pairs per pallet",
    status: "Available",
    shippingMethod: "Free shipping on orders over $1000, Priority delivery 1-2 business days",
    images: [
      { url: nikeBasketball, alt: "Nike Basketball Shoes", angle: "Product View" },
      { url: nikeVariety1, alt: "Nike Collection", angle: "Variety View" },
      { url: nikeVariety2, alt: "Nike Action", angle: "Action View" }
    ]
  },
  {
    id: 13,
    name: "Christmas Decoration Pallets",
    originalPrice: 800,
    salePrice: 600,
    image: christmasVariety1,
    description: "Festive Christmas decorations and ornaments. Create magical holiday moments with premium decorative items.",
    category: "seasonal",
    discount: 25,
    quantity: "Mixed items per pallet",
    status: "Available",
    shippingMethod: "Standard shipping 3-5 business days, Holiday express delivery available",
    images: [
      { url: christmasVariety1, alt: "Christmas Decorations", angle: "Product View" },
      { url: christmasVariety1, alt: "Christmas Collection", angle: "Variety View" }
    ]
  },
  {
    id: 14,
    name: "Electronics Mixed Pallets",
    originalPrice: 2000,
    salePrice: 1500,
    image: appleWatchNew,
    description: "Mixed electronics including phones, tablets, and accessories. Latest technology products from trusted brands.",
    category: "electronics",
    discount: 25,
    quantity: "Mixed electronics per pallet",
    status: "Available",
    shippingMethod: "Free shipping on orders over $1200, Insured delivery with tracking",
    images: [
      { url: appleWatchNew, alt: "Electronics Pallet", angle: "Product View" },
      { url: electronicsVariety1, alt: "Electronics Collection", angle: "Variety View" },
      { url: electronicsVariety2, alt: "Electronics Details", angle: "Detail View" }
    ]
  },
  {
    id: 15,
    name: "Massage Chair Collection",
    originalPrice: 3000,
    salePrice: 2500,
    image: massageChairs,
    description: "Premium massage chairs with multiple settings. Ultimate relaxation with advanced therapeutic features.",
    category: "furniture",
    discount: 17,
    quantity: "1-2 chairs per pallet",
    status: "Available",
    shippingMethod: "White glove delivery service, Professional installation included"
  },
  {
    id: 16,
    name: "MacBook Pro M2 Pallets",
    originalPrice: 4000,
    salePrice: 3200,
    image: macbookCollection,
    description: "Latest MacBook Pro M2 13-inch and 15-inch models. Professional computing power for creative professionals.",
    category: "macbook",
    discount: 20,
    quantity: "10 units per pallet",
    status: "Available",
    shippingMethod: "Free expedited shipping, Apple Care+ enrollment available"
  },
  {
    id: 17,
    name: "MacBook Air M1 Pallets",
    originalPrice: 3000,
    salePrice: 2400,
    image: macbookCollection,
    description: "MacBook Air M1 in Space Gray, Silver, and Gold. Lightweight design with all-day battery life.",
    category: "macbook",
    discount: 20,
    quantity: "15 units per pallet",
    status: "Available",
    shippingMethod: "Free shipping with signature confirmation, Setup assistance available"
  },
  {
    id: 18,
    name: "Men's Clothing Mixed Pallet",
    originalPrice: 800,
    salePrice: 600,
    image: mensClothing,
    description: "Mixed men's clothing including shirts, pants, jackets. Quality fashion for the modern gentleman.",
    category: "mens-clothing",
    discount: 25,
    quantity: "100 pieces per pallet",
    status: "Available",
    shippingMethod: "Standard shipping 3-5 business days, Returns accepted within 30 days"
  },
  {
    id: 19,
    name: "Women's Fashion Pallet",
    originalPrice: 900,
    salePrice: 700,
    image: womensClothing,
    description: "Trendy women's clothing - dresses, tops, bottoms. Latest fashion trends for every style preference.",
    category: "womens-clothing",
    discount: 22,
    quantity: "120 pieces per pallet",
    status: "Available",
    shippingMethod: "Free shipping on orders over $500, Express delivery available"
  },
  {
    id: 20,
    name: "Kids Wholesale Clothing Pallet",
    originalPrice: 600,
    salePrice: 450,
    image: kidsClothing,
    description: "Children's clothing in various sizes and styles. Comfortable, durable apparel for active kids.",
    category: "kids-clothing",
    discount: 25,
    quantity: "150 pieces per pallet",
    status: "Available",
    shippingMethod: "Standard shipping 2-4 business days, Size exchange program available"
  },
  {
    id: 21,
    name: "Tools & Hardware Pallet",
    originalPrice: 1200,
    salePrice: 900,
    image: toolsHardware,
    description: "Mixed tools, hardware, and equipment. Professional-grade tools for contractors and DIY enthusiasts.",
    category: "tools",
    discount: 25,
    quantity: "50 tools per pallet",
    status: "Available",
    shippingMethod: "Freight delivery for heavy items, Tool warranty included"
  },
  {
    id: 22,
    name: "Toys Mixed Pallet",
    originalPrice: 800,
    salePrice: 600,
    image: toysCollection,
    description: "Children's toys, games, and educational items. Safe, fun, and educational playtime essentials.",
    category: "toys",
    discount: 25,
    quantity: "100 toys per pallet",
    status: "Available",
    shippingMethod: "Standard shipping 3-5 business days, Gift wrapping services available"
  },
  {
    id: 23,
    name: "Cosmetics & Beauty Pallet",
    originalPrice: 1000,
    salePrice: 750,
    image: perfumeVariety1,
    description: "Mixed cosmetics, skincare, and beauty products. Premium beauty essentials from leading brands.",
    category: "beauty",
    discount: 25,
    quantity: "200 items per pallet",
    status: "Available",
    shippingMethod: "Climate-controlled shipping, Free samples with orders over $500"
  },
  {
    id: 24,
    name: "Rugs & Carpet Pallet",
    originalPrice: 1500,
    salePrice: 1200,
    image: rugsCarpets,
    description: "Various sizes and styles of rugs and carpets. Transform your space with quality floor coverings.",
    category: "rugs",
    discount: 20,
    quantity: "20 rugs per pallet",
    status: "Available",
    shippingMethod: "Freight delivery for large items, Professional installation available"
  },
  {
    id: 25,
    name: "General Merchandise Pallet",
    originalPrice: 1000,
    salePrice: 800,
    image: generalMerchandise,
    description: "Mixed general merchandise from major retailers. Diverse selection of everyday essentials and specialty items.",
    category: "general",
    discount: 20,
    quantity: "Mixed items per pallet",
    status: "Available",
    shippingMethod: "Standard shipping 4-6 business days, Manifest list included"
  }
];

const categories = [
  { name: "Christmas Pallet" },
  { name: "Clothes" },
  { name: "Electronic Pallets/Truckload Liquidation" },
  { name: "General Merchandise" },
  { name: "Housewares" },
  { name: "Improvement Liquidation" },
  { name: "Kids Wholesale Clothing" },
  { name: "Mac Book" },
  { name: "Massage Chair" },
  { name: "Men's Clothing Pallet" },
  { name: "Mix Cosmetic" },
  { name: "Mixed Accessories Liquidation" },
  { name: "Mystery Boxes" },
  { name: "Rugs and Carpet" },
  { name: "Sex Toys" },
  { name: "Shoe Pallets/Truckload" },
  { name: "Sneaker Pallets" },
  { name: "Tissue Paper" },
  { name: "Tools" },
  { name: "Toys Pallets/Truckload" },
  { name: "Women Clothing" }
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

  const handleEmailInquiry = (product: Product) => {
    const subject = `Product Inquiry - ${product.name}`;
    const body = `Hi, I'm interested in the following product:%0D%0A%0D%0AProduct: ${product.name}%0D%0APrice: $${product.salePrice.toLocaleString()}.00%0D%0ADescription: ${product.description}%0D%0A%0D%0APlease provide more information about availability and shipping details.%0D%0A%0D%0AThank you!`;
    const mailtoLink = `mailto:palletkingmj01@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Email",
      description: "Email client opening with product inquiry details.",
    });
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "ALL" 
    ? products 
    : products.filter(product => {
        if (selectedCategory === "CHRISTMAS PALLET") return product.category === "seasonal";
        if (selectedCategory === "CLOTHES") return product.category === "clothing" || product.category === "mens-clothing" || product.category === "womens-clothing";
        if (selectedCategory === "ELECTRONIC PALLETS/TRUCKLOAD LIQUIDATION") return product.category === "electronics";
        if (selectedCategory === "SHOE PALLETS/TRUCKLOAD" || selectedCategory === "SNEAKER PALLETS") return product.category === "shoes";
        if (selectedCategory === "MASSAGE CHAIR") return product.category === "furniture";
        if (selectedCategory === "MIX COSMETIC") return product.category === "beauty";
        if (selectedCategory === "TISSUE PAPER") return product.category === "paper";
        if (selectedCategory === "MAC BOOK") return product.category === "macbook";
        if (selectedCategory === "MEN'S CLOTHING PALLET") return product.category === "mens-clothing";
        if (selectedCategory === "WOMEN CLOTHING") return product.category === "womens-clothing";
        if (selectedCategory === "KIDS WHOLESALE CLOTHING") return product.category === "kids-clothing";
        if (selectedCategory === "TOOLS") return product.category === "tools";
        if (selectedCategory === "TOYS PALLETS/TRUCKLOAD") return product.category === "toys";
        if (selectedCategory === "RUGS AND CARPET") return product.category === "rugs";
        if (selectedCategory === "GENERAL MERCHANDISE") return product.category === "general";
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
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
                      
                      <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                        {product.description}
                      </p>
                      
                      <p className="text-xs text-green-600 mb-3">
                        {product.shippingMethod}
                      </p>
                      
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
                        onClick={() => handleEmailInquiry(product)}
                      >
                        Email Inquiry
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
