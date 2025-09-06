import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Truck, ShieldCheck, Users, TrendingUp, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Pallets Liquidation Center
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Your trusted partner for wholesale liquidation merchandise since 2014
            </p>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              Nearly 10 Years of Excellence
            </Badge>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Direct Wholesale Liquidator of Surplus Merchandise
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Wholesale liquidation pallets consist of customer returns, surplus inventory, shelf pulls, 
                and overstock. Although pallet pricing is cheap, the best deals are bought in bulk by the 
                truckload. Profit is king and we have the best reseller deals in Florida and the USA for 
                you to make money from liquidation!
              </p>
              
              <p className="text-muted-foreground mb-8">
                Buying a truckload full of liquidated merchandise is the best way to get bulk pallets at 
                a very low price. This way you will get better discounts than buying individual pallets 
                or cardboard boxes. Liquidation comes in many categories. For nearly 10 years, we have 
                supplied countless businesses with lots of liquidation pallets direct from the source.
              </p>

              <div className="bg-muted/50 rounded-lg p-6 mb-8">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  Why Choose Us?
                </h3>
                <p className="text-muted-foreground">
                  Simply put, we are a direct liquidation supplier of pallets of merchandise. By being a 
                  <strong> Direct Wholesale Liquidator of Surplus Merchandise</strong>, we sell 100's of 
                  pallets every week. Each pallet of merchandise is sourced from the top USA Retailers. 
                  No two pallets are the same as there is a lot of mixed variety in merchandise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">10</h3>
                <p className="text-muted-foreground">Years of Experience</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">1000+</h3>
                <p className="text-muted-foreground">Satisfied Customers</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">100+</h3>
                <p className="text-muted-foreground">Pallets Sold Weekly</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-business transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Direct from Source</h3>
                <p className="text-sm text-muted-foreground">
                  We source directly from top USA retailers, ensuring authentic merchandise and competitive pricing.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-business transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Flexible Quantities</h3>
                <p className="text-sm text-muted-foreground">
                  From individual pallets to full truckloads, we accommodate businesses of all sizes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-business transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Expert Support</h3>
                <p className="text-sm text-muted-foreground">
                  Our experienced team provides guidance to help you make profitable purchasing decisions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-business transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Quality Assurance</h3>
                <p className="text-sm text-muted-foreground">
                  Each pallet is carefully curated with mixed variety merchandise from trusted sources.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-business transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Proven Track Record</h3>
                <p className="text-sm text-muted-foreground">
                  Nearly 10 years of helping businesses succeed in the liquidation industry.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-business transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Fast Turnaround</h3>
                <p className="text-sm text-muted-foreground">
                  Quick processing and shipping to get your merchandise to you as fast as possible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Liquidation Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful resellers who trust us for their wholesale liquidation needs.
            Get started today and discover the profit potential!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-primary">
              Browse Our Inventory
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;