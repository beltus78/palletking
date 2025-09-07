import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SaleProducts from "@/components/SaleProducts";
import AllForGarden from "@/components/AllForGarden";
import StoreOverstock from "@/components/StoreOverstock";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main role="main">
        <HeroSection />
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