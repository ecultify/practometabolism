/**
 * Pixel-matched to Figma node 2242:205
 * ("05A How waist circumference is measured (collapsed panel)").
 *
 * The Figma frame draws this panel open, with no toggle control anywhere
 * in the design, so the build renders it open too. The "Optional panel"
 * card inside is the design's own note about that.
 *
 *   section  bg #eaf8fe, flex-col items-start
 *   ruler    2242:206 — bg white, h56, ticks every 12px, w1.5, full-bleed
 *            major (x % 120 === 0) h26 rgba(40,50,140,.9)
 *            mid   (x % 60  === 0) h18 rgba(40,50,140,.35)
 *            minor                 h10 rgba(40,50,140,.35)
 *            labels at major+4, top 30, Medium 11 #28328c
 *   body     px56, pt96, pb112, flex-col gap 24
 *   row 1    flex gap 24
 *     visual 560 x 700
 *       photo (0,0)     440 x 640, r32
 *       apple (330,420) 220 x 280, r24, 10px #eaf8fe border
 *       marker line     y260, 560 x 2, #14bef0
 *       marker label    (300,232) bg white px14 py8 r999, 8px dot,
 *                       Medium 14 #1e2a78
 *     copy   flex-1, gap 24, self-stretch
 *       h2   Light 50 / 1.1 #0b1140 tracking -1px, two lines
 *       p    Regular 19 / 1.6 #2e3766 w620
 *       card bg white r16 px20 py16, 26px #28328c badge + Medium 16 / 1.5 #1e2a78
 *       steps flex gap 24, card bg white r20 p20 gap 10
 *             illus h170 r12 object-contain on white
 *             number Light 40 #14bef0 tracking -0.8px
 *             text Medium 16 / 1.5 #0b1140
 *   row 2    flex gap 24
 *     step 3 bg white w560 r20 p20, flex gap 24 items-center
 *            illus 220 x 140 r12 bg #f7fafc — tape, notepad, pencil
 *            "3" Light 48 #14bef0 tracking -0.96px
 *            text Medium 20 / 1.5 #0b1140
 *     rule   bg #28328c flex-1 r20 px28 py24, flex gap 24 items-center
 *            "½" Light 72 #14bef0
 *            title SemiBold 18 white · body Regular 15 / 1.6 #d5dcf5
 *   row 3    pt16 — Regular 13 / 1.6 #4a5487 w820
 */

import { waistPanel as w } from '@/lib/content';

/* ---------- 2242:206 tape ruler ---------- */
// Full-bleed: the ruler runs edge to edge on any viewport, so ticks cover 4K.
const RULER_W = 3840;
const ticks = Array.from({ length: Math.floor(RULER_W / 12) }, (_, i) => i * 12);

function TapeRuler() {
  return (
    <div
      aria-hidden="true"
      data-node-id="2242:206"
      className="relative h-[56px] w-full select-none overflow-hidden bg-white"
    >
      {ticks.map((x) => {
        const major = x % 120 === 0;
        const mid = !major && x % 60 === 0;
        return (
          <span
            key={x}
            className="absolute top-0 w-[1.5px]"
            style={{
              left: x,
              height: major ? 26 : mid ? 18 : 10,
              background: major ? 'rgba(40,50,140,0.9)' : 'rgba(40,50,140,0.35)',
            }}
          />
        );
      })}
      {ticks
        .filter((x) => x % 120 === 0 && x > 0)
        .map((x) => (
          <span
            key={`l${x}`}
            className="absolute top-[30px] whitespace-nowrap text-[11px] font-medium text-[#28328c]"
            style={{ left: x + 4 }}
          >
            {x / 12}
          </span>
        ))}
    </div>
  );
}

/* ---------- 2242:365 step 3 illustration ---------- */
const TAPE_MAJOR = [5, 45, 85, 125, 165, 205];
const TAPE_MINOR = [
  13, 21, 29, 37, 53, 61, 69, 77, 93, 101, 109, 117, 133, 141, 149, 157, 173, 181, 189, 197, 213,
];

