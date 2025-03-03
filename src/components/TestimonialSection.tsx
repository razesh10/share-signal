
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    content: "Insight News has been my go-to source for staying informed about global events. Their reporting is thorough, balanced, and always up-to-date.",
    author: "Sarah Johnson",
    title: "Marketing Director",
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    id: 2,
    content: "I appreciate the depth of analysis in their articles. Unlike many other news sources, they take the time to provide context and varying perspectives.",
    author: "Michael Chen",
    title: "Research Analyst",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 3,
    content: "The financial reporting at Insight News has helped me make informed investment decisions. Their market analyses are precise and insightful.",
    author: "Jessica Martinez",
    title: "Portfolio Manager",
    avatar: "https://i.pravatar.cc/150?img=26"
  }
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl"></div>
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-accent font-semibold uppercase tracking-wider"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            What Our Readers Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subheading"
          >
            Discover why thousands of readers trust us for their daily news and insights.
          </motion.p>
        </div>

        <div className="relative">
          <div className="flex justify-center">
            <motion.div 
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <div className="relative bg-background rounded-2xl p-8 md:p-12 shadow-soft">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent w-10 h-10 rounded-full flex items-center justify-center">
                    <Quote size={20} className="text-white" />
                  </div>
                </div>
                
                <blockquote className="text-xl md:text-2xl leading-relaxed text-center mb-8">
                  "{testimonials[current].content}"
                </blockquote>
                
                <div className="flex flex-col items-center">
                  <Avatar className="w-16 h-16 border-4 border-background mb-4">
                    <AvatarImage src={testimonials[current].avatar} alt={testimonials[current].author} />
                    <AvatarFallback>{testimonials[current].author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <p className="font-semibold text-lg">{testimonials[current].author}</p>
                    <p className="text-muted-foreground">{testimonials[current].title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center space-x-3 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-background transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    idx === current ? "w-6 bg-accent" : "bg-accent/30"
                  )}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-background transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
