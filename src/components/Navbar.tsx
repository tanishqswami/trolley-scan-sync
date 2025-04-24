
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="border-b bg-background sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <svg 
              className="h-8 w-8 text-primary" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              <line x1="4" y1="6" x2="22" y2="6" />
            </svg>
            <span className="text-xl font-poppins font-bold">Smart Trolley</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-primary font-medium transition-colors">
            Home
          </Link>
          <Link to="/scan" className="text-foreground/80 hover:text-primary font-medium transition-colors">
            Scan
          </Link>
          <Link to="/cart" className="text-foreground/80 hover:text-primary font-medium transition-colors">
            Cart
          </Link>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full h-5 w-5 text-xs flex items-center justify-center">0</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
