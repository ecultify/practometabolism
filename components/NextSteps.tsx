'use client';

/**
 * Pixel-matched to Figma nodes 2242:646 ("09 Learn your next steps · Screen 9")
 * and 2256:29 / 2251:28 (the interstitial overlay and its modal).
 *
 *   section   bg #0b1140, px 56, pt 140, pb 120, flex-col items-start, gap 72
 *   glow      2242:647 — 1000 x 1000 at (-300, 200), #28328c, layer blur 200 — drawn as a radial-gradient on the section
 *   main      flex gap 80 items-start
 *     copy    w460, gap 28, pt 16
 *             eyebrow SemiBold 13 / 1.4 #8fe3fa tracking 1.04px
 *             h2      Light 40 / 1.1 white tracking -0.8px, two lines
 *             note    Italic 13 / 1.65 #c9d1ee
 *     options flex-1, gap 20
 *             card  bg #131a4d, r24, p32, gap 14
 *                   title SemiBold 22 / 1.45 white
 *                   body  Regular 15 / 1.65 #c9d1ee
 *                   cta   bg #fff, pl26 pr10 py10, gap 18, r999
 *                         SemiBold 17 / 1.55 #28328c + 36px chip
 *   quote     border-t rgba(255,255,255,.15), pt 40, flex gap 24
 *             mark Bold 96 / 70px #14bef0 · text Italic 26 / 1.5 white
 *
 *   modal     bg #fff, border #e3e9f7, r28, p48, w880, gap 24,
 *             shadow 0 24px 60px rgba(10,15,46,.28) on a
 *             rgba(11,17,64,.55) scrim
 *             label SemiBold 13 / 1.5 #28328c tracking 0.26px
 *             h2    Light 36 / 1.3 #0b1140
 *             body  Regular 17 / 1.65 #2e3766, gap 12
 *             stay  border 1.5 #28328c, px26 py10, SemiBold 17 / 1.55
 *             go    bg #28328c, pl26 pr10 py10, gap 18 + 36px chip
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { interstitial, screen9 } from '@/lib/content';
import { ArrowChip } from './ui';

type OptionId = 'measures' | 'habits';

export function NextSteps() {
  const [openFor, setOpenFor] = useState<OptionId | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => {
    setOpenFor(null);
    openerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!openFor) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'Tab' && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        );
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() =>
      dialogRef.current?.querySelector<HTMLElement>('button, a')?.focus(),
    );
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [openFor, close]);

  return (
    <>
      <section
        id="next-steps"
        data-node-id="2242:646"
        className="scroll-mt-24 bg-[#0b1140]"
        // 2242:647 — 1000px #28328c circle at (-300,200) with layer blur 200, drawn as a
        // gradient on the full-bleed section so it never clips at the 1440 frame edge.
        style={{
          backgroundImage:
            'radial-gradient(circle 760px at calc(50% - 520px) 700px, rgba(40,50,140,0.9) 0%, rgba(40,50,140,0.6) 40%, rgba(40,50,140,0) 100%)',
        }}
      >
        <div className="relative mx-auto w-full max-w-[1440px]">

          <div className="relative flex flex-col items-start gap-[72px] px-[56px] pb-[120px] pt-[140px] max-lg:gap-12 max-lg:px-6 max-lg:pb-20 max-lg:pt-24">
            {/* ---- Main (2242:648) ---- */}
            <div className="flex w-full items-start gap-[80px] max-lg:flex-col max-lg:gap-10">
              <div className="flex w-[460px] max-w-full shrink-0 flex-col items-start gap-[28px] pt-[16px] max-lg:w-full max-lg:pt-0">
                <p className="whitespace-nowrap text-[13px] font-semibold leading-[1.4] tracking-[1.04px] text-[#8fe3fa]">
                  {screen9.eyebrow}
                </p>
                <h2 className="w-[460px] max-w-full text-[clamp(1.875rem,2.78vw,2.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-white">
                  <span className="block">Choose what you’d like</span>
                  <span className="block">to explore next</span>
                </h2>
                <p className="w-[460px] max-w-full text-[13px] italic leading-[1.65] text-[#c9d1ee]">
                  {screen9.note}
                </p>
              </div>

              <ul className="flex min-w-0 flex-1 flex-col items-start gap-[20px] max-lg:w-full">
                {screen9.options.map((o) => (
                  <li
                    key={o.id}
                    className="flex w-full flex-col items-start gap-[14px] overflow-hidden rounded-[24px] bg-[#131a4d] p-[32px] max-sm:p-6"
                  >
                    <h3 className="w-full text-[22px] font-semibold leading-[1.45] text-white">
                      {o.title}
                    </h3>
                    <p className="w-full text-[15px] leading-[1.65] text-[#c9d1ee]">{o.body}</p>
                    <button
                      type="button"
                      onClick={(e) => {
                        openerRef.current = e.currentTarget;
                        setOpenFor(o.id);
                      }}
                      className="btn flex shrink-0 items-center gap-[18px] overflow-hidden rounded-[999px] bg-white py-[10px] pl-[26px] pr-[10px] text-[17px] font-semibold leading-[1.55] text-[#28328c]"
                    >
                      {screen9.cta}
                      <ArrowChip />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* ---- Approved line (2242:680) ---- */}
            <div className="flex w-full items-start gap-[24px] overflow-hidden border-t border-solid border-[rgba(255,255,255,0.15)] pt-[40px]">
              <span
                aria-hidden="true"
                className="shrink-0 whitespace-nowrap text-[96px] font-bold leading-[70px] text-[#14bef0] max-sm:text-[64px] max-sm:leading-[48px]"
              >
                “
              </span>
              <p className="min-w-0 flex-1 text-[26px] italic leading-[1.5] text-white max-lg:text-[20px]">
                {screen9.quote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Interstitial overlay (2256:29) ---- */}
      {openFor && (
        <div
          className="modal-backdrop fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-[rgba(11,17,64,0.55)] p-4"
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="interstitial-title"
            className="modal-panel flex w-[880px] max-w-full flex-col items-start gap-[24px] overflow-hidden rounded-[28px] border border-solid border-[#e3e9f7] bg-white p-[48px] max-sm:p-6"
            style={{ boxShadow: '0px 24px 60px 0px rgba(10,15,46,0.28)' }}
          >
            <p className="w-full text-[13px] font-semibold leading-[1.5] tracking-[0.26px] text-[#28328c]">
              {interstitial.labels[openFor]}
            </p>

            <h2
              id="interstitial-title"
              className="w-full text-[clamp(1.75rem,2.5vw,2.25rem)] font-light leading-[1.3] text-[#0b1140]"
            >
              {interstitial.headline}
            </h2>

            <div className="flex w-full flex-col items-start gap-[12px]">
              <p className="w-full text-[17px] leading-[1.65] text-[#2e3766]">
                {interstitial.bodies[openFor]}
              </p>
              <p className="w-full text-[17px] leading-[1.65] text-[#2e3766]">
                {interstitial.instruction}
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap items-start gap-[16px]">
              <button
                type="button"
                onClick={close}
                className="btn btn-outline flex shrink-0 items-center rounded-[999px] border-[1.5px] border-solid border-[#28328c] px-[26px] py-[10px] text-[17px] font-semibold leading-[1.55] text-[#28328c]"
              >
                {interstitial.stay}
              </button>
              <a
                href={interstitial.href}
                rel="noopener"
                className="btn btn-primary flex shrink-0 items-center gap-[18px] overflow-hidden rounded-[999px] bg-[#28328c] py-[10px] pl-[26px] pr-[10px] text-[17px] font-semibold leading-[1.55] text-white"
              >
                {interstitial.go}
                <ArrowChip />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
