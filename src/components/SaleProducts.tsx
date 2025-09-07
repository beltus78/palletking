import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Heart, Search, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import ProductGallery from "./ProductGallery";

// Use placeholder images for now since the imported ones are not working

const SaleProducts = () => {
  const { toast } = useToast();

  const products = [
    {
      id: 1,
      name: "Adidas Sport Sneakers Pallets",
      originalPrice: 1500,
      currentPrice: 1200,
      discount: 20,
      description: "Brand New Adidas sneakers sports shoes 200 pairs per pallet. All Authentic and first class",
      images: [
        { url: "https://mypalletliquidationcenter.com/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-20-at-02.54.23-600x600.jpeg.webp", alt: "Adidas sneakers front view", angle: "Front View" },
        { url: "https://mypalletliquidationcenter.com/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-20-at-02.52.48-600x600.jpeg.webp", alt: "Adidas sneakers side view", angle: "Side View" },
        { url: "https://mypalletliquidationcenter.com/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-20-at-02.54.23-600x600.jpeg.webp", alt: "Adidas sneakers back view", angle: "Back View" },
        { url: "https://mypalletliquidationcenter.com/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-20-at-02.52.48-600x600.jpeg.webp", alt: "Adidas sneakers detail", angle: "Detail View" }
      ],
      isFeatured: true,
      status: "Available",
      variations: [
        { id: "adidas-7", size: "Size 7-9", price: 1200, stock: 50 },
        { id: "adidas-10", size: "Size 10-12", price: 1250, stock: 75 },
        { id: "adidas-13", size: "Size 13+", price: 1300, stock: 25 }
      ],
      availability: ["Florida Warehouse", "Texas Distribution", "California Hub"]
    },
    {
      id: 2,
      name: "Cloud Walker Shoes",
      originalPrice: 1500,
      currentPrice: 1000,
      discount: 33,
      description: "Step Into a New Level of Comfort and Style with Ultra-Lightweight, Breathable Footwear",
      images: [
        { url: "https://mypalletliquidationcenter.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-05-at-11.02.08-PM.jpeg", alt: "Cloud Walker front", angle: "Front View" },
        { url: "https://mypalletliquidationcenter.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-05-at-11.02.08-PM-1.jpeg", alt: "Cloud Walker side", angle: "Side View" },
        { url: "https://mypalletliquidationcenter.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-05-at-11.02.08-PM.jpeg", alt: "Cloud Walker back", angle: "Back View" }
      ],
      isFeatured: true,
      status: "New",
      variations: [
        { id: "cloud-white", color: "White", price: 1000, stock: 100 },
        { id: "cloud-black", color: "Black", price: 1000, stock: 80 },
        { id: "cloud-gray", color: "Gray", price: 1000, stock: 60 }
      ],
      availability: ["All Warehouses", "Direct Ship"]
    },
    {
      id: 3,
      name: "Shop hoka clifton-Pallets",
      originalPrice: 1200,
      currentPrice: 1000,
      discount: 17,
      description: "Experience top-tier comfort and performance with lightweight, cushioned running shoes. $1000 a pallet which contains 100 pairs",
      images: [
        { url: "https://mypalletliquidationcenter.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-23-at-3.33.16-PM.jpeg", alt: "Hoka Clifton front", angle: "Front View" },
        { url: "https://mypalletliquidationcenter.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-23-at-3.33.18-PM.jpeg", alt: "Hoka Clifton side", angle: "Side View" },
        { url: "https://mypalletliquidationcenter.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-23-at-3.33.16-PM.jpeg", alt: "Hoka Clifton back", angle: "Back View" }
      ],
      isFeatured: true,
      status: "Available",
      variations: [
        { id: "hoka-mens", size: "Men's Sizes", price: 1000, stock: 50 },
        { id: "hoka-womens", size: "Women's Sizes", price: 1000, stock: 50 }
      ],
      availability: ["Florida Warehouse", "Texas Distribution"]
    },
    {
      id: 4,
      name: "Stanley Cup Pallets",
      originalPrice: null,
      currentPrice: 1000,
      discount: 0,
      description: "Premium Stanley Cup merchandise pallets for resale. 50 cups per pallet",
      images: [
        { url: "https://mypalletliquidationcenter.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-10-at-22.22.00-3.jpeg", alt: "Stanley Cup front", angle: "Front View" },
        { url: "https://mypalletliquidationcenter.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-10-at-22.22.00-3.jpeg", alt: "Stanley Cup side", angle: "Side View" },
        { url: "https://mypalletliquidationcenter.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-10-at-22.22.00-3.jpeg", alt: "Stanley Cup colors", angle: "Color Options" }
      ],
      isFeatured: false,
      status: "Available",
      variations: [
        { id: "stanley-20oz", size: "20oz", price: 1000, stock: 30 },
        { id: "stanley-30oz", size: "30oz", price: 1100, stock: 20 }
      ],
      availability: ["All Warehouses"]
    },
    {
      id: 5,
      name: "Discover the Best Shein Dress Deals Here-Pallets",
      originalPrice: null,
      currentPrice: 500,
      discount: 0,
      description: "Discover your perfect Shein Dress! Trendy, chic, and affordable. 200 pieces per pallet",
      images: [
        { url: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop", alt: "Shein dresses front", angle: "Front View" },
        { url: "https://images.unsplash.com/photo-1566479179817-51c53f5c64b2?w=400&h=400&fit=crop", alt: "Shein dresses variety", angle: "Style Variety" },
        { url: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop", alt: "Shein dresses colors", angle: "Color Options" }
      ],
      isFeatured: false,
      status: "Available",
      variations: [
        { id: "shein-xs-s", size: "XS-S", price: 500, stock: 100 },
        { id: "shein-m-l", size: "M-L", price: 500, stock: 80 },
        { id: "shein-xl-xxl", size: "XL-XXL", price: 500, stock: 20 }
      ],
      availability: ["California Hub", "Texas Distribution"]
    },
    {
      id: 6,
      name: "Series 8 Apple Watch Pallets",
      originalPrice: 1500,
      currentPrice: 1000,
      discount: 33,
      description: "Premium Apple Watch Series 8 pallets. 100 Pieces Per Pallet",
      images: [
        { url: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=400&fit=crop", alt: "Apple Watch front", angle: "Front View" },
        { url: "https://images.unsplash.com/photo-1579586337278-3f436f25d4d6?w=400&h=400&fit=crop", alt: "Apple Watch side", angle: "Side View" },
        { url: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop", alt: "Apple Watch bands", angle: "Band Options" }
      ],
      isFeatured: false,
      status: "Available",
      variations: [
        { id: "watch-41mm", size: "41mm", price: 1000, stock: 50 },
        { id: "watch-45mm", size: "45mm", price: 1050, stock: 50 }
      ],
      availability: ["Florida Warehouse", "Direct Ship"]
    },
    {
      id: 7,
      name: "Affordables Inflatable Pools for Summer Fun-Pallet",
      originalPrice: 500,
      currentPrice: 300,
      discount: 40,
      description: "Transform your backyard into a summer paradise with a Inflatable Pool. Enjoy endless fun, relaxation, and memorable moments.",
      images: [
        { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop", alt: "Pool setup", angle: "Setup View" },
        { url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop", alt: "Pool family", angle: "In Use" },
        { url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=400&fit=crop", alt: "Pool packed", angle: "Packaged" }
      ],
      isFeatured: false,
      status: "Available",
      availability: ["Texas Distribution", "California Hub"]
    },
    {
      id: 8,
      name: "All Good Diapers for Your Little One's Comfort All Day-Pallet",
      originalPrice: 1000,
      currentPrice: 800,
      discount: 20,
      description: "Looking for a reliable supplier of high-quality all good diapers pallets? 200 pieces per pallet",
      images: [
        { url: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=400&fit=crop", alt: "Diaper packaging", angle: "Package View" },
        { url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop", alt: "Diaper sizes", angle: "Size Options" }
      ],
      isFeatured: false,
      status: "Available",
      variations: [
        { id: "diaper-nb", size: "Newborn", price: 800, stock: 40 },
        { id: "diaper-1", size: "Size 1", price: 800, stock: 50 },
        { id: "diaper-2", size: "Size 2", price: 800, stock: 60 },
        { id: "diaper-3", size: "Size 3", price: 800, stock: 50 }
      ],
      availability: ["All Warehouses"]
    }
  ];

  const sendProductInquiry = (product: any) => {
    const subject = `Inquiry about ${product.name}`;
    const body = `Hi, I'm interested in the ${product.name} priced at $${product.currentPrice}.%0D%0A%0D%0APlease provide more information about:%0D%0A- Availability%0D%0A- Shipping options%0D%0A- Bulk pricing%0D%0A%0D%0AThank you!`;
    const mailtoLink = `mailto:info@mypalletliquidationcenter.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Email Client Opening",
      description: `Opening email to inquire about ${product.name}`,
    });
  };

  const addToWishlist = (product: any) => {
    toast({
      title: "Added to Wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  return (
    <section className="modern-section bg-background" itemScope itemType="https://schema.org/ItemList">
      <div className="modern-container">
        <header className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 text-balance">SALE PRODUCTS</h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto text-balance">
            Wholesale liquidation pallets from top USA retailers. Customer returns, surplus inventory, shelf pulls, and overstock at unbeatable prices.
          </p>
        </header>

        <div className="modern-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <article 
              key={product.id} 
              className="modern-card group"
              itemScope 
              itemType="https://schema.org/Product"
              itemProp="itemListElement"
            >
              {/* Discount and Feature Badges */}
              <div className="relative">
                {product.discount && product.discount > 0 && (
                  <Badge className="absolute top-3 left-3 z-10 bg-destructive text-destructive-foreground px-3 py-1 text-sm font-bold rounded-xl">
                    -{product.discount}%
                  </Badge>
                )}
                
                {product.isFeatured && (
                  <Badge className="absolute top-3 right-3 z-10 bg-accent text-accent-foreground px-3 py-1 text-xs font-bold rounded-xl">
                    FEATURED
                  </Badge>
                )}

                {/* Interactive Product Gallery */}
                <ProductGallery product={product} />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-lg lg:text-xl mb-3 line-clamp-2 text-foreground leading-tight" itemProp="name">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-3 mb-4" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  {product.originalPrice && (
                    <span className="text-muted-foreground line-through text-base">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-accent font-bold text-xl" itemProp="price">
                    ${product.currentPrice.toFixed(2)}
                  </span>
                  <meta itemProp="priceCurrency" content="USD" />
                  <meta itemProp="availability" content="https://schema.org/InStock" />
                </div>

                <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed" itemProp="description">
                  {product.description}
                </p>

                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 text-sm hover:bg-muted rounded-xl"
                    onClick={() => addToWishlist(product)}
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Wishlist
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 modern-button-primary text-sm rounded-xl"
                    onClick={() => sendProductInquiry(product)}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email Inquiry
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16">
          <Link to="/shop">
            <Button className="modern-button modern-button-primary text-lg px-10 py-4">
              VIEW ALL PRODUCTS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SaleProducts;