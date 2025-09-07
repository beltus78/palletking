import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, HelpCircle, Phone, Mail } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    category: "SHOPPING INFORMATION",
    questions: [
      {
        question: "WHAT ARE LIQUIDATION PALLETS?",
        answer: "Liquidation pallets are part of the reverse logistics industry. Reverse logistics is when companies bid for direct contracts with retailers to acquire liquidation contracts. Liquidation contracts yield bulk merchandise which then resells to secondary retailers, wholesalers, or other resellers. This bulk merchandise is often bought by the pallet or gaylord."
      },
      {
        question: "What type merchandise can I buy by the pallet?",
        answer: "Our customers buy pallets of merchandise from over 100 different categories. Most of the items we carry are overstock or shelf-pulls. Some categories include: Pallets of Food/Candy, clothing and accessories, electronics, health and personal care products, home and garden supplies, sporting goods, outdoor gear and apparel, shoes, handbags and accessories, luggage and travel accessories, sports equipment, toys and games."
      },
      {
        question: "What makes Pallets Liquidation Center different from other liquidation companies?",
        answer: "Pallets Liquidation Center has been in the wholesale industry for nearly 10 years. We've managed to tap into the supply chain of some largest retailers and manufacturers in North America. We offer our partners access to tier-1 brands and private label goods at unbeatable prices. Our staff is made up of industry experts that will help you find the right pallet of merchandise to meet your needs."
      }
    ]
  },
  {
    category: "PAYMENT & SHIPPING",
    questions: [
      {
        question: "How much does shipping cost?",
        answer: "Shipping costs vary based on location, pallet size, weight, and quantity. We offer competitive shipping rates and can arrange freight shipping for large orders. You can also arrange your own shipping or pick up pallets in person."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept multiple payment methods including credit cards, bank wire transfers, Apple Pay, Bitcoin, and we also offer line of credit options for qualified customers. Payment is typically required before shipment."
      },
      {
        question: "Do you offer bulk discounts?",
        answer: "Yes, we offer progressive discounts for larger quantities. Truckload purchases receive the best pricing. Contact our sales team for custom quotes on bulk orders and ongoing supply agreements."
      }
    ]
  },
  {
    category: "MERCHANDISE QUALITY",
    questions: [
      {
        question: "What condition is the merchandise in?",
        answer: "Our merchandise consists of customer returns, surplus inventory, shelf pulls, and overstock. Condition varies and may include new, like-new, and items with minor defects. Each pallet listing includes condition details."
      },
      {
        question: "Can I see what's in a pallet before buying?",
        answer: "We provide general descriptions and categories for each pallet, but specific item lists are not available as pallets contain mixed merchandise. This is part of the liquidation model that allows for low pricing."
      },
      {
        question: "Do you offer any guarantees?",
        answer: "While we cannot guarantee specific items or conditions due to the nature of liquidation merchandise, we stand behind our descriptions and work to ensure customer satisfaction. We're transparent about what to expect from our pallets."
      }
    ]
  },
  {
    category: "GETTING STARTED",
    questions: [
      {
        question: "How do I start buying liquidation pallets?",
        answer: "To start buying liquidation pallets, browse our shop section, select the pallets you're interested in, and add them to your cart. You can purchase individual pallets or contact us for bulk pricing on truckload quantities. We recommend starting with smaller quantities to understand the merchandise before scaling up."
      },
      {
        question: "Do I need a business license to purchase?",
        answer: "While not always required for individual purchases, we recommend having a business license for tax purposes and to establish wholesale relationships. For bulk orders and truckload purchases, a business license is typically required."
      },
      {
        question: "Can you help with business guidance?",
        answer: "Our experienced team can provide guidance on getting started in the liquidation business, including advice on profitable product categories, pricing strategies, and market insights. We want our customers to succeed."
      }
    ]
  }
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredFAQs = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Find answers to common questions about our liquidation pallets
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or browse all categories below.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredFAQs.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <HelpCircle className="h-6 w-6 text-primary" />
                      {category.category}
                    </h2>
                    
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem 
                          key={`${categoryIndex}-${faqIndex}`} 
                          value={`${categoryIndex}-${faqIndex}`}
                          className="border rounded-lg px-6"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-6">
                            <span className="font-semibold">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-6 text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Still Have Questions?</CardTitle>
                <p className="text-muted-foreground">
                  Our customer support team is here to help you with any additional questions
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center p-6 border rounded-lg">
                    <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Call Us</h3>
                    <p className="text-muted-foreground mb-4">
                      Speak directly with our team
                    </p>
                    <Button variant="outline" size="sm">
                      +1(541)-515-7780
                    </Button>
                  </div>
                  
                  <div className="text-center p-6 border rounded-lg">
                    <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <p className="text-muted-foreground mb-4">
                      Get detailed answers via email
                    </p>
                    <Button variant="outline" size="sm">
                      Send Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Quick Links</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline">Shop Pallets</Button>
            <Button variant="outline">About Us</Button>
            <Button variant="outline">Contact Us</Button>
            <Button variant="outline">Privacy Policy</Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;