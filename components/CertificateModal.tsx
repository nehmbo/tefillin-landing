"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface CertificateModalProps {
  activeCert: { src: string | string[]; title: string } | null;
  onClose: () => void;
}

export default function CertificateModal({ activeCert, onClose }: CertificateModalProps) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselDirection, setCarouselDirection] = useState(0);

  useEffect(() => {
    setCarouselIndex(0);
  }, [activeCert]);

  const paginate = useCallback((newDirection: number) => {
    if (!activeCert || !Array.isArray(activeCert.src)) return;
    const images = activeCert.src;
    setCarouselDirection(newDirection);
    setCarouselIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = images.length - 1;
      if (nextIndex >= images.length) nextIndex = 0;
      return nextIndex;
    });
  }, [activeCert]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeCert) return;
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (!Array.isArray(activeCert.src)) return;
      if (e.key === 'ArrowLeft') {
        paginate(1);
      } else if (e.key === 'ArrowRight') {
        paginate(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCert, paginate, onClose]);

  useEffect(() => {
    if (activeCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeCert]);

  return (
    <AnimatePresence>
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-w-lg md:max-w-2xl lg:max-w-4xl w-full max-h-[95vh] bg-white rounded-2xl p-4 md:p-6 shadow-2xl flex flex-col items-center gap-3 z-10 mx-4 overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center w-full pb-2.5 border-b border-gray-100">
              <h3 className="font-bold text-sm md:text-base text-[#0c1b2c] font-rubik">{activeCert.title}</h3>
              <button 
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded-lg transition text-gray-500 hover:text-gray-800 cursor-pointer"
                aria-label="סגור"
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Image or Carousel */}
            <div className="relative w-full h-[65vh] md:h-[78vh] rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
              {Array.isArray(activeCert.src) ? (
                <div className="relative w-full h-full overflow-hidden">
                  <AnimatePresence initial={false} custom={carouselDirection}>
                    <motion.div
                      key={carouselIndex}
                      custom={carouselDirection}
                      variants={{
                        enter: (dir: number) => ({
                          x: dir > 0 ? '100%' : '-100%',
                          opacity: 0
                        }),
                        center: {
                          x: 0,
                          opacity: 1
                        },
                        exit: (dir: number) => ({
                          x: dir < 0 ? '100%' : '-100%',
                          opacity: 0
                        })
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(e, info) => {
                        if (info.offset.x < -50) {
                          paginate(1);
                        } else if (info.offset.x > 50) {
                          paginate(-1);
                        }
                      }}
                      className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing select-none"
                    >
                      <Image
                        src={activeCert.src[carouselIndex]}
                        alt={`${activeCert.title} - תמונה ${carouselIndex + 1}`}
                        fill
                        className="object-contain pointer-events-none"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 672px, 896px"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => paginate(1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-gray-800 hover:text-black rounded-full p-2.5 shadow-md hover:shadow-lg backdrop-blur-md transition-all duration-200 cursor-pointer flex items-center justify-center"
                    aria-label="תמונה הבאה"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  <button
                    onClick={() => paginate(-1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-gray-800 hover:text-black rounded-full p-2.5 shadow-md hover:shadow-lg backdrop-blur-md transition-all duration-200 cursor-pointer flex items-center justify-center"
                    aria-label="תמונה קודמת"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-xs font-bold font-rubik select-none" dir="ltr">
                    {carouselIndex + 1} / {activeCert.src.length}
                  </div>

                  {/* Bullet Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/45 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {activeCert.src.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setCarouselDirection(idx > carouselIndex ? 1 : -1);
                          setCarouselIndex(idx);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          idx === carouselIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`שקופית ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <Image
                  src={activeCert.src}
                  alt={activeCert.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 672px, 896px"
                  priority
                />
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
