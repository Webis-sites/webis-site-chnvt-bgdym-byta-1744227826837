'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

const CallToActionSection: React.FC = () => {
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
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <section 
      id="book-appointment" 
      className="relative w-full py-16 md:py-24 overflow-hidden"
      dir="rtl"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="אופנה ברקע"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#96CEB4]/90 to-[#9B786F]/80"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-right text-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            הסגנון שלך מחכה לך בחנות בגדים ביתא
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 opacity-90"
            variants={itemVariants}
          >
            אנחנו מזמינים אותך לחוויית קניות אישית ומיוחדת. הצוות המקצועי שלנו ישמח לעזור לך למצוא את הפריטים המושלמים שיתאימו לסגנון האישי שלך.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex justify-end"
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-[#9B786F] hover:bg-[#9B786F] hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300 shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="קבע תור עכשיו"
            >
              <FaCalendarAlt aria-hidden="true" />
              <span>קבע תור עכשיו</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;