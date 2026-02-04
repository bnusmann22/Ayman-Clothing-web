import React from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import ProductGrid from '../components/apparel/ProductGrid';

// Sample product data
// const featuredProducts = [
//   {
//     id: 1,
//     name: "Classic Agbada Set",
//     price: 75000,
//     category: "Men's Wear",
//     isNew: true,
//     inStock: true,
//   },
//   {
//     id: 2,
//     name: "Elegant Ankara Dress",
//     price: 45000,
//     category: "Women's Wear",
//     isNew: true,
//     inStock: true,
//   },
//   {
//     id: 3,
//     name: "Traditional Kaftan",
//     price: 55000,
//     category: "Men's Wear",
//     isNew: false,
//     inStock: true,
//   },
//   {
//     id: 4,
//     name: "Buba and Wrapper Set",
//     price: 65000,
//     category: "Women's Wear",
//     isNew: false,
//     inStock: true,
//   },
// ];

const Home = () => {
  return (
    <Layout>
      <h1 className='my-52 lg:m-96'>Hello  App</h1>
    </Layout>
  );
};

export default Home;
