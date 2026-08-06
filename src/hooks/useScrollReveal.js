import { useEffect } from 'react';

// Adds/removes a `visible` class on each `main section` as it scrolls into
// view, exactly like the original IntersectionObserver-based reveal.
export default function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll('main section');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      sections.forEach((s) => s.classList.add('visible'));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    sections.forEach((s) => obs.observe(s));

    return () => obs.disconnect();
  }, []);
}
