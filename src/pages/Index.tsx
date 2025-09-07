import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import SaleProducts from "@/components/SaleProducts";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductCategories />
      <SaleProducts />
      <AboutSection />
    </div>
  );
};

export default Index;