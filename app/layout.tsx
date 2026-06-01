import type { Metadata } from 'next';
import { Inter, Heebo, Rubik } from 'next/font/google';
import './globals.css';
import AccessibilityWidget from "../components/AccessibilityWidget";
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const heebo = Heebo({ subsets: ['hebrew'], variable: '--font-heebo' });
const rubik = Rubik({ subsets: ['hebrew'], variable: '--font-rubik' });

export const metadata: Metadata = {
  title: "תפילין בוצ'קו | תפילין מהודרות בכתב ספרדי",
  description: "תפילין מהודרות הנכתבות בטהרה ובדיוק רב על ידי נפתלי בוצ'קו, סופר סתם מוסמך ובעל ניסיון של 17 שנים. כתיבה ספרדית נקייה ומדויקת.",
  keywords: "תפילין, בוצ'קו, סופר סתם, כתב ספרדי, תפילין מהודרות, נפתלי בוצ'קו, כתיבת סתם, תפילין פצפונים",
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: "תפילין בוצ'קו | תפילין מהודרות בכתב ספרדי",
    description: "מיועד למי שרוצה להדר ולהשקיע במצוות תפילין. כתיבה בטהרה, ניסיון של 17 שנים.",
    url: 'https://tefillin-botchko.com',
    siteName: "תפילין בוצ'קו",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "תפילין בוצ'קו - סמל",
      },
    ],
    locale: 'he_IL',
    type: 'website',
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="he" dir="rtl" className={`${inter.variable} ${heebo.variable} ${rubik.variable}`}>
      <body suppressHydrationWarning className="font-heebo font-sans antialiased bg-[#fdfcf9] text-[#1a1a1a]">
        {children}
      </body>
    </html>
  );
}