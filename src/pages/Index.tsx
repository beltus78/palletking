import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import SaleProducts from "@/components/SaleProducts";
import Features from "@/components/Features";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main role="main">
        <HeroSection />
        <ProductCategories />
        <SaleProducts />
        <Features />
        <AboutSection />
      </main>
    </div>
  );
};

export default Index;