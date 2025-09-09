import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Package, Headphones, CreditCard, Truck } from "lucide-react";
// Use fallback logos since assets might not exist

const Footer = () => {
  // Retailer partner logos - exactly from your original website
  const retailerLogos = [
    {
      name: "Walmart",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 100'%3E%3Ctext x='20' y='45' font-family='Arial,sans-serif' font-size='28' font-weight='bold' fill='%23004c91'%3EWalmart%3C/text%3E%3C/svg%3E",
      fallback: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 100'%3E%3Ctext x='20' y='45' font-family='Arial,sans-serif' font-size='28' font-weight='bold' fill='%23004c91'%3EWalmart%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Lowe's",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 100'%3E%3Ctext x='20' y='45' font-family='Arial,sans-serif' font-size='28' font-weight='bold' fill='%23004990'%3ELowe's%3C/text%3E%3C/svg%3E",
      fallback: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 100'%3E%3Ctext x='20' y='45' font-family='Arial,sans-serif' font-size='28' font-weight='bold' fill='%23004990'%3ELowe's%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Sam's Club",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 100'%3E%3Ctext x='20' y='45' font-family='Arial,sans-serif' font-size='24' font-weight='bold' fill='%23004c91'%3ESam's Club%3C/text%3E%3C/svg%3E",
      fallback: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 100'%3E%3Ctext x='20' y='45' font-family='Arial,sans-serif' font-size='24' font-weight='bold' fill='%23004c91'%3ESam's Club%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Major Retailer",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 100'%3E%3Ctext x='20' y='45' font-family='Arial,sans-serif' font-size='20' font-weight='bold' fill='%23333333'%3EMajor Retailer%3C/text%3E%3C/svg%3E",
      fallback: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 100'%3E%3Ctext x='20' y='45' font-family='Arial,sans-serif' font-size='20' font-weight='bold' fill='%23333333'%3EMajor Retailer%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Amazon",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 100'%3E%3Ctext x='20' y='45' font-family='Arial,sans-serif' font-size='28' font-weight='bold' fill='%23ff9900'%3EAmazon%3C/text%3E%3C/svg%3E",
      fallback: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 100'%3E%3Ctext x='20' y='45' font-family='Arial,sans-serif' font-size='28' font-weight='bold' fill='%23ff9900'%3EAmazon%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Lenovo",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='10' y='35' font-family='Arial,sans-serif' font-size='24' font-weight='bold' fill='%23e2001a'%3ELenovo%3C/text%3E%3C/svg%3E",
      fallback: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='10' y='35' font-family='Arial,sans-serif' font-size='24' font-weight='bold' fill='%23e2001a'%3ELenovo%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Target",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='95' fill='%23cc0000'/%3E%3Ccircle cx='100' cy='100' r='75' fill='%23ffffff'/%3E%3Ccircle cx='100' cy='100' r='55' fill='%23cc0000'/%3E%3Ccircle cx='100' cy='100' r='35' fill='%23ffffff'/%3E%3Ccircle cx='100' cy='100' r='15' fill='%23cc0000'/%3E%3C/svg%3E"
    },
    {
      name: "Best Buy",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 100'%3E%3Crect width='300' height='100' fill='%23003876'/%3E%3Ctext x='20' y='35' font-family='Arial,sans-serif' font-size='20' font-weight='bold' fill='%23ffcc00'%3EBest%3C/text%3E%3Ctext x='80' y='35' font-family='Arial,sans-serif' font-size='20' font-weight='bold' fill='%23ffffff'%3EBuy%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Home Depot",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect width='200' height='100' fill='%23f96302'/%3E%3Ctext x='15' y='30' font-family='Arial,sans-serif' font-size='14' font-weight='bold' fill='%23ffffff'%3ETHE HOME%3C/text%3E%3Ctext x='15' y='50' font-family='Arial,sans-serif' font-size='14' font-weight='bold' fill='%23ffffff'%3EDEPOT%3C/text%3E%3C/svg%3E"
    },
    {
      name: "Macy's",
      logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 80'%3E%3Ctext x='20' y='45' font-family='serif' font-size='32' font-weight='bold' fill='%23e21837'%3Emacy's%3C/text%3E%3C/svg%3E"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      {/* Retailer Partners Section */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Our Trusted Retail Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
            {retailerLogos.map((retailer) => (
              <div key={retailer.name} className="flex justify-center items-center bg-white p-4 rounded-lg hover:shadow-lg transition-shadow">
                <img 
                  src={retailer.logo} 
                  alt={`${retailer.name} logo`}
                  className="h-12 w-auto max-w-full object-contain"
                  onError={(e) => {
                    if (retailer.fallback) {
                      e.currentTarget.src = retailer.fallback;
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center mb-6">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 80'%3E%3Ccircle cx='40' cy='40' r='30' fill='%23f59e0b'/%3E%3Ctext x='40' y='48' text-anchor='middle' fill='white' font-size='24' font-weight='bold'%3EP%3C/text%3E%3Ctext x='85' y='25' fill='%23f59e0b' font-size='14' font-weight='bold'%3EPALLETS LIQUIDATION%3C/text%3E%3Ctext x='85' y='45' fill='%23f59e0b' font-size='14' font-weight='bold'%3ECENTER%3C/text%3E%3C/svg%3E" 
                  alt="My Pallet Liquidation Center" 
                  className="h-12 w-auto"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 80'%3E%3Ccircle cx='40' cy='40' r='30' fill='%23f59e0b'/%3E%3Ctext x='40' y='48' text-anchor='middle' fill='white' font-size='24' font-weight='bold'%3EP%3C/text%3E%3Ctext x='85' y='25' fill='%23f59e0b' font-size='14' font-weight='bold'%3EPALLETS LIQUIDATION%3C/text%3E%3Ctext x='85' y='45' fill='%23f59e0b' font-size='14' font-weight='bold'%3ECENTER%3C/text%3E%3C/svg%3E";
                  }}
                />
              </Link>
              <p className="text-gray-300 mb-6 max-w-md">
                For nearly 10 years, we have supplied countless businesses with lots of liquidation pallets direct from the source. 
                Simply put, we are a direct liquidation supplier of pallets of merchandise.
              </p>
              <div className="space-y-3">
                <p className="text-gray-300">
                  <strong className="text-white">Email:</strong> palletkingmj01@gmail.com
                </p>
              </div>
              
              <div className="mt-6 p-4 bg-green-900/30 rounded-lg border border-green-500/30">
                <h4 className="font-semibold text-green-400 mb-2">Free standard shipping</h4>
                <p className="text-green-300">on all orders above $1000.</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-500">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors">Home</Link></li>
                <li><Link to="/shop" className="text-gray-300 hover:text-orange-500 transition-colors">Shop</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">Contact Us</Link></li>
                <li><Link to="/faq" className="text-gray-300 hover:text-orange-500 transition-colors">FAQs</Link></li>
                <li><Link to="/privacy-policy" className="text-gray-300 hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-orange-500 transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Popular Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-500">Popular Categories</h3>
              <ul className="space-y-2">
                <li><Link to="/shop?category=shoe-pallets" className="text-gray-300 hover:text-orange-500 transition-colors">Shoe Pallets</Link></li>
                <li><Link to="/shop?category=electronics" className="text-gray-300 hover:text-orange-500 transition-colors">Electronic Pallets</Link></li>
                <li><Link to="/shop?category=clothes" className="text-gray-300 hover:text-orange-500 transition-colors">Clothing</Link></li>
                <li><Link to="/shop?category=cosmetics" className="text-gray-300 hover:text-orange-500 transition-colors">Mix Cosmetic</Link></li>
                <li><Link to="/shop?category=general" className="text-gray-300 hover:text-orange-500 transition-colors">General Merchandise</Link></li>
                <li><Link to="/shop?category=tools" className="text-gray-300 hover:text-orange-500 transition-colors">Tools</Link></li>
                <li><Link to="/shop?category=massage-chair" className="text-gray-300 hover:text-orange-500 transition-colors">Massage Chair</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 My Pallet Liquidation Center. All rights reserved. | Direct Wholesale Liquidator of Surplus Merchandise
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;