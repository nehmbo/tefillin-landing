"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  const whatsappNumber = '972545581548';
  const whatsappMessage = encodeURIComponent('שלום וברכה,\nראיתי את הפרסום שלך באתר אשמח לקבל פרטים נוספים על התפילין.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-4 right-3 md:bottom-6 md:right-4 z-40 flex flex-col items-start group font-heebo">
      {/* Tooltip on Hover */}
      <span className="mb-2 px-3 py-1 text-xs font-bold text-white bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        צרו קשר ב-WhatsApp
      </span>

      {/* Floating Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-10 h-10 md:w-12 md:h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20ba5a] transition-colors focus:outline-none focus:ring-4 focus:ring-green-300 cursor-pointer"
        aria-label="צרו קשר בווצאפ"
      >
        {/* Pulsing ring background */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6 relative z-10" />
      </motion.a>
    </div>
  );
}
