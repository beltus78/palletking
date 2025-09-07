import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Search, ShoppingCart, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const SaleProducts = () => {
  const products = [
    {
      id: 1,
      name: "Adidas Sport Sneakers Pallets",
      originalPrice: 1500,
      currentPrice: 1200,
      discount: 20,
      image: "https://mypalletliquidationcenter.com/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-20-at-02.54.23-600x600.jpeg.webp",
      description: "Brand New Adidas sneakers sports shoes 200 pairs per pallet. All Authentic and first class",
      featured: false
    },
    {
      id: 2,
      name: "Affordables Inflatable Pools for Summer Fun-Pallet",
      originalPrice: 500,
      currentPrice: 300,
      discount: 40,
      image: "https://via.placeholder.com/400x400/87CEEB/333333?text=Pool+Pallet",
      description: "Transform your backyard into a summer paradise with a Inflatable Pool. Enjoy endless fun, relaxation, and memorable moments. Choose from durable, stylish, and safe options for every budget.",
      status: "Available",
      condition: "Clearance, Closeouts, Returns, Shelf Pulls",
      featured: false
    },
    {
      id: 3,
      name: "All Good Diapers for Your Little One's Comfort All Day-Pallet",
      originalPrice: 1000,
      currentPrice: 800,
      discount: 20,
      image: "https://via.placeholder.com/400x400/FFB6C1/333333?text=Diapers+Pallet",
      description: "Looking for a reliable supplier of high-quality all good diapers pallets? Our pallets offer a cost-effective way to purchase large quantities of diapers from well-known brands. 200 pieces per pallet",
      featured: false
    },
    {
      id: 4,
      name: "ALL STAR SHOE PALLET",
      originalPrice: 1500,
      currentPrice: 1000,
      discount: 33,
      image: "https://via.placeholder.com/400x400/DDA0DD/333333?text=All+Star+Shoes",
      description: "All STAR an American lifestyle brand that are durable shoes thanks to the high quality materials they are made with. 100 pairs per pallet",
      featured: false
    },
    {
      id: 5,
      name: "Angel Soft Professional Series Premium 2-Ply Embossed Toilet Paper",
      originalPrice: 500,
      currentPrice: 300,
      discount: 40,
      image: "https://via.placeholder.com/400x400/87CEEB/333333?text=Angel+Soft",
      description: "TRUSTED BRAND that is recognized and loved by your tenants, guests and customers. QUALITY softness, 2-ply thickness and a designer emboss",
      featured: false
    },
    {
      id: 6,
      name: "Cloud Walker Shoes",
      originalPrice: 1500,
      currentPrice: 1000,
      discount: 33,
      image: "https://mypalletliquidationcenter.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-05-at-11.02.08-PM.jpeg",
      description: "Cloud Walker Shoes – Step Into a New Level of Comfort and Style with Ultra-Lightweight, Breathable Footwear Designed for Everyday Wear and All-Day Support",
      featured: true,
      badges: ["New", "FEATURED", "TOP SELLERS"]
    },
    {
      id: 7,
      name: "Shop hoka clifton-Pallets",
      originalPrice: 1200,
      currentPrice: 1000,
      discount: 17,
      image: "https://mypalletliquidationcenter.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-23-at-3.33.16-PM.jpeg",
      description: "Shop Hoka Clifton: Experience top-tier comfort and performance with lightweight, cushioned running shoes. Perfect for runners of all levels. $1000 a pallet which contains 100 pairs",
      featured: false
    },
    {
      id: 8,
      name: "Stanley Cup Pallets",
      originalPrice: null,
      currentPrice: 1000,
      discount: null,
      image: "https://mypalletliquidationcenter.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-10-at-22.22.00-3.jpeg",
      description: "50 cups per pallet",
      featured: false
    },
    {
      id: 9,
      name: "Discover the Best Shein Dress Deals Here-Pallets",
      originalPrice: null,
      currentPrice: 500,
      discount: null,
      image: "https://mypalletliquidationcenter.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-04-03-at-3.05.43-PM-2.jpeg",
      description: "Discover your perfect Shein Dress! Trendy, chic, and affordable. Elevate your style effortlessly with Shein's latest collections. 200 pieces per pallet",
      featured: false
    },
    {
      id: 10,
      name: "Series 8 Apple Watch Pallets",
      originalPrice: 1500,
      currentPrice: 1000,
      discount: 33,
      image: "https://mypalletliquidationcenter.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-31-at-01.45.29.jpeg",
      description: "100 Pieces Per Pallet",
      featured: false
    },
    {
      id: 11,
      name: "Perfume Pallets",
      originalPrice: 1200,
      currentPrice: 1000,
      discount: 17,
      image: "https://mypalletliquidationcenter.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-31-at-01.34.55-1.jpeg",
      description: "200 Pieces per pallet",
      featured: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50" itemScope itemType="https://schema.org/ItemList">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 uppercase tracking-wide">SALE PRODUCTS</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Wholesale liquidation pallets from top USA retailers. Customer returns, surplus inventory, shelf pulls, and overstock at unbeatable prices.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <article 
              key={product.id} 
              className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden"
              itemScope 
              itemType="https://schema.org/Product"
              itemProp="itemListElement"
            >
              <div className="relative overflow-hidden">
                {/* Discount Badge */}
                {product.discount && (
                  <Badge className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 text-sm font-bold">
                    -{product.discount}%
                  </Badge>
                )}
                
                {/* Feature Badges */}
                {product.featured && product.badges && (
                  <div className="absolute top-3 right-3 z-10 flex flex-col gap-1">
                    {product.badges.map((badge, badgeIndex) => (
                      <Badge key={badgeIndex} className="bg-orange-main text-white px-2 py-1 text-xs font-bold">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
                
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    itemProp="image"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/400x400/f0f0f0/333333?text=${encodeURIComponent(product.name.slice(0, 20))}`;
                    }}
                  />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <Button size="sm" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100" aria-label="Quick view">
                      <Search className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100" aria-label="Add to wishlist">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100" aria-label="Add to cart">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-gray-900 leading-tight" itemProp="name">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-3" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through text-sm">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-red-600 font-bold text-lg" itemProp="price">
                    ${product.currentPrice.toFixed(2)}
                  </span>
                  <meta itemProp="priceCurrency" content="USD" />
                  <meta itemProp="availability" content="https://schema.org/InStock" />
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3" itemProp="description">
                  {product.description}
                </p>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 text-xs hover:bg-gray-50">
                    <Heart className="h-3 w-3 mr-1" />
                    Add to wishlist
                  </Button>
                  <Button size="sm" className="flex-1 bg-orange-main hover:bg-orange-600 text-white text-xs">
                    <Plus className="h-3 w-3 mr-1" />
                    Add to cart
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop">
            <Button className="bg-orange-main hover:bg-orange-600 text-white px-8 py-3 font-semibold text-lg">
              VIEW ALL PRODUCTS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SaleProducts;