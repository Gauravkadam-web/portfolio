import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#about', label: 'about.md' },
  { href: '#experience', label: 'experience.md' },
  { href: '#projects', label: 'projects.md' },
  { href: '#skills', label: 'skills.md' },
  { href: '#education', label: 'education.md' },
  { href: '#contact', label: 'contact.md' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  return (
    <header className="site">
      <div className="header-inner">
        <a className="logo" href="#hero">
          <span className="prompt">&gt;_</span> Gaurav Kadam
        </a>
        <div className="header-actions">
          <button
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={toggleTheme}
          >
            <i
              className={`theme-icon ${theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}`}
              aria-hidden="true"
            />
          </button>
          <button
            className={`navtoggle${open ? ' open' : ''}`}
            id="navToggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mainNav"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="navtoggle-bar"></span>
            <span className="navtoggle-bar"></span>
            <span className="navtoggle-bar"></span>
          </button>
        </div>
        <nav className={`mainnav${open ? ' open' : ''}`} id="mainNav">
          {LINKS.map((l) => (
            <a
              key={l.href}
              className="nav-link"
              href={l.href}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            className="btn ghost small"
            href="/Gaurav_Kadam_Resume.pdf"
            target="_blank"
            rel="noopener"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
          <span className="nav-underline" id="navUnderline"></span>
        </nav>
      </div>
    </header>
  );
}
