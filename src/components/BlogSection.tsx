
import React from 'react';
import { motion } from "framer-motion";
import { CalendarIcon, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from 'date-fns';

const blogs = [
  {
    id: 1,
    title: "The Future of Renewable Energy: Trends to Watch",
    excerpt: "Exploring the latest innovations in sustainable energy production and storage, and what they mean for the future.",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2070",
    date: new Date("2023-05-15"),
    author: "Elena Rodriguez",
    readTime: "6 min read"
  },
  {
    id: 2,
    title: "Understanding Global Supply Chain Disruptions",
    excerpt: "Analyzing the factors behind recent global supply chain issues and their impact on economies worldwide.",
    category: "Economy",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80&w=2070",
    date: new Date("2023-06-22"),
    author: "Jonathan Tamar",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "The Rise of Digital Health Platforms",
    excerpt: "How technology is transforming healthcare delivery and improving patient outcomes around the world.",
    category: "Health",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070",
    date: new Date("2023-07-05"),
    author: "Sarah Nguyen",
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "Cybersecurity Challenges in the Age of Remote Work",
    excerpt: "Examining the new security threats that have emerged as more organizations embrace remote work arrangements.",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1563163447-bce6e5b18b4c?auto=format&fit=crop&q=80&w=2070",
    date: new Date("2023-07-18"),
    author: "Michael Chen",
    readTime: "7 min read"
  }
];

const BlogSection = () => {
  return (
    <section id="blogs" className="section-padding bg-primary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-accent font-semibold uppercase tracking-wider"
          >
            Insights & Analysis
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            Featured Articles
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subheading"
          >
            Dive deep into thought-provoking analysis and expert opinions on the most important topics.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col h-full"
            >
              <a href="#" className="block rounded-lg overflow-hidden bg-card shadow-soft hover-scale h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-accent text-white">
                      {blog.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-muted-foreground text-sm mb-3">
                    <div className="flex items-center">
                      <CalendarIcon size={14} className="mr-1" />
                      <span>{format(blog.date, 'MMM dd, yyyy')}</span>
                    </div>
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      <span>{blog.author}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-200 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-3 flex-grow">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">{blog.readTime}</span>
                    <span className="flex items-center text-sm font-medium text-accent">
                      Read Article <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white transition-colors duration-300">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
