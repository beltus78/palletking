import { Search, ShoppingCart, User, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
// Fallback logo will be used via onError handler

const Header = () => {
  return (
    <header role="banner">
      {/* Top Bar - Dark navy exactly like original */}
      <div className="bg-[#1e3a8a] text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              Phone: +1(541)-515-7780
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/contact" className="hover:text-orange-400 transition-colors">CONTACT US</Link>
            <Link to="/faq" className="hover:text-orange-400 transition-colors">FAQS</Link>
            <div className="flex items-center space-x-2">
              {/* Social Media Icons - exactly like original */}
              <a href="#" className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-xs hover:bg-blue-700 transition-colors">
                f
              </a>
              <a href="#" className="w-6 h-6 bg-blue-400 rounded flex items-center justify-center text-xs hover:bg-blue-500 transition-colors">
                t
              </a>
              <a href="#" className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-xs hover:bg-green-600 transition-colors">
                w
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - White background exactly like original */}
      <div className="bg-white border-b border-gray-200 py-4 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo - Using original logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 80'%3E%3Ccircle cx='40' cy='40' r='30' fill='%23f59e0b'/%3E%3Ctext x='40' y='48' text-anchor='middle' fill='white' font-size='24' font-weight='bold'%3EP%3C/text%3E%3Ctext x='85' y='25' fill='%23f59e0b' font-size='14' font-weight='bold'%3EPALLETS LIQUIDATION%3C/text%3E%3Ctext x='85' y='45' fill='%23f59e0b' font-size='14' font-weight='bold'%3ECENTER%3C/text%3E%3C/svg%3E" 
                alt="My Pallet Liquidation Center" 
                className="h-16 w-auto"
                onError={(e) => {
                  // Fallback to custom logo if original doesn't load
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 80'%3E%3Ccircle cx='40' cy='40' r='30' fill='%23f59e0b'/%3E%3Ctext x='40' y='48' text-anchor='middle' fill='white' font-size='24' font-weight='bold'%3EP%3C/text%3E%3Ctext x='85' y='25' fill='%23f59e0b' font-size='14' font-weight='bold'%3EPALLETS LIQUIDATION%3C/text%3E%3Ctext x='85' y='45' fill='%23f59e0b' font-size='14' font-weight='bold'%3ECENTER%3C/text%3E%3C/svg%3E";
                }}
              />
            </Link>

            {/* Search Bar - Exactly like original with rounded design */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="flex rounded-full overflow-hidden border border-gray-300">
                <Select>
                  <SelectTrigger className="w-48 rounded-none border-0 bg-gray-100 text-gray-700 text-sm font-medium">
                    <SelectValue placeholder="SELECT CATEGORY" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="electronics">Electronic Pallets/Truckload Liquidation</SelectItem>
                    <SelectItem value="clothes">Clothes</SelectItem>
                    <SelectItem value="shoes">Shoe Pallets/Truckload</SelectItem>
                    <SelectItem value="cosmetics">Mix Cosmetic</SelectItem>
                    <SelectItem value="general">General Merchandise</SelectItem>
                    <SelectItem value="tools">Tools</SelectItem>
                    <SelectItem value="massage-chair">Massage Chair</SelectItem>
                    <SelectItem value="housewares">Housewares</SelectItem>
                    <SelectItem value="mystery-boxes">Mystery Boxes</SelectItem>
                  </SelectContent>
                </Select>
                <Input 
                  placeholder="Search for products" 
                  className="rounded-none border-0 flex-1 text-gray-700"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 rounded-none px-6 text-white border-0">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right Side - Login, Wishlist, Cart exactly like original */}
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <Button variant="ghost" className="flex flex-col items-center p-2 text-white hover:text-gray-200">
                  <User className="h-5 w-5 mb-1" />
                  <span className="text-xs font-medium">LOGIN / REGISTER</span>
                </Button>
              </div>
              
              <div className="text-center">
                <Button variant="ghost" className="flex flex-col items-center p-2 text-white hover:text-gray-200 relative">
                  <Heart className="h-5 w-5 mb-1" />
                  <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-orange-500 border-0">
                    0
                  </Badge>
                  <span className="text-xs">Wishlist</span>
                </Button>
              </div>
              
              <div className="text-center">
                <Button variant="ghost" className="flex flex-col items-center p-2 text-white hover:text-gray-200 relative">
                  <ShoppingCart className="h-5 w-5 mb-1" />
                  <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-orange-500 border-0">
                    0
                  </Badge>
                  <span className="text-xs">Cart</span>
                </Button>
              </div>
              
              <div className="text-center">
                <div className="flex items-center">
                  <span className="text-sm text-white">0 items/</span>
                  <span className="text-lg font-bold text-white">$0.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Orange background exactly like original */}
      <nav className="bg-orange-500 py-3" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-8">
            <Link to="/" className="text-white font-semibold hover:text-orange-100 transition-colors text-sm uppercase tracking-wide">
              HOME
            </Link>
            <Link to="/shop" className="text-white font-semibold hover:text-orange-100 transition-colors text-sm uppercase tracking-wide">
              SHOP
            </Link>
            <Link to="/faq" className="text-white font-semibold hover:text-orange-100 transition-colors text-sm uppercase tracking-wide">
              FAQS
            </Link>
            <Link to="/about" className="text-white font-semibold hover:text-orange-100 transition-colors text-sm uppercase tracking-wide">
              ABOUT US
            </Link>
            <Link to="/privacy-policy" className="text-white font-semibold hover:text-orange-100 transition-colors text-sm uppercase tracking-wide">
              PRIVACY POLICY
            </Link>
            <Link to="/contact" className="text-white font-semibold hover:text-orange-100 transition-colors text-sm uppercase tracking-wide">
              CONTACT US
            </Link>
            <Link to="/blog" className="text-white font-semibold hover:text-orange-100 transition-colors text-sm uppercase tracking-wide">
              BLOG
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;