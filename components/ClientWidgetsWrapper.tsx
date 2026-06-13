"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const AccessibilityWidget = dynamic(() => import("./AccessibilityWidget"), { ssr: false });
const CookieBanner = dynamic(() => import("./CookieBanner"), { ssr: false });
const FloatingWhatsApp = dynamic(() => import("./FloatingWhatsApp"), { ssr: false });

export default function ClientWidgetsWrapper() {
  return (
    <>
      <AccessibilityWidget />
      <CookieBanner />
      <FloatingWhatsApp />
    </>
  );
}
