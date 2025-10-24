'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

// Define types for our gallery items
type Category = 'הכל' | 'נשים' | 'גברים' | 'אקססוריז' | 'פנים החנות';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: Category[];
  width: number;
  height: number;
}

const PortfolioGallery: React.FC = () => {
  // Gallery items data
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b',
      alt: 'קולקציית נשים',
      category: ['נשים'],
      width: 800,
      height: 1200,
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1617137968427-85924c800a22',
      alt: 'קולקציית גברים',
      category: ['גברים'],
      width: 800,
      height: 1000,
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9',
      alt: 'אקססוריז',
      category: ['אקססוריז'],
      width: 800,
      height: 800,
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5',
      alt: 'פנים החנות',
      category: ['פנים החנות'],
      width: 800,
      height: 1100,
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3',
      alt: 'קולקציית נשים',
      category: ['נשים'],
      width: 800,
      height: 900,
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8',
      alt: 'קולקציית גברים',
      category: ['גברים'],
      width: 800,
      height: 1000,
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1523093151608-11df2d69d2c8',
      alt: 'אקססוריז',
      category: ['אקססוריז'],
      width: 800,
      height: 800,
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04',
      alt: 'פנים החנות',
      category: ['פנים החנות'],
      width: 800,
      height: 1200,
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908',
      alt: 'קולקציית נשים',
      category: ['נשים'],
      width: 800,
      height: 1000,
    },
  ];

  const categories: Category[] = ['הכל', 'נשים', 'גברים', 'אקססוריז', 'פנים החנות'];
  const [selectedCategory, setSelectedCategory] = useState<Category>('הכל');
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(galleryItems);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const modalRef = useRef<HTMLDivElement>(null);

  // Filter items when category changes
  useEffect(() => {
    if (selectedCategory === 'הכל') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(
        galleryItems.filter((item) => item.category.includes(selectedCategory))
      );
    }
  }, [selectedCategory]);

  // Handle category selection
  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
  };

  // Open lightbox modal
  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    const index = filteredItems.findIndex((i) => i.id === item.id);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox modal
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Navigate to next image
  const nextImage = () => {
    if (currentIndex < filteredItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(filteredItems[currentIndex + 1]);
    } else {
      setCurrentIndex(0);
      setSelectedImage(filteredItems[0]);
    }
  };

  // Navigate to previous image
  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(filteredItems[currentIndex - 1]);
    } else {
      setCurrentIndex(filteredItems.length - 1);
      setSelectedImage(filteredItems[filteredItems.length - 1]);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        prevImage(); // Reversed for RTL
      } else if (e.key === 'ArrowLeft') {
        nextImage(); // Reversed for RTL
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, currentIndex, filteredItems]);

  // Handle click outside modal to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeLightbox();
      }
    };

    if (selectedImage) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedImage]);

  return (
    <section id="portfolio-gallery" dir="rtl" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">הגלריה שלנו</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            גלו את הקולקציות האחרונות שלנו, את פנים החנות ואת המוצרים המובילים שלנו
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-[#96CEB4] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                layout
                onClick={() => openLightbox(item)}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-80 w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJcIoXW1QAAAABJRU5ErkJggg=="
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center p-4">
                      <p className="font-semibold text-lg">{item.alt}</p>
                      <p className="text-sm mt-2">לחץ להגדלה</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No results message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">לא נמצאו פריטים בקטגוריה זו</p>
          </div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
              role="dialog"
              aria-modal="true"
              aria-labelledby="lightbox-title"
            >
              <div 
                ref={modalRef}
                className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center"
              >
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
                  aria-label="סגור"
                >
                  <FaTimes size={20} />
                </button>
                
                <button
                  onClick={prevImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-colors"
                  aria-label="תמונה קודמת"
                >
                  <FaChevronRight size={20} />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-70 transition-colors"
                  aria-label="תמונה הבאה"
                >
                  <FaChevronLeft size={20} />
                </button>
                
                <motion.div
                  key={selectedImage.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      fill
                      sizes="100vw"
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black bg-opacity-50 py-2 px-4">
                    <h3 id="lightbox-title" className="text-lg font-semibold">{selectedImage.alt}</h3>
                    <p className="text-sm text-gray-300">תמונה {currentIndex + 1} מתוך {filteredItems.length}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioGallery;