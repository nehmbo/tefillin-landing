"use client";

import React, { useState } from 'react';
import { Phone, Scroll, Search } from 'lucide-react';
import { GiQuillInk } from 'react-icons/gi';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import heavy interactive client components
const FloatingLetters = dynamic(() => import('../components/FloatingLetters'), { ssr: false });
const CertificateModal = dynamic(() => import('../components/CertificateModal'), { ssr: false });

export default function LandingPage() {
  const [activeCert, setActiveCert] = useState<{ src: string | string[]; title: string } | null>(null);

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
              fetchPriority="high"
            />
            {/* Soft overlay to ensure transition to content */}
            <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white/60 to-transparent z-10" />
          </div>
        </div>
        
        {/* Title and Banner Section - Visible and not obscured */}
        <div className="w-full py-4 px-4 flex flex-col items-center bg-white relative z-10">
          <h1 className="text-[#0c1b2c] text-4xl md:text-5xl mb-2 text-center leading-tight font-normal font-stam-sefarad">
            תפילין בוצ&apos;קו
          </h1>
          
          <div className="relative px-6 md:px-8 py-2 md:py-2.5 flex items-center justify-center max-w-lg">
            {/* Irregular Bordeaux Banner Shape - Stylized like the flyer */}
            <div className="absolute inset-0 bg-[#7e191b] skew-x-[-2deg] rounded-md shadow-lg" />
            <p className="relative text-white text-sm md:text-lg font-bold text-center leading-relaxed">
              מיועד למי שרוצה להדר ולהשקיע במצוות תפילין
            </p>
          </div>
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
          <div className="bg-[#f0f6fc] p-8 rounded-2xl shadow-xl border border-[#d2e3f7]/60 flex flex-col h-full hover:-translate-y-2 hover:scale-[1.015] hover:shadow-2xl transition-all duration-300 ease-out group">
            <div className="flex justify-between items-start w-full mb-6">
              <h2 className="text-2xl font-bold text-[#0c1b2c] mt-2">ניסיון</h2>
              <div className="w-16 h-16 shrink-0 group-hover:-rotate-8 group-hover:scale-115 transition-transform duration-300 ease-out">
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-full h-full drop-shadow-[0_4px_6px_rgba(12,27,44,0.15)]"
                >
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
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 2" opacity="0.8" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#e2e8f0" strokeWidth="0.5" opacity="0.5" />
                  <text x="50" y="50" dominantBaseline="central" className="fill-white text-[26px] font-black font-rubik" textAnchor="middle">
                    17+
                  </text>
                </svg>
              </div>
            </div>
            <ul className="space-y-3 text-gray-600 text-start w-full">
              <li>נפתלי בוצ&apos;קו הוסמך ע&quot;י מכון יד רפאל כסופר סת&quot;ם ומגיה.</li>
              <li><span className="font-bold text-[#0c1b2c]">17 שנות ניסיון</span> בכתיבת סת&quot;ם.</li>
              <li>מומלץ על ידי רבנים.</li>
              <li>הוסמך לרבנות.</li>
              <li>לימד כתיבת סת&quot;ם בישיבת היכל אליהו.</li>
            </ul>
            
            <div className="mt-auto flex gap-2 w-full pt-4">
              <button 
                onClick={() => setActiveCert({ src: '/sofer.avif', title: 'תעודת סופר סת״ם' })}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-[#0c1b2c]/20 hover:border-[#0c1b2c] hover:bg-gray-50 text-[#0c1b2c] rounded-xl text-[11px] font-bold shadow-sm hover:scale-104 hover:-translate-y-0.5 active:scale-96 transition-all duration-200 cursor-pointer"
              >
                <Scroll size={13} />
                <span className="whitespace-nowrap">תעודת סופר</span>
              </button>
              <button 
                onClick={() => setActiveCert({ src: '/megiha.avif', title: 'תעודת מגיה מוסמך' })}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-[#0c1b2c]/20 hover:border-[#0c1b2c] hover:bg-gray-50 text-[#0c1b2c] rounded-xl text-[11px] font-bold shadow-sm hover:scale-104 hover:-translate-y-0.5 active:scale-96 transition-all duration-200 cursor-pointer"
              >
                <Search size={13} />
                <span className="whitespace-nowrap">תעודת מגיה</span>
              </button>
            </div>
          </div>

          {/* Writing Style Card */}
          <div className="bg-[#f0f6fc] p-8 rounded-2xl shadow-xl border border-[#d2e3f7]/60 flex flex-col h-full hover:-translate-y-2 hover:scale-[1.015] hover:shadow-2xl transition-all duration-300 ease-out group">
            <div className="flex justify-between items-start w-full mb-6">
              <h2 className="text-2xl font-bold text-[#0c1b2c] mt-2">כתיבה - ספרדי</h2>
              <div className="w-14 h-14 flex items-center justify-center text-[#0c1b2c] shrink-0 group-hover:-rotate-12 group-hover:scale-115 group-hover:-translate-y-0.5 transition-transform duration-300 ease-out">
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
            
            <div className="mt-auto flex gap-2 w-full pt-4">
              <button 
                onClick={() => setActiveCert({ src: '/ketav.avif', title: "דוגמת כתב יד ספרדי - נפתלי בוצ'קו" })}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-[#0c1b2c]/20 hover:border-[#0c1b2c] hover:bg-gray-50 text-[#0c1b2c] rounded-xl text-[11px] font-bold shadow-sm hover:scale-104 hover:-translate-y-0.5 active:scale-96 transition-all duration-200 cursor-pointer"
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
              </button>
              <button 
                onClick={() => setActiveCert({
                  src: ['/batimmeuzav.avif', '/baitmeuzav.avif', '/bait2meuzav.avif'],
                  title: 'דוגמת בתי תפילין מהודרים'
                })}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-[#0c1b2c]/20 hover:border-[#0c1b2c] hover:bg-gray-50 text-[#0c1b2c] rounded-xl text-[11px] font-bold shadow-sm hover:scale-104 hover:-translate-y-0.5 active:scale-96 transition-all duration-200 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] text-[#0c1b2c] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="12 2 20 6 12 10 4 6" fill="currentColor" fillOpacity="0.2" />
                  <polygon points="4 6 12 10 12 17 4 13" />
                  <polygon points="12 10 20 6 20 13 12 17" />
                </svg>
                <span className="whitespace-nowrap">דוגמת בתים</span>
              </button>
            </div>
          </div>

          {/* Price Card */}
          <div className="bg-[#f0f6fc] p-8 rounded-2xl shadow-xl border border-[#d2e3f7]/60 flex flex-col h-full hover:-translate-y-2 hover:scale-[1.015] hover:shadow-2xl transition-all duration-300 ease-out group">
            <div className="flex justify-between items-start w-full mb-4">
              <h2 className="text-2xl font-bold text-[#0c1b2c] mt-2">מחיר התפילין</h2>
              <div className="w-14 h-14 border-2 border-[#0c1b2c] bg-[#fdfcf9] rounded-full flex items-center justify-center text-[#0c1b2c] shrink-0 shadow-sm overflow-hidden group-hover:scale-115 group-hover:rotate-3 group-hover:-translate-y-0.5 transition-transform duration-300 ease-out">
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
          </div>
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

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#075E54] text-white font-bold py-3.5 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-[#128C7E] hover:scale-103 active:scale-97 transition-all duration-200 w-full"
            >
              <FaWhatsapp size={26} />
              <span>צרו קשר ב-WhatsApp</span>
            </a>
          </div>

          <div className="mt-16 text-gray-600 text-sm">
            <p>&copy; {new Date().getFullYear()} תפילין בוצ&apos;קו. כל הזכויות שמורות.</p>
            <div className="flex justify-center gap-4 mt-4 text-sm">
              <a href="/accessibility-statement" className="text-gray-600 hover:text-[#0c1b2c] hover:underline transition-colors">הצהרת נגישות</a>
              <span className="text-gray-300">|</span>
              <a href="/privacy-policy" className="text-gray-600 hover:text-[#0c1b2c] hover:underline transition-colors">מדיניות פרטיות</a>
              <span className="text-gray-300">|</span>
              <a href="/cookie-policy" className="text-gray-600 hover:text-[#0c1b2c] hover:underline transition-colors">מדיניות עוגיות</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scribe Certificate Modal dynamically loaded */}
      <CertificateModal activeCert={activeCert} onClose={() => setActiveCert(null)} />
    </div>
  );
}