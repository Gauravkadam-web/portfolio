import { useEffect } from 'react';

// Animates each `.stat-card .num` from 0 up to its target value once it
// scrolls into view. Non-numeric labels (like "A+") are left untouched.
export default function useStatCountUp() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nums = document.querySelectorAll('.stat-card .num');
    if (!nums.length || reduced) return;

    const obs = new IntersectionObserver(
      (entries, o) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const raw = el.textContent.trim();
          const target = parseInt(raw, 10);
          if (isNaN(target)) {
            o.unobserve(el);
            return;
          }
          el.textContent = '0';
          let start = null;
          const duration = 900;
          function frame(ts) {
            if (!start) start = ts;
            const p = Math.min(1, (ts - start) / duration);
            el.textContent = Math.floor(p * target);
            if (p < 1) requestAnimationFrame(frame);
            else el.textContent = target;
          }
          requestAnimationFrame(frame);
          o.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );

    nums.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);
}
