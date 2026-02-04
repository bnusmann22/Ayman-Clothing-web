import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShoppingBag, TrendingUp } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const rotateVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={rotateVariants}
          animate="animate"
          className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          variants={rotateVariants}
          animate="animate"
          className="absolute top-1/2 -right-32 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"
          style={{ animationDirection: 'reverse' }}
        />
        <motion.div
          variants={rotateVariants}
          animate="animate"
          className="absolute -bottom-20 left-1/3 w-96 h-96 bg-pink-200 rounded-full opacity-20 blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left z-10"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>New Collection 2026</span>
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Elevate Your{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Style
              </span>
              <br />
              With Ayman
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Discover premium African fashion that blends tradition with modern elegance. 
              Handcrafted pieces designed to make you stand out.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Shop Collection
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  View Lookbook
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Designs</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900">5★</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image/Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            {/* Floating Cards */}
            <div className="relative h-[600px]">
              {/* Main Card */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-6 backdrop-blur-lg border border-gray-100"
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <ShoppingBag className="w-32 h-32 text-blue-600 opacity-50" />
                </div>
              </motion.div>

              {/* Floating Icon 1 */}
              <motion.div
                animate={{
                  y: [0, -30, 0],
                  x: [0, 15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-20 right-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
              >
                <TrendingUp className="w-8 h-8 text-green-600" />
              </motion.div>

              {/* Floating Icon 2 */}
              <motion.div
                animate={{
                  y: [0, 25, 0],
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute bottom-32 left-0 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
              >
                <Sparkles className="w-8 h-8 text-purple-600" />
              </motion.div>

              {/* Badge Card */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-40 left-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="font-semibold">Trending Now</span>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 left-1/4 w-20 h-20 border-4 border-dashed border-blue-300 rounded-full opacity-30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-20 right-1/4 w-16 h-16 border-4 border-dashed border-purple-300 rounded-full opacity-30"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
