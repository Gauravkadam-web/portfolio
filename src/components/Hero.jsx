import useTypewriter from '../hooks/useTypewriter';
import HeroTerminal from './HeroTerminal';

const TECH = ['Java', 'Spring Boot', 'React.js', 'PostgreSQL', 'Docker', 'JWT', 'Next.js', 'TypeScript', 'Maven', 'Swagger', 'Postman', 'Git'];

function TechTrack() {
  return (
    <div className="tech-track">
      {[0, 1].map((rep) => (
        <span key={rep} style={{ display: 'contents' }}>
          {TECH.map((t, i) => (
            <span key={rep + '-' + i} style={{ display: 'contents' }}>
              <span>
                <b>{t}</b>
              </span>
              {i < TECH.length - 1 && <span>·</span>}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter();

  return (
    <section className="hero visible" id="hero">
      <div className="hero-grid">
        <div>
          <span className="eyebrow">// full-stack java developer — pune, india</span>
          <h1>
            Gaurav Kadam<span className="cursor-blink"></span>
          </h1>
          <div className="role">
            <span className="typed">{typed}</span>
          </div>
          <p className="desc">
            Full-stack developer building scalable web applications with Java and Spring Boot on the backend, React.js on the front. Comfortable end-to-end — REST APIs, JWT auth, relational databases through JPA/Hibernate, and Docker to ship it.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn ghost" href="/Gaurav_Kadam_Resume.pdf" target="_blank" rel="noopener">View Resume</a>
            {/* <a className="btn ghost" href="/Gaurav_Kadam_Resume.pdf" download="Gaurav_Kadam_Resume.pdf">Download ↓</a> */}
          </div>
        </div>
        <HeroTerminal />
      </div>

      <div className="tech-marquee" aria-hidden="true">
        <TechTrack />
      </div>

      <div className="stats-bento">
        <div className="stat-card"><div className="num">2</div><div className="lbl">Projects shipped</div></div>
        <div className="stat-card"><div className="num">2</div><div className="lbl">Internships</div></div>
        <div className="stat-card"><div className="num">90</div><div className="lbl">Hrs Java cert</div></div>
        <div className="stat-card"><div className="num">A+</div><div className="lbl">NSG Academy grade</div></div>
      </div>
    </section>
  );
}
