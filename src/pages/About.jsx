import React from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';

const About = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark py-12 border-b-2 border-brand-gold">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-script text-brand-gold mb-4">Our Story</h1>
          <p className="text-lg text-brand-silver font-sans max-w-2xl">
            Ayman Clothing blends Nigerian heritage with modern tailoring. We focus on custom fits,
            premium fabrics, and pieces that feel personal.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-sans font-semibold text-brand-dark mb-3">What We Offer</h2>
            <p className="text-brand-silver font-sans mb-4">
              Custom sewing, ready-to-wear collections, and statement pieces designed for comfort and
              confidence.
            </p>
            <ul className="space-y-2 text-brand-dark font-sans">
              <li>Made-to-measure tailoring</li>
              <li>Ready-to-wear capsules</li>
              <li>Fabric sourcing and styling guidance</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-sans font-semibold text-brand-dark mb-3">Craftsmanship</h2>
            <p className="text-brand-silver font-sans">
              Every garment is carefully stitched with attention to detail. Our process is centered on
              quality, durability, and a fit that feels effortless.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-sans font-semibold text-brand-dark">Ready to order?</h3>
            <p className="text-brand-silver font-sans">
              Tell us what you want and we will guide you through the process.
            </p>
          </div>
          <a href="/contact">
            <Button variant="primary" size="lg">
              Contact Us
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default About;
