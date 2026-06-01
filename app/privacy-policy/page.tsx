import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#fdfcf9] py-16 px-4">
      <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:underline mb-8 gap-2">
          <ArrowRight size={16} />
          חזרה לדף הבית
        </Link>
        <h1 className="text-3xl font-bold text-[#0c1b2c] mb-6">מדיניות פרטיות</h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#0c1b2c] mb-3">1. כללי</h2>
            <p>
              אנו באתר "תפילין בוצ'קו" מכבדים את פרטיות המשתמשים שלנו. מדיניות פרטיות זו מתארת כיצד אנו אוספים, פוסקים או עושים שימוש במידע שנאסף ממך באתר זה.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-[#0c1b2c] mb-3">2. איסוף מידע</h2>
            <p>
              אנו עשויים לאסוף מידע שאתה מוסר לנו מרצונך, לדוגמה כאשר אתה יוצר עמנו קשר באמצעות הטלפון או הוואטסאפ. המידע עשוי לכלול שם, מספר טלפון וכל מידע אחר שתבחר לשתף.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0c1b2c] mb-3">3. שימוש במידע</h2>
            <p>
              המידע שנאסף משמש אך ורק למטרת יצירת קשר חזרה, מתן שירות, טיפול בהזמנות תפילין או מתן מענה לשאלותיך.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0c1b2c] mb-3">4. שיתוף מידע עם צד שלישי</h2>
            <p>
              אנו לא מוכרים, סוחרים או מעבירים מידע אישי מזהה לצדדים שלישיים ללא הסכמתך, למעט במקרים בהם הדבר נדרש על פי חוק.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0c1b2c] mb-3">5. אבטחת מידע</h2>
            <p>
              אנו מיישמים אמצעי אבטחה שונים כדי לשמור על בטיחות המידע האישי שלך. עם זאת, שום העברת נתונים דרך האינטרנט אינה מאובטחת במאה אחוז.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
