const LINKS = [
  { href: '#about', label: 'about.md' },
  { href: '#experience', label: 'experience.md' },
  { href: '#projects', label: 'projects.md' },
  { href: '#skills', label: 'skills.md' },
  { href: '#education', label: 'education.md' },
  { href: '#contact', label: 'contact.md' },
];

export default function Header() {
  return (
    <header className="site">
      <div className="header-inner">
        <a className="logo" href="#hero">
          <span className="prompt">&gt;_</span> Gaurav Kadam
        </a>
        <nav className="mainnav" id="mainNav">
          {LINKS.map((l) => (
            <a
              key={l.href}
              className="nav-link"
              href={l.href}
            >
              {l.label}
            </a>
          ))}
          <a
            className="btn ghost small"
            href="/Gaurav_Kadam_Resume.pdf"
            target="_blank"
            rel="noopener"
          >
            Resume
          </a>
          <span className="nav-underline" id="navUnderline"></span>
        </nav>
      </div>
    </header>
  );
}
