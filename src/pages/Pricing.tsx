
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { CheckIcon, HelpCircleIcon, XIcon } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Define pricing plans
const pricingPlans = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Essential news access for informed individuals',
    monthlyPrice: 5.99,
    yearlyPrice: 59.99,
    features: [
      'Daily news updates',
      'Basic article access',
      'Mobile app access',
      'Email newsletters',
      '1 saved article list',
    ],
    limitations: [
      'No premium content',
      'Limited article history',
      'Standard support only',
      'Contains advertisements',
    ],
    cta: 'Start with Basic',
    mostPopular: false,
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Enhanced experience for news enthusiasts',
    monthlyPrice: 12.99,
    yearlyPrice: 129.99,
    features: [
      'Everything in Basic',
      'Premium article access',
      'Ad-free reading experience',
      'Downloadable content',
      'Priority customer support',
      'Multiple saved article lists',
      '1 year article history',
    ],
    limitations: [
      'No expert analysis',
      'Limited research tools',
    ],
    cta: 'Go Premium',
    mostPopular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Complete access for professionals and organizations',
    monthlyPrice: 24.99,
    yearlyPrice: 249.99,
    features: [
      'Everything in Premium',
      'Full archive access',
      'Expert analysis & reports',
      'Early access to features',
      'Advanced research tools',
      'Team account management',
      'API access',
      'Dedicated account manager',
    ],
    limitations: [],
    cta: 'Contact Sales',
    mostPopular: false,
  }
];

// FAQ items
const faqItems = [
  {
    question: "How does billing work?",
    answer: "We offer both monthly and annual billing options. With annual billing, you save approximately 15-20% compared to monthly payments. Your subscription will automatically renew at the end of your billing cycle unless you choose to cancel."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference immediately. When downgrading, your new rate will take effect at the next billing cycle."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 7-day free trial for new subscribers. You can experience all the features of the Premium plan during your trial period. No credit card is required to start your trial."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. For Enterprise plans, we also support invoice-based payments with net-30 terms."
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription at any time from your account settings. After cancellation, you'll continue to have access until the end of your current billing period. We don't offer refunds for partial billing periods."
  },
  {
    question: "Do you offer discounts for students or non-profits?",
    answer: "Yes, we offer special pricing for students, educators, and non-profit organizations. Please contact our support team with valid credentials to apply for these special rates."
  }
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Badge className="mb-4 bg-accent text-white px-3 py-1">Plans for Everyone</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Subscribe for Full Access
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-12 mx-auto max-w-2xl">
                Choose the perfect plan to stay informed with premium content, expert analysis, and exclusive features.
              </p>
              
              <div className="flex items-center justify-center mb-16">
                <span className={`mr-3 text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Monthly
                </span>
                <Switch
                  checked={isAnnual}
                  onCheckedChange={setIsAnnual}
                  className="data-[state=checked]:bg-accent"
                />
                <span className={`ml-3 text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Annually <Badge className="ml-1.5 bg-accent/20 text-accent font-normal">Save 20%</Badge>
                </span>
              </div>
            </motion.div>
            
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, idx) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                  className={`relative rounded-xl overflow-hidden bg-card shadow-soft p-6 border ${
                    plan.mostPopular ? 'border-accent' : 'border-border'
                  }`}
                >
                  {plan.mostPopular && (
                    <div className="absolute top-0 right-0 left-0 bg-accent text-white text-xs font-semibold text-center py-1">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`${plan.mostPopular ? 'pt-4' : ''}`}>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-muted-foreground mt-2 mb-5">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold">
                        ${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground ml-1">
                        {isAnnual ? '/year' : '/month'}
                      </span>
                      
                      {isAnnual && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Equivalent to ${(plan.yearlyPrice / 12).toFixed(2)}/month
                        </p>
                      )}
                    </div>
                    
                    <Button 
                      className={`w-full mb-8 ${
                        plan.mostPopular 
                          ? 'bg-accent hover:bg-accent/90 text-white' 
                          : ''
                      }`}
                      variant={plan.mostPopular ? 'default' : 'outline'}
                    >
                      {plan.cta}
                    </Button>
                    
                    <div className="space-y-4">
                      <p className="text-sm font-semibold">Includes:</p>
                      <ul className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckIcon size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {plan.limitations.length > 0 && (
                        <>
                          <p className="text-sm font-semibold pt-2">Limitations:</p>
                          <ul className="space-y-3">
                            {plan.limitations.map((limitation, index) => (
                              <li key={index} className="flex items-start">
                                <XIcon size={16} className="text-muted-foreground mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Enterprise Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-4 bg-accent text-white px-3 py-1">For Organizations</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a custom solution?</h2>
                <p className="text-muted-foreground mb-8">
                  We offer tailored subscription options for businesses, educational institutions, libraries, and government organizations with custom features, team management, and volume pricing.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckIcon size={18} className="text-accent mr-2 mt-0.5" />
                    <span>Multi-user account management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon size={18} className="text-accent mr-2 mt-0.5" />
                    <span>Custom analytics and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon size={18} className="text-accent mr-2 mt-0.5" />
                    <span>Volume discounts for larger teams</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon size={18} className="text-accent mr-2 mt-0.5" />
                    <span>API access for content integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon size={18} className="text-accent mr-2 mt-0.5" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
                <Button className="bg-accent hover:bg-accent/90 text-white" size="lg">
                  Contact Our Sales Team
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=2274" 
                  alt="Enterprise team collaboration" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-primary">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our subscription plans and payment options.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto bg-card rounded-xl p-6 shadow-soft"
            >
              <Accordion type="single" collapsible className="space-y-2">
                {faqItems.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mt-12 p-6 bg-secondary rounded-xl max-w-2xl mx-auto"
            >
              <div className="flex items-center justify-center mb-4">
                <HelpCircleIcon size={24} className="text-accent mr-2" />
                <h3 className="text-xl font-semibold">Still have questions?</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Our support team is ready to help you with any other questions about our subscription plans.
              </p>
              <Button variant="outline" className="bg-card hover:bg-secondary/70">
                Contact Support
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