function StepThreeIllustration() {
  return (
    <div
      aria-hidden="true"
      data-node-id="2242:365"
      className="relative h-[140px] w-[220px] shrink-0 overflow-hidden rounded-[12px] bg-[#f7fafc]"
    >
      {/* tape — 2242:366 */}
      <div
        className="absolute left-[-23.55px] top-[22px] flex h-[56.949px] w-[223.675px] items-center justify-center"
      >
        <div className="flex-none rotate-6">
          <div className="relative h-[34px] w-[221.333px] overflow-hidden rounded-[4px] border border-solid border-[rgba(20,190,240,0.6)] bg-[#cfeffc]">
            {TAPE_MAJOR.map((x) => (
              <span
                key={`M${x}`}
                className="absolute top-[-1px] h-[14px] w-[1.2px] bg-[rgba(40,50,140,0.8)]"
                style={{ left: x }}
              />
            ))}
            {TAPE_MINOR.map((x) => (
              <span
                key={`m${x}`}
                className="absolute top-[-1px] h-[7px] w-[1.2px] bg-[rgba(40,50,140,0.45)]"
                style={{ left: x }}
              />
            ))}
            <span
              className="absolute left-[109.67px] top-[-1px] h-[34px] w-[3px] bg-[#14bef0]"
              style={{ boxShadow: '0px 0px 6px 0px rgba(20,190,240,0.8)' }}
            />
          </div>
        </div>
      </div>

      {/* notepad — 2242:395 */}
      <div
        className="absolute left-[37.67px] top-[52px] h-[50px] w-[78px] overflow-hidden rounded-[8px] border border-solid border-[#d5dcf0] bg-white"
        style={{ boxShadow: '0px 4px 10px 0px rgba(10,18,64,0.08)' }}
      >
        <span className="absolute left-[11px] top-[13px] h-[3px] w-[40px] rounded-[2px] bg-[#28328c]" />
        <span className="absolute left-[11px] top-[23px] h-[3px] w-[54px] rounded-[2px] bg-[#d5dcf0]" />
        <span className="absolute left-[11px] top-[33px] h-[3px] w-[54px] rounded-[2px] bg-[#d5dcf0]" />
      </div>

      {/* pencil — 2242:399, exported verbatim from Figma as SVG */}
      <svg
        className="absolute left-[110.67px] top-[37.88px]"
        width="51"
        height="39"
        viewBox="0 0 51 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2242_399)">
          <rect
            y="32.1203"
            width="44"
            height="8"
            rx="2"
            transform="rotate(-35 0 32.1203)"
            fill="#28328C"
          />
          <path
            d="M42.9257 16.7128L37.5402 24.7126L33.5664 19.0374L42.9257 16.7128Z"
            fill="#14BEF0"
          />
        </g>
        <defs>
          <clipPath id="clip0_2242_399">
            <rect
              width="56"
              height="8"
              fill="white"
              transform="translate(0 32.1203) rotate(-35)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

/* ---------- section ---------- */
const V_W = 560;
const V_H = 700;
const p = (v: number, of: number) => `${(v / of) * 100}%`;

export function WaistPanel() {
  const [line1, line2] = ['How waist circumference', 'is measured'];
  // Figma 2242:356 shows the standing figure for step 1 and 2242:360 the
  // torso-with-tape for step 2, which is the reverse of the content order.
  const stepIllus = [w.stepIllustration, w.illustration];
  const stepAlts = [w.stepIllustrationAlt, w.illustrationAlt];

  return (
    <section data-node-id="2242:205" className="flex flex-col items-start bg-[#eaf8fe]">
      <TapeRuler />
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="flex w-full flex-col items-start gap-[24px] px-[56px] pb-[112px] pt-[96px] max-lg:gap-5 max-lg:px-6 max-lg:pb-16 max-lg:pt-14">
          {/* ---- Bento row 1 (2242:339) ---- */}
          <div className="flex w-full items-start gap-[24px] max-lg:flex-col">
            {/* Visual (2242:340) */}
            <div
              className="relative w-[560px] max-w-full shrink-0 overflow-hidden max-lg:w-full"
              style={{ aspectRatio: `${V_W} / ${V_H}` }}
            >
              <div
                className="absolute overflow-hidden rounded-[32px] bg-white"
                style={{ left: 0, top: 0, width: p(440, V_W), height: p(640, V_H) }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.photo}
                  alt={w.photoAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-[12%_center]"
                />
              </div>
              <div
                className="absolute overflow-hidden rounded-[24px] border-[10px] border-solid border-[#eaf8fe] bg-white"
                style={{
                  left: p(330, V_W),
                  top: p(420, V_H),
                  width: p(220, V_W),
                  height: p(280, V_H),
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.inset}
                  alt={w.insetAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <span
                aria-hidden="true"
                className="absolute left-0 h-[2px] w-full bg-[#14bef0]"
                style={{ top: p(260, V_H) }}
              />
              <span
                className="marker-label absolute flex items-center gap-[8px] overflow-hidden rounded-[999px] bg-white px-[14px] py-[8px] text-[14px] font-medium text-[#1e2a78] max-lg:text-[11px]"
                style={{ '--marker-left': p(300, V_W), top: p(232, V_H) } as React.CSSProperties}
              >
                <span aria-hidden="true" className="block size-[8px] rounded-full bg-[#14bef0]" />
                {w.markerLabel}
              </span>
            </div>

            {/* Copy (2242:347) */}
            <div className="flex min-w-0 flex-1 flex-col items-start gap-[24px] self-stretch">
              <h2 className="w-full text-[clamp(2rem,3.47vw,3.125rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0b1140]">
                <span className="block">{line1}</span>
                <span className="block">{line2}</span>
              </h2>

              <p className="w-[620px] max-w-full text-[19px] leading-[1.6] text-[#2e3766] max-lg:text-[17px]">
                {w.disclaimer}
              </p>

              {/* Before you start (2242:350) */}
              <div className="flex w-full items-center gap-[14px] overflow-hidden rounded-[16px] bg-white px-[20px] py-[16px]">
                <span
                  aria-hidden="true"
                  className="flex size-[26px] shrink-0 items-center justify-center rounded-[999px] bg-[#28328c] text-[14px] font-bold text-white"
                >
                  i
                </span>
                <p className="min-w-0 flex-1 text-[16px] font-medium leading-[1.5] text-[#1e2a78]">
                  {w.beforeYouStart}
                </p>
              </div>

              {/* Steps 1 and 2 (2242:354) */}
              <ol className="flex w-full flex-1 items-start gap-[24px] max-sm:flex-col">
                {w.steps.slice(0, 2).map((s, i) => (
                  <li
                    key={s}
                    className="flex h-full min-w-0 flex-1 flex-col items-start gap-[10px] rounded-[20px] bg-white p-[20px] max-sm:w-full"
                  >
                    <div className="h-[170px] w-full overflow-hidden rounded-[12px] bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={stepIllus[i]}
                        alt={stepAlts[i]}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="whitespace-nowrap text-[40px] font-light tracking-[-0.02em] text-[#14bef0]">
                      {i + 1}
                    </span>
                    <p className="w-full text-[16px] font-medium leading-[1.5] text-[#0b1140]">
                      {s}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* ---- Bento row 2 (2242:363) ---- */}
          <div className="flex w-full items-stretch gap-[24px] max-lg:flex-col">
            {/* Step 3 (2242:364) */}
            <div className="flex w-[560px] max-w-full shrink-0 items-center gap-[24px] overflow-hidden rounded-[20px] bg-white p-[20px] max-lg:w-full max-sm:flex-col max-sm:items-start">
              <StepThreeIllustration />
              <div className="flex min-w-0 flex-1 flex-col items-start gap-[8px]">
                <span className="whitespace-nowrap text-[48px] font-light tracking-[-0.02em] text-[#14bef0]">
                  3
                </span>
                <p className="min-h-[140px] w-full text-[20px] font-medium leading-[1.5] text-[#0b1140] max-sm:min-h-0">
                  {w.steps[2]}
                </p>
              </div>
            </div>

            {/* Rule of thumb (2242:405) */}
            <div className="flex min-w-0 flex-1 items-center gap-[24px] overflow-hidden rounded-[20px] bg-[#28328c] px-[28px] py-[24px] max-sm:flex-col max-sm:items-start">
              <span
                aria-hidden="true"
                className="whitespace-nowrap text-[72px] font-light leading-none text-[#14bef0]"
              >
                {w.ruleGlyph}
              </span>
              <div className="flex min-w-0 flex-1 flex-col items-start gap-[6px]">
                <p className="whitespace-nowrap text-[18px] font-semibold text-white">
                  {w.ruleTitle}
                </p>
                <p className="w-full text-[15px] leading-[1.6] text-[#d5dcf5]">{w.ruleBody}</p>
              </div>
            </div>
          </div>

          {/* ---- Bento row 3 (2242:410) ---- */}
          <div className="flex w-full items-center justify-between overflow-hidden pt-[16px]">
            <p className="w-[820px] max-w-full text-[13px] leading-[1.6] text-[#4a5487]">
              {w.footnote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
