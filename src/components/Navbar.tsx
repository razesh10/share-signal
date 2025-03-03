
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 ease-smooth", 
      isScrolled 
        ? "bg-background/90 backdrop-blur-md shadow-sm py-3" 
        : "bg-transparent py-5"
    )}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-semibold tracking-tight">
            Insight<span className="text-accent">News</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {['Home', 'News', 'Blogs', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-medium hover:text-accent transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
            
            <div className="flex items-center space-x-3">
              <button className="rounded-full w-8 h-8 flex items-center justify-center hover:bg-secondary transition-colors duration-200">
                <Search size={18} />
              </button>
              <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
          
          <button 
            className="md:hidden rounded-full w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 bg-background/95 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out transform",
        mobileMenuOpen 
          ? "translate-x-0 opacity-100" 
          : "translate-x-full opacity-0 pointer-events-none"
      )}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-5">
          {['Home', 'News', 'Blogs', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-lg font-medium hover:text-accent transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button variant="default" size="default" className="mt-4 bg-accent hover:bg-accent/90 text-white">
            Subscribe
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
