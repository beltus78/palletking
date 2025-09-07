import { Search, ShoppingCart, User, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header role="banner">
      {/* Top Bar - Dark navy like original */}
      <div className="bg-navy-main text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span itemProp="telephone">Phone: +1(541)-515-7780</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/contact" className="hover:text-orange-main transition-colors">CONTACT US</Link>
            <Link to="/faq" className="hover:text-orange-main transition-colors">FAQS</Link>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs">f</span>
              </span>
              <span className="w-4 h-4 bg-blue-400 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs">t</span>
              </span>
              <span className="w-4 h-4 bg-green-500 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs">w</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - White background like original */}
      <div className="bg-white border-b border-gray-200 py-4 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-navy-main rounded-lg flex items-center justify-center mr-3">
                  <span className="text-orange-main font-bold text-lg">P</span>
                </div>
                <div>
                  <div className="text-orange-main font-bold text-xl">PALLETS LIQUIDATION</div>
                  <div className="text-orange-main font-bold text-xl">CENTER</div>
                </div>
              </div>
            </Link>

            {/* Search Bar - Exact styling from original */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="flex rounded-full overflow-hidden">
                <Select>
                  <SelectTrigger className="w-48 rounded-none border-r-0 bg-gray-100 border-gray-300">
                    <SelectValue placeholder="SELECT CATEGORY" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="cosmetics">Cosmetics</SelectItem>
                    <SelectItem value="health">Health & Beauty</SelectItem>
                    <SelectItem value="household">Household Items</SelectItem>
                    <SelectItem value="apparel">Apparel</SelectItem>
                    <SelectItem value="general">General Merchandise</SelectItem>
                  </SelectContent>
                </Select>
                <Input 
                  placeholder="Search for products" 
                  className="rounded-none border-x-0 bg-white border-gray-300"
                />
                <Button className="bg-orange-main hover:bg-orange-600 rounded-none px-6 text-white">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Account & Cart - Matching original layout */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="flex items-center space-x-2 text-gray-700">
                <User className="h-4 w-4" />
                <span className="text-sm font-semibold">LOGIN / REGISTER</span>
              </Button>
              <Button variant="ghost" size="sm" className="relative text-gray-700">
                <Heart className="h-4 w-4" />
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-orange-main">
                  0
                </Badge>
              </Button>
              <Button variant="ghost" size="sm" className="relative text-gray-700">
                <ShoppingCart className="h-4 w-4" />
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-orange-main">
                  0
                </Badge>
              </Button>
              <span className="text-sm font-semibold text-gray-700">$0.00</span>
            </div>
          </div>

          {/* Navigation - Orange background like original */}
          <nav className="bg-orange-main py-3 -mx-4 px-4" role="navigation" aria-label="Main navigation">
            <div className="flex items-center justify-center space-x-8">
              <Link to="/" className="text-white font-semibold hover:text-gray-200 transition-colors">HOME</Link>
              <Link to="/shop" className="text-white font-semibold hover:text-gray-200 transition-colors">SHOP</Link>
              <Link to="/faq" className="text-white font-semibold hover:text-gray-200 transition-colors">FAQS</Link>
              <Link to="/about" className="text-white font-semibold hover:text-gray-200 transition-colors">ABOUT US</Link>
              <Link to="/privacy-policy" className="text-white font-semibold hover:text-gray-200 transition-colors">PRIVACY POLICY</Link>
              <Link to="/contact" className="text-white font-semibold hover:text-gray-200 transition-colors">CONTACT US</Link>
              <Link to="/blog" className="text-white font-semibold hover:text-gray-200 transition-colors">BLOG</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;