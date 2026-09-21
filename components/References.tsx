/**
 * References — was inside the footer (Figma 2242:683); now its own light
 * section between Screen 9 and the footer so the citations read as page
 * content rather than legal small print. Same two-column split (1 to 8,
 * then 9 to 15), same gaps, light palette.
 */

import { footer, references } from '@/lib/content';

const SPLIT = 8;

function RefColumn({ items }: { items: typeof references }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-start gap-[10px] overflow-hidden">
      {items.map((r) => (
        <p
          key={r.n}
          id={`ref-${r.n}`}
          className="w-full scroll-mt-28 text-[12px] leading-[1.6] text-[#4a5487]"
        >
          {r.n}. {r.text}{' '}
          <a
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all text-[#28328c] underline-offset-2 hover:underline"
          >
            {r.url}
          </a>
        </p>
      ))}
    </div>
  );
}

export function References() {
  return (
    <section id="references" aria-labelledby="references-heading" className="scroll-mt-24 bg-[#f3f6fc]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-[18px] px-[56px] py-[64px] max-lg:px-6 max-lg:py-12">
        <h2
          id="references-heading"
          className="whitespace-nowrap text-[14px] font-semibold leading-[1.4] tracking-[0.84px] text-[#0b1140]"
        >
          {footer.referencesHeading}
        </h2>
        <p className="w-full text-[12px] italic leading-[1.5] text-[#6b75a8]">{footer.referencesNote}</p>
        <div className="flex w-full items-start gap-[40px] overflow-hidden max-md:flex-col max-md:gap-[10px]">
          <RefColumn items={references.slice(0, SPLIT)} />
          <RefColumn items={references.slice(SPLIT)} />
        </div>
      </div>
    </section>
  );
}
