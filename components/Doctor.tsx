/**
 * Pixel-matched to Figma node 2242:562
 * ("08 When is it worth speaking to a doctor · Screen 8").
 *
 *   section   bg #fff, px 56, py 120, flex gap 64 items-center
 *   left      w640, flex-col gap 24
 *     photo   640 x 540, r32, object-cover
 *     chat    bg #f3f6fc, p28, r28, flex-col gap 12
 *       in    avatar 32px #14bef0 + bubble bg #fff px18 py14
 *             radius 20/20/20/6 — SemiBold 16 #0b1140
 *       out   bubble bg #28328c px18 py12, radius 20/20/6/20
 *             Medium 15 white, right-aligned
 *   copy      flex-1, flex-col gap 28
 *     eyebrow SemiBold 13 / 1.4 #28328c tracking 1.04px
 *     h2      Light 52 / 1.1 tracking -1.04px — line 1 #0b1140,
 *             line 2 SemiBold #28328c with a #14bef0 question mark
 *     intro   Regular 19 / 1.6 #2e3766
 *     list    item border-b #e4e8f4, py14, gap 16 items-center
 *             check 28px (r14 #eaf8fe tile, #28328c tick, 2.2 stroke)
 *             text Medium 17 / 1.45 #0b1140
 *     urgent  bg #fff4ec, border #f3a26b, px20 py16, r16, gap 14
 *             badge 28px #ffe2cc, Bold 15 #c2410c
 *             text Medium 14 / 1.5 #5a2a0c
 *     note    Italic 12 / 1.5 #6b75a8
 */

import { screen8 } from '@/lib/content';

/* Figma 2242:588 */
function Check() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect width="28" height="28" rx="14" fill="#EAF8FE" />
      <path
        d="M9 14L12.5 17.5L19.5 10"
        stroke="#28328C"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Doctor() {
  return (
    <section id="doctor" data-node-id="2242:562" className="scroll-mt-24 bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] items-center gap-[64px] px-[56px] py-[120px] max-lg:flex-col max-lg:items-stretch max-lg:gap-10 max-lg:px-6 max-lg:py-20">
        {/* ---- Left (2242:563) ---- */}
        <div className="flex w-[640px] max-w-full shrink-0 flex-col items-start gap-[24px] max-lg:w-full">
          <div
            className="w-full overflow-hidden rounded-[32px] bg-[#f3f6fc]"
            style={{ aspectRatio: '640 / 540' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={screen8.image}
              alt={screen8.imageAlt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex w-full flex-col items-start gap-[12px] overflow-hidden rounded-[28px] bg-[#f3f6fc] p-[28px] max-sm:p-5">
            <div className="flex w-full items-end gap-[10px]">
              <span
                aria-hidden="true"
                className="block size-[32px] shrink-0 rounded-full bg-[#14bef0]"
              />
              <p className="min-w-0 max-w-[calc(100%-42px)] rounded-[20px] rounded-bl-[6px] bg-white px-[18px] py-[14px] text-[16px] font-semibold text-[#0b1140] max-lg:text-[14px]">
                {screen8.chatIntro}
              </p>
            </div>
            {screen8.chat.map((c) => (
              <div key={c} className="flex w-full items-start justify-end">
                <p className="min-w-0 max-w-full rounded-[20px] rounded-br-[6px] bg-[#28328c] px-[18px] py-[12px] text-[15px] font-medium text-white max-lg:text-[13px]">
                  {c}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Copy (2242:583) ---- */}
        <div className="flex min-w-0 flex-1 flex-col items-start gap-[20px]">
          <div className="flex w-full flex-col items-start gap-[14px]">
            <p className="whitespace-nowrap text-[13px] font-semibold leading-[1.4] tracking-[1.04px] text-[#28328c]">
              {screen8.eyebrow}
            </p>
            <h2 className="w-full text-[clamp(2rem,3.61vw,3.25rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0b1140]">
              <span className="block">When is it worth</span>
              <span className="block font-semibold text-[#28328c]">
                speaking to a doctor<span className="text-[#14bef0]">?</span>
              </span>
            </h2>
          </div>

          <p className="w-full text-[19px] leading-[1.6] text-[#2e3766] max-lg:text-[17px]">
            {screen8.intro}
          </p>

          <ul className="flex w-full flex-col items-start">
            {screen8.list.map((l) => (
              <li
                key={l}
                className="flex w-full items-center gap-[16px] overflow-hidden border-b border-solid border-[#e4e8f4] py-[14px]"
              >
                <Check />
                <p className="min-w-0 flex-1 text-[17px] font-medium leading-[1.45] text-[#0b1140]">
                  {l}
                </p>
              </li>
            ))}
          </ul>

          <div
            role="note"
            className="flex w-full items-center gap-[14px] overflow-hidden rounded-[16px] border border-solid border-[#f3a26b] bg-[#fff4ec] px-[20px] py-[16px]"
          >
            <span
              aria-hidden="true"
              className="flex size-[28px] shrink-0 items-center justify-center rounded-[999px] bg-[#ffe2cc] text-[15px] font-bold text-[#c2410c]"
            >
              !
            </span>
            <p className="min-w-0 flex-1 text-[14px] font-medium leading-[1.5] text-[#5a2a0c]">
              {screen8.urgent}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
