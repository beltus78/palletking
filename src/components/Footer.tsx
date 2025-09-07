import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Package, Headphones, CreditCard, Truck } from "lucide-react";
import logoOriginal from "@/assets/logo-original.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      {/* Feature Section - Matching original website */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Hundreds Of Pallets In Stock
              </h4>
              <p className="text-gray-600">
                No one rejects, No one dislikes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                24/7 Support
              </h4>
              <p className="text-gray-600">
                We are Available 24/7
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Online Payment
              </h4>
              <p className="text-gray-600">
                Many Payment Methods
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Fast Delivery
              </h4>
              <p className="text-gray-600">
                Always on time
              </p>
            </div>
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
                  src={logoOriginal} 
                  alt="My Pallet Liquidation Center" 
                  className="h-12 w-auto"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 80'%3E%3Crect width='60' height='60' x='10' y='10' rx='30' fill='%23f59e0b'/%3E%3Ctext x='40' y='45' text-anchor='middle' fill='white' font-size='24' font-weight='bold'%3EP%3C/text%3E%3Ctext x='85' y='25' fill='%23f59e0b' font-size='14' font-weight='bold'%3EPALLETS LIQUIDATION%3C/text%3E%3Ctext x='85' y='45' fill='%23f59e0b' font-size='14' font-weight='bold'%3ECENTER%3C/text%3E%3C/svg%3E";
                  }}
                />
              </Link>
              <p className="text-gray-300 mb-6 max-w-md">
                For nearly 10 years, we have supplied countless businesses with lots of liquidation pallets direct from the source. 
                Simply put, we are a direct liquidation supplier of pallets of merchandise.
              </p>
              <div className="space-y-3">
                <p className="text-gray-300">
                  <strong className="text-white">Phone:</strong> +1(541)-515-7780
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Whatsapp:</strong> +1(541)-515-7780
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Email:</strong> info@mypalletliquidationcenter.com
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