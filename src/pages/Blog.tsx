
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Calendar, User, ArrowRight } from "lucide-react";
import { format } from 'date-fns';

const blogCategories = [
  "All", "Technology", "Business", "Politics", "Health", "Environment", "Science", "Culture"
];

const blogArticles = [
  {
    id: 1,
    title: "The Future of Renewable Energy: Trends to Watch",
    excerpt: "Exploring the latest innovations in sustainable energy production and storage, and what they mean for the future.",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2070",
    date: new Date("2023-05-15"),
    author: "Elena Rodriguez",
    readTime: "6 min read",
    featured: true
  },
  {
    id: 2,
    title: "Understanding Global Supply Chain Disruptions",
    excerpt: "Analyzing the factors behind recent global supply chain issues and their impact on economies worldwide.",
    category: "Business",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80&w=2070",
    date: new Date("2023-06-22"),
    author: "Jonathan Tamar",
    readTime: "8 min read",
    featured: true
  },
  {
    id: 3,
    title: "The Rise of Digital Health Platforms",
    excerpt: "How technology is transforming healthcare delivery and improving patient outcomes around the world.",
    category: "Health",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070",
    date: new Date("2023-07-05"),
    author: "Sarah Nguyen",
    readTime: "5 min read",
    featured: false
  },
  {
    id: 4,
    title: "Cybersecurity Challenges in the Age of Remote Work",
    excerpt: "Examining the new security threats that have emerged as more organizations embrace remote work arrangements.",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1563163447-bce6e5b18b4c?auto=format&fit=crop&q=80&w=2070",
    date: new Date("2023-07-18"),
    author: "Michael Chen",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 5,
    title: "The Economics of Climate Change: A Global Perspective",
    excerpt: "An in-depth analysis of how climate change is affecting economies and what policy measures could mitigate its impact.",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1569163139599-0cf9e95efebf?auto=format&fit=crop&q=80&w=2070",
    date: new Date("2023-08-03"),
    author: "Robert Williams",
    readTime: "10 min read",
    featured: false
  },
  {
    id: 6,
    title: "Advances in AI That Are Transforming Medical Research",
    excerpt: "How artificial intelligence is accelerating medical discoveries and reshaping the landscape of healthcare research.",
    category: "Science",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2070",
    date: new Date("2023-08-15"),
    author: "Linda Kumar",
    readTime: "9 min read",
    featured: false
  },
  {
    id: 7,
    title: "Cultural Shifts in the Post-Pandemic Workplace",
    excerpt: "Examining how corporate culture and employee expectations have evolved following the global pandemic.",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2070",
    date: new Date("2023-08-30"),
    author: "David Martinez",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 8,
    title: "The Future of Transportation: Beyond Electric Vehicles",
    excerpt: "Looking at emerging technologies that could reshape how we think about mobility and transportation infrastructure.",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1558522195-e1201b090344?auto=format&fit=crop&q=80&w=2070",
    date: new Date("2023-09-10"),
    author: "Alice Johnson",
    readTime: "7 min read",
    featured: false
  }
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Filter articles based on search and category
  const filteredArticles = blogArticles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Get featured articles
  const featuredArticles = blogArticles.filter(article => article.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-accent text-white py-16 md:py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Insights & Analysis
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-10">
                Dive deep into our thought-provoking articles covering the most important topics in business, technology, and beyond.
              </p>
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent" />
                <Input
                  type="text"
                  placeholder="Search for articles..."
                  className="pl-10 bg-white text-foreground rounded-full h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Featured Articles */}
        <section className="py-16 bg-primary">
          <div className="container-custom">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12"
            >
              Featured Articles
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredArticles.map((article, idx) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <a href="/blog/1" className="block rounded-xl overflow-hidden bg-card shadow-soft hover-scale">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-accent text-white">
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between text-muted-foreground text-sm mb-3">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{format(article.date, 'MMM dd, yyyy')}</span>
                        </div>
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          <span>{article.author}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors duration-200">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                        <span className="text-sm text-muted-foreground">{article.readTime}</span>
                        <span className="flex items-center text-sm font-medium text-accent">
                          Read Article <ArrowRight size={14} className="ml-1" />
                        </span>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* All Articles */}
        <section className="py-16 bg-secondary/30">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-6 md:mb-0"
              >
                All Articles
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="w-full md:w-auto"
              >
                <Tabs defaultValue="All" className="w-full">
                  <TabsList className="h-auto flex flex-wrap bg-background p-1 w-full md:w-auto overflow-x-auto">
                    {blogCategories.map(category => (
                      <TabsTrigger 
                        key={category} 
                        value={category}
                        onClick={() => setSelectedCategory(category)}
                        className="py-2 px-4 whitespace-nowrap"
                      >
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </motion.div>
            </div>
            
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, idx) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <a href="/blog/1" className="flex flex-col h-full rounded-xl overflow-hidden bg-card shadow-soft hover-scale">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-foreground">
                            {article.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <div className="flex items-center justify-between text-muted-foreground text-sm mb-3">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            <span>{format(article.date, 'MMM dd, yyyy')}</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-200 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 text-sm line-clamp-3 flex-grow">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                          <span className="text-xs text-muted-foreground">{article.readTime}</span>
                          <span className="flex items-center text-sm font-medium text-accent">
                            Read Article <ArrowRight size={14} className="ml-1" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl mb-2">No articles found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            )}
            
            {filteredArticles.length > 0 && (
              <div className="mt-12 text-center">
                <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white transition-colors duration-300">
                  Load More Articles
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
