'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

// Define product type
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

// Sample product data
const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'חולצת כותנה קלאסית',
    description: 'חולצת כותנה איכותית בגזרה קלאסית',
    price: 129.99,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'מכנסי ג׳ינס אופנתיים',
    description: 'ג׳ינס באיכות גבוהה עם גזרה מודרנית',
    price: 199.99,
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'שמלת ערב אלגנטית',
    description: 'שמלה מעוצבת לאירועים מיוחדים',
    price: 349.99,
    imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'חליפת עסקים יוקרתית',
    description: 'חליפה איכותית לפגישות עסקיות',
    price: 899.99,
    imageUrl: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    name: 'סוודר חורף חמים',
    description: 'סוודר עבה ונעים לימי החורף הקרים',
    price: 179.99,
    imageUrl: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    name: 'נעלי ספורט מעוצבות',
    description: 'נעליים נוחות לפעילות ספורטיבית',
    price: 249.99,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

// Format price in Israeli Shekels
const formatPrice = (price: number): string => {
  return `₪${price.toFixed(2)}`;
};

const FeaturedProducts: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if we're on mobile for responsive layout
  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="featured-products" className="py-16 px-4 md:px-8 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-right text-gray-800">
            מוצרים מובחרים
          </h2>
          <Link href="/products" className="flex items-center gap-2 text-[#9B786F] hover:text-[#96CEB4] transition-colors duration-300 font-medium">
            <span>לכל המוצרים</span>
            <FiArrowLeft className="h-5 w-5" />
          </Link>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-right">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <motion.button
                    className="bg-[#96CEB4] text-white px-4 py-2 rounded-md hover:bg-[#85b9a1] transition-colors duration-300"
                    whileTap={{ scale: 0.95 }}
                    aria-label={`הוסף לסל ${product.name}`}
                  >
                    הוסף לסל
                  </motion.button>
                  <span className="text-[#9B786F] font-bold text-lg">
                    {formatPrice(product.price)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <motion.button
            className="bg-[#9B786F] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#8a6a62] transition-colors duration-300 inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>לכל המוצרים</span>
            <FiArrowLeft className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;