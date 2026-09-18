'use client';

import { useEffect } from 'react';

/**
 * Reveal-on-arrival for two things only: the page's rules (.rule-draw) and
 * photo frames (.frame-reveal). Anything already in view at load is left
 * alone, so nothing above the fold ever flashes, and with no JS nothing
 * is hidden at all.
 */
export function MotionInit() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.rule-draw, .frame-reveal'));
    const below = els.filter((el) => el.getBoundingClientRect().top > window.innerHeight);
    if (!below.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.setAttribute('data-in', '');
          io.unobserve(e.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    // siblings stagger: index within their parent
    below.forEach((el) => {
      const i = Array.from(el.parentElement?.parentElement?.children ?? []).indexOf(
        el.parentElement as Element,
      );
      el.style.setProperty('--i', String(Math.max(0, i)));
      el.setAttribute('data-hidden', '');
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return null;
}
