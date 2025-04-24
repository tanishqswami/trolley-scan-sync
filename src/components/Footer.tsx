
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-8 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Smart Trolley</h3>
            <p className="text-sm text-muted-foreground">
              The Future of Shopping
            </p>
            <div className="mt-4 flex items-center gap-2">
              <svg 
                className="h-6 w-6 text-primary" 
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
              <span className="text-lg font-poppins font-semibold">Smart Trolley</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/scan" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Scan
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <address className="text-sm text-muted-foreground not-italic">
              <div className="mb-2">Smart Trolley Technologies</div>
              <div className="mb-2">123 Shopping Avenue</div>
              <div>support@smarttrolley.com</div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Smart Trolley. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
