import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-warehouse.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-hero-bg/90 to-primary/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            We Sell Discounted 
            <span className="text-accent"> Wholesale Merchandise</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Specializing in closeouts, shelf pulls, customer returns, and liquidated merchandise. 
            We have what you need at the best prices. We sell by box, pallet, or truckload.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-hero text-lg px-8 py-6">
              VIEW MORE
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;