import React from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import ProductGrid from '../components/apparel/ProductGrid';

// Sample product data
const featuredProducts = [
  {
    id: 1,
    name: "Classic Agbada Set",
    price: 75000,
    category: "Men's Wear",
    isNew: true,
    inStock: true,
  },
  {
    id: 2,
    name: "Elegant Ankara Dress",
    price: 45000,
    category: "Women's Wear",
    isNew: true,
    inStock: true,
  },
  {
    id: 3,
    name: "Traditional Kaftan",
    price: 55000,
    category: "Men's Wear",
    isNew: false,
    inStock: true,
  },
  {
    id: 4,
    name: "Buba and Wrapper Set",
    price: 65000,
    category: "Women's Wear",
    isNew: false,
    inStock: true,
  },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-script text-brand-gold mb-6 animate-fade-in">
              Premium Nigerian Style
            </h1>
            <p className="text-xl md:text-2xl text-brand-white font-sans mb-4 max-w-3xl mx-auto">
              Where tradition meets contemporary elegance
            </p>
            <p className="text-lg text-brand-silver font-sans mb-8 max-w-2xl mx-auto">
              Handcrafted with precision, stitched with passion. Experience the finest Nigerian craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary">
                Shop Collections
              </Button>
              <Button size="lg" variant="outline">
                Custom Orders
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative element 
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
      </section> */}

      {/* Featured Products Section */}
      {/* <section className="py-16 bg-gradient-to-b from-brand-dark to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-script text-brand-gold mb-4">
              Latest Designs
            </h2>
            <p className="text-lg text-brand-silver font-sans max-w-2xl mx-auto">
              Discover our newest collection of premium apparel, crafted with excellence
            </p>
          </div>
          
          <ProductGrid products={featuredProducts} limit={4} />
          
          <div className="text-center mt-12">
            <Button size="lg" variant="dark">
              View All Products
            </Button>
          </div>
        </div>
      </section> */}

      {/* Why Choose Us Section */}
      {/* <section className="py-16 bg-brand-dark border-y-2 border-brand-gold">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-script text-brand-gold mb-4">
              Why Choose Ayman Apparels
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold rounded-full mb-4">
                <svg className="w-8 h-8 text-brand-dark" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-sans font-semibold text-brand-white mb-2">
                Premium Quality
              </h3>
              <p className="text-brand-silver font-sans">
                Only the finest fabrics and materials, sourced with care and crafted with expertise
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold rounded-full mb-4">
                <svg className="w-8 h-8 text-brand-dark" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-sans font-semibold text-brand-white mb-2">
                Custom Tailoring
              </h3>
              <p className="text-brand-silver font-sans">
                Personalized fits and designs to match your unique style and measurements
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold rounded-full mb-4">
                <svg className="w-8 h-8 text-brand-dark" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-sans font-semibold text-brand-white mb-2">
                Nigerian Pride
              </h3>
              <p className="text-brand-silver font-sans">
                Proudly made in Nigeria, celebrating our rich heritage and craftsmanship
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-16 bg-gradient-to-br from-gray-900 to-brand-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-script text-brand-gold mb-4">
            Ready for Your Custom Design?
          </h2>
          <p className="text-lg text-brand-white font-sans mb-8">
            Book a consultation with our expert tailors and bring your vision to life
          </p>
          <Button size="xl" variant="primary">
            Book a Consultation
          </Button>
        </div>
      </section> */}
    </Layout>
  );
};

export default Home;
