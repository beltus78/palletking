import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Heart, Search, Mail } from "lucide-react";
import ProductGallery from "./ProductGallery";

const AllForGarden = () => {
  const { toast } = useToast();

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

  const gardenProducts = [
    {
      id: 1,
      name: "Cloud Walker Shoes",
      originalPrice: 1500,
      currentPrice: 1000,
      discount: 33,
      description: "Step Into a New Level of Comfort and Style with Ultra-Lightweight, Breathable Footwear",
      images: [
        { url: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop", alt: "Cloud Walker front", angle: "Front View" },
        { url: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop", alt: "Cloud Walker side", angle: "Side View" },
        { url: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400&h=400&fit=crop", alt: "Cloud Walker back", angle: "Back View" }
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
      id: 2,
      name: "Shop hoka clifton-Pallets",
      originalPrice: 1200,
      currentPrice: 1000,
      discount: 17,
      description: "Experience top-tier comfort and performance with lightweight, cushioned running shoes. $1000 a pallet which contains 100 pairs",
      images: [
        { url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", alt: "Hoka Clifton front", angle: "Front View" },
        { url: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop", alt: "Hoka Clifton side", angle: "Side View" },
        { url: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop", alt: "Hoka Clifton back", angle: "Back View" }
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
      id: 3,
      name: "Stanley Cup Pallets",
      originalPrice: null,
      currentPrice: 1000,
      discount: 0,
      description: "50 cups per pallet",
      images: [
        { url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop", alt: "Stanley Cup front", angle: "Front View" },
        { url: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=400&fit=crop", alt: "Stanley Cup side", angle: "Side View" },
        { url: "https://images.unsplash.com/photo-1549298916-acc8b4bc8b4e?w=400&h=400&fit=crop", alt: "Stanley Cup colors", angle: "Color Options" }
      ],
      isFeatured: false,
      status: "Available",
      variations: [
        { id: "stanley-20oz", size: "20oz", price: 1000, stock: 30 },
        { id: "stanley-30oz", size: "30oz", price: 1100, stock: 20 }
      ],
      availability: ["All Warehouses"]
    }
  ];

  return (
    <section className="modern-section bg-muted/30" itemScope itemType="https://schema.org/ItemList">
      <div className="modern-container">
        <header className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground px-4 py-2 text-sm font-bold rounded-xl">
            ALL FOR GARDEN
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
            Featured Garden Collection
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto text-balance">
            Discover our top-rated garden and outdoor products from premium brands. New arrivals and featured selections.
          </p>
        </header>

        <div className="modern-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {gardenProducts.map((product, index) => (
            <article 
              key={product.id} 
              className="modern-card group"
              itemScope 
              itemType="https://schema.org/Product"
              itemProp="itemListElement"
            >
              <div className="relative">
                {/* Discount Badge */}
                {product.discount && product.discount > 0 && (
                  <Badge className="absolute top-3 left-3 z-10 bg-destructive text-destructive-foreground px-3 py-1 text-sm font-bold rounded-xl">
                    -{product.discount}%
                  </Badge>
                )}
                
                {/* Feature Badges */}
                {product.isFeatured && (
                  <Badge className="absolute top-3 right-3 z-10 bg-accent text-accent-foreground px-3 py-1 text-xs font-bold rounded-xl">
                    FEATURED
                  </Badge>
                )}

                {product.status === "New" && (
                  <Badge className="absolute top-12 right-3 z-10 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold rounded-xl">
                    NEW
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
      </div>
    </section>
  );
};

export default AllForGarden;