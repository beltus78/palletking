import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, Package, Headphones, CreditCard, Truck } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link for direct email sending
    const subject = `Contact Form: ${formData.subject}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:palletkingmj01@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Email Client Opening",
      description: "Your default email client will open with the pre-filled message.",
    });
    
    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main role="main">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-900 to-amber-800 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              For nearly 10 years, we have supplied countless businesses with lots of liquidation pallets direct from the source. 
              Simply put, we are a direct liquidation supplier of pallets of merchandise.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-orange-main">CONTACT US</h2>
                
                <div className="space-y-6 mb-8">
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-main/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-orange-main" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">palletkingmj01@gmail.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Free Standard Shipping</h4>
                    <p className="text-green-700">on all orders above $1000</p>
                  </div>
                </div>

                {/* Service Features */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 text-center">
                    <Package className="h-8 w-8 text-orange-main mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Hundreds Of Pallets</h4>
                    <p className="text-sm text-gray-600">Always in stock</p>
                  </Card>
                  
                  <Card className="p-4 text-center">
                    <Headphones className="h-8 w-8 text-orange-main mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">24/7 Support</h4>
                    <p className="text-sm text-gray-600">We are available 24/7</p>
                  </Card>
                  
                  <Card className="p-4 text-center">
                    <CreditCard className="h-8 w-8 text-orange-main mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Online Payment</h4>
                    <p className="text-sm text-gray-600">Many payment methods</p>
                  </Card>
                  
                  <Card className="p-4 text-center">
                    <Truck className="h-8 w-8 text-orange-main mx-auto mb-2" />
                    <h4 className="font-semibold mb-1">Fast Delivery</h4>
                    <p className="text-sm text-gray-600">Always on time</p>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-orange-main">
                    <Send className="h-6 w-6" />
                    SEND US AN EMAIL
                  </CardTitle>
                  <p className="text-gray-600">
                    Do you have questions about how we can help your company? Send us an email and we'll get in touch shortly.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          placeholder="Your full name"
                          className="border-gray-300"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          placeholder="your@email.com"
                          className="border-gray-300"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+1 (541) 515-7780"
                        className="border-gray-300"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                        placeholder="Brief description of your inquiry"
                        className="border-gray-300"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                        placeholder="Please provide details about your inquiry..."
                        className="min-h-[120px] border-gray-300"
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-orange-main hover:bg-orange-600 text-white">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                    
                    <p className="text-sm text-gray-500 text-center">
                      We typically respond within 24 hours during business days.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;