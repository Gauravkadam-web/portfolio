import { useState } from 'react';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site">
      <div className="header-inner">
        <a className="logo" href="#hero">
          <span className="prompt">&gt;_</span> Gaurav Kadam
        </a>
        <button
          className="navtoggle"
          id="navToggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          menu
        </button>
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
