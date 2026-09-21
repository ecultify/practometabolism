/**
 * Pixel-matched to Figma node 2242:617 ("04 Health in balance · Screen 4").
 *
 *   section   bg #fff, px 56, py 120, flex-col items-start, gap 64
 *   intro     flex justify-between items-start, w-full
 *     left    w760, flex-col gap 14
 *       eyebrow  SemiBold 13 / 1.4 #28328c, tracking 1.04px
 *       h2       Light 56 / 1.1 #0b1140, tracking -1.12px
 *     right   w488 — Regular 19 / 1.6 #2e3766
 *   habits    flex gap 24 items-start, w-full
 *     card    flex-1, flex-col gap 16
 *       img     h380, r24, object-cover
 *       title   SemiBold 24 #0b1140, tracking -0.12px
 *       body    Regular 16 / 1.6 #2e3766, w300
 *   mosaic    2242:631 — inside the same 314 x 380 box
 *       bowl    (0, 0)    314 x 250, r24
 *       salad   (0, 262)  151 x 118, r18
 *       meal    (163,262) 151 x 118, r18
 *   closing   bg #f3f6fc, r24, px 32 py 28 — Medium 18 / 1.55 #1e2a78, w720
 *   note      Italic 12 / 1.5 #6b75a8
 */

import { screen4 } from '@/lib/content';
import { TitleLines, Txt } from './ui';

const BOX_W = 314;
const BOX_H = 380;

export function Balance() {
  return (
    <section id="balance" data-node-id="2242:617" className="scroll-mt-24 bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-[64px] px-[56px] py-[80px] max-lg:gap-12 max-lg:px-6 max-lg:py-14">
        {/* ---- Intro (2242:618) ---- */}
        <div className="flex w-full items-start justify-between gap-10 max-lg:flex-col max-lg:gap-6">
          <div className="flex w-[760px] max-w-full flex-col gap-[14px]">
            <h2 className="w-full text-[clamp(2.25rem,3.89vw,3.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0b1140]">
              <TitleLines text={screen4.headline} at={5} />
            </h2>
          </div>
          <div className="flex w-[488px] max-w-full flex-col items-start">
            <p data-reveal className="w-full text-[19px] leading-[1.6] text-[#2e3766] max-lg:text-[17px]">
              {screen4.subhead}
            </p>
          </div>
        </div>

        {/* ---- Habits (2242:621) ---- */}
        <ul className="flex w-full items-start gap-[24px] max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1">
          {screen4.cards.map((c) => (
            <li key={c.title} className="flex min-w-0 flex-1 flex-col items-start gap-[16px] max-lg:gap-[8px]">
              <div
                  data-reveal-img
                  className="w-full overflow-hidden rounded-[24px] bg-[#F3F6FC]"
                  style={{ aspectRatio: `${BOX_W} / ${BOX_H}` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={'mosaic' in c && c.mosaic ? (c.mosaic as string[])[0] : c.image}
                    alt={c.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                    style={c.image.includes('stress') ? { objectPosition: '72% 30%' } : undefined}
                  />
                </div>
              <h3 data-reveal className="whitespace-nowrap text-[24px] font-semibold tracking-[-0.005em] text-[#0b1140] max-lg:whitespace-normal">
                {c.title}
              </h3>
              <p data-reveal className="w-[300px] max-w-full text-[16px] leading-[1.6] text-[#2e3766] max-lg:w-full max-lg:leading-[1.5]">
                <Txt line={c.body} />
              </p>
            </li>
          ))}
        </ul>

        {/* ---- Closing (2242:641) ---- */}
        <div data-reveal className="flex w-full items-center justify-between overflow-hidden rounded-[24px] bg-[#f3f6fc] px-[32px] py-[28px] max-lg:px-6 max-lg:py-5">
          <p className="w-[720px] max-w-full text-[18px] font-medium leading-[1.55] text-[#1e2a78]">
            {screen4.listLine}
          </p>
        </div>

      </div>
    </section>
  );
}
