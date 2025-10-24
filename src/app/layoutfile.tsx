'use client';

import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter, Heebo } from 'next/font/google';
import { motion } from 'framer-motion';
import './globals.css';

// Define fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const heebo = Heebo({ subsets: ['hebrew'], variable: '--font-heebo' });

// Define metadata
export const metadata: Metadata = {
  title: 'חנות בגדים ביתא | חנות בגדים איכותית בישראל',
  description: 'חנות בגדים מוביל המספק שירות מקצועי ואיכותי. הזמינו תור עוד היום!',
  keywords: 'חנות בגדים, שירות, איכות, מקצועיות, ישראל',
  openGraph: {
    title: 'חנות בגדים ביתא | חנות בגדים איכותית בישראל',
    description: 'חנות בגדים מוביל המספק שירות מקצועי ואיכותי. הזמינו תור עוד היום!',
    url: 'https://clothing-store-beta.com',
    siteName: 'חנות בגדים ביתא',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5',
        width: 1200,
        height: 630,
        alt: 'חנות בגדים ביתא',
      },
    ],
    locale: 'he_IL',
    type: 'website',
  },
};

// Define types
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="he" dir="rtl" className={`${inter.variable} ${heebo.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ClothingStore',
              name: 'חנות בגדים ביתא',
              description: 'אנחנו חנות בגדים מוביל בתחום החינוך עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.',
              url: 'https://clothing-store-beta.com',
              telephone: '+972-123-456-789',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'רחוב הרצל 123',
                addressLocality: 'תל אביב',
                postalCode: '6120101',
                addressCountry: 'IL',
              },
              openingHours: 'Mo-Fr 09:00-20:00, Sa 10:00-14:00',
              image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5',
            }),
          }}
        />
      </head>
      <body className="font-heebo bg-gray-50 text-gray-900 text-right">
        <motion.div
          id="root-container"
          className="min-h-screen flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <main className="flex-grow container mx-auto px-4 py-8 md:px-6 lg:px-8">
            {children}
          </main>
        </motion.div>
      </body>
    </html>
  );
}