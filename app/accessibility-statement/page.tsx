import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AccessibilityStatementPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#fdfcf9] py-16 px-4">
      <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:underline mb-8 gap-2">
          <ArrowRight size={16} />
          חזרה לדף הבית
        </Link>
        <h1 className="text-3xl font-bold text-[#0c1b2c] mb-6">הצהרת נגישות</h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <p>
              אנו באתר "תפילין בוצ'קו" רואים חשיבות רבה במתן שירות שוויוני, נגיש ומכיל לכלל הגולשים, לרבות אנשים עם מוגבלויות. אנו משקיעים מאמצים ומשאבים כדי להנגיש את האתר.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-[#0c1b2c] mb-3">רמת נגישות</h2>
            <p>
              אתר זה הונגש, ככל האפשר, בהתאם לדרישות תקנות שוויון זכויות לאנשים עם מוגבלות. האתר מותאם לתצוגה בדפדפנים הנפוצים ולשימוש מטלפונים סלולריים.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0c1b2c] mb-3">אפשרויות הנגשה באתר</h2>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>באתר מופעל תפריט נגישות (כפתור בפינת המסך).</li>
              <li>אפשרות להגדלת טקסט והקטנתו.</li>
              <li>אפשרות לשינוי ניגודיות (צבעים מנוגדים או מונוכרום).</li>
              <li>הדגשת קישורים באתר (קו תחתון).</li>
              <li>הפיכת גופן האתר לנגיש וקריא.</li>
              <li>ניווט פשוט וברור באתר.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0c1b2c] mb-3">הסתייגות ויצירת קשר</h2>
            <p>
              חרף מאמצינו להנגיש את כלל דפי האתר, ייתכן שיתגלו חלקים שטרם הונגשו במלואם. במידה ונתקלתם בבעיית נגישות כלשהי באתר, נשמח אם תפנו אלינו כדי שנוכל לטפל בה:
            </p>
            <p className="mt-2 font-bold text-right">
              מייל: <span className="dir-ltr inline-block">nehmbo@gmail.com</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}