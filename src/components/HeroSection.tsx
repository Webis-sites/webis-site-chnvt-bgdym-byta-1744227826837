'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

const HeroSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <section dir="rtl" className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 min-h-[80vh] flex items-center">
      {/* Glassmorphism background elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div 
          className="w-full md:w-1/2 z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="glassmorphism-card p-8 md:p-12 rounded-3xl">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
            >
              חנות בגדים מוביל בישראל
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 mb-8"
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>
            
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className={clsx(
                "neumorphic-button",
                "px-8 py-4 text-lg font-bold rounded-full",
                "bg-primary text-gray-800",
                "focus:outline-none focus:ring-4 focus:ring-primary/50",
                "transition-all duration-300 ease-in-out"
              )}
              aria-label="קבע תור עכשיו"
            >
              קבע תור עכשיו
            </motion.button>
          </div>
        </motion.div>
        
        {/* Image */}
        <motion.div 
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glassmorphism-image-container rounded-3xl overflow-hidden aspect-[4/3] relative shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="חנות בגדים מודרנית"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;