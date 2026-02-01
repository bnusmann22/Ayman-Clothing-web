import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-brand-dark text-brand-silver border-t-4 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-3xl font-script text-brand-gold mb-3">Ayman Apparels</h3>
            <p className="text-sm mb-4 leading-relaxed">
              Premium Nigerian craftsmanship, stitching elegance into every garment. Where tradition meets contemporary style.
            </p>
            
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-brand-silver hover:text-brand-gold transition-colors duration-200" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-brand-silver hover:text-brand-gold transition-colors duration-200" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-brand-silver hover:text-brand-gold transition-colors duration-200" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-sans font-semibold text-brand-white mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-200">Men's Wear</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-200">Women's Wear</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-200">New Arrivals</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-200">Custom Orders</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-200">Collections</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-sans font-semibold text-brand-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-200">Size Guide</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-200">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-200">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-200">FAQs</a></li>
            </ul>

            <div className="text-sm space-y-2 pt-4 border-t border-brand-silver border-opacity-30">
              <p className="font-semibold text-brand-white">Contact</p>
              <a href="tel:+2341234567890" className="block hover:text-brand-gold transition-colors duration-200">
                +234 (0) 123 456 7890
              </a>
              <a href="mailto:hello@aymanapparels.com" className="block hover:text-brand-gold transition-colors duration-200">
                hello@aymanapparels.com
              </a>
              <p className="pt-2">Lagos, Nigeria</p>
              <p className="text-xs opacity-75">Mon-Sat: 9AM - 6PM</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-sans font-semibold text-brand-white mb-4">Stay Connected</h4>
            <p className="text-sm mb-4">
              Join our inner circle for exclusive offers and 10% off your first order.
            </p>
            
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-lg bg-brand-white text-brand-dark font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-brand-gold text-brand-dark font-sans font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-200"
                >
                  Subscribe
                </button>
              </div>
              {subscribed && (
                <p className="text-green-400 text-xs mt-2">Thank you for subscribing!</p>
              )}
            </form>

            <a
              href="#"
              className="block w-full px-4 py-2 text-center bg-transparent border-2 border-brand-gold text-brand-gold font-sans font-semibold rounded-lg hover:bg-brand-gold hover:text-brand-dark transition-all duration-200"
            >
              Book a Consultation
            </a>
          </div>
        </div>

        <div className="border-t border-brand-silver border-opacity-30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-center md:text-left">
              <p className="mb-2">© 2026 Ayman Apparels. All rights reserved.</p>
              <div className="flex gap-4 text-xs justify-center md:justify-start">
                <a href="#" className="hover:text-brand-gold transition-colors duration-200">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-brand-gold transition-colors duration-200">Terms of Service</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-xs font-sans">We accept:</p>
              <div className="flex gap-3 items-center">
                <div className="bg-brand-white rounded px-2 py-1">
                  <span className="text-xs font-bold text-brand-dark">Paystack</span>
                </div>
                <div className="bg-brand-white rounded px-2 py-1">
                  <span className="text-xs font-bold text-brand-dark">Flutterwave</span>
                </div>
                <svg className="h-6" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" rx="4" fill="white"/>
                  <path d="M20.8 22.4l1.6-9.6h2.4l-1.6 9.6h-2.4zm11.2-9.4c-.5-.2-1.2-.4-2.1-.4-2.3 0-3.9 1.2-3.9 3 0 1.3 1.2 2 2.1 2.5.9.5 1.2.8 1.2 1.2 0 .6-.8.9-1.5.9-1 0-1.5-.1-2.3-.5l-.3-.2-.3 2c.6.2 1.6.4 2.7.4 2.5 0 4.1-1.2 4.1-3.1 0-1-.6-1.8-2-2.4-.8-.4-1.3-.7-1.3-1.2 0-.4.5-.8 1.5-.8.9 0 1.5.2 2 .4l.2.1.3-1.9z" fill="#1434CB"/>
                </svg>
                <svg className="h-6" viewBox="0 0 48 32" fill="none">
                  <rect width="48" height="32" rx="4" fill="white"/>
                  <circle cx="18" cy="16" r="8" fill="#EB001B"/>
                  <circle cx="30" cy="16" r="8" fill="#F79E1B"/>
                  <path d="M24 20.8c1.2-1 2-2.6 2-4.4s-.8-3.4-2-4.4c-1.2 1-2 2.6-2 4.4s.8 3.4 2 4.4z" fill="#FF5F00"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-brand-white font-sans text-sm tracking-widest">MADE IN NIGERIA 🇳🇬</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
