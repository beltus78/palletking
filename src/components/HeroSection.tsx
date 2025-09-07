import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-warehouse.jpg";

const HeroSection = () => {
  return (
    <section className="modern-hero min-h-[70vh] flex items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative z-10 modern-container text-center text-white py-20">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            We Sell Discounted Wholesale Merchandise
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto text-balance opacity-90">
            Specializing in closeouts, shelf pulls, customer returns, and liquidated merchandise. 
            We have what you need at the best prices. We sell by box, pallet, or truckload.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6">
            <Link to="/shop" className="w-full sm:w-auto">
              <Button className="modern-button modern-button-primary w-full sm:w-auto text-lg px-8 py-4">
                VIEW MORE
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="modern-button modern-button-outline w-full sm:w-auto text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                CONTACT US
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default HeroSection;