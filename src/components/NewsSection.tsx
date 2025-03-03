
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";
import { Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Sample news data
const categories = {
  "Latest": [
    {
      id: 1,
      title: "New Climate Policy Expected to Reshape Energy Markets",
      excerpt: "The latest climate policy is expected to have a significant impact on global energy markets, with renewable energy stocks surging.",
      category: "Politics",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
      date: "3 hours ago"
    },
    {
      id: 2,
      title: "Tech Giants Announce Breakthrough in Quantum Computing",
      excerpt: "Major technology companies have announced a significant advancement in quantum computing technology that could revolutionize data processing.",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
      date: "5 hours ago"
    },
    {
      id: 3,
      title: "Global Markets React to New Economic Data",
      excerpt: "Stock markets worldwide have shown mixed reactions following the release of unexpected economic growth figures.",
      category: "Finance",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
      date: "7 hours ago"
    },
  ],
  "Politics": [
    {
      id: 4,
      title: "New Legislation Aims to Address Climate Change",
      excerpt: "Lawmakers have introduced a comprehensive bill targeting greenhouse gas emissions and promoting renewable energy sources.",
      category: "Politics",
      image: "https://images.unsplash.com/photo-1464376503593-30bdc6f42028?auto=format&fit=crop&q=80&w=800",
      date: "1 day ago"
    },
    {
      id: 5,
      title: "International Summit to Focus on Global Cooperation",
      excerpt: "World leaders are set to meet next month to discuss pressing global challenges and strengthen international partnerships.",
      category: "Politics",
      image: "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?auto=format&fit=crop&q=80&w=800",
      date: "2 days ago"
    },
  ],
  "Technology": [
    {
      id: 6,
      title: "AI Breakthrough Promises Medical Diagnosis Revolution",
      excerpt: "A new artificial intelligence system has demonstrated unprecedented accuracy in diagnosing complex medical conditions.",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
      date: "12 hours ago"
    },
    {
      id: 7,
      title: "Electric Vehicle Adoption Accelerates Globally",
      excerpt: "Sales of electric vehicles have surged worldwide, signaling a potential tipping point in the automotive industry's shift to sustainable transportation.",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1520101244246-293f77ffc39e?auto=format&fit=crop&q=80&w=800",
      date: "1 day ago"
    },
  ],
  "Business": [
    {
      id: 8,
      title: "Major Merger Creates New Industry Leader",
      excerpt: "Two leading companies have announced a merger that is expected to reshape the competitive landscape in their industry.",
      category: "Business",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
      date: "2 days ago"
    },
    {
      id: 9,
      title: "Startup Raises Record Funding for Sustainable Products",
      excerpt: "An innovative startup has secured unprecedented funding to scale its production of environmentally friendly consumer goods.",
      category: "Business",
      image: "https://images.unsplash.com/photo-1664575196644-808978af9b1f?auto=format&fit=crop&q=80&w=800",
      date: "3 days ago"
    },
  ],
};

const NewsSection = () => {
  return (
    <section id="news" className="section-padding bg-primary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-accent font-semibold uppercase tracking-wider"
          >
            Stay Informed
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            Latest News & Updates
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subheading"
          >
            Explore the most important stories happening around the world, curated by our expert editors.
          </motion.p>
        </div>

        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-secondary p-1 mb-12 max-w-md mx-auto">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  cn(
                    'w-full rounded-lg py-2.5 text-sm font-medium transition-all duration-200',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-secondary ring-white/60',
                    selected
                      ? 'bg-white shadow text-foreground'
                      : 'text-muted-foreground hover:bg-white/[0.12] hover:text-foreground'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={cn(
                  'rounded-xl',
                  'focus:outline-none'
                )}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {posts.map((post) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <a href="#" className="block rounded-lg overflow-hidden bg-card shadow-soft hover-scale">
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-foreground">
                              {post.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="flex items-center text-muted-foreground text-sm mb-3">
                            <Clock size={14} className="mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-200">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center text-sm font-medium text-accent">
                            Read More <ArrowRight size={14} className="ml-1" />
                          </div>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white transition-colors duration-300">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
