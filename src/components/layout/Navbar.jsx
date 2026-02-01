import React, { useState } from 'react';
import Button from '../ui/Button';
import logo from '../../assets/aymanBGless.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-brand-dark border-b-2 border-brand-gold sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
                <img src={logo} alt="Ayman Clothing Logo" className="h- w-auto object-contain" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-brand-white hover:text-brand-gold transition-colors duration-200 font-sans font-medium">
              Home
            </a>
            <a href="/shop" className="text-brand-white hover:text-brand-gold transition-colors duration-200 font-sans font-medium">
              Shop
            </a>
            <a href="/custom" className="text-brand-white hover:text-brand-gold transition-colors duration-200 font-sans font-medium">
              Custom Orders
            </a>
            <a href="/about" className="text-brand-white hover:text-brand-gold transition-colors duration-200 font-sans font-medium">
              About
            </a>
            <a href="/contact" className="text-brand-white hover:text-brand-gold transition-colors duration-200 font-sans font-medium">
              Contact
            </a>
          </div>

          {/* CTA & Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-brand-white hover:text-brand-gold transition-colors duration-200 relative">
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-brand-gold text-brand-dark text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <Button size="sm" variant="primary">
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-white hover:text-brand-gold transition-colors duration-200"
            >
              {!isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-brand-gold py-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-brand-white hover:text-brand-gold transition-colors duration-200 font-sans font-medium py-2">
                Home
              </a>
              <a href="/shop" className="text-brand-white hover:text-brand-gold transition-colors duration-200 font-sans font-medium py-2">
                Shop
              </a>
              <a href="/custom" className="text-brand-white hover:text-brand-gold transition-colors duration-200 font-sans font-medium py-2">
                Custom Orders
              </a>
              <a href="/about" className="text-brand-white hover:text-brand-gold transition-colors duration-200 font-sans font-medium py-2">
                About
              </a>
              <a href="/contact" className="text-brand-white hover:text-brand-gold transition-colors duration-200 font-sans font-medium py-2">
                Contact
              </a>
              <div className="pt-4 flex items-center gap-4">
                <button className="text-brand-white hover:text-brand-gold transition-colors duration-200 relative">
                  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="absolute -top-2 -right-2 bg-brand-gold text-brand-dark text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </button>
                <Button size="sm" variant="primary" fullWidth>
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
