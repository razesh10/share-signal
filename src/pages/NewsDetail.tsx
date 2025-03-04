
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Share, Clock, Calendar, User, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

// Sample news data - in a real app, this would come from an API
const newsData = {
  title: "New Climate Policy Expected to Reshape Energy Markets",
  category: "Politics",
  date: "March 15, 2023",
  author: "Sarah Johnson",
  readTime: "8 min read",
  heroImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1920",
  content: [
    {
      type: "paragraph",
      text: "The latest climate policy announced yesterday is expected to have far-reaching implications for global energy markets, with renewable energy stocks already showing significant gains in anticipation of the changes. The comprehensive policy framework aims to accelerate the transition to clean energy while providing economic incentives for industries to reduce their carbon footprint."
    },
    {
      type: "heading",
      text: "Market Reactions"
    },
    {
      type: "paragraph",
      text: "Wall Street responded positively to the announcement, with the S&P Clean Energy Index rising by 3.2% on Wednesday. Analysts suggest this could be the beginning of a longer-term shift in market dynamics favoring companies focused on sustainability."
    },
    {
      type: "paragraph",
      text: "\"This represents a fundamental shift in how markets will evaluate energy investments going forward,\" said Michael Chen, chief energy analyst at Global Capital Partners. \"Companies with strong environmental credentials are likely to outperform their peers in the coming years.\""
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1920",
      caption: "Solar panels have become increasingly common as renewable energy adoption accelerates globally."
    },
    {
      type: "heading",
      text: "Industry Impact"
    },
    {
      type: "paragraph",
      text: "The policy includes significant tax incentives for companies investing in renewable energy infrastructure, as well as stricter emissions standards for traditional energy producers. This dual approach aims to both reward innovation and ensure that existing energy providers adapt to meet climate goals."
    },
    {
      type: "paragraph",
      text: "Energy sector analysts project that the new measures could accelerate the retirement of coal-fired power plants while boosting investment in wind, solar, and energy storage technologies. Several major utilities have already announced plans to review their long-term infrastructure strategies in light of the new policy framework."
    },
    {
      type: "quote",
      text: "We stand at a critical juncture in our fight against climate change. The decisions we make today will shape the world our children inherit tomorrow.",
      author: "Environmental Protection Agency Director"
    },
    {
      type: "heading",
      text: "International Implications"
    },
    {
      type: "paragraph",
      text: "The announcement has also generated significant international attention, with several key trading partners indicating they may implement similar measures to maintain regulatory alignment. This could potentially lead to a more coordinated global approach to climate policy, which experts have long advocated as essential for meaningful progress."
    },
    {
      type: "paragraph",
      text: "The European Union's climate commissioner welcomed the development, stating that it \"represents an important step toward international convergence on climate action.\" Discussions are already underway regarding how the new policy might influence upcoming international climate negotiations."
    }
  ],
  relatedArticles: [
    {
      id: 1,
      title: "Renewable Energy Investments Hit Record High in Q1",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
      category: "Business"
    },
    {
      id: 2,
      title: "Electric Vehicle Manufacturers Announce Expanded Production",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba13437c8?auto=format&fit=crop&q=80&w=800",
      category: "Technology"
    },
    {
      id: 3,
      title: "Climate Scientists Present New Research on Carbon Capture",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      category: "Science"
    }
  ]
};

const NewsDetail = () => {
  const { id } = useParams();
  // In a real app, we would fetch the specific news article based on the ID
  // For this example, we'll use our sample data

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          {/* Back button */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center text-muted-foreground hover:text-foreground"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to News
            </Button>
          </motion.div>
          
          {/* Article Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Badge variant="secondary" className="bg-accent text-white mb-4">
              {newsData.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {newsData.title}
            </h1>
            <div className="flex flex-wrap items-center text-muted-foreground gap-4 mb-4">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{newsData.date}</span>
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{newsData.author}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{newsData.readTime}</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center"
              >
                <Share size={16} className="mr-2" />
                Share
              </Button>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="rounded-xl overflow-hidden">
              <img 
                src={newsData.heroImage} 
                alt={newsData.title} 
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </motion.div>
          
          {/* Article Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <article className="prose prose-lg max-w-none">
                {newsData.content.map((item, index) => {
                  if (item.type === "paragraph") {
                    return <p key={index} className="text-foreground leading-relaxed mb-6">{item.text}</p>;
                  } else if (item.type === "heading") {
                    return <h2 key={index} className="text-2xl font-semibold mt-8 mb-4">{item.text}</h2>;
                  } else if (item.type === "image") {
                    return (
                      <figure key={index} className="my-8">
                        <img src={item.url} alt={item.caption} className="w-full rounded-lg" />
                        <figcaption className="text-sm text-muted-foreground text-center mt-2">{item.caption}</figcaption>
                      </figure>
                    );
                  } else if (item.type === "quote") {
                    return (
                      <blockquote key={index} className="border-l-4 border-accent pl-4 italic my-6">
                        <p className="text-lg mb-2">{item.text}</p>
                        {item.author && <cite className="text-muted-foreground">— {item.author}</cite>}
                      </blockquote>
                    );
                  }
                  return null;
                })}
              </article>
            </motion.div>
            
            {/* Sidebar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-4"
            >
              <div className="bg-card rounded-xl p-6 shadow-soft sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {newsData.relatedArticles.map((article) => (
                    <a key={article.id} href="#" className="group flex items-start gap-3 hover:bg-secondary p-2 rounded-lg transition-colors duration-200">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-1 text-xs">{article.category}</Badge>
                        <h4 className="font-medium group-hover:text-accent transition-colors duration-200 line-clamp-2">{article.title}</h4>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsDetail;
