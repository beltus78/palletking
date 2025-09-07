import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SaleProducts from "@/components/SaleProducts";
import AboutSection from "@/components/AboutSection";
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
        <AboutSection />
        <StoreOverstock />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;