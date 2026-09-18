/**
 * Pixel-matched to Figma node 2242:120 ("06 Understand the symptoms · Screen 6").
 *
 *   section    bg #fff, px 56, py 120, flex-col items-start, gap 72
 *   excuses    flex gap 56 items-start
 *     wall     flex-1, flex-col gap 28
 *       eyebrow SemiBold 13 / 1.4 #28328c tracking 1.04px
 *       h2      Light 56 / 1.1 #0b1140 tracking -1.12px, w760
 *       sub     Regular 19 / 1.6 #4a5487, w520
 *       quotes  flex-col gap 10, pt 24
 *               q  Medium Italic 44 #28328c tracking -0.44px
 *               u  2px #14bef0 rule, pb 8
 *               indents 0 / 120 / 40 — rule widths 285.3 / 589.5 / 594
 *     collage  420 x 560
 *       stairs (120, 0)   300 x 440, r28
 *       glass  (0, 300)   200 x 240, r24, 8px white border
 *   signs      flex-col gap 28
 *     h3       SemiBold 22 / 1.45 #0b1140
 *     row      flex gap 24 — card flex-1, gap 18
 *              img h400 r24 object-cover
 *              label flex gap 12 — marker 10x19 (5r circle at cy 14)
 *                    Medium 19 / 1.45 #0b1140, w270
 *     more     bg #eaf8fe, h400, r24, px32 py36, justify-center, gap 18
 *              item flex gap 14 — dot 8x18 (4r circle at cy 14)
 *                    Medium 19 / 1.5 #0b1140
 *   closing    border-top 1px #e4e8f4, pt 36 — Regular 20 / 1.6 #2e3766, w760
 *   note       Italic 12 / 1.5 #6b75a8
 *
 * One approved deviation: the "Increasing waist circumference" card uses the
 * client's own waist photo instead of the glass-of-water photo still sitting
 * in the Figma frame, which did not match the point being made.
 */

import { screen6 } from '@/lib/content';
import { Txt } from './ui';

const HEAD = 'w-full text-[22px] font-semibold leading-[1.45] text-[#0b1140]';

/* Figma 2242:157 — 10 x 19 box, 5r circle at cy 14 */
function Marker() {
  return (
    <span aria-hidden="true" className="relative block h-[19px] w-[10px] shrink-0">
      <span className="absolute left-0 top-[9px] block size-[10px] rounded-full bg-[#14bef0]" />
    </span>
  );
}

/* Figma 2258:57 — 8 x 18 box, 4r circle at cy 14 */
function Dot() {
  return (
    <span aria-hidden="true" className="relative block h-[18px] w-[8px] shrink-0">
      <span className="absolute left-0 top-[10px] block size-[8px] rounded-full bg-[#14bef0]" />
    </span>
  );
}

const quoteLayout = [
  { indent: 0, rule: 285.3 },
  { indent: 120, rule: 589.5 },
  { indent: 40, rule: 594 },
];

const C_W = 420;
const C_H = 560;
const p = (v: number, of: number) => `${(v / of) * 100}%`;

function SignCard({
  image,
  alt,
  line,
}: {
  image: string;
  alt: string;
  line: { text: string; refs?: number[] };
}) {
  return (
    <li className="flex min-w-0 flex-1 flex-col items-start gap-[18px] max-md:w-full">
      <div className="h-[400px] w-full overflow-hidden rounded-[24px] bg-[#f3f6fc] max-lg:h-[320px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex w-full items-start gap-[12px]">
        <Marker />
        <p className="w-[270px] max-w-full text-[19px] font-medium leading-[1.45] text-[#0b1140]">
          <Txt line={line} />
        </p>
      </div>
    </li>
  );
}

