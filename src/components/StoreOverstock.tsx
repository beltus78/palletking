import { Card, CardContent } from "@/components/ui/card";

const StoreOverstock = () => {
  return (
    <section className="py-16 bg-background" itemScope itemType="https://schema.org/WebPageElement">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Store Overstock
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content Section */}
            <div className="space-y-8">
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

            {/* Image Section */}
            <div className="flex justify-center">
              <img 
                src="/src/assets/hero-warehouse.jpg" 
                alt="Warehouse with liquidation pallets and overstock merchandise" 
                className="rounded-lg shadow-lg max-w-full h-auto"
                width="500"
                height="600"
                loading="lazy"
              />
            </div>
          </div>

          {/* Retailer Logos Section */}
          <div className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
              <img 
                src="/src/assets/logos/major-retailer.png" 
                alt="Major Retailer Logo" 
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
              <img 
                src="/src/assets/logos/lowes-original.png" 
                alt="Lowe's Logo" 
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
              <img 
                src="/src/assets/logos/samsclub-original.png" 
                alt="Sam's Club Logo" 
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
              <img 
                src="/src/assets/logos/walmart-original.png" 
                alt="Walmart Logo" 
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
              <img 
                src="/src/assets/logos/lenovo-logo.png" 
                alt="Lenovo Logo" 
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Hundreds Of Pallets In Stock</h4>
              <p className="text-muted-foreground text-sm">No one rejects, No one dislikes.</p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">24/7 Support</h4>
              <p className="text-muted-foreground text-sm">We are Available 24/7</p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Online Payment</h4>
              <p className="text-muted-foreground text-sm">Many Payment Methods</p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground">Fast Delivery</h4>
              <p className="text-muted-foreground text-sm">Always on time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreOverstock;