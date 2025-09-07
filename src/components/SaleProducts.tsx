import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const SaleProducts = () => {
  const products = [
    {
      id: 1,
      name: "Adidas Sport Sneakers Pallets",
      originalPrice: 1500,
      currentPrice: 1200,
      discount: 20,
      image: "https://via.placeholder.com/300x300/f0f0f0/333333?text=Adidas+Sneakers",
      description: "Brand New Adidas sneakers sports shoes 200 pairs per pallet. All Authentic and first class"
    },
    {
      id: 2,
      name: "Affordables Inflatable Pools for Summer Fun-Pallet",
      originalPrice: 500,
      currentPrice: 300,
      discount: 40,
      image: "https://via.placeholder.com/300x300/87CEEB/333333?text=Pool+Pallet",
      description: "Transform your backyard into a summer paradise with a Inflatable Pool. Enjoy endless fun, relaxation, and memorable moments."
    },
    {
      id: 3,
      name: "All Good Diapers for Your Little One's Comfort All Day-Pallet",
      originalPrice: 1000,
      currentPrice: 800,
      discount: 20,
      image: "https://via.placeholder.com/300x300/FFB6C1/333333?text=Diapers+Pallet",
      description: "Looking for a reliable supplier of high-quality all good diapers pallets? 200 pieces per pallet"
    },
    {
      id: 4,
      name: "All Star Shoe Pallet for sale",
      originalPrice: 1500,
      currentPrice: 1000,
      discount: 33,
      image: "https://via.placeholder.com/300x300/DDA0DD/333333?text=All+Star+Shoes",
      description: "Premium All Star shoe collection for wholesale. Various sizes and styles available."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">SALE PRODUCTS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border border-gray-200">
              <div className="relative overflow-hidden">
                {/* Discount Badge */}
                <Badge className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 text-sm font-semibold">
                  -{product.discount}%
                </Badge>
                
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <Button size="sm" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                      <Search className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-gray-900">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gray-500 line-through text-sm">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-red-600 font-bold text-lg">
                    ${product.currentPrice.toFixed(2)}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 text-xs">
                    Add to wishlist
                  </Button>
                  <Button size="sm" className="flex-1 bg-orange-main hover:bg-orange-600 text-white text-xs">
                    Add to cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop">
            <Button className="bg-orange-main hover:bg-orange-600 text-white px-8 py-3 font-semibold">
              VIEW ALL PRODUCTS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SaleProducts;