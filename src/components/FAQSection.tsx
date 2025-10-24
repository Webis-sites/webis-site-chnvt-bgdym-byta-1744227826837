'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  index: number;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen, index }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 px-2 text-right focus:outline-none focus:ring-2 focus:ring-brand-primary"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="text-brand-secondary">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
        <span className="font-medium text-lg">{question}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 text-right text-gray-700">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "מה מדיניות ההחזרות שלכם?",
      answer: "ניתן להחזיר פריטים בתוך 30 יום מיום הרכישה עם קבלה מקורית. הפריטים חייבים להיות במצב חדש עם תגיות מקוריות. החזרים יינתנו באמצעות שיטת התשלום המקורית או כקרדיט בחנות."
    },
    {
      question: "איך אני יכול/ה לדעת איזו מידה להזמין?",
      answer: "אנו ממליצים לעיין במדריך המידות שלנו באתר. אם אתם בין מידות, אנו ממליצים לבחור את המידה הגדולה יותר לנוחות מרבית. אם יש לכם שאלות ספציפיות לגבי מידות, אנא צרו קשר עם שירות הלקוחות שלנו."
    },
    {
      question: "מהן שעות הפעילות של החנות?",
      answer: "החנות פתוחה בימים א'-ה' בין השעות 9:00-21:00, בימי שישי בין השעות 9:00-14:00, ובמוצאי שבת משעה לאחר צאת השבת ועד 22:00. בחגים ייתכנו שינויים בשעות הפעילות, אנא בדקו באתר או התקשרו לפני הגעה."
    },
    {
      question: "האם אתם מציעים משלוחים?",
      answer: "כן, אנו מציעים משלוחים לכל רחבי הארץ. משלוחים רגילים מגיעים תוך 3-5 ימי עסקים. משלוחים מהירים זמינים בתוספת תשלום ומגיעים תוך 1-2 ימי עסקים. משלוח חינם בהזמנות מעל 250 ש\"ח."
    },
    {
      question: "האם ניתן להזמין פריטים שאזלו מהמלאי?",
      answer: "כן, ניתן להירשם לקבלת התראה כאשר פריט חוזר למלאי. פשוט לחצו על כפתור 'הודע לי כשחוזר למלאי' בדף המוצר. אנו גם יכולים לבדוק אם הפריט זמין בסניפים אחרים, אנא צרו קשר עם שירות הלקוחות."
    },
    {
      question: "האם יש לכם תוכנית נאמנות או הנחות?",
      answer: "כן, יש לנו מועדון לקוחות המציע הנחות בלעדיות, מבצעים מיוחדים ונקודות על כל רכישה. ההצטרפות למועדון היא חינם ומעניקה 10% הנחה על הרכישה הראשונה. בנוסף, אנו מציעים מבצעים עונתיים והנחות מיוחדות למנויי הניוזלטר שלנו."
    },
    {
      question: "האם אתם מציעים שירותי תפירה והתאמות?",
      answer: "כן, אנו מציעים שירותי תפירה בסיסיים כגון קיצור מכנסיים וחצאיות בתשלום נוסף. התאמות מורכבות יותר עשויות להיות זמינות בהתאם למקרה. שירותי התפירה זמינים רק בסניפים נבחרים, אנא בדקו מראש."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" dir="rtl" className="bg-white py-12 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-brand-primary mb-4">שאלות נפוצות</h2>
        <p className="text-gray-600">מצאו תשובות לשאלות הנפוצות ביותר על חנות בגדים ביתא</p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            toggleOpen={() => toggleFAQ(index)}
            index={index}
          />
        ))}
      </div>

      <div className="mt-10 p-6 bg-gray-50 rounded-lg text-center">
        <h3 className="text-xl font-semibold text-brand-secondary mb-2">לא מצאתם את התשובה שחיפשתם?</h3>
        <p className="text-gray-600 mb-4">צוות שירות הלקוחות שלנו זמין לענות על כל שאלה</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-primary text-white py-2 px-6 rounded-md font-medium hover:bg-opacity-90 transition-colors"
        >
          צרו קשר
        </motion.button>
      </div>
    </section>
  );
};

export default FAQ;