import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductCategories />
      <AboutSection />
    </div>
  );
};

export default Index;