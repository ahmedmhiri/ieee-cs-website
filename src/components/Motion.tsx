import { useEffect, useState } from 'react';

/** Thin bar at the top of the page that fills as you scroll. */
export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-blue-400 via-cyan-400 to-gold-500 origin-left"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  );
}

/**
 * Scroll reveal. Marks section headers and card grids with `.reveal`, then adds `.in` when they enter the screen.
 * Children of a grid get a staggered delay. Newly rendered cards (e.g. "Show all events") are picked up too.
 */
const TARGETS = [
  'section .text-center.mb-16',
  '#about .grid > *',
  '#awards .flex-wrap > *',
  '#events .grid > *',
  '#gallery .grid > *',
  '#team .grid > *',
  '#contact .grid > div > *',
  '#year .bg-slate-900\\/50',
  '#year .flex-wrap > *',
].join(',');

export function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const scan = () => {
      document.querySelectorAll<HTMLElement>(TARGETS).forEach((el) => {
        if (el.dataset.rv) return;
        el.dataset.rv = '1';
        el.classList.add('reveal');
        const sibs = el.parentElement ? Array.from(el.parentElement.children) : [];
        el.style.transitionDelay = `${Math.min(sibs.indexOf(el), 8) * 70}ms`;
        io.observe(el);
      });
    };
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}

/** Endless scrolling strip of this year's events. */
export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="marquee relative overflow-hidden border-y border-blue-500/20 bg-slate-900 py-4" aria-hidden="true">
      <div className="marquee-track flex w-max">
        {row.map((t, i) => (
          <span key={i} className="flex items-center text-lg font-semibold text-gray-300 whitespace-nowrap">
            <span className="px-8">{t}</span>
            <span className="w-2 h-2 rounded-full bg-gold-500" />
          </span>
        ))}
      </div>
    </div>
  );
}
