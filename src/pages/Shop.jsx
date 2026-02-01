import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import ProductGrid from '../components/apparel/ProductGrid';
import Button from '../components/ui/Button';

// Sample product data
const allProducts = [
  { id: 1, name: "Classic Agbada Set", price: 75000, category: "Men's Wear", isNew: true, inStock: true },
  { id: 2, name: "Elegant Ankara Dress", price: 45000, category: "Women's Wear", isNew: true, inStock: true },
  { id: 3, name: "Traditional Kaftan", price: 55000, category: "Men's Wear", isNew: false, inStock: true },
  { id: 4, name: "Buba and Wrapper Set", price: 65000, category: "Women's Wear", isNew: false, inStock: true },
  { id: 5, name: "Senator Style Suit", price: 85000, category: "Men's Wear", isNew: false, inStock: true },
  { id: 6, name: "Iro and Buba Set", price: 58000, category: "Women's Wear", isNew: true, inStock: true },
  { id: 7, name: "Danshiki Shirt", price: 35000, category: "Men's Wear", isNew: false, inStock: true },
  { id: 8, name: "Ankara Maxi Dress", price: 52000, category: "Women's Wear", isNew: false, inStock: false },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', "Men's Wear", "Women's Wear"];

  // Filter products
  let filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'newest') {
    filteredProducts = [...filteredProducts].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  }

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark py-12 border-b-2 border-brand-gold">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-script text-brand-gold mb-4">Our Collection</h1>
          <p className="text-lg text-brand-silver font-sans">
            Explore our premium selection of Nigerian apparel
          </p>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-12 bg-gradient-to-b from-brand-dark to-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-sans font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-brand-gold text-brand-dark'
                      : 'bg-transparent text-brand-white border-2 border-brand-silver hover:border-brand-gold hover:text-brand-gold'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <label className="text-brand-white font-sans text-sm">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-brand-dark text-brand-white border-2 border-brand-silver rounded-lg font-sans focus:outline-none focus:border-brand-gold"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-brand-silver font-sans">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>

          {/* Product Grid */}
          <ProductGrid products={filteredProducts} />

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-brand-silver font-sans mb-4">
                No products found in this category.
              </p>
              <Button variant="primary" onClick={() => setSelectedCategory('All')}>
                View All Products
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
