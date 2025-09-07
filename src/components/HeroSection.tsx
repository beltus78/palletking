import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-warehouse.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section relative overflow-hidden bg-gradient-to-r from-amber-900 to-amber-800 min-h-[500px]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            We Sell Discounted Wholesale Merchandise
          </h1>
          
          <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Specializing in closeouts, shelf pulls, customer returns, and liquidated merchandise. 
            We have what you need at the best prices. We sell by box, pallet, or truckload.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button className="bg-orange-main hover:bg-orange-600 text-white text-lg px-8 py-3 font-semibold">
                VIEW MORE
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3 font-semibold">
                CONTACT US
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;