/**
 * Screen 5 · Every number tells a story.
 *
 * Relaid as a numbered ledger rather than a card grid: each measure is a row
 * with a big cyan index, the measure name split into its category and its
 * test, and the one-line explanation on the right. Rows are separated by
 * hairlines inside one white panel, so the section reads as a single list
 * of five, not five boxes.
 *
 *   header   title left (two-tone) · subhead right, w488
 *   panel    bg #fff, r28, px 40
 *   row      grid 72px / 1fr / 1.35fr, py 28, border-b #e4e8f4
 *            index  Light 40 #14bef0
 *            cat    SemiBold 12 #28328c, tracking 0.08em, uppercase
 *            name   SemiBold 22 #0b1140
 *            body   Regular 16 / 1.6 #2e3766
 *   closing  centred, Regular 13 #4a5487
 */

import { screen5 } from '@/lib/content';
import { TitleLines, Txt } from './ui';

export function Numbers() {
  return (
    <section id="numbers" data-node-id="2242:415" className="scroll-mt-24 bg-[#f3f6fc]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-[40px] px-[56px] py-[80px] max-lg:gap-8 max-lg:px-6 max-lg:py-14">
        {/* ---- Header ---- */}
        <div className="flex w-full items-end justify-between gap-10 max-lg:flex-col max-lg:items-start max-lg:gap-4">
          <h2 className="w-[760px] max-w-full text-[clamp(1.875rem,3.33vw,3rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0b1140]">
            <TitleLines text={screen5.headline} at={2} />
          </h2>
          <p data-reveal className="w-[488px] max-w-full text-[18px] leading-[1.6] text-[#2e3766] lg:text-right">
            {screen5.subhead}
          </p>
        </div>

        {/* ---- Ledger ---- */}
        <ol className="w-full overflow-hidden rounded-[28px] bg-white px-[40px] max-lg:px-6">
          {screen5.measures.map((m, i) => {
            const [cat, name] = m.title.split(' — ');
            return (
              <li
                key={m.title}
                data-reveal
                className="grid w-full grid-cols-[72px_1fr_1.35fr] items-center gap-x-[32px] border-b border-solid border-[#e4e8f4] py-[28px] last:border-b-0 max-md:grid-cols-[48px_1fr] max-md:gap-y-[6px] max-md:py-[22px]"
              >
                <span aria-hidden="true" className="text-[40px] font-light leading-none tracking-[-0.02em] text-[#14bef0] max-md:row-span-2 max-md:self-start max-md:text-[32px]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex min-w-0 flex-col gap-[4px]">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#28328c]">{cat}</span>
                  <h3 className="text-[22px] font-semibold leading-[1.3] text-[#0b1140] max-md:text-[19px]">{name ?? cat}</h3>
                </div>
                <p className="min-w-0 text-[16px] leading-[1.6] text-[#2e3766] max-md:col-start-2">
                  <Txt line={m.body} />
                </p>
              </li>
            );
          })}
        </ol>

        <p data-reveal className="w-full text-center text-[13px] leading-[1.65] text-[#4a5487]">{screen5.closing}</p>
      </div>
    </section>
  );
}
