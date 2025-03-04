
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, ArrowRight, Search, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample all news data
const allNews = [
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
  {
    id: 10,
    title: "Scientists Discover New Marine Species in Deep Ocean",
    excerpt: "Marine biologists announce the discovery of a previously unknown species during a deep-sea exploration mission.",
    category: "Science",
    image: "https://images.unsplash.com/photo-1551244072-5d11957c8219?auto=format&fit=crop&q=80&w=800",
    date: "4 days ago"
  },
  {
    id: 11,
    title: "Music Festival Announces Record-Breaking Lineup",
    excerpt: "The annual summer music festival reveals its most ambitious lineup yet, featuring over 100 artists across multiple genres.",
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=800",
    date: "1 week ago"
  },
  {
    id: 12,
    title: "New Study Links Exercise to Improved Cognitive Function",
    excerpt: "Researchers find compelling evidence that regular physical activity can enhance memory and overall brain health.",
    category: "Health",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    date: "1 week ago"
  }
];

const categories = ["All", "Politics", "Technology", "Business", "Finance", "Science", "Health", "Entertainment"];

const News = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = allNews.filter(news => {
    // Filter by category
    const categoryMatch = activeCategory === "All" || news.category === activeCategory;
    
    // Filter by search query
    const searchMatch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                       news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-accent font-semibold uppercase tracking-wider"
            >
              Stay Informed
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-2 mb-4"
            >
              Latest News
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Explore the most important stories happening around the world, curated by our expert editors.
            </motion.p>
          </div>
          
          {/* Search and Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search for news..." 
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Filter className="h-4 w-4" />
                  <span>Filter by:</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    size="sm"
                    className={cn(
                      "rounded-full",
                      activeCategory === category 
                        ? "bg-accent text-white hover:bg-accent/90" 
                        : "hover:bg-secondary"
                    )}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.length > 0 ? (
              filteredNews.map((news, idx) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="group"
                >
                  <Link to={`/news/${news.id}`} className="block rounded-lg overflow-hidden bg-card shadow-soft hover-scale h-full flex flex-col">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-foreground">
                          {news.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex items-center text-muted-foreground text-sm mb-3">
                        <Clock size={14} className="mr-1" />
                        <span>{news.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-200">
                        {news.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 flex-grow">
                        {news.excerpt}
                      </p>
                      <div className="flex items-center text-sm font-medium text-accent mt-auto">
                        Read More <ArrowRight size={14} className="ml-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium mb-2">No news found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
          
          {/* Pagination (simplified for this example) */}
          {filteredNews.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center mt-12"
            >
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <ArrowRight className="h-4 w-4 rotate-180" />
                </Button>
                <Button variant="outline" size="sm" className="bg-accent text-white hover:bg-accent/90">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <span className="px-2">...</span>
                <Button variant="outline" size="sm">10</Button>
                <Button variant="outline" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default News;
