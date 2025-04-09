'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaTshirt, FaHeartbeat, FaLeaf, FaRecycle } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      className="relative overflow-hidden rounded-2xl p-6 h-full"
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        boxShadow: '20px 20px 60px rgba(0, 0, 0, 0.05), -20px -20px 60px rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="flex flex-col h-full">
        <div 
          className="mb-4 p-4 rounded-full w-16 h-16 flex items-center justify-center text-2xl"
          style={{
            background: 'var(--neumorphic-bg)',
            boxShadow: 'var(--neumorphic-shadow)'
          }}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-right">{title}</h3>
        <p className="text-gray-700 text-right">{description}</p>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaTshirt className="text-primary" />,
      title: "בגדים איכותיים",
      description: "אנו מציעים מגוון רחב של בגדים איכותיים המיוצרים מחומרים טבעיים ובריאים לגוף."
    },
    {
      icon: <FaHeartbeat className="text-primary" />,
      title: "תמיכה בריאותית",
      description: "הבגדים שלנו מעוצבים לתמוך בבריאות הגוף ולשפר את הנוחות היומיומית."
    },
    {
      icon: <FaLeaf className="text-primary" />,
      title: "חומרים אורגניים",
      description: "אנו משתמשים רק בחומרים אורגניים וידידותיים לסביבה בתהליך הייצור שלנו."
    },
    {
      icon: <FaRecycle className="text-secondary" />,
      title: "ייצור אתי",
      description: "מחויבים לתהליכי ייצור אתיים ובני-קיימא שמכבדים את הסביבה ואת העובדים."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 rtl" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">השירותים שלנו</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            אנו מציעים מגוון שירותים ומוצרים המתמקדים בבריאות ובנוחות, עם דגש על איכות ואחריות סביבתית.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 p-8 rounded-2xl text-center"
          style={{
            background: 'linear-gradient(145deg, rgba(88, 140, 126, 0.1), rgba(230, 196, 61, 0.1))',
            backdropFilter: 'blur(8px)',
            boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.1), -10px -10px 30px rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <h3 className="text-2xl font-bold mb-4">הצטרפו למשפחת חנות הבגדים שלנו</h3>
          <p className="mb-6">גלו את ההבדל בבגדים שמשלבים בריאות, נוחות ואיכות ללא פשרות</p>
          <button 
            className="px-8 py-3 rounded-full text-white font-medium transition-all duration-300"
            style={{
              background: 'var(--primary-gradient)',
              boxShadow: 'var(--neumorphic-shadow-pressed)'
            }}
          >
            צור קשר עכשיו
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;