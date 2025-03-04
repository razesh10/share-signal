
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Share, Clock, Calendar, User, ArrowLeft, ArrowRight, Bookmark, ThumbsUp, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { format } from 'date-fns';

// Sample blog data - in a real app, this would come from an API
const blogData = {
  id: 1,
  title: "The Future of Renewable Energy: Trends to Watch in 2023",
  slug: "future-renewable-energy-trends-2023",
  category: "Environment",
  date: new Date("2023-05-15"),
  author: {
    name: "Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    bio: "Environmental journalist with over 10 years of experience covering renewable energy and climate change."
  },
  readTime: "8 min read",
  heroImage: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=2070",
  content: [
    {
      type: "paragraph",
      text: "The renewable energy sector has experienced unprecedented growth over the past decade, and 2023 is shaping up to be another transformative year. With climate concerns mounting and technology advancing rapidly, several key trends have emerged that are likely to define the industry's trajectory in the coming years."
    },
    {
      type: "heading",
      text: "The Rise of Energy Storage Solutions"
    },
    {
      type: "paragraph",
      text: "Perhaps the most significant development in renewable energy is the dramatic improvement in energy storage technologies. As intermittent sources like wind and solar continue to expand, the ability to store excess energy for use during low-generation periods becomes increasingly vital."
    },
    {
      type: "paragraph",
      text: "Battery technologies have seen remarkable cost reductions, with lithium-ion battery prices falling by nearly 90% over the past decade. This trend is expected to continue, with new chemistries and manufacturing techniques driving further improvements in capacity, lifespan, and affordability."
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1569691105751-88df003de7a3?auto=format&fit=crop&q=80&w=2070",
      caption: "Large-scale battery storage facility connected to a solar farm."
    },
    {
      type: "heading",
      text: "Green Hydrogen Takes Center Stage"
    },
    {
      type: "paragraph",
      text: "Green hydrogen—produced through electrolysis powered by renewable energy—is gaining momentum as a versatile energy carrier. Unlike battery storage, hydrogen can be stored for extended periods and used in applications where direct electrification is challenging, such as heavy industry and long-distance transportation."
    },
    {
      type: "paragraph",
      text: "Several major economies have announced ambitious hydrogen strategies, with the European Union planning to install at least 40 gigawatts of renewable hydrogen electrolyzers by 2030. As electrolyzer costs continue to fall and renewable capacity expands, green hydrogen production is expected to become increasingly competitive with fossil fuel alternatives."
    },
    {
      type: "quote",
      text: "Green hydrogen isn't just an alternative fuel—it's the missing piece in our clean energy puzzle, enabling decarbonization across sectors previously considered difficult to abate.",
      author: "International Energy Agency Director"
    },
    {
      type: "heading",
      text: "Distributed Energy Resources and Microgrids"
    },
    {
      type: "paragraph",
      text: "The traditional centralized model of electricity generation and distribution is giving way to a more distributed approach. Microgrids—localized energy systems that can operate independently or in conjunction with the main grid—are gaining traction as a means to enhance resilience and integrate higher proportions of renewable energy."
    },
    {
      type: "paragraph",
      text: "This shift is being accelerated by the falling costs of small-scale solar, wind, and storage systems, as well as advances in smart grid technologies that enable more sophisticated coordination between distributed energy resources. Rural communities and islands previously dependent on diesel generators are particularly well-positioned to benefit from this trend."
    }
  ],
  tags: ["Renewable Energy", "Solar Power", "Wind Energy", "Battery Storage", "Green Hydrogen", "Sustainability"],
  relatedArticles: [
    {
      id: 2,
      title: "Understanding Global Supply Chain Disruptions",
      category: "Economy",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80&w=600",
      date: new Date("2023-06-22"),
    },
    {
      id: 3,
      title: "The Rise of Digital Health Platforms",
      category: "Health",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
      date: new Date("2023-07-05"),
    },
    {
      id: 4,
      title: "Cybersecurity Challenges in the Age of Remote Work",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1563163447-bce6e5b18b4c?auto=format&fit=crop&q=80&w=600",
      date: new Date("2023-07-18"),
    }
  ]
};

const BlogArticle = () => {
  const { id } = useParams();
  // In a real app, we would fetch the specific blog article based on the ID
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
              Back to Blog
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
              {blogData.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {blogData.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={blogData.author.image} alt={blogData.author.name} />
                  <AvatarFallback>{blogData.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{blogData.author.name}</div>
                  <div className="text-sm text-muted-foreground">Author</div>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">{format(blogData.date, 'MMMM dd, yyyy')}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-muted-foreground" />
                <span className="text-muted-foreground">{blogData.readTime}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center"
              >
                <Share size={16} className="mr-2" />
                Share
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center"
              >
                <Bookmark size={16} className="mr-2" />
                Save
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
                src={blogData.heroImage} 
                alt={blogData.title} 
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
                {blogData.content.map((item, index) => {
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
              
              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-lg font-medium mb-3">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {blogData.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="bg-secondary p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={blogData.author.image} alt={blogData.author.name} />
                      <AvatarFallback>{blogData.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-medium mb-2">About {blogData.author.name}</h3>
                      <p className="text-muted-foreground">{blogData.author.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Comments and Reactions Section (simplified) */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Comments (24)</h3>
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="flex items-center">
                      <ThumbsUp size={16} className="mr-2" /> 
                      <span>142 Likes</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center">
                      <MessageSquare size={16} className="mr-2" /> 
                      <span>Comment</span>
                    </Button>
                  </div>
                </div>
                
                {/* Comment Box Placeholder */}
                <div className="bg-card rounded-lg p-4 border border-border mb-6">
                  <div className="flex">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                      <div className="border border-border rounded-lg p-2 bg-background text-muted-foreground">
                        Add a comment...
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* This would show actual comments in a real app */}
                <div className="text-center py-6 text-muted-foreground">
                  Comments would be displayed here in a real application
                </div>
              </div>
            </motion.div>
            
            {/* Sidebar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-4"
            >
              <div className="space-y-8">
                {/* Related Articles */}
                <div className="bg-card rounded-xl p-6 shadow-soft sticky top-24">
                  <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {blogData.relatedArticles.map((article) => (
                      <a key={article.id} href="#" className="group flex items-start gap-3 hover:bg-secondary p-2 rounded-lg transition-colors duration-200">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-1 text-xs">{article.category}</Badge>
                          <h4 className="font-medium group-hover:text-accent transition-colors duration-200 line-clamp-2">{article.title}</h4>
                          <div className="text-xs text-muted-foreground mt-1">
                            {format(article.date, 'MMM dd, yyyy')}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-border">
                    <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                      <span>View More Articles</span>
                      <ArrowRight size={14} className="ml-2" />
                    </Button>
                  </div>
                </div>
                
                {/* Newsletter Signup */}
                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <h3 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Stay updated with the latest articles and news delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                    />
                    <Button className="w-full bg-accent hover:bg-accent/90">
                      Subscribe
                    </Button>
                  </div>
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

export default BlogArticle;
