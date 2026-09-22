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

// Google Tag Manager. GA4 is fired by the container; nothing else analytics-related lives in this codebase.
const GTM_ID = 'GTM-NMP5FCZ9';

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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
