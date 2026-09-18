/**
 * Pixel-matched to Figma node 2242:683 ("Footer").
 *
 *   footer     bg #070b2e, px 56, py 48, flex-col items-start, gap 28
 *   disclaimer Regular 13 / 1.7 #8a93bd, w1200
 *   references flex-col gap 18
 *     heading  SemiBold 14 / 1.4 white, tracking 0.84px
 *     note     Italic 12 / 1.5 #8fa0d9
 *     columns  flex gap 40 — two columns, gap 10, Regular 11 / 1.6 #8fa0d9
 *              split by column (1 to 8, then 9 to 15), not row-wise
 *   bar        border-t rgba(255,255,255,.1), pt 24, justify-between
 *     tile     bg #fff, px16 py10, r12 — logo 120 x 27.529
 *     text     Medium 14 #c9d1ee
 *   copyright  SemiBold 13 / 1.7 #8a93bd, w1200
 */

import { footer, references } from '@/lib/content';

const SPLIT = 8;

function RefColumn({ items }: { items: typeof references }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-start gap-[10px] overflow-hidden">
      {items.map((r) => (
        <p
          key={r.n}
          id={`ref-${r.n}`}
          className="w-full scroll-mt-28 text-[11px] leading-[1.6] text-[#8fa0d9]"
        >
          {r.n}. {r.text}{' '}
          <a
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all underline-offset-2 hover:underline"
          >
            {r.url}
          </a>
        </p>
      ))}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer data-node-id="2242:683" className="bg-[#070b2e]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-[28px] px-[56px] py-[48px] max-lg:px-6">
        <p className="w-[1200px] max-w-full text-[13px] leading-[1.7] text-[#8a93bd]">
          {footer.disclaimer}
        </p>

        <section
          aria-labelledby="references-heading"
          className="flex w-full flex-col items-start gap-[18px] overflow-hidden"
        >
          <h2
            id="references-heading"
            className="whitespace-nowrap text-[14px] font-semibold leading-[1.4] tracking-[0.84px] text-white"
          >
            {footer.referencesHeading}
          </h2>
          <p className="w-full text-[12px] italic leading-[1.5] text-[#8fa0d9]">
            {footer.referencesNote}
          </p>
          <div className="flex w-full items-start gap-[40px] overflow-hidden max-md:flex-col max-md:gap-[10px]">
            <RefColumn items={references.slice(0, SPLIT)} />
            <RefColumn items={references.slice(SPLIT)} />
          </div>
        </section>

        <div className="flex w-full items-center justify-between gap-6 overflow-hidden border-t border-solid border-[rgba(255,255,255,0.1)] pt-[24px] max-lg:flex-col max-lg:items-start">
          <span className="flex shrink-0 items-start overflow-hidden rounded-[12px] bg-white px-[16px] py-[10px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brand/practo-logo.webp"
              alt="Practo"
              width={120}
              height={28}
              loading="lazy"
              decoding="async"
              className="h-[27.529px] w-[120px] object-contain"
            />
          </span>
          <p className="shrink-0 text-[14px] font-medium text-[#c9d1ee] max-lg:text-[13px]">
            {footer.published}
          </p>
        </div>

        <p className="w-[1200px] max-w-full text-[13px] font-semibold leading-[1.7] text-[#8a93bd]">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
