"use client";

import React, { useState, useEffect } from 'react';
import { Settings, Type, Eye, Link as LinkIcon, RefreshCcw, X, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [readableFont, setReadableFont] = useState(false);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('.accessibility-wrapper')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleOpen = () => setIsOpen(!isOpen);

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 10, 150));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 10, 90));
  const resetAll = () => {
    setFontSize(100);
    setHighContrast(false);
    setGrayscale(false);
    setHighlightLinks(false);
    setReadableFont(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 accessibility-wrapper">
      {/* Target styles injected into body */}
      <style dangerouslySetInnerHTML={{__html: `
        :root {
          font-size: ${fontSize}%;
        }
        body {
          ${grayscale ? 'filter: grayscale(100%) !important;' : ''}
          ${readableFont ? 'font-family: Arial, sans-serif !important;' : ''}
          ${highContrast ? 'background-color: #000 !important; color: #fff !important;' : ''}
        }
        ${highContrast ? `
          *, div, p, span, h1, h2, h3, h4, li, ul, a {
            background-color: #000 !important;
            color: #fff !important;
            border-color: #fff !important;
          }
        ` : ''}
        ${highlightLinks ? `
          a {
            text-decoration: underline !important;
            text-decoration-color: #000 !important;
            text-decoration-thickness: 2px !important;
          }
        ` : ''}
      `}} />

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 left-0 bg-white shadow-2xl border border-gray-200 rounded-2xl w-72 overflow-hidden flex flex-col"
          >
            <div className="bg-[#0c1b2c] p-4 flex justify-between items-center text-white">
              <h3 className="font-bold">תפריט נגישות</h3>
              <button onClick={toggleOpen} className="hover:bg-white/20 p-1 rounded-md transition" aria-label="סגור תפריט נגישות">
                <X size={18} />
              </button>
            </div>
            
            <div className="p-4 flex flex-col gap-3 font-sans text-[#1a1a1a] h-80 overflow-y-auto">
              {/* Font Size */}
              <div className="flex flex-col gap-2 p-3 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <Type size={16} />
                  גודל טקסט ({fontSize}%)
                </div>
                <div className="flex gap-2">
                  <button onClick={increaseFontSize} className="flex-1 bg-white border border-gray-300 py-1 rounded-md hover:bg-gray-100 font-bold transition">A+</button>
                  <button onClick={decreaseFontSize} className="flex-1 bg-white border border-gray-300 py-1 rounded-md hover:bg-gray-100 font-bold transition">A-</button>
                </div>
              </div>

              {/* High Contrast */}
              <button 
                onClick={() => setHighContrast(!highContrast)} 
                className={`flex items-center gap-3 p-3 rounded-xl border transition ${highContrast ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-gray-50 border-gray-100 hover:bg-gray-100'}`}
              >
                <Activity size={18} />
                <span className="font-bold text-sm">ניגודיות גבוהה</span>
              </button>

              {/* Grayscale */}
              <button 
                onClick={() => setGrayscale(!grayscale)} 
                className={`flex items-center gap-3 p-3 rounded-xl border transition ${grayscale ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-gray-50 border-gray-100 hover:bg-gray-100'}`}
              >
                <Eye size={18} />
                <span className="font-bold text-sm">גווני אפור</span>
              </button>

              {/* Highlight Links */}
              <button 
                onClick={() => setHighlightLinks(!highlightLinks)} 
                className={`flex items-center gap-3 p-3 rounded-xl border transition ${highlightLinks ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-gray-50 border-gray-100 hover:bg-gray-100'}`}
              >
                <LinkIcon size={18} />
                <span className="font-bold text-sm">הדגשת קישורים</span>
              </button>

              {/* Readable Font */}
              <button 
                onClick={() => setReadableFont(!readableFont)} 
                className={`flex items-center gap-3 p-3 rounded-xl border transition ${readableFont ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-gray-50 border-gray-100 hover:bg-gray-100'}`}
              >
                <Type size={18} />
                <span className="font-bold text-sm">גופן קריא (אריאל)</span>
              </button>
            </div>
            
            <div className="p-3 border-t border-gray-100 bg-gray-50">
              <button 
                onClick={resetAll} 
                className="w-full flex items-center justify-center gap-2 py-2 text-red-600 hover:bg-red-50 rounded-lg transition font-bold text-sm"
              >
                <RefreshCcw size={16} />
                איפוס הגדרות
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={toggleOpen}
        aria-label="פתח תפריט נגישות"
        className="w-12 h-12 bg-[#0c1b2c] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <span className="sr-only">נגישות</span>
        {/* אייקון איש הנגישות */}
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="4" r="2"/>
          <path d="m18 8-6-1-6 1"/>
          <path d="m12 7v8"/>
          <path d="m9 22 3-7 3 7"/>
        </svg>
      </button>
    </div>
  );
}