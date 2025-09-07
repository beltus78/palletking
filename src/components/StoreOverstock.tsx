import { Card, CardContent } from "@/components/ui/card";
import majorRetailerLogo from "@/assets/logos/major-retailer.png";
import lowesLogo from "@/assets/logos/lowes-original.png";
import samsClubLogo from "@/assets/logos/samsclub-original.png";
import walmartLogo from "@/assets/logos/walmart-original.png";
import lenovoLogo from "@/assets/logos/lenovo-logo.png";

const StoreOverstock = () => {
  return (
    <section className="py-16 bg-background" itemScope itemType="https://schema.org/WebPageElement">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Store Overstock
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Content Section */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In the course of sales and market management, it can happen that the store has a large 
                  quantity of a specific product type which attracted low sales. It can also be that the 
                  seasonal stock is not eliminated through rapid sales and marketing before the dawning 
                  of new merchandise comes. What is usually done to remediate this, is that the surplus 
                  merchandise is sold to wholesale liquidators for something cheap at the go, to achieve 
                  the target effect. However, the merchandise usually gotten directly from the retail 
                  overstock is usually in perfect condition and brand new as well.
                </p>
              </div>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Closeouts</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Closeout simply refers to the sales a store does when it aims to close down due to 
                    different factors; one of which might include moving to an entirely different place. 
                    There is usually a clearance sale, a closeout sale, or a fire sale to this effect. 
                    This merchandise can be infiltrated by liquidation experts and later sold at a cheap 
                    price to other sellers.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Brand New</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The ones which are not new but in perfect working condition the ones which are not 
                    new are often purchased at reduced prices than other liquidated goods. This category 
                    contains merchandise obtained through store closeouts or overstock. Since it is 
                    usually in original packaging with little to no damage, they can resell as Brand New 
                    goods. The drawback is that these goods cost more than normal liquidation products. 
                    However, it has its own peculiar advantage in that the warranty usually still applies!
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Large Image Section */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <img 
                  src="/lovable-uploads/4f88d31d-7371-4696-b7d4-38d54826425a.png" 
                  alt="Warehouse with liquidation pallets and overstock merchandise" 
                  className="w-full h-auto min-h-[500px] object-cover rounded-xl shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Retailer Logos Section */}
          <div className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
              <img 
                src={majorRetailerLogo} 
                alt="Major Retailer Logo" 
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
              <img 
                src={lowesLogo} 
                alt="Lowe's Logo" 
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
              <img 
                src={samsClubLogo} 
                alt="Sam's Club Logo" 
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
              <img 
                src={walmartLogo} 
                alt="Walmart Logo" 
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
              <img 
                src={lenovoLogo} 
                alt="Lenovo Logo" 
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StoreOverstock;