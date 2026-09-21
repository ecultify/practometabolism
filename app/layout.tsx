import type { Metadata } from 'next';
// Self-hosted so the build needs no network and the site has no third-party
// font request at runtime (relevant for a health page with a privacy line).
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/400-italic.css';
import './globals.css';
import { MotionInit } from '@/components/MotionInit';

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
    </html>
  );
}
