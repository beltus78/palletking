import { Card, CardContent } from "@/components/ui/card";
// Use fallback SVG logos since assets might not exist

const StoreOverstock = () => {
  return (
    <section className="py-16 bg-background" itemScope itemType="https://schema.org/WebPageElement">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
            Store Overstock
          </h2>
          
          {/* Horizontal Layout - Text on Left, Image on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Content Section - Left Side */}
            <div className="space-y-8">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  In the course of sales and market management, it can happen that the store has a large 
                  quantity of a specific product type which attracted low sales. It can also be that the 
                  seasonal stock is not eliminated through rapid sales and marketing before the dawning 
                  of new merchandise comes. What is usually don't to remediate this, is that the surplus 
                  merchandise is sold to wholesale liquidators for something cheap at the go, to achieve 
                  the target effect. However, the merchandise usually gotten directly from the retail 
                  overstock is usually in perfect condition and brand new as well.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Closeouts</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Closeout simply refers to the sales a store does when it aims to close down due to 
                    different factors; one of which might include moving to an entirely different place. 
                    There is usually a clearance sale, a closeout sale, or a fire sale to this effect. 
                    This merchandise can be infiltrated by liquidation experts and later sold at a cheap 
                    price to other sellers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Brand New</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The ones which are not new but in perfect working condition the ones which are not 
                    new are often purchased at reduced prices than other liquidated goods. This category 
                    contains merchandise obtained through store closeouts or overstock. Since it is 
                    usually in original packaging with little to no damage, they can resell as Brand New 
                    goods. The drawback is that these goods cost more than normal liquidation products. 
                    However, it has its own peculiar advantage in that the warranty usually still applies!
                  </p>
                </div>
              </div>
            </div>

            {/* Large Image Section - Right Side */}
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/13259517-2c44-43d3-899d-807ffacebfc6.png" 
                alt="Warehouse with liquidation pallets and overstock merchandise" 
                className="w-full max-w-lg h-auto object-cover rounded-xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Retailer Logos Section */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 100'%3E%3Ctext x='20' y='45' font-family='Arial,sans-serif' font-size='20' font-weight='bold' fill='%23333333'%3EMajor Retailer%3C/text%3E%3C/svg%3E" 
              alt="Major Retailer Logo"
              className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 100'%3E%3Ctext x='20' y='45' font-family='Arial,sans-serif' font-size='28' font-weight='bold' fill='%23004990'%3ELowe's%3C/text%3E%3C/svg%3E" 
              alt="Lowe's Logo"
              className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 100'%3E%3Ctext x='20' y='45' font-family='Arial,sans-serif' font-size='24' font-weight='bold' fill='%23004c91'%3ESam's Club%3C/text%3E%3C/svg%3E" 
              alt="Sam's Club Logo"
              className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 100'%3E%3Ctext x='20' y='45' font-family='Arial,sans-serif' font-size='28' font-weight='bold' fill='%23004c91'%3EWalmart%3C/text%3E%3C/svg%3E" 
              alt="Walmart Logo"
              className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='10' y='35' font-family='Arial,sans-serif' font-size='24' font-weight='bold' fill='%23e2001a'%3ELenovo%3C/text%3E%3C/svg%3E" 
              alt="Lenovo Logo"
              className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default StoreOverstock;