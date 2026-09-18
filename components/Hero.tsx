import { screen1 } from '@/lib/content';
import { ArrowChip } from './ui';

/**
 * Screen 1 — node 2242:40.
 * The split portrait is a fixed 600x800 composition in Figma. Children are
 * positioned as percentages of that box so the whole thing scales without
 * the layout drifting from the design.
 */
const W = 600;
const H = 800;
const pct = (v: number, of: number) => `${(v / of) * 100}%`;

const everyday = [
  { src: '/images/everyday/laces.webp', alt: 'Tying shoelaces before heading out', w: 150, h: 190 },
  { src: '/images/everyday/cooking.webp', alt: 'Preparing a bowl of food at home', w: 150, h: 150 },
  { src: '/images/everyday/juice.webp', alt: 'Pouring a glass of fresh juice in a kitchen', w: 150, h: 210 },
];

// left/top in the 600x800 frame, straight from Figma
const readings = [
  { label: 'Blood pressure', left: 406, top: 250 },
  { label: 'Blood sugar', left: 427, top: 330 },
  { label: 'Waist circumference', left: 365, top: 410 },
  { label: 'Cholesterol', left: 431, top: 490 },
  { label: 'Body weight', left: 425, top: 570 },
];

const gridLines = Array.from({ length: 19 }, (_, i) => 40 + i * 40);

export function Hero() {
  return (
    <section id="top" className="bg-[#F3F6FC]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-stretch gap-10 px-6 pt-14 md:px-14 lg:flex-row lg:items-end lg:pt-[72px]">
        {/* ---- Copy ---- */}
        <div className="flex min-w-0 flex-1 flex-col items-start gap-7 pb-10 lg:pb-[72px]">
          <p className="text-[13px] font-semibold leading-[1.4] tracking-[1.04px] text-[#28328C]">
            {screen1.eyebrow}
          </p>

          <h1 className="max-w-[700px] text-[clamp(2.5rem,5.56vw,5rem)] font-light leading-[1.04] tracking-[-0.025em] text-[#0B1140]">
            {screen1.headline}
          </h1>

          <p className="max-w-[560px] text-[clamp(1rem,1.32vw,1.1875rem)] leading-[1.6] text-[#2E3766]">
            {screen1.subhead}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#understand"
              className="btn flex items-center gap-[18px] rounded-full bg-[#28328C] py-2.5 pl-[26px] pr-2.5 text-[18px] font-semibold text-white"
            >
              {screen1.primaryCta}
              <ArrowChip />
            </a>
            <a
              href="#check"
              className="btn btn-outline flex items-center rounded-full border-[1.5px] border-[#28328C] px-7 py-3.5 text-[18px] font-semibold leading-[1.55] text-[#28328C]"
            >
              {screen1.secondaryCta}
            </a>
          </div>

          <ul className="flex items-end gap-[14px]">
            {everyday.map((img) => (
              <li
                key={img.src}
                className="shrink-0 overflow-hidden rounded-[18px]"
                style={{
                  width: `clamp(88px, ${(img.w / 1440) * 100}vw, ${img.w}px)`,
                  aspectRatio: `${img.w} / ${img.h}`,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
              </li>
            ))}
          </ul>
        </div>

        {/* ---- Split portrait ---- */}
        <div
          className="relative w-full shrink-0 self-end overflow-hidden rounded-t-[32px] lg:w-[600px]"
          style={{ aspectRatio: `${W} / ${H}` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero/split-portrait.webp"
            alt="Someone preparing food at home on an ordinary morning"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Inside tint: right half */}
          <div
            aria-hidden="true"
            className="scan-inside absolute top-0 h-full bg-[rgba(11,17,64,0.62)]"
            style={{ left: pct(300, W), width: pct(300, W) }}
          />

          {/* Scan line */}
          <div
            aria-hidden="true"
            className="scan-line absolute top-0 h-full bg-[#14BEF0]"
            style={{
              left: pct(299, W),
              width: pct(3, W),
              boxShadow: '0 0 18px 2px rgba(20,190,240,0.9)',
            }}
          />

          {/* Inside grid */}
          <div
            aria-hidden="true"
            className="scan-inside absolute top-0 h-full overflow-hidden"
            style={{ left: pct(300, W), width: pct(300, W) }}
          >
            {gridLines.map((y) => (
              <span
                key={y}
                className="absolute left-0 w-full bg-[rgba(20,190,240,0.1)]"
                style={{ top: pct(y, H), height: 1 }}
              />
            ))}
          </div>

          <span
            className="absolute flex items-center rounded-full bg-white px-3.5 py-2 text-[clamp(10px,0.9vw,13px)] font-semibold text-[#28328C]"
            style={{ left: pct(24, W), top: pct(24, H) }}
          >
            Outside
          </span>
          <span
            className="scan-tag absolute flex items-center rounded-full bg-[#14BEF0] px-3.5 py-2 text-[clamp(10px,0.9vw,13px)] font-semibold text-[#0B1140]"
            style={{ left: pct(508, W), top: pct(24, H) }}
          >
            Inside
          </span>

          <ul>
            {readings.map((r, n) => (
              <li
                key={r.label}
                className="hero-chip absolute flex items-center gap-2.5 rounded-full border border-[rgba(20,190,240,0.5)] bg-[rgba(11,17,64,0.7)] py-[9px] pl-2.5 pr-3.5 backdrop-blur-[5px] max-lg:gap-1.5 max-lg:py-[5px] max-lg:pl-1.5 max-lg:pr-2"
                style={{ '--chip-left': pct(r.left, W), '--n': n, top: pct(r.top, H) } as React.CSSProperties}
              >
                <span
                  aria-hidden="true"
                  className="block shrink-0 rounded-full bg-[#14BEF0]"
                  style={{ width: 8, height: 8, boxShadow: '0 0 9px 2px rgba(20,190,240,0.75)' }}
                />
                <span className="truncate whitespace-nowrap text-[clamp(9px,0.97vw,14px)] font-medium text-white">
                  {r.label}
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-[clamp(9px,0.97vw,14px)] font-bold text-[#14BEF0]"
                >
                  ?
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
