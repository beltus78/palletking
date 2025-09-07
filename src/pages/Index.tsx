import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WholesaleLiquidationSection from "@/components/WholesaleLiquidationSection";
import AboutPriceSection from "@/components/AboutPriceSection";
import PalletsLiquidationCenterSection from "@/components/PalletsLiquidationCenterSection";
import SaleProducts from "@/components/SaleProducts";
import Features from "@/components/Features";
import AllForGarden from "@/components/AllForGarden";
import StoreOverstock from "@/components/StoreOverstock";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main role="main">
        <HeroSection />
        <WholesaleLiquidationSection />
        <AboutPriceSection />
        <PalletsLiquidationCenterSection />
        <SaleProducts />
        <Features />
        <AllForGarden />
        <StoreOverstock />
      </main>
      <Footer />
    </div>
  );
};

export default Index;