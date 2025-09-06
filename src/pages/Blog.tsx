import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, User, ArrowRight, Search, TrendingUp, Lightbulb, DollarSign } from "lucide-react";
import { useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Ultimate Guide to Starting Your Liquidation Business",
    excerpt: "Learn the essential steps to launch a successful liquidation reselling business from industry experts.",
    content: "Starting a liquidation business can be highly profitable when done correctly...",
    author: "Mike Johnson",
    date: "2024-01-15",
    category: "Business Tips",
    readTime: "8 min read",
    image: "/api/placeholder/400/200",
    tags: ["liquidation", "business", "startup", "reselling"]
  },
  {
    id: 2,
    title: "Top 10 Most Profitable Liquidation Categories in 2024",
    excerpt: "Discover which product categories offer the highest profit margins and fastest turnover rates.",
    content: "Electronics, apparel, and home goods continue to dominate the liquidation market...",
    author: "Sarah Williams",
    date: "2024-01-12",
    category: "Market Analysis",
    readTime: "6 min read",
    image: "/api/placeholder/400/200",
    tags: ["profitable", "categories", "2024", "analysis"]
  },
  {
    id: 3,
    title: "How to Evaluate Liquidation Pallets Before Buying",
    excerpt: "Master the art of pallet evaluation to maximize your investment returns and minimize risks.",
    content: "Evaluating liquidation pallets requires understanding manifest details, condition grades...",
    author: "David Chen",
    date: "2024-01-10",
    category: "Buying Guide",
    readTime: "10 min read",
    image: "/api/placeholder/400/200",
    tags: ["evaluation", "pallets", "buying", "tips"]
  },
  {
    id: 4,
    title: "Amazon Return Pallets: What You Need to Know",
    excerpt: "Understanding Amazon return pallets can unlock significant profit opportunities for resellers.",
    content: "Amazon return pallets represent one of the largest sources of liquidation merchandise...",
    author: "Lisa Rodriguez",
    date: "2024-01-08",
    category: "Product Insights",
    readTime: "7 min read",
    image: "/api/placeholder/400/200",
    tags: ["amazon", "returns", "pallets", "reselling"]
  },
  {
    id: 5,
    title: "Pricing Strategies for Liquidation Merchandise",
    excerpt: "Learn proven pricing strategies that maximize profits while ensuring quick inventory turnover.",
    content: "Effective pricing is crucial for liquidation success. Here are tested strategies...",
    author: "Tom Anderson",
    date: "2024-01-05",
    category: "Sales Strategy",
    readTime: "9 min read",
    image: "/api/placeholder/400/200",
    tags: ["pricing", "strategy", "profits", "sales"]
  },
  {
    id: 6,
    title: "Building Your Online Liquidation Store",
    excerpt: "Step-by-step guide to creating an effective online presence for your liquidation business.",
    content: "In today's digital marketplace, having a strong online presence is essential...",
    author: "Jennifer Kim",
    date: "2024-01-03",
    category: "E-commerce",
    readTime: "12 min read",
    image: "/api/placeholder/400/200",
    tags: ["online", "store", "ecommerce", "digital"]
  }
];

const categories = [
  { value: "all", label: "All Categories" },
  { value: "business-tips", label: "Business Tips" },
  { value: "market-analysis", label: "Market Analysis" },
  { value: "buying-guide", label: "Buying Guide" },
  { value: "product-insights", label: "Product Insights" },
  { value: "sales-strategy", label: "Sales Strategy" },
  { value: "e-commerce", label: "E-commerce" }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || 
                           post.category.toLowerCase().replace(" ", "-") === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case "oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "newest":
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "business tips":
        return <Lightbulb className="h-4 w-4" />;
      case "market analysis":
        return <TrendingUp className="h-4 w-4" />;
      case "sales strategy":
        return <DollarSign className="h-4 w-4" />;
      default:
        return <ArrowRight className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Liquidation Business Blog
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Expert insights, tips, and strategies for liquidation success
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {sortedPosts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-business transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={sortedPosts[0].image}
                    alt={sortedPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 flex items-center gap-1"
                  >
                    {getCategoryIcon(sortedPosts[0].category)}
                    {sortedPosts[0].category}
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {sortedPosts[0].author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(sortedPosts[0].date)}
                    </div>
                    <span>{sortedPosts[0].readTime}</span>
                  </div>
                  
                  <CardTitle className="text-2xl mb-4 hover:text-primary transition-colors">
                    {sortedPosts[0].title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground mb-6">
                    {sortedPosts[0].excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {sortedPosts[0].tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-fit">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Recent Articles</h2>
            <p className="text-muted-foreground">
              Showing {sortedPosts.length - 1} articles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-business transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-3 left-3 flex items-center gap-1"
                  >
                    {getCategoryIcon(post.category)}
                    {post.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.date)}
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary">
                      Read More
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Industry Insights
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest liquidation business tips, 
            market analysis, and exclusive deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-white text-foreground"
            />
            <Button variant="secondary" className="text-primary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;