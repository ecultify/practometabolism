'use client';

import { useEffect } from 'react';

/**
 * Scroll reveal, wired generically so no section needs markup changes:
 * each content block directly under a section's frame fades/rises in when
 * it enters the viewport. Rows of cards stagger their children instead.
 */
export function MotionInit() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.setAttribute('data-in', '');
          io.unobserve(e.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );

    const items: Element[] = [];
    document.querySelectorAll('main > section').forEach((section) => {
      let frame: Element = section;
      // step down through single-child wrappers to the real content list
      while (frame.children.length === 1) frame = frame.children[0];
      for (let block of Array.from(frame.children)) {
        while (block.children.length === 1 && !block.matches('h1,h2,h3,p,a,button')) {
          block = block.children[0];
        }
        const kids = Array.from(block.children);
        const row =
          kids.length >= 2 &&
          kids.length <= 6 &&
          /flex|grid/.test(getComputedStyle(block).display) &&
          !block.matches('h1,h2,h3,p');
        (row ? kids : [block]).forEach((el, i) => {
          (el as HTMLElement).style.setProperty('--i', String(i));
          el.setAttribute('data-reveal', '');
          items.push(el);
        });
      }
    });
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