export function Symptoms() {
  return (
    <section data-node-id="2242:120" className="scroll-mt-24 bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-[72px] px-[56px] py-[120px] max-lg:gap-14 max-lg:px-6 max-lg:py-20">
        {/* ---- Excuses (2242:121) ---- */}
        <div className="flex w-full items-start gap-[56px] max-lg:flex-col max-lg:gap-10">
          <div className="flex min-w-0 max-w-full flex-1 flex-col items-start gap-[28px] max-lg:w-full">
            <p className="w-full text-[13px] font-semibold leading-[1.4] tracking-[1.04px] text-[#28328c]">
              {screen6.eyebrow}
            </p>
            <h2 className="w-[760px] max-w-full text-[clamp(2.25rem,3.89vw,3.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0b1140]">
              {screen6.headline}
            </h2>
            <p className="w-[520px] max-w-full text-[19px] leading-[1.6] text-[#4a5487] max-lg:text-[17px]">
              {screen6.subhead}
            </p>

            <div className="flex w-full flex-col items-start gap-[10px] pt-[24px]">
              {screen6.quotes.map((q, i) => (
                <div key={q} className="contents">
                  <p
                    className="quote-row text-[clamp(1.5rem,3.06vw,2.75rem)] font-medium italic tracking-[-0.01em] text-[#28328c] lg:whitespace-nowrap"
                    style={{ '--q-indent': `${quoteLayout[i].indent}px` } as React.CSSProperties}
                  >
                    {q}
                  </p>
                  <div
                    aria-hidden="true"
                    className="quote-row w-full pb-[8px]"
                    style={{ '--q-indent': `${quoteLayout[i].indent}px` } as React.CSSProperties}
                  >
                    <span
                      className="quote-rule rule-draw block h-[2px] bg-[#14bef0]"
                      style={{ '--q-rule': `${quoteLayout[i].rule}px` } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature collage (2242:138) */}
          <div
            className="relative w-[420px] max-w-full shrink-0 overflow-hidden max-lg:w-full"
            style={{ aspectRatio: `${C_W} / ${C_H}` }}
          >
            <div
              className="absolute overflow-hidden rounded-[28px] bg-[#f3f6fc]"
              style={{ left: p(120, C_W), top: 0, width: p(300, C_W), height: p(440, C_H) }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={screen6.collage[0].image}
                alt={screen6.collage[0].alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className="absolute overflow-hidden rounded-[24px] border-[8px] border-solid border-white bg-[#f3f6fc]"
              style={{
                left: 0,
                top: p(300, C_H),
                width: p(200, C_W),
                height: p(240, C_H),
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={screen6.collage[1].image}
                alt={screen6.collage[1].alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ---- Four signs (2242:141) ---- */}
        <div className="flex w-full flex-col items-start gap-[28px]">
          <h3 className={HEAD}>{screen6.signsHeading}</h3>

          <ul className="flex w-full items-start gap-[24px] max-md:flex-col">
            {screen6.signs.map((s) => (
              <SignCard key={s.text} image={s.image} alt={s.alt} line={s} />
            ))}
            <li className="flex h-[400px] min-w-0 flex-1 flex-col items-start justify-center gap-[18px] overflow-hidden rounded-[24px] bg-[#eaf8fe] px-[32px] py-[36px] max-md:h-auto max-md:w-full">
              <ul className="flex w-full flex-col gap-[18px]">
                {screen6.signsNoImage.map((s) => (
                  <li key={s.text} className="flex w-full items-start gap-[14px]">
                    <Dot />
                    <p className="min-w-0 flex-1 text-[19px] font-medium leading-[1.5] text-[#0b1140]">
                      <Txt line={s} />
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          <h3 className={HEAD}>{screen6.otherHeading}</h3>

          <ul className="flex w-full items-start gap-[24px] max-md:flex-col">
            {screen6.other.map((s) => (
              <SignCard key={s.text} image={s.image} alt={s.alt} line={s} />
            ))}
          </ul>
        </div>

        {/* ---- Closing line (2242:166) ---- */}
        <div className="flex w-full items-center justify-between overflow-hidden border-t border-solid border-[#e4e8f4] pt-[36px]">
          <p className="w-[760px] max-w-full text-[20px] leading-[1.6] text-[#2e3766] max-lg:text-[18px]">
            <Txt line={screen6.closing} />
          </p>
        </div>

        <p className="w-full text-[12px] italic leading-[1.5] text-[#6b75a8]">{screen6.note}</p>
      </div>
    </section>
  );
}
