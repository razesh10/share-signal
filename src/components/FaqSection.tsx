
import React from 'react';
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How can I subscribe to Insight News?",
    answer: "You can subscribe to Insight News by clicking on the 'Subscribe' button at the top of our website. We offer both free and premium subscription options, with various benefits including ad-free reading, exclusive content, and early access to special features."
  },
  {
    question: "What sets Insight News apart from other news outlets?",
    answer: "Insight News is committed to delivering balanced, in-depth reporting that goes beyond headlines. We focus on providing context, analysis, and multiple perspectives on every story. Our team of experienced journalists adheres to the highest standards of fact-checking and editorial integrity."
  },
  {
    question: "How can I submit a tip or story idea?",
    answer: "We welcome tips and story ideas from our readers. You can submit these through our Contact form, or by emailing tips@insightnews.com. While we can't guarantee coverage of every submission, our editorial team reviews all incoming tips and follows up on those that align with our coverage areas."
  },
  {
    question: "Does Insight News offer content in languages other than English?",
    answer: "Currently, Insight News publishes primarily in English. However, we are working on expanding our coverage to include additional languages in the near future. Subscribe to our newsletter to be notified when these options become available."
  },
  {
    question: "How can I access archived articles?",
    answer: "All subscribers can access our complete archive of past articles. Simply use the search function at the top of our website and apply the date filters to find older content. Premium subscribers have additional features like advanced search options and downloadable archives."
  },
  {
    question: "What is your policy on corrections and updates?",
    answer: "We are committed to accuracy in our reporting. When we discover an error or when new information emerges that significantly changes a story, we promptly issue corrections or updates. These are clearly marked within the article, with an explanation of what has been changed."
  },
];

const FaqSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-accent font-semibold uppercase tracking-wider"
          >
            Common Questions
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subheading"
          >
            Find answers to common questions about our services, subscriptions, and policies.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-card rounded-lg p-8 shadow-soft"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-lg hover:text-accent transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
          
          <div className="mt-10 text-center">
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for? Contact our support team for assistance.
            </p>
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white transition-colors duration-300">
              Contact Support
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
