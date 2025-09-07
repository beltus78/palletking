import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Heart, Mail, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";

interface ShopProductImage {
  url: string;
  alt: string;
  angle: string;
}

interface ShopProductVariation {
  id: string;
  size?: string;
  color?: string;
  price: number;
  stock: number;
}

interface ShopProduct {
  id: number;
  name: string;
  originalPrice: number;
  salePrice: number;
  description: string;
  category: string;
  discount: number;
  quantity: string;
  status: string;
  image?: string;
  images?: ShopProductImage[];
  variations?: ShopProductVariation[];
  availability?: string[];
}

interface ShopProductGalleryProps {
  product: ShopProduct;
}

const ShopProductGallery = ({ product }: ShopProductGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedVariation, setSelectedVariation] = useState<ShopProductVariation | null>(
    product.variations?.[0] || null
  );
  const { toast } = useToast();
  const { addToCart: addToCartContext } = useCart();

  // Create default images if not provided
  const productImages = product.images || [
    { url: (product as any).image || `https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop`, alt: product.name, angle: "Product View" }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const sendProductInquiry = () => {
    const variation = selectedVariation ? ` (${selectedVariation.size || selectedVariation.color})` : '';
    const subject = `Inquiry about ${product.name}${variation}`;
    const body = `Hi, I'm interested in the ${product.name}${variation} priced at $${selectedVariation?.price || product.salePrice}.%0D%0A%0D%0APlease provide more information about:%0D%0A- Availability%0D%0A- Shipping options%0D%0A- Bulk pricing%0D%0A%0D%0AThank you!`;
    const mailtoLink = `mailto:info@mypalletliquidationcenter.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Email Client Opening",
      description: `Opening email to inquire about ${product.name}`,
    });
  };

  const addToWishlist = () => {
    toast({
      title: "Added to Wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  const addToCart = () => {
    addToCartContext({
      id: product.id,
      name: product.name,
      price: selectedVariation?.price || product.salePrice,
      image: productImages[0]?.url || product.image,
      category: product.category,
    });
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer group">
          <div className="relative overflow-hidden aspect-square rounded-xl bg-gray-100">
            <img
              src={productImages[0]?.url}
              alt={productImages[0]?.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            
            {/* Image indicators */}
            {productImages.length > 1 && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {productImages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === 0 ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Quick view overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <span className="text-white font-semibold bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                Click to view details
              </span>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
              <img
                src={productImages[currentImageIndex]?.url}
                alt={productImages[currentImageIndex]?.alt}
                className="w-full h-full object-cover"
              />
              
              {productImages.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 p-0 bg-white/80 hover:bg-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 p-0 bg-white/80 hover:bg-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}

              {/* Current angle indicator */}
              <div className="absolute top-2 left-2">
                <Badge variant="secondary" className="bg-black/70 text-white">
                  {productImages[currentImageIndex]?.angle}
                </Badge>
              </div>
            </div>

            {/* Thumbnail images */}
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex ? 'border-primary' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {product.originalPrice !== product.salePrice && (
                  <span className="text-muted-foreground line-through text-lg">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-3xl font-bold text-primary">
                  ${selectedVariation?.price || product.salePrice}
                </span>
                {product.discount > 0 && (
                  <Badge className="bg-destructive text-destructive-foreground">
                    -{product.discount}% OFF
                  </Badge>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                {product.description}
              </p>

              <p className="text-sm text-muted-foreground mb-6">
                <strong>Quantity:</strong> {product.quantity}
              </p>
            </div>

            {/* Variations */}
            {product.variations && product.variations.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-semibold">Available Options:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {product.variations.map((variation) => (
                    <button
                      key={variation.id}
                      onClick={() => setSelectedVariation(variation)}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        selectedVariation?.id === variation.id
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-medium">
                        {variation.size && `Size: ${variation.size}`}
                        {variation.color && `Color: ${variation.color}`}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        ${variation.price} • {variation.stock} in stock
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Availability */}
            {product.availability && product.availability.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold">Availability:</h4>
                <div className="flex flex-wrap gap-2">
                  {product.availability.map((location, index) => (
                    <Badge key={index} variant="outline">
                      {location}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button 
                onClick={addToWishlist}
                variant="outline" 
                className="flex-1"
              >
                <Heart className="h-4 w-4 mr-2" />
                Wishlist
              </Button>
              <Button 
                onClick={addToCart}
                variant="outline" 
                className="flex-1"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button 
                onClick={sendProductInquiry}
                className="flex-1"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Inquiry
              </Button>
            </div>

            {/* Stock Status */}
            <div className="p-4 bg-muted rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-medium">Stock Status:</span>
                <Badge variant={selectedVariation?.stock ? "default" : "secondary"}>
                  {selectedVariation?.stock ? `${selectedVariation.stock} Available` : product.status}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShopProductGallery;