import type { Config } from 'tailwindcss';

/**
 * Tailwind consumes SEMANTIC tokens only (layer 2/3 in globals.css).
 * Nothing here references a raw hex, so re-theming happens in one file
 * and dark sections work by wrapping in .on-dark.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: 'var(--surface-page)',
          subtle: 'var(--surface-subtle)',
          accent: 'var(--surface-accent)',
          card: 'var(--surface-card)',
        },
        ink: {
          strong: 'var(--text-strong)',
          body: 'var(--text-body)',
          muted: 'var(--text-muted)',
          faint: 'var(--text-faint)',
          brand: 'var(--text-brand)',
          accent: 'var(--text-accent)',
        },
        brand: 'var(--brand)',
        accent: 'var(--accent)',
        line: {
          DEFAULT: 'var(--border-subtle)',
          strong: 'var(--border-strong)',
        },
        notice: {
          bg: 'var(--notice-bg)',
          border: 'var(--notice-border)',
          icon: 'var(--notice-icon)',
          text: 'var(--notice-text)',
        },
      },
      borderRadius: {
        card: 'var(--card-radius)',
        panel: 'var(--panel-radius)',
        modal: 'var(--modal-radius)',
        pill: 'var(--btn-radius)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // name -> [size, line-height] straight off the Figma type ramp
        eyebrow: ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.08em', fontWeight: '600' }],
        // hero h1        node 2242:42  — 80 / 1.04 / -2px
        'display-xl': ['clamp(2.5rem, 5.56vw, 5rem)', { lineHeight: '1.04', letterSpacing: '-0.025em' }],
        // band h2        node 2242:98  — 64 / normal / -1.28px
        'display-lg': ['clamp(2.25rem, 4.44vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        // section h2     node 2244:32  — 48 / 1.2
        'display-md': ['clamp(1.875rem, 3.33vw, 3rem)', { lineHeight: '1.2' }],
        // panel h3       node 2244:47  — 22 / 1.45
        'title-lg': ['clamp(1.25rem, 1.53vw, 1.375rem)', { lineHeight: '1.45' }],
        'title-md': ['1.125rem', { lineHeight: '1.5' }],
        // section sub    node 2244:33  — 18 / 1.6
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        // panel body     node 2244:48  — 16 / 1.7
        body: ['1rem', { lineHeight: '1.7' }],
        // tabs / labels  node 2244:38  — 15 / 1.55
        small: ['0.9375rem', { lineHeight: '1.55' }],
        // note           node 2244:117 — 12 / 1.5
        tiny: ['0.75rem', { lineHeight: '1.5' }],
      },
      maxWidth: {
        content: 'var(--measure-content)',
      },
      spacing: {
        section: 'clamp(4rem, 8vw, 7.5rem)',
      },
    },
  },
  plugins: [],
};
export default config;
