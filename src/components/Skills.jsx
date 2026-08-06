import useSkillBarStagger from '../hooks/useSkillBarStagger';

export default function Skills() {
  useSkillBarStagger();

  return (
    <section id="skills">
      <span className="eyebrow">Skills</span>
      <h2 className="section-title">The stack</h2>
      <div className="skills-grid">
        <div>
          <div className="skill-group-title">Languages</div>
          <div className="skill-tags">
            <span className="tag amber">Java (Core, OOP)</span><span className="tag amber">Lambda &amp; Streams</span><span className="tag amber">JavaScript</span>
          </div>
          <div className="skill-bar-row">
            <div className="skill-bar-head"><span>Java</span><span>Advanced</span></div>
            <div className="skill-bar"><i style={{ '--w': '88%' }}></i></div>
          </div>
          <div className="skill-bar-row">
            <div className="skill-bar-head"><span>JavaScript / TypeScript</span><span>Intermediate</span></div>
            <div className="skill-bar"><i style={{ '--w': '72%' }}></i></div>
          </div>
        </div>
        <div>
          <div className="skill-group-title">Backend <span>Spring &amp; Java EE</span></div>
          <div className="skill-tags">
            <span className="tag teal">Spring Boot</span><span className="tag teal">Spring Security (JWT)</span><span className="tag teal">Spring Data JPA</span>
          </div>
          <div className="skill-bar-row">
            <div className="skill-bar-head"><span>Spring Boot</span><span>Advanced</span></div>
            <div className="skill-bar"><i style={{ '--w': '85%' }}></i></div>
          </div>
          <div className="skill-bar-row">
            <div className="skill-bar-head"><span>REST API Design</span><span>Advanced</span></div>
            <div className="skill-bar"><i style={{ '--w': '82%' }}></i></div>
          </div>
        </div>
        <div>
          <div className="skill-group-title">Frontend</div>
          <div className="skill-tags">
            <span className="tag">React.js</span><span className="tag">Next.js</span><span className="tag">HTML / CSS</span>
          </div>
          <div className="skill-bar-row">
            <div className="skill-bar-head"><span>React.js</span><span>Intermediate</span></div>
            <div className="skill-bar"><i style={{ '--w': '75%' }}></i></div>
          </div>
        </div>
        <div>
          <div className="skill-group-title">Database / ORM</div>
          <div className="skill-tags">
            <span className="tag">Hibernate / JPA</span><span className="tag">MySQL</span><span className="tag">PostgreSQL</span>
          </div>
          <div className="skill-bar-row">
            <div className="skill-bar-head"><span>SQL &amp; JPA</span><span>Advanced</span></div>
            <div className="skill-bar"><i style={{ '--w': '80%' }}></i></div>
          </div>
        </div>
        <div>
          <div className="skill-group-title">Messaging / Caching</div>
          <div className="skill-tags">
            <span className="tag">Kafka</span><span className="tag">Redis</span>
          </div>
        </div>
        <div>
          <div className="skill-group-title">DevOps &amp; Tooling</div>
          <div className="skill-tags">
            <span className="tag">Docker</span><span className="tag">Maven</span><span className="tag">Postman</span><span className="tag">Swagger</span><span className="tag">Git / GitHub</span>
          </div>
          <div className="skill-bar-row">
            <div className="skill-bar-head"><span>Docker</span><span>Intermediate</span></div>
            <div className="skill-bar"><i style={{ '--w': '70%' }}></i></div>
          </div>
        </div>
      </div>
    </section>
  );
}
