import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  return (
    <section className="modern-section bg-light-gray">
      <div className="modern-container">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
            Wholesale Liquidation Pallets
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto text-balance">
            Cosmetics, Health & Beauty items, Paper products, Household items, 
            General Merchandise, Apparel, and more. Get started below
          </p>
        </div>

        <div className="modern-grid grid-cols-1 lg:grid-cols-2 items-center max-w-6xl mx-auto">
          <Card className="modern-card">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Product Categories
              </h3>
              <ul className="space-y-4 text-muted-foreground text-base lg:text-lg">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-accent rounded-full mr-4 flex-shrink-0"></span>
                  Cosmetics & Health Beauty Items
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-accent rounded-full mr-4 flex-shrink-0"></span>
                  Paper Products & Office Supplies
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-accent rounded-full mr-4 flex-shrink-0"></span>
                  Household Items & Home Goods
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-accent rounded-full mr-4 flex-shrink-0"></span>
                  General Merchandise
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-accent rounded-full mr-4 flex-shrink-0"></span>
                  Apparel & Accessories
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-accent rounded-full mr-4 flex-shrink-0"></span>
                  Customer Returns & Overstock
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/shop" className="flex-1">
                  <Button className="modern-button modern-button-primary w-full">
                    SHOP
                  </Button>
                </Link>
                <Link to="/faq" className="flex-1">
                  <Button variant="outline" className="modern-button modern-button-outline w-full">
                    FAQS
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="modern-card">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 text-balance">
                Buy The Best Products For An Excellent Wholesale Price
              </h3>
              <p className="text-muted-foreground text-base lg:text-lg mb-8 leading-relaxed text-balance">
                Save on wholesale purchases at Pallets Liquidation Center Deals! 
                Now your business can make more profit on wholesale products offered 
                by our verified wholesale suppliers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about" className="flex-1">
                  <Button className="modern-button modern-button-primary w-full">
                    ABOUT US
                  </Button>
                </Link>
                <Link to="/shop" className="flex-1">
                  <Button variant="outline" className="modern-button modern-button-outline w-full">
                    TO SHOP
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;