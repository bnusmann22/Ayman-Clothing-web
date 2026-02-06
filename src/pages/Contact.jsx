import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import FileUpload from '../components/ui/FileUpload';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Layout>
      <section className="bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark py-12 border-b-2 border-brand-gold">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-script text-brand-gold mb-4">Contact Us</h1>
          <p className="text-lg text-brand-silver font-sans max-w-2xl">
            Tell us about your custom order, sizing questions, or delivery needs. We reply quickly.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <Input
              label="Full Name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange('name')}
              required
              fullWidth
            />
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange('email')}
              fullWidth
            />
            <Input
              label="Phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange('phone')}
              required
              fullWidth
            />
            <div>
              <label className="block mb-2 text-sm font-semibold font-sans text-brand-dark">
                Message
              </label>
              <textarea
                className="w-full min-h-[140px] font-sans px-4 py-2 rounded-lg border-2 border-brand-silver text-brand-dark focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold"
                placeholder="Tell us about your request"
                value={formData.message}
                onChange={handleChange('message')}
                required
              />
            </div>
            <FileUpload
              label="Upload reference images (optional)"
              helperText="PNG, JPG, or PDF. Max 5MB each."
              accept=".png,.jpg,.jpeg,.pdf"
              onFileSelect={() => {}}
            />
            <Button type="submit" variant="primary" size="lg" fullWidth>
              Send Message
            </Button>
          </form>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-sans font-semibold text-brand-dark mb-2">Quick Contact</h2>
              <p className="text-brand-silver font-sans">
                Prefer WhatsApp or a direct call? Reach us instantly.
              </p>
            </div>
            <div className="space-y-2 font-sans text-brand-dark">
              <p>
                Phone: <a className="text-brand-gold" href="tel:+2341234567890">+234 (0) 123 456 7890</a>
              </p>
              <p>
                Email: <a className="text-brand-gold" href="mailto:aymanClothing@gmail.com">aymanClothing@gmail.com</a>
              </p>
              <p>Address: Mariya Plaza, Zoo-Road Kano, Nigeria</p>
              <p>Hours: Mon-Sat, 9:00 AM - 6:00 PM</p>
            </div>
            <a
              className="inline-flex"
              href="https://wa.me/2341234567890?text=Hi%20Ayman%20Clothing,%20I%20would%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline" size="lg">
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
