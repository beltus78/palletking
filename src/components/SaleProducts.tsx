import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Heart, Search, Mail } from "lucide-react";
import { Link } from "react-router-dom";

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
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      isFeatured: true,
      status: "Available"
    },
    {
      id: 2,
      name: "Cloud Walker Shoes",
      originalPrice: 1500,
      currentPrice: 1000,
      discount: 33,
      description: "Step Into a New Level of Comfort and Style with Ultra-Lightweight, Breathable Footwear",
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop",
      isFeatured: true,
      status: "New"
    },
    {
      id: 3,
      name: "Shop hoka clifton-Pallets",
      originalPrice: 1200,
      currentPrice: 1000,
      discount: 17,
      description: "Experience top-tier comfort and performance with lightweight, cushioned running shoes. $1000 a pallet which contains 100 pairs",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      isFeatured: true,
      status: "Available"
    },
    {
      id: 4,
      name: "Stanley Cup Pallets",
      originalPrice: null,
      currentPrice: 1000,
      discount: 0,
      description: "Premium Stanley Cup merchandise pallets for resale. 50 cups per pallet",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      isFeatured: false,
      status: "Available"
    },
    {
      id: 5,
      name: "Discover the Best Shein Dress Deals Here-Pallets",
      originalPrice: null,
      currentPrice: 500,
      discount: 0,
      description: "Discover your perfect Shein Dress! Trendy, chic, and affordable. 200 pieces per pallet",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop",
      isFeatured: false,
      status: "Available"
    },
    {
      id: 6,
      name: "Series 8 Apple Watch Pallets",
      originalPrice: 1500,
      currentPrice: 1000,
      discount: 33,
      description: "Premium Apple Watch Series 8 pallets. 100 Pieces Per Pallet",
      image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=400&fit=crop",
      isFeatured: false,
      status: "Available"
    },
    {
      id: 7,
      name: "Affordables Inflatable Pools for Summer Fun-Pallet",
      originalPrice: 500,
      currentPrice: 300,
      discount: 40,
      description: "Transform your backyard into a summer paradise with a Inflatable Pool. Enjoy endless fun, relaxation, and memorable moments.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop",
      isFeatured: false,
      status: "Available"
    },
    {
      id: 8,
      name: "All Good Diapers for Your Little One's Comfort All Day-Pallet",
      originalPrice: 1000,
      currentPrice: 800,
      discount: 20,
      description: "Looking for a reliable supplier of high-quality all good diapers pallets? 200 pieces per pallet",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=400&fit=crop",
      isFeatured: false,
      status: "Available"
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
              className="modern-card group hover:scale-[1.02] transition-all duration-300"
              itemScope 
              itemType="https://schema.org/Product"
              itemProp="itemListElement"
            >
              <div className="relative overflow-hidden">
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
                
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-square modern-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    itemProp="image"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/400x400/f0f0f0/333333?text=${encodeURIComponent(product.name.slice(0, 20))}`;
                    }}
                  />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                    <Button 
                      size="sm" 
                      className="modern-button bg-background text-foreground hover:bg-accent hover:text-accent-foreground rounded-full w-12 h-12 p-0" 
                      aria-label="Quick view"
                    >
                      <Search className="h-5 w-5" />
                    </Button>
                    <Button 
                      size="sm" 
                      className="modern-button bg-background text-foreground hover:bg-accent hover:text-accent-foreground rounded-full w-12 h-12 p-0" 
                      aria-label="Email inquiry"
                      onClick={() => sendProductInquiry(product)}
                    >
                      <Mail className="h-5 w-5" />
                    </Button>
                    <Button 
                      size="sm" 
                      className="modern-button bg-background text-foreground hover:bg-accent hover:text-accent-foreground rounded-full w-12 h-12 p-0" 
                      aria-label="Add to wishlist"
                      onClick={() => addToWishlist(product)}
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
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