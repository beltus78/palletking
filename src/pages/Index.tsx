import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import SaleProducts from "@/components/SaleProducts";
import StoreOverstock from "@/components/StoreOverstock";
import Features from "@/components/Features";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main role="main">
        <HeroSection />
        <ProductCategories />
        <AboutSection />
        <SaleProducts />
        <StoreOverstock />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;