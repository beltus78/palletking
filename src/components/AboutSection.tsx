import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-accent mb-8">
            PALLETS LIQUIDATION CENTER
          </h2>
        </div>

        <Card className="business-card max-w-5xl mx-auto">
          <CardContent className="p-12">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Wholesale liquidation pallets consist of customer returns, surplus inventory, shelf pulls, and overstock. 
              Although pallet pricing is cheap, the best deals are bought in bulk by the truckload. Profit is king and 
              we have the best reseller deals in Florida and the USA for you to make money from liquidation! Buying a 
              truckload full of liquidated merchandise is the best way to get bulk pallets at a very low price. This 
              way you will get better discounts than buying individual pallets or cardboard boxes. Liquidation comes 
              in many categories. For nearly 10 years, we have supplied countless businesses with lots of liquidation 
              pallets direct from the source. Simply put, we are a direct liquidation supplier of pallets of merchandise. 
              By being a Direct Wholesale Liquidator of Surplus Merchandise, we sell 100's of pallets every week. Each 
              pallet of merchandise is sourced from the top USA Retailers. No two pallets are the same as there is a 
              lot of mixed variety in merchandise.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;