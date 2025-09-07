import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-main rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <div className="text-orange-main font-bold text-xl">PALLETS LIQUIDATION</div>
                <div className="text-orange-main font-bold text-xl">CENTER</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              For nearly 10 years, we have supplied countless businesses with lots of liquidation pallets direct from the source. 
              We are a direct liquidation supplier of pallets of merchandise.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <strong>Phone:</strong> +1(541)-515-7780
              </p>
              <p className="text-gray-300">
                <strong>WhatsApp:</strong> +1(541)-515-7780
              </p>
              <p className="text-gray-300">
                <strong>Email:</strong> info@mypalletliquidationcenter.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-main">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-orange-main transition-colors">Home</Link></li>
              <li><Link to="/shop" className="text-gray-300 hover:text-orange-main transition-colors">Shop</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-orange-main transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-orange-main transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-orange-main transition-colors">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-orange-main transition-colors">Privacy Policy</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-orange-main transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-main">Popular Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/shop?category=shoe-pallets" className="text-gray-300 hover:text-orange-main transition-colors">Shoe Pallets</Link></li>
              <li><Link to="/shop?category=electronics" className="text-gray-300 hover:text-orange-main transition-colors">Electronic Pallets</Link></li>
              <li><Link to="/shop?category=clothes" className="text-gray-300 hover:text-orange-main transition-colors">Clothing</Link></li>
              <li><Link to="/shop?category=cosmetics" className="text-gray-300 hover:text-orange-main transition-colors">Cosmetics</Link></li>
              <li><Link to="/shop?category=general" className="text-gray-300 hover:text-orange-main transition-colors">General Merchandise</Link></li>
              <li><Link to="/shop?category=tools" className="text-gray-300 hover:text-orange-main transition-colors">Tools</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Pallets Liquidation Center. All rights reserved. | Direct Wholesale Liquidator of Surplus Merchandise
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;