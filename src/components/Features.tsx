import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Headphones, 
  Package, 
  Truck, 
  CreditCard 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Headphones,
      title: "First class customer support",
      description: "Contact our dedicated support team via live chat, phone, or email.",
      image: "https://mypalletliquidationcenter.com/wp-content/uploads/2021/10/features-carousel-icon-5.png.webp"
    },
    {
      icon: Package,
      title: "Load sizes for any budget",
      description: "Buy liquidation goods by the box, pallet or truckload.",
      image: "https://mypalletliquidationcenter.com/wp-content/uploads/2021/10/features-carousel-icon-2.png.webp"
    },
    {
      icon: Truck,
      title: "Flexible shipping options",
      description: "Utilize our shipping service, arrange your own shipping, or pick up lots yourself in person.",
      image: "https://mypalletliquidationcenter.com/wp-content/uploads/2021/10/features-carousel-icon-3-70x46.png.webp"
    },
    {
      icon: CreditCard,
      title: "Multiple payment options",
      description: "Conveniently pay by credit card, bank wire, apple pay, Bitcoin, or line of credit.",
      image: "https://mypalletliquidationcenter.com/wp-content/uploads/2021/10/features-carousel-icon-4.png.webp"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 border-none shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="mb-4">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-12 h-12 mx-auto mb-4"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;