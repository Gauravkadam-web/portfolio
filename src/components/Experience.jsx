export default function Experience() {
  return (
    <section id="experience">
      <span className="eyebrow">Experience</span>
      <h2 className="section-title">Where I've worked</h2>
      <div className="timeline">
        <div className="job current">
          <div className="job-head">
            <div className="job-title">Web Developer Intern <span className="badge-live">current</span></div>
            <div className="job-date">01/2026 — Present</div>
          </div>
          <div className="job-org">DigiWork Online Services &amp; Consultancy LLP · Pune, India</div>
          <ul>
            <li>Developed and maintained full-stack web applications using <b>Spring Boot</b> for backend services and <b>React.js</b> for responsive, component-based interfaces.</li>
            <li>Designed and implemented RESTful APIs with Spring Boot, keeping architecture clean and data flow efficient between frontend and backend.</li>
            <li>Documented and tested APIs using <b>Swagger</b> for interactive specs and <b>Postman</b> for endpoint validation and debugging.</li>
            <li>Containerized applications using <b>Docker</b>, streamlining environment setup and keeping deployment stages consistent.</li>
            <li>Collaborated with the development team to integrate frontend and backend components and deliver features within project timelines.</li>
            <li>Gained hands-on experience across the full development lifecycle — API design, testing, containerization, deployment readiness.</li>
          </ul>
        </div>
        <div className="job">
          <div className="job-head">
            <div className="job-title">Web Development Intern</div>
            <div className="job-date">06/2025 — 12/2025</div>
          </div>
          <div className="job-org">SystemTron · Pune, India</div>
          <ul>
            <li>Worked on web development tasks as part of a structured internship program, gaining hands-on exposure to real-world development workflows.</li>
            <li>Collaborated with the team on building and testing web-based features, strengthening practical front-end and back-end skills.</li>
          </ul>
        </div>
      </div>
      <blockquote className="quote-card">
        "Gaurav showed strong initiative in integrating frontend and backend components and consistently delivered within project timelines."
        <cite>— Development team, DigiWork Online Services</cite>
      </blockquote>
    </section>
  );
}
