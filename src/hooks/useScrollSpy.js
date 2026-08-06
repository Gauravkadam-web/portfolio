import { useEffect } from 'react';

// Highlights the current section's nav link on scroll and slides the
// amber underline beneath it (hidden below 720px, matching the CSS).
export default function useScrollSpy() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const navLinks = Array.from(document.querySelectorAll('.nav-link'));
    const underline = document.getElementById('navUnderline');
    const nav = document.getElementById('mainNav');

    function moveUnderline(link) {
      if (!underline || !nav) return;
      if (!link || window.innerWidth <= 720) {
        underline.classList.remove('active');
        return;
      }
      const r = link.getBoundingClientRect();
      const nr = nav.getBoundingClientRect();
      underline.style.left = r.left - nr.left + 'px';
      underline.style.width = r.width + 'px';
      underline.classList.add('active');
    }

    if (!sections.length) return;

    function onScroll() {
      const pos = window.scrollY + 120;
      let current = sections[0];
      sections.forEach((s) => {
        if (s.offsetTop <= pos) current = s;
      });
      if (!current) return;
      const id = current.id;
      let activeLink = null;
      navLinks.forEach((t) => {
        const isActive = t.getAttribute('href') === '#' + id;
        t.classList.toggle('active', isActive);
        if (isActive) activeLink = t;
      });
      moveUnderline(activeLink);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
}
