/**
 * Pixel-matched to Figma node 2242:171
 * ("02–03 Take a closer look · Your health dynamics", 1440 x 1969).
 *
 *   section   bg #0b1140, px 56, py 120, flex-col items-center, gap 72 (uniform)
 *   glow      2242:172 — 900x900 circle at (820, -300), #28328c @ 90%,
 *             layer blur 200 — drawn as a radial-gradient on the section
 *   eyebrow   SemiBold 13 / 1.4, #8fe3fa, tracking 1.04px, centred
 *   h2        Light 56 / 1.1, white, tracking -1.12px, centred
 *   sub       Regular 19 / 1.6, #c9d1ee, centred
 *   cards     outer  1px rgba(255,255,255,0.12), r28, h188, flex gap 24
 *             card   bg #131a4d, r22, p28, flex-col gap 14, flex-1
 *             title  SemiBold 18 / 1.5 white
 *             item   flex gap 12 — dot 7x16, text Regular 15 / 1.65 #c9d1ee
 *   button    bg white, pl26 pr10 py10, gap 18, r999
 *             label SemiBold 18 #28328c + 36px arrow chip
 *   note      Italic 12 / 1.5 #8fa0d9, centred
 *   h2b       Light 42 / 1.25, white, centred
 *   explainer flex gap 32 — column flex-1, gap 24
 *             illus  h440, r28, object-cover
 *             title  SemiBold 28 white
 *             body   Regular 18 / 1.65 #c9d1ee, w600
 */

import { screen2, screen3 } from '@/lib/content';
import { ArrowChip, Txt } from './ui';

const EYEBROW =
  'w-full text-center text-[13px] font-semibold leading-[1.4] tracking-[1.04px] text-[#8fe3fa]';
const NOTE = 'w-full text-center text-[12px] italic leading-[1.5] text-[#8fa0d9]';

function Dot() {
  return (
    <span aria-hidden="true" className="relative block h-[16px] w-[7px] shrink-0">
      <span className="absolute left-0 top-[9px] block size-[7px] rounded-full bg-[#14bef0]" />
    </span>
  );
}

export function Dynamics() {
  return (
    <section
      id="dynamics"
      data-node-id="2242:171"
      className="scroll-mt-24 bg-[#0b1140]"
      // 2242:172 — 900px #28328c circle at (820,-300) with layer blur 200, drawn as a
      // gradient on the full-bleed section so it never clips at the 1440 frame edge.
      style={{
        backgroundImage:
          'radial-gradient(circle 700px at calc(50% + 550px) 150px, rgba(40,50,140,0.9) 0%, rgba(40,50,140,0.6) 40%, rgba(40,50,140,0) 100%)',
      }}
    >
      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="relative flex flex-col items-center gap-[72px] px-[56px] py-[120px] max-lg:gap-12 max-lg:px-6 max-lg:py-20">
          {/* ---- Screen 2 ---- */}
          <p className={EYEBROW}>{screen2.eyebrow}</p>

          <h2 className="w-full text-center text-[clamp(2.25rem,3.89vw,3.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-white">
            {screen2.headline}
          </h2>

          <p className="w-full text-center text-[19px] leading-[1.6] text-[#c9d1ee] max-lg:text-[17px]">
            {screen2.subhead}
          </p>

          <div className="flex h-[188px] w-full items-start gap-[24px] overflow-hidden rounded-[28px] border border-solid border-[rgba(255,255,255,0.12)] max-md:h-auto max-md:flex-col max-md:rounded-none max-md:border-0">
            {screen2.cards.map((c) => (
              <div
                key={c.title}
                className="flex h-full min-w-0 flex-1 flex-col items-start gap-[14px] overflow-hidden rounded-[22px] bg-[#131a4d] p-[28px] max-md:h-auto max-md:w-full max-md:border max-md:border-solid max-md:border-[rgba(255,255,255,0.12)]"
              >
                <p className="w-full text-[18px] font-semibold leading-[1.5] text-white">
                  {c.title}
                </p>
                {c.items.map((l) => (
                  <div key={l.text} className="flex w-full items-start gap-[12px]">
                    <Dot />
                    <p className="min-w-0 flex-1 text-[15px] leading-[1.65] text-[#c9d1ee]">
                      <Txt line={l} />
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <a
            href="#understand"
            className="btn flex shrink-0 items-center gap-[18px] overflow-hidden rounded-[999px] bg-white py-[10px] pl-[26px] pr-[10px] text-[18px] font-semibold text-[#28328c]"
          >
            {screen2.cta}
            <ArrowChip />
          </a>

          <p className={NOTE}>{screen2.note}</p>

          {/* ---- Screen 3 ---- */}
          <p className={EYEBROW}>{screen3.eyebrow}</p>

          <h2 className="w-full text-center text-[clamp(1.875rem,2.92vw,2.625rem)] font-light leading-[1.25] text-white">
            {screen3.headline}
          </h2>

          <div className="flex w-full items-start gap-[32px] max-md:flex-col">
            {screen3.cards.map((c) => (
              <article
                key={c.title}
                className="flex min-w-0 flex-1 flex-col items-start gap-[24px] max-md:w-full"
              >
                <div className="h-[440px] w-full overflow-hidden rounded-[28px] bg-white max-lg:h-[340px] max-md:h-[300px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt={c.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="whitespace-nowrap text-[28px] font-semibold text-white max-md:whitespace-normal">
                  {c.title}
                </h3>
                <p className="w-[600px] max-w-full text-[18px] leading-[1.65] text-[#c9d1ee]">
                  <Txt line={c.body} />
                </p>
              </article>
            ))}
          </div>

          <p className={NOTE}>{screen3.note}</p>
        </div>
      </div>
    </section>
  );
}
