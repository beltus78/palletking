import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WholesaleLiquidationSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Wholesale Liquidation Pallets
        </h2>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
          Cosmetics, Health & Beauty items, Paper products, Household items, General Merchandise, Apparel, and more. Get started below
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/shop">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-xl">
              SHOP
            </Button>
          </Link>
          <Link to="/faq">
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg rounded-xl">
              FAQS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WholesaleLiquidationSection;