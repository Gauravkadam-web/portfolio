import useCardTilt from '../hooks/useCardTilt';

export default function Projects() {
  useCardTilt();

  return (
    <section id="projects">
      <span className="eyebrow">Projects</span>
      <h2 className="section-title">Things I've built</h2>

      <div className="proj-layout">
        <article className="proj-card featured">
          <div className="proj-preview">
            <div className="proj-preview-inner">
              <div className="proj-preview-bar"><i></i><i></i><i></i> staffdesk — dashboard</div>
              <div className="proj-preview-ui">
                <div className="proj-preview-sidebar">
                  <div className="proj-preview-line w80 accent"></div>
                  <div className="proj-preview-line w60"></div>
                  <div className="proj-preview-line w60"></div>
                  <div className="proj-preview-line w80"></div>
                </div>
                <div className="proj-preview-main">
                  <div className="proj-preview-line w60 accent"></div>
                  <div className="proj-preview-line"></div>
                  <div className="proj-preview-line"></div>
                  <div className="proj-preview-line w80"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="proj-body">
            <div className="proj-name">StaffDesk</div>
            <p>Employee Management System — a Next.js 14 + TypeScript dashboard on top of a Spring Boot REST API, covering employee, department, attendance, and leave modules. JWT auth via Spring Security, Spring Data JPA for persistence, Flyway for versioned migrations. Backend containerized with Docker, frontend deployed on Vercel.</p>
            <div className="proj-tags">
              <span className="tag">Next.js</span><span className="tag">TypeScript</span><span className="tag">Spring Boot</span>
              <span className="tag">Spring Security</span><span className="tag">Flyway</span><span className="tag">Docker</span>
            </div>
            <div className="proj-links">
              <a className="proj-link teal" href="https://staffdesk-ashy.vercel.app/" target="_blank" rel="noopener">Live Demo ↗</a>
              <a className="proj-link" href="https://github.com/Gauravkadam-web/staffdesk" target="_blank" rel="noopener">GitHub ↗</a>
            </div>
          </div>
        </article>

        <article className="proj-card">
          <div className="proj-preview">
            <div className="proj-preview-inner">
              <div className="proj-preview-bar"><i></i><i></i><i></i> hireflow — portal</div>
              <div className="proj-preview-main" style={{ flex: 1 }}>
                <div className="proj-preview-line w80 accent"></div>
                <div className="proj-preview-line"></div>
                <div className="proj-preview-line w60"></div>
                <div className="proj-preview-line"></div>
              </div>
            </div>
          </div>
          <div className="proj-body">
            <div className="proj-name">HireFlow</div>
            <p>Job Portal built in Java (Servlets, JSP, JSTL) with three roles — seeker, employer, admin — and BCrypt auth. PostgreSQL schema with status-driven job lifecycle. Dockerized, deployed on Render.</p>
            <div className="proj-tags">
              <span className="tag">Java</span><span className="tag">Servlets / JSP</span><span className="tag">PostgreSQL</span>
              <span className="tag">BCrypt</span><span className="tag">Docker</span>
            </div>
            <div className="proj-links">
              <a className="proj-link" href="https://github.com/Gauravkadam-web/hireflow" target="_blank" rel="noopener">GitHub ↗</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}