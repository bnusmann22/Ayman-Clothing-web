import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/Hero/Hero';
import ProductGrid from '../components/apparel/ProductGrid';
import Button from '../components/ui/Button';
import productImageOne from '../assets/IMG1.jpg';
import productImageTwo from '../assets/IMG2.jpg';
import productImageThree from '../assets/IMG3.jpg';
import productImageFour from '../assets/IMG4.jpg';

const newArrivals = [
  {
    id: 1,
    name: 'Sunset Ankara Wrap Dress',
    price: 52000,
    category: "Women's Wear",
    image: productImageTwo,
    isNew: true,
  },
  {
    id: 2,
    name: 'Regal Kaftan Set',
    price: 68000,
    category: "Men's Wear",
    image: productImageOne,
    isNew: true,
  },
  {
    id: 3,
    name: 'Emerald Lace Buba',
    price: 47000,
    category: "Women's Wear",
    image: productImageThree,
    isNew: true,
  },
  {
    id: 4,
    name: 'Midnight Senator Suit',
    price: 79000,
    category: "Men's Wear",
    image: productImageFour,
    isNew: true,
  },
];

const Home = () => {
  return (
    <Layout>
      <Hero />
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-blue-50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 right-0 w-72 h-72 bg-blue-100 rounded-full opacity-50 blur-3xl" />
          <div className="absolute bottom-10 -left-10 w-64 h-64 bg-yellow-100 rounded-full opacity-60 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-900 mb-3">
                New Arrivals
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Fresh looks crafted for bold days
              </h2>
              <p className="text-lg text-gray-600">
                Discover our latest drops inspired by Nigerian heritage, tailored with modern silhouettes and premium fabrics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                size="md"
                className="bg-blue-900 hover:bg-blue-950 text-white shadow-lg"
              >
                Shop New Arrivals
              </Button>
              <Button
                variant="outline"
                size="md"
                className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white"
              >
                View Lookbook
              </Button>
            </div>
          </div>

          <ProductGrid products={newArrivals} limit={4} />

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-900" />
                Limited pieces per design
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                Hand-finished detailing
              </span>
            </div>
            <span className="font-medium text-gray-900">Ships nationwide in 2-5 days</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
