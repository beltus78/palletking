import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, UserCheck, FileText, Calendar } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/90 mb-6">
            Your privacy and data protection are our top priorities
          </p>
          <Badge variant="secondary" className="text-sm px-4 py-1">
            Last Updated: January 2024
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">
                  Pallets Liquidation Center ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website or make purchases from us. Please read this privacy policy 
                  carefully. If you do not agree with the terms of this privacy policy, please do not 
                  access the site.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Personal Information</h3>
                  <p className="text-muted-foreground mb-2">
                    We collect information you provide directly to us, such as:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Name, email address, and phone number</li>
                    <li>Billing and shipping addresses</li>
                    <li>Payment information (processed securely)</li>
                    <li>Business information and tax identification</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Automatically Collected Information</h3>
                  <p className="text-muted-foreground mb-2">
                    When you visit our website, we automatically collect:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Pages visited and time spent</li>
                    <li>Referral source</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-primary" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Processing and fulfilling your orders</li>
                  <li>Communicating with you about your purchases</li>
                  <li>Providing customer support</li>
                  <li>Improving our website and services</li>
                  <li>Sending marketing communications (with your consent)</li>
                  <li>Preventing fraud and ensuring security</li>
                  <li>Complying with legal obligations</li>
                  <li>Analyzing website usage and trends</li>
                </ul>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Information Sharing and Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  except in the following circumstances:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Service Providers</h4>
                    <p className="text-sm text-muted-foreground">
                      We may share information with trusted third-party service providers who assist us 
                      in operating our business, such as payment processors, shipping companies, and 
                      customer service platforms.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Legal Requirements</h4>
                    <p className="text-sm text-muted-foreground">
                      We may disclose information when required by law, court order, or government 
                      regulation, or to protect our rights and property.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">Business Transfers</h4>
                    <p className="text-sm text-muted-foreground">
                      In the event of a merger, acquisition, or sale of assets, your information may 
                      be transferred as part of the business transaction.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, or 
                  destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure payment processing</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                </ul>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Your Privacy Rights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your information</li>
                  <li>Portability of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Restriction of processing</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience, 
                  analyze website traffic, and personalize content. You can control cookie settings 
                  through your browser preferences.
                </p>
                <p className="text-muted-foreground">
                  Types of cookies we use include essential cookies for website functionality, 
                  analytics cookies to understand usage patterns, and marketing cookies for 
                  personalized advertising (with your consent).
                </p>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our services are not intended for children under 13 years of age. We do not 
                  knowingly collect personal information from children under 13. If we become 
                  aware that we have collected information from a child under 13, we will take 
                  steps to delete such information promptly.
                </p>
              </CardContent>
            </Card>

            {/* Updates */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Changes to This Privacy Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  changes by posting the new Privacy Policy on this page and updating the "Last 
                  Updated" date. We encourage you to review this Privacy Policy periodically for 
                  any changes.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> palletkingmj01@gmail.com</p>
                  <p><strong>Address:</strong> Pallets Liquidation Center, Florida, USA</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;