import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProductCategories = () => {
  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Wholesale Liquidation Pallets
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cosmetics, Health & Beauty items, Paper products, Household items, 
            General Merchandise, Apparel, and more. Get started below
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="business-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Product Categories
              </h3>
              <ul className="space-y-3 text-muted-foreground text-lg">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Cosmetics & Health Beauty Items
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Paper Products & Office Supplies
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Household Items & Home Goods
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  General Merchandise
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Apparel & Accessories
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Customer Returns & Overstock
                </li>
              </ul>
              
              <div className="flex gap-4 mt-8">
                <Button className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3">
                  SHOP
                </Button>
                <Button variant="outline" className="btn-outline-business">
                  FAQS
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="business-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Buy The Best Products For An Excellent Wholesale Price
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Save on wholesale purchases at Pallets Liquidation Center Deals! 
                Now your business can make more profit on wholesale products offered 
                by our verified wholesale suppliers.
              </p>
              
              <div className="flex gap-4">
                <Button className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3">
                  ABOUT US
                </Button>
                <Button className="btn-hero">
                  TO SHOP
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;