'use client';

import React from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "שרה לוי",
      role: "לקוחה קבועה",
      content: "אני קונה בחנות כבר שנים רבות. האיכות של הבגדים מדהימה והשירות תמיד אדיב ומקצועי. ממליצה בחום!",
      avatar: "/images/testimonials/avatar1.jpg"
    },
    {
      id: 2,
      name: "דוד כהן",
      role: "לקוח חדש",
      content: "הגעתי לחנות בעקבות המלצה של חבר ולא התאכזבתי. מבחר עשיר, מחירים הוגנים ושירות מעולה.",
      avatar: "/images/testimonials/avatar2.jpg"
    },
    {
      id: 3,
      name: "מיכל אברהם",
      role: "סטייליסטית",
      content: "כסטייליסטית, אני מעריכה את האיכות והעיצוב של הבגדים בחנות. תמיד מוצאת פריטים ייחודיים עבור לקוחותיי.",
      avatar: "/images/testimonials/avatar3.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">מה הלקוחות שלנו אומרים</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            הלקוחות שלנו הם המעידים הטובים ביותר על האיכות והשירות שאנו מספקים
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;