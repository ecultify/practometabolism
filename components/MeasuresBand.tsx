/**
 * Pixel-matched to Figma node 2242:95
 * ("01 Band · Five everyday measures", 1440 x 236).
 *
 * Figma values, verbatim:
 *   band        bg #0b1140, px 56, py 40, flex items-center, gap 48
 *   eyebrow     Poppins Medium 14, #8fa0d9
 *   headline    Poppins Light 64, #ffffff, tracking -1.28px
 *   caption     Poppins Italic 15, #8fa0d9, leading 1.5
 *   left col    flex-col gap 8
 *   divider     1 x 72, rgba(255,255,255,0.18)
 *   right col   flex-1 flex-col gap 14
 *   measures    flex-wrap, gap 12 (row) / 22 (col)
 *   measure     flex-col gap 6 — label Poppins SemiBold 18 #ffffff,
 *               rule 120 x 4 rounded 2, linear-gradient to right
 *               #14bef0 -> rgba(20,190,240,0.05)
 */

import { band } from '@/lib/content';

const RULE = 'linear-gradient(to right, #14bef0, rgba(20,190,240,0.05))';

export function MeasuresBand() {
  return (
    <section
      data-node-id="2242:95"
      aria-label={`${band.eyebrow} ${band.headline}`}
      className="bg-[#0b1140]"
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center gap-[48px] px-[56px] py-[40px] max-lg:flex-col max-lg:items-start max-lg:gap-[28px] max-lg:px-6 max-lg:py-8">
      <div className="flex shrink-0 flex-col gap-[8px] whitespace-nowrap max-lg:whitespace-normal">
        <p className="text-[14px] font-medium leading-normal text-[#8fa0d9]">{band.eyebrow}</p>
        <p className="text-[clamp(2.5rem,4.44vw,4rem)] font-light leading-normal tracking-[-0.02em] text-white">
          {band.headline}
        </p>
        <p className="text-[15px] italic leading-[1.5] text-[#8fa0d9]">{band.caption}</p>
      </div>

      <div
        aria-hidden="true"
        className="h-[72px] w-px shrink-0 bg-[rgba(255,255,255,0.18)] max-lg:hidden"
      />

      <div className="flex min-w-0 flex-1 flex-col gap-[14px]">
        <p className="whitespace-nowrap text-[14px] font-medium leading-normal text-[#8fa0d9]">
          {band.listLabel}
        </p>
        <ul className="flex flex-wrap content-start items-start gap-x-[22px] gap-y-[12px]">
          {band.measures.map((m) => (
            <li key={m} className="flex shrink-0 flex-col gap-[6px]">
              <span className="whitespace-nowrap text-[18px] font-semibold leading-normal text-white">
                {m}
              </span>
              <span
                aria-hidden="true"
                className="rule-draw block h-[4px] w-[120px] rounded-[2px]"
                style={{ backgroundImage: RULE }}
              />
            </li>
          ))}
        </ul>
      </div>
      </div>
    </section>
  );
}
