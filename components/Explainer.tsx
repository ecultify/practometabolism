'use client';

/**
 * Pixel-matched to Figma node 2244:29
 * ("01A Understand your metabolism (hidden section)").
 *
 * The Figma frame shows all four panels stacked so every state can be
 * reviewed at once. The design note on that frame ("Inside are four tabs,
 * with [Previous] and [Next] to move between them") is the real behaviour,
 * so the build shows one panel at a time. Every measurement below is
 * taken verbatim from the frame.
 *
 *   section   bg #f3f6fc, px 56, py 110, flex-col gap 32
 *   head      flex justify-between items-center, w-full
 *     copy    w 860, flex-col gap 12
 *     h2      Poppins Light 48 / 1.2  #0b1140
 *     sub     Poppins Regular 18 / 1.6  #2e3766
 *     toggle  bg #28328c, px 28 py 14, r999, SemiBold 17 / 1.55 white
 *   tabs      flex-wrap gap 12
 *     tab     px 22 py 11, r999, Medium 15 / 1.55
 *             active bg #28328c white — idle bg #fff #28328c
 *   panels    flex-col gap 20
 *     panel   bg #fff, p 36, r24, flex-col gap 16
 *     h3      SemiBold 22 / 1.45 #0b1140
 *     body    Regular 16 / 1.7 #2e3766
 *     label   SemiBold 15 / 1.5 #28328c
 *     list    flex-col gap 10 — item flex gap 12, dot 7x17
 *   nav       flex gap 12
 *     prev/next  border 1.5 #28328c, px 26 py 12, r999, SemiBold 16 #28328c
 *     close      bg #28328c, px 26 py 12, r999, SemiBold 16 white
 *   note      Italic 12 / 1.5 #6b75a8
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { explainer } from '@/lib/content';
import { Txt } from './ui';

const PILL = 'rounded-[999px] whitespace-nowrap transition-colors';

export function Explainer() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabs = explainer.tabs;

  // "Know More" on Screen 1 and the header link both target #understand
  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === '#understand') setOpen(true);
    };
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, []);

  const go = useCallback(
    (next: number) => {
      const i = (next + tabs.length) % tabs.length;
      setActive(i);
      tabRefs.current[i]?.focus();
    },
    [tabs.length],
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(active + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(active - 1); }
    if (e.key === 'Home') { e.preventDefault(); go(0); }
    if (e.key === 'End') { e.preventDefault(); go(tabs.length - 1); }
  };

  return (
    <section
      id="understand"
      data-node-id="2244:29"
      className="scroll-mt-24 bg-[#f3f6fc]"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-[32px] px-[56px] py-[110px] max-lg:px-6 max-lg:py-16">
        {/* ---- Head (2244:30) ---- */}
        <div className="flex w-full items-center justify-between gap-6 max-md:flex-col max-md:items-start">
          <div className="flex w-[860px] max-w-full flex-col gap-[12px]">
            <h2 className="text-[clamp(1.875rem,3.33vw,3rem)] font-light leading-[1.2] text-[#0b1140]">
              {explainer.headline}
            </h2>
            <p className="text-[18px] leading-[1.6] text-[#2e3766] max-lg:text-[17px]">
              {explainer.subhead}
            </p>
          </div>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="explainer-body"
            onClick={() => setOpen((o) => !o)}
            className={`${PILL} shrink-0 bg-[#28328c] px-[28px] py-[14px] text-[17px] font-semibold leading-[1.55] text-white`}
          >
            {open ? explainer.closeLabel : explainer.openLabel}
          </button>
        </div>

        <div id="explainer-body" className={open ? 'flex w-full flex-col gap-[32px]' : 'hidden'}>
          {/* ---- Tabs (2244:36) ---- */}
          <div
            role="tablist"
            aria-label={explainer.headline}
            onKeyDown={onKeyDown}
            className="flex w-full flex-wrap content-start items-start gap-[12px]"
          >
            {tabs.map((t, i) => (
              <button
                key={t.id}
                ref={(el) => { tabRefs.current[i] = el; }}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={i === active}
                aria-controls={`panel-${t.id}`}
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
                className={`${PILL} px-[22px] py-[11px] text-[15px] font-medium leading-[1.55] ${
                  i === active
                    ? 'bg-[#28328c] text-white'
                    : 'bg-white text-[#28328c] hover:bg-white/70'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* ---- Panels (2244:45) ---- */}
          <div className="flex w-full flex-col gap-[20px]">
            {tabs.map((t, i) => (
              <div
                key={t.id}
                role="tabpanel"
                id={`panel-${t.id}`}
                aria-labelledby={`tab-${t.id}`}
                tabIndex={0}
                className={
                  i === active
                    ? 'flex w-full flex-col items-start gap-[16px] rounded-[24px] bg-white p-[36px] max-lg:p-7'
                    : 'hidden'
                }
              >
                <h3 className="w-full text-[22px] font-semibold leading-[1.45] text-[#0b1140]">
                  {t.label}
                </h3>
                {t.blocks.map((b, bi) => {
                  if (b.kind === 'subhead') {
                    return (
                      <p key={bi} className="w-full text-[15px] font-semibold leading-[1.5] text-[#28328c]">
                        <Txt line={b.line} />
                      </p>
                    );
                  }
                  if (b.kind === 'body') {
                    return (
                      <p key={bi} className="w-full text-[16px] leading-[1.7] text-[#2e3766]">
                        <Txt line={b.line} />
                      </p>
                    );
                  }
                  return (
                    <ul key={bi} className="flex w-full flex-col items-start gap-[10px]">
                      {b.items.map((l) => (
                        <li key={l.text} className="flex w-full items-start gap-[12px]">
                          <span
                            aria-hidden="true"
                            className="relative block h-[17px] w-[7px] shrink-0"
                          >
                            <span className="absolute left-0 top-[10px] block size-[7px] rounded-full bg-[#14bef0]" />
                          </span>
                          <span className="min-w-0 flex-1 text-[16px] leading-[1.7] text-[#2e3766]">
                            <Txt line={l} />
                          </span>
                        </li>
                      ))}
                    </ul>
                  );
                })}
              </div>
            ))}
          </div>

          {/* ---- Nav buttons (2244:110) ---- */}
          <div className="flex flex-wrap items-start gap-[12px]">
            <button
              type="button"
              onClick={() => go(active - 1)}
              disabled={active === 0}
              className={`${PILL} border-[1.5px] border-solid border-[#28328c] px-[26px] py-[12px] text-[16px] font-semibold leading-[1.55] text-[#28328c] disabled:opacity-40`}
            >
              {explainer.prev}
            </button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              disabled={active === tabs.length - 1}
              className={`${PILL} border-[1.5px] border-solid border-[#28328c] px-[26px] py-[12px] text-[16px] font-semibold leading-[1.55] text-[#28328c] disabled:opacity-40`}
            >
              {explainer.next}
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className={`${PILL} bg-[#28328c] px-[26px] py-[12px] text-[16px] font-semibold leading-[1.55] text-white`}
            >
              {explainer.closeExplainer}
            </button>
          </div>

          <p className="w-full text-[12px] italic leading-[1.5] text-[#6b75a8]">{explainer.note}</p>
        </div>
      </div>
    </section>
  );
}
