"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const STAM_LETTERS = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'];

interface LetterItem {
  id: number;
  char: string;
  left: number; // percentage
  size: number; // px
  delay: number; // seconds
  duration: number; // seconds
  fontFamily: string;
  rotateStart: number;
  rotateEnd: number;
  drift: number; // px drift on x axis
  opacityMax: number;
}

export default function FloatingLetters() {
  const [mounted, setMounted] = useState(false);
  const [floatingItems, setFloatingItems] = useState<LetterItem[]>([]);

  useEffect(() => {
    setMounted(true);
    
    const count = 30; // 30 falling letters
    const items: LetterItem[] = [];

    // Generate falling letters (floating from top to bottom only)
    for (let i = 0; i < count; i++) {
      const char = STAM_LETTERS[Math.floor(Math.random() * STAM_LETTERS.length)];
      const left = Math.random() * 100;
      const size = Math.random() * 26 + 18; // 18px to 44px
      const delay = Math.random() * -20; // negative delay so they start immediately across the page
      const duration = Math.random() * 8 + 8; // 8s to 16s speed
      const fontFamily = Math.random() > 0.3 ? 'StamSefarad' : 'StamAshkenaz'; // mostly Sephardic style
      const rotateStart = Math.random() * 360;
      const rotateEnd = rotateStart + (Math.random() > 0.5 ? 120 : -120);
      const drift = (Math.random() - 0.5) * 120;
      
      // Darker letters (less transparency): 20% to 35% opacity range
      const opacityMax = Math.random() * 0.15 + 0.20; 

      items.push({
        id: i,
        char,
        left,
        size,
        delay,
        duration,
        fontFamily,
        rotateStart,
        rotateEnd,
        drift,
        opacityMax
      });
    }

    setFloatingItems(items);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none select-none z-20 overflow-hidden">
      {/* Container set to z-20 so that letters pass behind the main cards (z-30) but on top of header/hero/footer (z-10) */}
      {floatingItems.map((item) => (
        <motion.div
          key={item.id}
          initial={{ 
            y: "-15vh", 
            x: 0,
            opacity: 0, 
            rotate: item.rotateStart 
          }}
          animate={{ 
            y: "110vh", 
            x: item.drift,
            opacity: [0, item.opacityMax, item.opacityMax, 0], // fades in, stays visible, fades out
            rotate: item.rotateEnd
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "linear",
          }}
          style={{
            position: 'absolute',
            left: `${item.left}%`,
            fontSize: `${item.size}px`,
            fontFamily: item.fontFamily,
            color: '#0c1b2c',
          }}
          className="font-normal antialiased"
        >
          {item.char}
        </motion.div>
      ))}
    </div>
  );
}
