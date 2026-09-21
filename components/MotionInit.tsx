'use client';

import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * One motion layer for the whole page, driven by GSAP + ScrollTrigger.
 *
 *   nav               drops in on load; picks up a shadow once the page has scrolled
 *   [data-reveal]     text blocks, cards, rows: rise + fade as they arrive, siblings stagger
 *   [data-reveal-img] photos: rise + fade and settle from a slight zoom
 *   .rule-draw        underlines draw in (CSS transition, flagged here)
 *   title lines       TitleLines spans carry data-reveal, so headlines arrive line by line
 *
 * Only things below the fold are hidden first, so nothing on screen at load
 * ever flashes. With no JS, nothing is hidden at all. Reduced-motion users
 * get the content with no movement.
 */
export function MotionInit() {
  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      /* ---- nav ---- */
      const header = document.querySelector<HTMLElement>('header');
      if (header && !reduce) gsap.from(header, { y: -16, opacity: 0, duration: 0.6, ease: 'power2.out' });
      ScrollTrigger.create({
        start: 40,
        onToggle: (self) => header?.toggleAttribute('data-scrolled', self.isActive),
      });

      if (reduce) return;

      /* ---- hero: what is already on screen plays once on load ---- */
      const hero = document.querySelector('#top');
      if (hero) {
        const items = gsap.utils.toArray<HTMLElement>('[data-reveal]', hero);
        gsap.from(items, { y: 18, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08, delay: 0.1 });
      }

      /* ---- everything else reveals as it arrives ---- */
      const fold = window.innerHeight;
      const below = (sel: string) =>
        gsap.utils.toArray<HTMLElement>(sel).filter((el) => !hero?.contains(el) && el.getBoundingClientRect().top > fold);

      const blocks = below('[data-reveal]');
      gsap.set(blocks, { y: 24, opacity: 0 });
      ScrollTrigger.batch(blocks, {
        start: 'top 88%',
        once: true,
        onEnter: (batch) => gsap.to(batch, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.09, overwrite: true }),
      });

      const imgs = below('[data-reveal-img]');
      gsap.set(imgs, { y: 24, opacity: 0 });
      gsap.set(imgs.map((el) => el.querySelector('img')).filter(Boolean), { scale: 1.06 });
      ScrollTrigger.batch(imgs, {
        start: 'top 88%',
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.1, overwrite: true });
          gsap.to(batch.map((el) => (el as HTMLElement).querySelector('img')).filter(Boolean), { scale: 1, duration: 1.4, ease: 'power2.out', stagger: 0.1 });
        },
      });

      /* ---- underlines (CSS transition, just flagged in and out of view) ---- */
      const rules = below('.rule-draw');
      rules.forEach((el, i) => {
        el.style.setProperty('--i', String(i % 6));
        el.setAttribute('data-hidden', '');
      });
      ScrollTrigger.batch(rules, { start: 'top 90%', once: true, onEnter: (b) => b.forEach((el) => el.setAttribute('data-in', '')) });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
