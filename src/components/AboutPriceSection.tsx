import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPriceSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Buy The Best Products For An Excellent Wholesale Price.
        </h2>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
          Save on wholesale purchases at Pallets Liquidation Center Deals! Now your business can make more profit on wholesale products offered by our verified wholesale suppliers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/about">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-xl">
              ABOUT US
            </Button>
          </Link>
          <Link to="/shop">
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg rounded-xl">
              TO SHOP
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPriceSection;