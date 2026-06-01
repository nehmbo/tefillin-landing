"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Award, CircleDollarSign, ChevronDown } from 'lucide-react';
import { GiQuillInk } from 'react-icons/gi';
import Image from 'next/image';
import AccessibilityWidget from "../components/AccessibilityWidget";

export default function LandingPage() {
  const whatsappNumber = '972545581548';
  const whatsappMessage = encodeURIComponent('שלום וברכה,\nראיתי את הפרסום שלך באתר אשמח לקבל פרטים נוספים על התפילין.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Top Spacer / Header Area simulating empty nav */}
      <div className="w-full h-[76px] md:h-[104px] bg-white relative z-30 border-b border-gray-100">
        {/* Logo overlapping top edge of hero image */}
        <div className="absolute top-0 left-4 md:left-16 bg-white rounded-b-2xl md:rounded-b-[2rem] shadow-md w-36 h-[140px] md:w-56 md:h-[190px] flex items-center justify-center">
          <div className="relative w-full h-full scale-[1.25] md:scale-[1.35] origin-center -translate-x-2 md:-translate-x-3 translate-y-3 md:translate-y-4">
            <Image
              src="/logo.png"
              alt="לוגו תפילין בוצ'קו"
              fill
              sizes="(max-width: 768px) 144px, 224px"
              className="object-contain"
              priority
              unoptimized
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
              src="/tefillin.PNG"
              alt="תפילין מהודרות על טלית לבנה"
              fill
              sizes="100vw"
              className="object-cover object-[center_40%] drop-shadow-sm"
              priority
              unoptimized
            />
            {/* Soft overlay to ensure transition to content */}
            <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white/60 to-transparent z-10"></div>
          </div>
        </div>
        
        {/* Title and Banner Section - Visible and not obscured */}
        <div className="w-full py-4 px-4 flex flex-col items-center bg-white relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[#0c1b2c] text-4xl md:text-5xl font-bold font-[family-name:var(--font-rubik)] mb-2 text-center leading-tight"
          >
            תפילין בוצ&apos;קו
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative px-6 md:px-8 py-2 md:py-2.5 flex items-center justify-center max-w-lg"
          >
            {/* Irregular Black Banner Shape - Stylized like the flyer */}
            <div className="absolute inset-0 bg-[#0c1b2c] skew-x-[-2deg] rounded-md shadow-lg" />
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
      <main className="max-w-6xl w-full px-4 py-16 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Experience Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col group h-full"
          >
            <div className="flex justify-between items-start w-full mb-6">
              <h2 className="text-2xl font-bold text-[#0c1b2c] mt-2">ניסיון</h2>
              <div className="w-14 h-14 border-2 border-[#0c1b2c] bg-[#fdfcf9] rounded-full flex items-center justify-center text-[#0c1b2c] text-2xl font-bold group-hover:-rotate-6 group-hover:scale-110 transition-transform shrink-0 shadow-sm">
                17
              </div>
            </div>
            <ul className="space-y-3 text-gray-600 text-start w-full">
              <li>נפתלי בוצ&apos;קו הוסמך ע&quot;י מכון יד רפאל כסופר סת&quot;ם ומגיה.</li>
              <li><span className="font-bold text-[#0c1b2c]">17 שנות ניסיון</span> בכתיבת סת&quot;ם.</li>
              <li>מומלץ על ידי רבנים.</li>
              <li>הוסמך לרבנות.</li>
              <li>לימד כתיבת סת&quot;ם בישיבת היכל אליהו.</li>
            </ul>
          </motion.div>

          {/* Writing Style Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col group h-full"
          >
            <div className="flex justify-between items-start w-full mb-6">
              <h2 className="text-2xl font-bold text-[#0c1b2c] mt-2">כתיבה - ספרדי</h2>
              <div className="w-14 h-14 flex items-center justify-center text-[#0c1b2c] group-hover:-rotate-6 group-hover:scale-110 transition-transform shrink-0">
                <GiQuillInk size={56} className="text-[#0c1b2c]" />
              </div>
            </div>
            <ul className="space-y-3 text-gray-600 text-start w-full">
              <li>מומחה לכתיבת תפילין רגיל, בינוני וקטן - פצפון.</li>
              <li><span className="font-bold text-[#0c1b2c]">מומחיות מיוחדת לתפילין פצפונים.</span></li>
              <li>כתב מדויק ונקי מאוד.</li>
              <li>תפילין של רש&quot;י ורבינו תם.</li>
              <li>כתיבה בטהרה.</li>
            </ul>
          </motion.div>

          {/* Price Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col group h-full"
          >
            <div className="flex justify-between items-start w-full mb-4">
              <h2 className="text-2xl font-bold text-[#0c1b2c] mt-2">מחיר התפילין</h2>
              <div className="w-14 h-14 border-2 border-[#0c1b2c] bg-[#fdfcf9] rounded-full flex items-center justify-center text-[#0c1b2c] text-2xl font-bold group-hover:-rotate-6 group-hover:scale-110 transition-transform shrink-0 shadow-sm">
                ₪
              </div>
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

      {/* Accessibility Widget added safely here */}
      <AccessibilityWidget />

      {/* Footer / Contact Section */}
      <footer className="w-full bg-white border-t border-gray-200 py-16 px-4 mt-auto">
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors w-full"
            >
              <MessageCircle size={24} />
              <span>צרו קשר בווצאפ</span>
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
    </div>
  );
}