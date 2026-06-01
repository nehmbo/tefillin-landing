import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#fdfcf9] py-16 px-4">
      <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:underline mb-8 gap-2">
          <ArrowRight size={16} />
          חזרה לדף הבית
        </Link>
        <h1 className="text-3xl font-bold text-[#0c1b2c] mb-6">מדיניות עוגיות (Cookies)</h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#0c1b2c] mb-3">מהן עוגיות?</h2>
            <p>
              עוגיות (Cookies) הן קבצי טקסט קטנים הנשמרים על גבי המחשב או המכשיר הנייד שלך כאשר אתה מבקר באתרים מסוימים באינטרנט. מטרתן לשפר את חווית הגלישה שלך.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-[#0c1b2c] mb-3">כיצד אנו משתמשים בעוגיות?</h2>
            <p>
              האתר שלנו עשוי להשתמש בעוגיות לצורך תפעולו השוטף והתקין, כדי לאסוף נתונים סטטיסטיים אודות השימוש באתר (כגון Google Analytics), וכן כדי לשפר את תצוגת ושמישות האתר.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0c1b2c] mb-3">שליטה בעוגיות</h2>
            <p>
              מרבית הדפדפנים מאפשרים לך לשלוט בעוגיות דרך הגדרות הדפדפן. באפשרותך לבחור למחוק עוגיות קיימות או למנוע יצירת עוגיות חדשות. עם זאת, שים לב כי חסימת עוגיות עשויה לפגוע בחלק מהפונקציות באתר.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
