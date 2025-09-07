import { Search, ShoppingCart, User, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>Phone: +1(541)-515-7780</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/contact" className="hover:text-accent transition-colors">CONTACT US</Link>
            <Link to="/faq" className="hover:text-accent transition-colors">FAQS</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b border-border py-4 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Pallets Liquidation Center" className="h-12 w-auto" />
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="flex">
                <Select>
                  <SelectTrigger className="w-48 rounded-r-none border-r-0">
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
                  className="rounded-none border-x-0"
                />
                <Button className="bg-accent hover:bg-accent-hover rounded-l-none px-6">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Account & Cart */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span className="text-sm">LOGIN / REGISTER</span>
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <Heart className="h-4 w-4" />
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  0
                </Badge>
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4" />
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  0
                </Badge>
              </Button>
              <span className="text-sm font-semibold">$0.00</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center justify-center space-x-8">
            <Link to="/" className="text-accent font-semibold border-b-2 border-accent pb-2">HOME</Link>
            <Link to="/shop" className="text-foreground hover:text-accent transition-colors">SHOP</Link>
            <Link to="/faq" className="text-foreground hover:text-accent transition-colors">FAQS</Link>
            <Link to="/about" className="text-foreground hover:text-accent transition-colors">ABOUT US</Link>
            <Link to="/privacy-policy" className="text-foreground hover:text-accent transition-colors">PRIVACY POLICY</Link>
            <Link to="/contact" className="text-foreground hover:text-accent transition-colors">CONTACT US</Link>
            <Link to="/blog" className="text-foreground hover:text-accent transition-colors">BLOG</Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;