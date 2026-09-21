/**
 * Pixel-matched to Figma node 2242:683 ("Footer").
 *
 *   footer     bg #070b2e, px 56, py 48, flex-col items-start, gap 28
 *   disclaimer Regular 13 / 1.7 #8a93bd, w1200
 *   references moved to components/References.tsx (own section above the footer)
 *   bar        border-t rgba(255,255,255,.1), pt 24, justify-between
 *     tile     bg #fff, px16 py10, r12 — logo 120 x 27.529
 *     text     Medium 14 #c9d1ee
 *   copyright  SemiBold 13 / 1.7 #8a93bd, w1200
 */

import { footer } from '@/lib/content';

export function SiteFooter() {
  return (
    <footer data-node-id="2242:683" className="bg-[#070b2e]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-[28px] px-[56px] py-[48px] max-lg:px-6">
        <p className="w-full text-[13px] leading-[1.7] text-[#8a93bd]">
          {footer.disclaimer}
        </p>

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

        <p className="w-full text-[13px] font-semibold leading-[1.7] text-[#8a93bd]">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
