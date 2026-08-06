import { useEffect } from 'react';

export default function useBackgroundParallax(glowRef) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const glow = glowRef.current;
    if (reduced || !glow || window.innerWidth < 1180) return;

    function onScroll() {
      const y = window.scrollY * 0.03;
      glow.style.transform = 'translateY(' + y + 'px)';
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [glowRef]);
}
