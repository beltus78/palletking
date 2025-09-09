import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-warehouse.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] text-white" role="banner">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-16">
        <div className="text-center space-y-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            We Sell Discounted Wholesale Merchandise
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Specializing in closeouts, shelf pulls, customer returns, and liquidated merchandise. 
            We have what you need at the best prices. We sell by box, pallet, or truckload.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/shop">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-xl">
                VIEW MORE
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-xl">
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