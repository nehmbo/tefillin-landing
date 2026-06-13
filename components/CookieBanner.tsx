"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay for smooth loading experience
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-[320px] z-50 bg-[#0c1b2c]/95 backdrop-blur-md text-white p-4.5 rounded-xl shadow-2xl border border-white/10 flex flex-col gap-3 font-heebo"
          dir="rtl"
        >
          {/* Header & Icon */}
          <div className="flex items-start gap-3">
            <motion.div 
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="bg-gradient-to-br from-amber-400 to-amber-600 p-2 rounded-lg shadow-lg shadow-amber-500/20 shrink-0 text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                <path d="M8.5 8.5v.01" />
                <path d="M16 15.5v.01" />
                <path d="M12 12v.01" />
                <path d="M11 17v.01" />
                <path d="M7 14v.01" />
              </svg>
            </motion.div>
            <div className="flex flex-col gap-0.5">
              <h3 className="font-bold text-sm font-rubik text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                פרטיות ושימוש בעוגיות
              </h3>
              <p className="text-xs text-gray-300 leading-normal">
                אנו משתמשים בעוגיות כדי להעניק לך את חוויית הגלישה הטובה ביותר ולנתח את ביצועי האתר.
              </p>
            </div>
          </div>

          {/* Action Links */}
          <div className="text-[11px] text-gray-300">
            למידע נוסף, קרא את{" "}
            <Link href="/cookie-policy" className="text-amber-400 hover:text-amber-300 underline font-medium transition-colors">
              מדיניות העוגיות
            </Link>{" "}
            שלנו.
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 mt-0.5">
            <button
              onClick={handleAccept}
              className="flex-1 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#0c1b2c] font-bold py-1.5 px-3 rounded-lg shadow-md hover:shadow-lg active:scale-[0.98] transition duration-200 text-xs cursor-pointer text-center"
            >
              אישור והמשך
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 bg-white/10 hover:bg-white/15 text-white font-medium py-1.5 px-3 rounded-lg border border-white/5 hover:border-white/10 active:scale-[0.98] transition duration-200 text-xs cursor-pointer text-center"
            >
              המשך ללא אישור
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
