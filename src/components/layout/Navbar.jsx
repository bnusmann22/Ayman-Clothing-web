import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
            <Link to="/" className="flex items-center">
                <img src={logo} alt="Ayman Clothing Logo" className="h-56 w-auto " />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({isActive}) => isActive ? "text-brand-gold font-sans font-medium" : "text-brand-white hover:text-brand-gold transition-colors duration-200 font-sans font-medium"}>
              Home
            </NavLink>
            <NavLink to="/shop" className={({isActive}) => isActive ? "text-brand-gold font-sans font-medium" : "text-brand-white hover:text-brand-gold transition-colors duration-200 font-sans font-medium"}>
              Shop
            </NavLink>
            <NavLink to="/custom" className={({isActive}) => isActive ? "text-brand-gold font-sans font-medium" : "text-brand-white hover:text-brand-gold transition-colors duration-200 font-sans font-medium"}>
              Custom Orders
            </NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "text-brand-gold font-sans font-medium" : "text-brand-white hover:text-brand-gold transition-colors duration-200 font-sans font-medium"}>
              About
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "text-brand-gold font-sans font-medium" : "text-brand-white hover:text-brand-gold transition-colors duration-200 font-sans font-medium"}>
              Contact
            </NavLink>
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
              <NavLink to="/" className={({isActive}) => isActive ? "text-brand-gold font-sans font-medium py-2" : "text-brand-white hover:text-brand-gold transition-colors duration-200 font-sans font-medium py-2"} onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/shop" className={({isActive}) => isActive ? "text-brand-gold font-sans font-medium py-2" : "text-brand-white hover:text-brand-gold transition-colors duration-200 font-sans font-medium py-2"} onClick={() => setIsMenuOpen(false)}>
                Shop
              </NavLink>
              <NavLink to="/custom" className={({isActive}) => isActive ? "text-brand-gold font-sans font-medium py-2" : "text-brand-white hover:text-brand-gold transition-colors duration-200 font-sans font-medium py-2"} onClick={() => setIsMenuOpen(false)}>
                Custom Orders
              </NavLink>
              <NavLink to="/about" className={({isActive}) => isActive ? "text-brand-gold font-sans font-medium py-2" : "text-brand-white hover:text-brand-gold transition-colors duration-200 font-sans font-medium py-2"} onClick={() => setIsMenuOpen(false)}>
                About
              </NavLink>
              <NavLink to="/contact" className={({isActive}) => isActive ? "text-brand-gold font-sans font-medium py-2" : "text-brand-white hover:text-brand-gold transition-colors duration-200 font-sans font-medium py-2"} onClick={() => setIsMenuOpen(false)}>
                Contact
              </NavLink>
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
