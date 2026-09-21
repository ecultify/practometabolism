/**
 * Pixel-matched to Figma node 2242:415
 * ("05 Every number tells a story · Screen 5").
 *
 *   section    bg #fff, px 56, py 120, flex-col items-start, gap 48
 *   intro      flex justify-between items-start, w-full
 *     left     w760, gap 14 — eyebrow SemiBold 13 / 1.4 #28328c tracking 1.04px
 *                            h2 Light 48 / 1.1 #0b1140 tracking -0.96px
 *     right    w488, gap 14 — Regular 18 / 1.6 #2e3766
 *                            Regular 15 / 1.6 #4a5487
 *   measures   flex-col gap 24
 *     row 1    flex gap 24, h140 — three cards
 *     row 2    flex gap 24, h116 — two cards
 *     card     bg #f3f6fc, r20, p28, flex-col gap 10, flex-1
 *       title  SemiBold 18 / 1.45 #0b1140
 *       body   Regular 15 / 1.6 #2e3766
 *   footnote   flex-col h82 items-center justify-between
 *     panel    bg #f3f6fc, r16, px22 py20 — Regular 13 / 1.65 #4a5487
 *     note     Italic 12 / 1.5 #6b75a8
 */

import { screen5 } from '@/lib/content';
import { Txt } from './ui';

const CARD =
  'flex h-full min-w-0 flex-1 flex-col items-start gap-[10px] overflow-hidden rounded-[20px] bg-white p-[28px] max-md:h-auto max-md:w-full';

export function Numbers() {
  const row1 = screen5.measures.slice(0, 3);
  const row2 = screen5.measures.slice(3);

  return (
    <section id="numbers" data-node-id="2242:415" className="scroll-mt-24 bg-[#f3f6fc]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-[48px] px-[56px] py-[80px] max-lg:gap-10 max-lg:px-6 max-lg:py-14">
        {/* ---- Intro row (2242:416) ---- */}
        <div className="flex w-full items-start justify-between gap-10 max-lg:flex-col max-lg:gap-6">
          <div className="flex w-[760px] max-w-full flex-col items-start gap-[14px]">
            <h2 className="w-full text-[clamp(1.875rem,3.33vw,3rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0b1140]">
              {screen5.headline}
            </h2>
          </div>
          <div className="flex w-[488px] max-w-full flex-col items-start gap-[14px] leading-[1.6]">
            <p className="w-full text-[18px] text-[#2e3766]">{screen5.subhead}</p>
          </div>
        </div>

        {/* ---- Measures (2242:419) ---- */}
        <div className="flex w-full flex-col items-start gap-[24px]">
          <ul className="flex h-[140px] w-full items-start gap-[24px] max-md:h-auto max-md:flex-col">
            {row1.map((m) => (
              <li key={m.title} className={CARD}>
                <h3 className="w-full text-[18px] font-semibold leading-[1.45] text-[#0b1140]">
                  {m.title}
                </h3>
                <p className="w-full text-[15px] leading-[1.6] text-[#2e3766]">
                  <Txt line={m.body} />
                </p>
              </li>
            ))}
          </ul>
          <ul className="flex h-[116px] w-full items-start gap-[24px] max-md:h-auto max-md:flex-col">
            {row2.map((m) => (
              <li key={m.title} className={CARD}>
                <h3 className="w-full text-[18px] font-semibold leading-[1.45] text-[#0b1140]">
                  {m.title}
                </h3>
                <p className="w-full text-[15px] leading-[1.6] text-[#2e3766]">
                  <Txt line={m.body} />
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* ---- Footnote row (2242:456) ---- */}
        <div className="flex h-[82px] w-full flex-col items-center justify-between gap-3 max-lg:h-auto">
          <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-[16px] bg-white px-[22px] py-[20px]">
            <p className="w-full text-center text-[13px] leading-[1.65] text-[#4a5487]">{screen5.closing}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
