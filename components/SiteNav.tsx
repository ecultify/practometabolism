'use client';

/**
 * Pixel-matched to Figma node 2242:21 ("Nav") in the
 * "V2 UPDATED · new script content · Desktop 1440" frame.
 *
 * Figma values, verbatim:
 *   wrapper  bg #ffffff, border-bottom 1px #e4e8f4, px 56, py 22, flex justify-between items-center
 *   logo     132 x 30.282 image
 *   journey  bg #f3f6fc, rounded 999, p 6, gap 6
 *   step     px 16, py 8, rounded 999, gap 8
 *            dot 6x6 — active #14bef0, inactive #a7b1d9
 *            label Poppins Medium 14 — active #ffffff, inactive #4a5487
 *   active   bg #28328c
 *   spacer   132 x 10 (balances the logo so the pill group stays centred)
 */

import { useEffect, useState } from 'react';
import { nav } from '@/lib/content';

const sectionIds = nav.links.map((l) => l.href.replace('#', ''));

export function SiteNav() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (!nodes.length) return;

    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      let next = 0;
      nodes.forEach((n, i) => {
        if (n.getBoundingClientRect().top <= line) next = i;
      });
      setActive(next);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <header
      data-node-id="2242:21"
      className="sticky top-0 z-40 border-b border-solid border-[#e4e8f4] bg-white"
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-[56px] py-[22px] max-lg:px-6 max-lg:py-4">
        <a
          href="#top"
          aria-label={`${nav.brand} home`}
          className="relative block h-[30.282px] w-[132px] shrink-0 max-lg:-my-2 max-lg:box-content max-lg:h-[25.23px] max-lg:w-[110px] max-lg:py-2"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brand/practo-logo.webp"
            alt={nav.brand}
            width={132}
            height={30}
            className="h-full w-full object-contain object-left"
          />
        </a>

        <nav aria-label="Sections" className="max-lg:hidden">
          <ul className="flex items-center gap-[6px] overflow-hidden rounded-[999px] bg-[#f3f6fc] p-[6px]">
            {nav.links.map((l, i) => {
              const on = i === active;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    aria-current={on ? 'true' : undefined}
                    className={[
                      'flex items-center gap-[8px] overflow-hidden rounded-[999px] px-[16px] py-[8px]',
                      'whitespace-nowrap text-[14px] font-medium leading-normal transition-colors',
                      on ? 'bg-[#28328c] text-white' : 'text-[#4a5487] hover:bg-white',
                    ].join(' ')}
                  >
                    <span
                      aria-hidden="true"
                      className="block size-[6px] shrink-0 rounded-full"
                      style={{ background: on ? '#14bef0' : '#a7b1d9' }}
                    />
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Figma node 2242:39 — 132 x 10 spacer that keeps the pill group optically centred */}
        <div aria-hidden="true" className="h-[10px] w-[132px] shrink-0 max-lg:hidden" />
      </div>
    </header>
  );
}
