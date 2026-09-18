import type { ReactNode } from 'react';
import type { Line } from '@/lib/content';

/* ---------- references ---------- */
export function Refs({ nums }: { nums?: number[] }) {
  if (!nums?.length) return null;
  return (
    <sup className="ml-[1px] text-[0.65em] font-semibold text-ink-accent">
      {nums.map((n, i) => (
        <span key={n}>
          {i > 0 && <span aria-hidden="true">,</span>}
          <a href={`#ref-${n}`} className="hover:underline" aria-label={`Reference ${n}`}>
            {n}
          </a>
        </span>
      ))}
    </sup>
  );
}

export function Txt({ line, className }: { line: Line; className?: string }) {
  return (
    <span className={className}>
      {line.text}
      <Refs nums={line.refs} />
    </span>
  );
}

/* ---------- layout ---------- */
export function Section({
  id,
  tone = 'light',
  className = '',
  children,
}: {
  id?: string;
  tone?: 'light' | 'subtle' | 'accent' | 'dark';
  className?: string;
  children: ReactNode;
}) {
  const tones: Record<string, string> = {
    light: 'bg-white',
    subtle: 'bg-[var(--practo-mist-100)]',
    accent: 'bg-[var(--practo-ice-100)]',
    dark: 'on-dark bg-[var(--practo-navy-900)]',
  };
  return (
    <section id={id} className={`${tones[tone]} py-section ${className}`}>
      <div className="shell">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow uppercase ${className}`}>{children}</p>;
}

export function Headline({
  children,
  size = 'lg',
  className = '',
  as: Tag = 'h2',
}: {
  children: ReactNode;
  size?: 'xl' | 'lg' | 'md';
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}) {
  const sizes = {
    xl: 'text-display-xl font-light',
    lg: 'text-display-lg font-light',
    md: 'text-display-md font-light',
  };
  return <Tag className={`${sizes[size]} text-ink-strong ${className}`}>{children}</Tag>;
}

export function Note({ children }: { children: ReactNode }) {
  return <p className="note mt-6">{children}</p>;
}

/* ---------- bullets ---------- */
export function Bullet({ line, className = '' }: { line: Line; className?: string }) {
  return (
    <li className={`flex gap-3 ${className}`}>
      <span
        aria-hidden="true"
        className="mt-[0.55em] h-[7px] w-[7px] shrink-0 rounded-full bg-accent"
      />
      <span className="text-ink-body">
        <Txt line={line} />
      </span>
    </li>
  );
}

export function BulletList({ items, className = '' }: { items: Line[]; className?: string }) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((l) => (
        <Bullet key={l.text} line={l} />
      ))}
    </ul>
  );
}

/* ---------- buttons ---------- */
export function ArrowChip({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`chip grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--chip-arrow-bg)] text-[var(--chip-arrow-fg)] ${className}`}
    >
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M2.5 8h10M8.5 3.5 13 8l-4.5 4.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

type BtnProps = {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  withArrow?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string };

export function Button({
  children,
  variant = 'primary',
  withArrow = true,
  className = '',
  href,
  ...rest
}: BtnProps) {
  const base =
    'btn inline-flex items-center gap-4 rounded-pill text-[1.0625rem] font-semibold transition-transform duration-150 active:scale-[0.99]';
  const styles =
    variant === 'primary'
      ? `btn-primary bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)] pl-7 ${withArrow ? 'pr-2.5 py-2.5' : 'pr-7 py-3.5'}`
      : `btn-outline border-[1.5px] border-[var(--btn-secondary-border)] text-[var(--btn-secondary-fg)] px-7 py-3.5`;
  const inner = (
    <>
      {children}
      {variant === 'primary' && withArrow && <ArrowChip />}
    </>
  );
  if (href) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" className={`${base} ${styles} ${className}`} {...rest}>
      {inner}
    </button>
  );
}

/* ---------- media ---------- */
export function Figure({
  src,
  alt,
  ratio = '3 / 4',
  className = '',
  imgClassName = '',
  priority = false,
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <div className={`overflow-hidden rounded-card bg-[var(--practo-mist-100)] ${className}`} style={{ aspectRatio: ratio }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
