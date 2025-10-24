'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaTshirt, FaAward, FaUsers, FaHandshake } from 'react-icons/fa';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

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

  const featureItems = [
    {
      icon: <FaTshirt className="text-3xl text-[#96CEB4]" />,
      title: 'מוצרים איכותיים',
      description: 'אנו מציעים רק את המוצרים הטובים ביותר עם תשומת לב לפרטים',
    },
    {
      icon: <FaAward className="text-3xl text-[#96CEB4]" />,
      title: 'ניסיון רב שנים',
      description: 'עם שנים של ניסיון בתעשייה, אנחנו יודעים מה עובד',
    },
    {
      icon: <FaUsers className="text-3xl text-[#96CEB4]" />,
      title: 'שירות אישי',
      description: 'אנו מתמקדים בחוויית לקוח מותאמת אישית לכל צרכיך',
    },
    {
      icon: <FaHandshake className="text-3xl text-[#96CEB4]" />,
      title: 'אמינות',
      description: 'הלקוחות סומכים עלינו בזכות המקצועיות והיושרה שלנו',
    },
  ];

  return (
    <section 
      id="about-section" 
      dir="rtl" 
      className="py-16 px-4 md:px-8 lg:px-16 bg-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="text-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#9B786F]">
              אודות חנות בגדים ביתא
            </h2>
            <div className="h-1 w-24 bg-[#96CEB4] mb-8 mr-0 ml-auto"></div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              אנחנו חנות בגדים מוביל בתחום החינוך עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              בחנות בגדים ביתא, אנו מאמינים שסגנון אישי הוא דרך ביטוי חשובה. הצוות המקצועי שלנו כאן כדי לעזור לך למצוא את הפריטים המושלמים שישלימו את המלתחה שלך ויתאימו לסגנון האישי שלך.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#96CEB4] text-white py-3 px-8 rounded-md font-medium hover:bg-opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-[#96CEB4] focus:ring-opacity-50"
              aria-label="למד עוד עלינו"
            >
              למד עוד עלינו
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div 
            variants={itemVariants}
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="חנות בגדים ביתא - תצוגת בגדים"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 right-6 text-white">
              <p className="text-xl font-semibold">חנות בגדים ביתא</p>
              <p className="text-sm">מובילים באופנה איכותית</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {featureItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-lg shadow-md text-right border-r-4 border-[#96CEB4]"
            >
              <div className="flex items-center justify-end mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#9B786F]">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-20 bg-gray-50 p-8 rounded-lg shadow-md"
        >
          <motion.div variants={itemVariants} className="text-center">
            <div className="inline-block p-2 bg-[#96CEB4] bg-opacity-20 rounded-full mb-6">
              <FaUsers className="text-3xl text-[#96CEB4]" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-[#9B786F]">מה הלקוחות שלנו אומרים</h3>
            <p className="text-gray-700 text-lg italic mb-6">
              "חנות בגדים ביתא תמיד מספקת את הבגדים האיכותיים ביותר עם שירות לקוחות מעולה. אני תמיד חוזרת לכאן כשאני צריכה לרענן את המלתחה שלי."
            </p>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full overflow-hidden relative mr-4">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="תמונת לקוח"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="text-right">
                <p className="font-bold text-[#9B786F]">רונית לוי</p>
                <p className="text-sm text-gray-600">לקוחה קבועה</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;