'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaPinterest, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaArrowUp 
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

// Types for the Footer component
interface SocialLink {
  id: number;
  icon: React.ReactNode;
  url: string;
  label: string;
}

interface FooterLink {
  id: number;
  label: string;
  url: string;
}

interface FooterSection {
  id: number;
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  
  // Check scroll position to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to top function with smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Social media links
  const socialLinks: SocialLink[] = [
    { id: 1, icon: <FaFacebook size={20} />, url: 'https://facebook.com', label: 'פייסבוק' },
    { id: 2, icon: <FaInstagram size={20} />, url: 'https://instagram.com', label: 'אינסטגרם' },
    { id: 3, icon: <FaTwitter size={20} />, url: 'https://twitter.com', label: 'טוויטר' },
    { id: 4, icon: <FaPinterest size={20} />, url: 'https://pinterest.com', label: 'פינטרסט' },
  ];
  
  // Footer navigation sections
  const footerSections: FooterSection[] = [
    {
      id: 1,
      title: 'ניווט מהיר',
      links: [
        { id: 1, label: 'דף הבית', url: '/' },
        { id: 2, label: 'חנות', url: '/shop' },
        { id: 3, label: 'קולקציות', url: '/collections' },
        { id: 4, label: 'מבצעים', url: '/sales' },
      ]
    },
    {
      id: 2,
      title: 'שירות לקוחות',
      links: [
        { id: 1, label: 'צור קשר', url: '/contact' },
        { id: 2, label: 'שאלות נפוצות', url: '/faq' },
        { id: 3, label: 'מדיניות החזרות', url: '/returns' },
        { id: 4, label: 'מדיניות פרטיות', url: '/privacy' },
      ]
    },
  ];
  
  // Store hours
  const storeHours = [
    { day: 'ראשון - חמישי', hours: '10:00 - 21:00' },
    { day: 'שישי', hours: '09:00 - 14:00' },
    { day: 'שבת', hours: 'סגור' },
  ];

  return (
    <footer id="store-footer" className="bg-white text-right" dir="rtl">
      {/* Newsletter Section */}
      <div className="bg-[#96CEB4] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">הצטרפו לרשימת התפוצה שלנו</h3>
            <p className="text-white mb-6">קבלו עדכונים על מבצעים, קולקציות חדשות ואירועים מיוחדים</p>
            <form className="flex flex-col sm:flex-row gap-2 justify-center">
              <input
                type="email"
                placeholder="כתובת האימייל שלך"
                className="px-4 py-3 rounded-md focus:outline-none flex-grow max-w-md"
                aria-label="כתובת האימייל שלך"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#9B786F] text-white px-6 py-3 rounded-md font-medium"
                type="submit"
              >
                הרשמה
              </motion.button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#9B786F] mb-2">חנות בגדים ביתא</h2>
              <p className="text-gray-600 mb-4">
                אנחנו חנות בגדים מוביל בתחום החינוך עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
              </p>
            </div>
            
            {/* Social Media Links */}
            <div className="flex flex-wrap gap-3 justify-start">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#96CEB4] text-white p-2 rounded-full inline-flex items-center justify-center hover:bg-[#9B786F] transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Navigation Columns */}
          {footerSections.map((section) => (
            <div key={section.id}>
              <h3 className="text-lg font-bold text-[#9B786F] mb-4 border-b border-gray-200 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.id}>
                    <Link 
                      href={link.url}
                      className="text-gray-600 hover:text-[#96CEB4] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-[#9B786F] mb-4 border-b border-gray-200 pb-2">
              צור קשר
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#96CEB4] flex-shrink-0" />
                <span className="text-gray-600">רחוב הרצל 123, תל אביב</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#96CEB4] flex-shrink-0" />
                <a href="tel:+97235555555" className="text-gray-600 hover:text-[#96CEB4] transition-colors">
                  03-5555555
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#96CEB4] flex-shrink-0" />
                <a href="mailto:info@clothingstore.co.il" className="text-gray-600 hover:text-[#96CEB4] transition-colors">
                  info@clothingstore.co.il
                </a>
              </li>
              <li>
                <h4 className="font-medium text-[#9B786F] mt-4 mb-2 flex items-center gap-2">
                  <FaClock className="text-[#96CEB4]" /> שעות פעילות
                </h4>
                <ul className="space-y-1 text-gray-600">
                  {storeHours.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{item.day}:</span>
                      <span>{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Store Image */}
      <div className="container mx-auto px-4 py-8">
        <div className="relative h-48 w-full rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="חנות הבגדים שלנו"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <p className="text-white text-2xl font-bold">בקרו אותנו בחנות</p>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} חנות בגדים ביתא. כל הזכויות שמורות.
            </p>
            <div className="mt-2 md:mt-0">
              <ul className="flex flex-wrap gap-4 text-sm text-gray-600">
                <li>
                  <Link href="/terms" className="hover:text-[#96CEB4] transition-colors">
                    תנאי שימוש
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-[#96CEB4] transition-colors">
                    מדיניות פרטיות
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="hover:text-[#96CEB4] transition-colors">
                    מפת האתר
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 bg-[#96CEB4] text-white p-3 rounded-full shadow-lg hover:bg-[#9B786F] focus:outline-none z-50"
            aria-label="חזרה לראש העמוד"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;