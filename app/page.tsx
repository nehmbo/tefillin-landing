"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Award, X, Scroll, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { GiQuillInk } from 'react-icons/gi';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import FloatingLetters from '../components/FloatingLetters';

export default function LandingPage() {
  const [activeCert, setActiveCert] = React.useState<{ src: string | string[]; title: string } | null>(null);
  const [carouselIndex, setCarouselIndex] = React.useState(0);
  const [carouselDirection, setCarouselDirection] = React.useState(0);

  React.useEffect(() => {
    setCarouselIndex(0);
  }, [activeCert]);

  const paginate = React.useCallback((newDirection: number) => {
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

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeCert || !Array.isArray(activeCert.src)) return;
      if (e.key === 'ArrowLeft') {
        paginate(1);
      } else if (e.key === 'ArrowRight') {
        paginate(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCert, paginate]);

  React.useEffect(() => {
    if (activeCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeCert]);

  const whatsappNumber = '972545581548';
  const whatsappMessage = encodeURIComponent('שלום וברכה,\nראיתי את הפרסום שלך באתר אשמח לקבל פרטים נוספים על התפילין.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen flex flex-col items-center relative">
      <FloatingLetters />
      {/* Top Spacer / Header Area simulating empty nav */}
      <div className="w-full h-[76px] md:h-[104px] bg-white relative z-[15] border-b border-gray-100">
        {/* Logo overlapping top edge of hero image */}
        <div className="absolute top-0 left-4 md:left-16 bg-white rounded-b-2xl md:rounded-b-[2rem] shadow-md w-36 h-[140px] md:w-56 md:h-[190px] flex items-center justify-center">
          <div className="relative w-full h-full scale-[1.25] md:scale-[1.35] origin-center -translate-x-2 md:-translate-x-3 translate-y-3 md:translate-y-4">
            <Image
              src="/logo.avif"
              alt="לוגו תפילין בוצ'קו"
              fill
              sizes="(max-width: 768px) 144px, 224px"
              className="object-contain"
              priority
              // הוסר unoptimized כדי לאפשר ל-Next.js לכווץ את התמונה
            />
          </div>
        </div>
      </div>

      {/* Hero Section matching Flyer Layout */}
      <section id="hero" className="w-full flex flex-col items-center bg-white relative z-10">
        {/* Top Image: Tefillin on Tallit */}
        <div className="w-full bg-[#fdfcf9]">
          <div className="w-full relative h-[260px] md:h-[450px] overflow-hidden">
            <Image
              src="/tefillin.avif"
              alt="תפילין מהודרות על טלית לבנה"
              fill
              sizes="100vw"
              className="object-cover object-[center_40%] drop-shadow-sm"
              priority
              // הוסר unoptimized כדי לאפשר ל-Next.js לכווץ את התמונה
            />
            {/* Soft overlay to ensure transition to content (restored) */}
            <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white/60 to-transparent z-10" />
          </div>
        </div>
        
        {/* Title and Banner Section - Visible and not obscured */}
        <div className="w-full py-4 px-4 flex flex-col items-center bg-white relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[#0c1b2c] text-4xl md:text-5xl mb-2 text-center leading-tight font-normal"
            style={{ fontFamily: 'StamSefarad' }}
          >
            תפילין בוצ&apos;קו
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative px-6 md:px-8 py-2 md:py-2.5 flex items-center justify-center max-w-lg"
          >
            {/* Irregular Bordeaux Banner Shape - Stylized like the flyer */}
            <div className="absolute inset-0 bg-[#7e191b] skew-x-[-2deg] rounded-md shadow-lg" />
            <p className="relative text-white text-sm md:text-lg font-bold text-center leading-relaxed">
              מיועד למי שרוצה להדר ולהשקיע במצוות תפילין
            </p>
          </motion.div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "תפילין בוצ'קו",
            "description": "תפילין מהודרות בכתב ספרדי, כתיבה בטהרה על ידי נפתלי בוצ'קו",
            "telephone": "054-5581548",
            "url": "https://tefillin-buchko.co.il",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "ישראל"
            },
            "priceRange": "₪ 4200 - ₪ 6000"
          })
        }}
      />

      {/* Main Content */}
      <main className="max-w-6xl w-full px-4 py-16 -mt-8 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-8">
          
          {/* Experience Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover="hover"
            variants={{
              hover: {
                y: -8,
                scale: 1.015,
                boxShadow: "0 20px 25px -5px rgba(12, 27, 44, 0.1), 0 10px 10px -5px rgba(12, 27, 44, 0.04)"
              }
            }}
            className="bg-[#f0f6fc] p-8 rounded-2xl shadow-xl border border-[#d2e3f7]/60 flex flex-col h-full"
          >
            <div className="flex justify-between items-start w-full mb-6">
              <h2 className="text-2xl font-bold text-[#0c1b2c] mt-2">ניסיון</h2>
              <motion.div
                variants={{
                  hover: { rotate: -8, scale: 1.15 }
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="w-16 h-16 shrink-0"
              >
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-full h-full drop-shadow-[0_4px_6px_rgba(12,27,44,0.15)]"
                >
                  {/* Wavy/ruffled wax seal shape matching the uploaded image */}
                  <path 
                    d="M 50 4 
                       C 57 4, 60 9, 66 11 
                       C 72 13, 79 11, 83 16 
                       C 87 21, 85 28, 88 34 
                       C 91 40, 96 44, 96 50 
                       C 96 56, 91 60, 88 66 
                       C 85 72, 87 79, 83 84 
                       C 79 89, 72 87, 66 89 
                       C 60 91, 57 96, 50 96 
                       C 43 96, 40 91, 34 89 
                       C 28 87, 21 89, 17 84 
                       C 13 79, 15 72, 12 66 
                       C 9 60, 4 56, 4 50 
                       C 4 44, 9 40, 12 34 
                       C 15 28, 13 21, 17 16 
                       C 21 11, 28 13, 34 11 
                       C 40 9, 43 4, 50 4 Z" 
                    fill="#0c1b2c" 
                    stroke="#e2e8f0" 
                    strokeWidth="1.5"
                  />
                  
                  {/* Inner circular border */}
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 2" opacity="0.8" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#e2e8f0" strokeWidth="0.5" opacity="0.5" />
                  
                  {/* Center text "17+" */}
                  <text x="50" y="50" dominantBaseline="central" className="fill-white text-[26px] font-black font-rubik" textAnchor="middle">
                    17+
                  </text>
                </svg>
              </motion.div>
            </div>
            <ul className="space-y-3 text-gray-600 text-start w-full">
              <li>נפתלי בוצ&apos;קו הוסמך ע&quot;י מכון יד רפאל כסופר סת&quot;ם ומגיה.</li>
              <li><span className="font-bold text-[#0c1b2c]">17 שנות ניסיון</span> בכתיבת סת&quot;ם.</li>
              <li>מומלץ על ידי רבנים.</li>
              <li>הוסמך לרבנות.</li>
              <li>לימד כתיבת סת&quot;ם בישיבת היכל אליהו.</li>
            </ul>
            
            <div className="mt-auto flex gap-2 w-full pt-4">
              <motion.button 
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveCert({ src: '/sofer.avif', title: 'תעודת סופר סת״ם' })}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-[#0c1b2c]/20 hover:border-[#0c1b2c] hover:bg-gray-50 text-[#0c1b2c] rounded-xl text-[11px] font-bold shadow-sm transition-colors duration-200 cursor-pointer"
              >
                <Scroll size={13} />
                <span className="whitespace-nowrap">תעודת סופר</span>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveCert({ src: '/megiha.avif', title: 'תעודת מגיה מוסמך' })}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-[#0c1b2c]/20 hover:border-[#0c1b2c] hover:bg-gray-50 text-[#0c1b2c] rounded-xl text-[11px] font-bold shadow-sm transition-colors duration-200 cursor-pointer"
              >
                <Search size={13} />
                <span className="whitespace-nowrap">תעודת מגיה</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Writing Style Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            whileHover="hover"
            variants={{
              hover: {
                y: -8,
                scale: 1.015,
                boxShadow: "0 20px 25px -5px rgba(12, 27, 44, 0.1), 0 10px 10px -5px rgba(12, 27, 44, 0.04)"
              }
            }}
            className="bg-[#f0f6fc] p-8 rounded-2xl shadow-xl border border-[#d2e3f7]/60 flex flex-col h-full"
          >
            <div className="flex justify-between items-start w-full mb-6">
              <h2 className="text-2xl font-bold text-[#0c1b2c] mt-2">כתיבה - ספרדי</h2>
              <motion.div 
                variants={{
                  hover: { rotate: -12, scale: 1.15, y: -2 }
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="w-14 h-14 flex items-center justify-center text-[#0c1b2c] shrink-0"
              >
                <GiQuillInk size={56} className="text-[#0c1b2c]" />
              </motion.div>
            </div>
            <ul className="space-y-3 text-gray-600 text-start w-full">
              <li>מומחה לכתיבת תפילין רגיל, בינוני וקטן - פצפון.</li>
              <li><span className="font-bold text-[#0c1b2c]">מומחיות מיוחדת לתפילין פצפונים.</span></li>
              <li>כתב מדויק ונקי מאוד.</li>
              <li>תפילין של רש&quot;י ורבינו תם.</li>
              <li>כתיבה בטהרה.</li>
            </ul>
            
            <div className="mt-auto flex gap-2 w-full pt-4">
              <motion.button 
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveCert({ src: '/ketav.avif', title: "דוגמת כתב יד ספרדי - נפתלי בוצ'קו" })}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-[#0c1b2c]/20 hover:border-[#0c1b2c] hover:bg-gray-50 text-[#0c1b2c] rounded-xl text-[11px] font-bold shadow-sm transition-colors duration-200 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] text-[#0c1b2c] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" fill="currentColor" fillOpacity="0.15" />
                  <line x1="16" x2="3.5" y1="8" y2="20.5" strokeWidth="1.5" />
                  <path d="M2 22l3-1.5M2 22l1.5-3" strokeWidth="2" />
                  <line x1="2" x2="4.5" y1="22" y2="19.5" strokeWidth="1" />
                  <line x1="17.5" x2="15" y1="15" y2="17.5" />
                  <line x1="9" x2="7.5" y1="11" y2="12.5" />
                </svg>
                <span className="whitespace-nowrap">דוגמת הכתב</span>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveCert({
                  src: ['/batimmeuzav.avif', '/baitmeuzav.avif', '/bait2meuzav.avif'],
                  title: 'דוגמת בתי תפילין מהודרים'
                })}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-[#0c1b2c]/20 hover:border-[#0c1b2c] hover:bg-gray-50 text-[#0c1b2c] rounded-xl text-[11px] font-bold shadow-sm transition-colors duration-200 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] text-[#0c1b2c] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="12 2 20 6 12 10 4 6" fill="currentColor" fillOpacity="0.2" />
                  <polygon points="4 6 12 10 12 17 4 13" />
                  <polygon points="12 10 20 6 20 13 12 17" />
                  <polygon points="12 17 22 13 12 9 2 13" strokeWidth="1.5" />
                </svg>
                <span className="whitespace-nowrap">דוגמת בתים</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Price Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            whileHover="hover"
            variants={{
              hover: {
                y: -8,
                scale: 1.015,
                boxShadow: "0 20px 25px -5px rgba(12, 27, 44, 0.1), 0 10px 10px -5px rgba(12, 27, 44, 0.04)"
              }
            }}
            className="bg-[#f0f6fc] p-8 rounded-2xl shadow-xl border border-[#d2e3f7]/60 flex flex-col h-full"
          >
            <div className="flex justify-between items-start w-full mb-4">
              <h2 className="text-2xl font-bold text-[#0c1b2c] mt-2">מחיר התפילין</h2>
              <motion.div 
                variants={{
                  hover: { scale: 1.15, rotate: 3, y: -3 }
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="w-14 h-14 border-2 border-[#0c1b2c] bg-[#fdfcf9] rounded-full flex items-center justify-center text-[#0c1b2c] shrink-0 shadow-sm overflow-hidden"
              >
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-10 h-10 text-[#0c1b2c]"
                >
                  {/* BACKGROUND LAYER (drawn behind the base) */}
                  {/* Left strap (sweeps left) */}
                  <path 
                    d="M 32,48 C 18,44 6,56 8,68 C 10,80 24,78 14,88" 
                    fill="none" 
                    stroke="#06101c" 
                    strokeWidth="6.5" 
                    strokeLinecap="round" 
                  />
                  <path 
                    d="M 32,48 C 18,44 6,56 8,68 C 10,80 24,78 14,88" 
                    fill="none" 
                    stroke="#0c1b2c" 
                    strokeWidth="5" 
                    strokeLinecap="round" 
                  />

                  {/* Base of Tefillin (Titura) */}
                  {/* Top face of base */}
                  <polygon points="18,58 50,74 82,58 50,42" fill="#1d2d44" stroke="#06101c" strokeWidth="0.5" />
                  {/* Front-left face of base */}
                  <polygon points="18,58 50,74 50,80 18,64" fill="#0c1b2c" stroke="#06101c" strokeWidth="0.5" />
                  {/* Front-right face of base */}
                  <polygon points="50,74 82,58 82,64 50,80" fill="#06101c" stroke="#06101c" strokeWidth="0.5" />

                  {/* Cube (Bayit) */}
                  {/* Top face of cube */}
                  <polygon points="28,28 50,18 72,28 50,38" fill="#2e3f57" stroke="#06101c" strokeWidth="0.5" />
                  {/* Left face of cube */}
                  <polygon points="28,28 50,38 50,62 28,52" fill="#0c1b2c" stroke="#06101c" strokeWidth="0.5" />
                  {/* Right face of cube */}
                  <polygon points="50,38 72,28 72,52 50,62" fill="#06101c" stroke="#06101c" strokeWidth="0.5" />

                  {/* Letter Shin (ש) on left face */}
                  <text 
                    x="45" 
                    y="22" 
                    className="fill-slate-300 font-bold text-[14px] font-rubik" 
                    transform="matrix(0.866 0.5 0 1 0 0)"
                  >
                    ש
                  </text>
                  
                  {/* Seam on the base (stitches) */}
                  <polyline 
                    points="22,58 50,72 78,58" 
                    fill="none" 
                    stroke="#d4af37" 
                    strokeWidth="0.75" 
                    strokeDasharray="2 1.5" 
                    opacity="0.85" 
                  />

                  {/* FOREGROUND LAYER (drawn in front of the base) */}
                  {/* Right strap (loops right, crosses in front, sweeps right) */}
                  <path 
                    d="M 68,48 C 86,46 95,54 94,62 C 93,70 76,72 54,72 C 42,72 50,82 78,82" 
                    fill="none" 
                    stroke="#06101c" 
                    strokeWidth="6.5" 
                    strokeLinecap="round" 
                  />
                  <path 
                    d="M 68,48 C 86,46 95,54 94,62 C 93,70 76,72 54,72 C 42,72 50,82 78,82" 
                    fill="none" 
                    stroke="#0c1b2c" 
                    strokeWidth="5" 
                    strokeLinecap="round" 
                  />
                </svg>
              </motion.div>
            </div>
            <div className="mb-4 text-start">
              <ul className="space-y-3 text-base text-gray-700 mb-4">
                <li>
                  <span className="font-bold text-[#0c1b2c]">תפילין בגודל רגיל עם בתים מהודרים</span> - 4,200 ₪
                </li>
                <li>
                  <span className="font-bold text-[#0c1b2c]">הידורים נוספים</span> - ריבוע רגל, מכוונות, עור אמריקאי - 4,800 ₪
                </li>
                <li>
                  <span className="font-bold text-[#0c1b2c]">תפילין פצפונים עם כל ההידורים</span> - 5,500 ₪
                </li>
              </ul>
            </div>
            <p className="font-bold text-[#0c1b2c] text-xs text-start mt-auto">המחיר כולל מע&quot;מ</p>
          </motion.div>
        </div>
      </main>

      {/* Footer / Contact Section */}
      <footer className="w-full bg-white border-t border-gray-200 py-16 px-4 mt-auto relative z-[15]">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-4 text-[#0c1b2c]">להזמנות ובירורים:</h3>
          
          <div className="space-y-6 w-full max-w-sm">
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-bold text-[#0c1b2c] font-[family-name:var(--font-rubik)]">נפתלי בוצ&apos;קו</span>
              <a href="tel:0545581548" className="text-2xl font-bold text-[#0c1b2c] hover:text-blue-600 flex items-center gap-2 dir-ltr">
                <Phone size={24} />
                054-5581548
              </a>
            </div>

            <motion.a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold py-3.5 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-[#20ba5a] transition-all duration-200 w-full"
            >
              <FaWhatsapp size={26} />
              <span>צרו קשר ב-WhatsApp</span>
            </motion.a>
          </div>

          <div className="mt-16 text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} תפילין בוצ&apos;קו. כל הזכויות שמורות.</p>
            <div className="flex justify-center gap-4 mt-4 text-sm">
              <a href="/accessibility-statement" className="hover:underline hover:text-gray-600 transition-colors">הצהרת נגישות</a>
              <span>|</span>
              <a href="/privacy-policy" className="hover:underline hover:text-gray-600 transition-colors">מדיניות פרטיות</a>
              <span>|</span>
              <a href="/cookie-policy" className="hover:underline hover:text-gray-600 transition-colors">מדיניות עוגיות</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scribe Certificate Modal */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCert(null)}
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
                  onClick={() => setActiveCert(null)}
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
    </div>
  );
}