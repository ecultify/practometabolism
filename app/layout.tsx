import type { Metadata } from 'next';
// Self-hosted so the build needs no network and the site has no third-party
// font request at runtime (relevant for a health page with a privacy line).
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/400-italic.css';
import '@fontsource/lato/700-italic.css';
import './globals.css';
import { MotionInit } from '@/components/MotionInit';
import { GoogleAnalytics } from '@next/third-parties/google';

// Set NEXT_PUBLIC_GA_ID in .env.local (build time). Without it no analytics tag is emitted.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: 'Internal health awareness | Practo',
  description:
    'Health starts with you. Understand the everyday measures that shape your internal health: blood sugar, cholesterol, blood pressure, body weight and waist circumference.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Health starts with you | Practo',
    description:
      'Understand the everyday measures that shape your internal health, and what is worth discussing with a doctor.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-pill focus:bg-brand focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <MotionInit />
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
