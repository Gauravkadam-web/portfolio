export default function About() {
  return (
    <section id="about">
      <span className="eyebrow">About</span>
      <h2 className="section-title">Who I am</h2>
      <div className="about-grid">
        <div>
          <p>
            Full-Stack Java Developer with hands-on experience building scalable web applications using{' '}
            <b>Java, Spring Boot, and React.js</b>. Skilled in designing RESTful APIs, implementing secure authentication with JWT and Spring Security, and working with relational databases through JPA/Hibernate.
          </p>
          <p>
            Proficient in containerization with Docker and API testing/documentation using Postman and Swagger. Has built end-to-end applications independently — <b>StaffDesk</b> and <b>HireFlow</b> — alongside practical exposure from two web development internships.
          </p>
          <p>
            Strong foundation in OOP principles and microservices architecture, with a keen interest in writing clean, maintainable code and continuously expanding technical range.
          </p>
          <div className="learning-card">
            <h3>Currently exploring</h3>
            <div className="learning-tags">
              <span className="tag">Kafka</span>
              <span className="tag">Redis</span>
              <span className="tag">Microservices</span>
              <span className="tag">System Design</span>
              <span className="tag">Cloud Deployment</span>
            </div>
          </div>
        </div>
        <div className="meta-card">
          <div className="row"><span>Role</span><span>Full-Stack Dev</span></div>
          <div className="row"><span>Focus</span><span>Java · Spring · React</span></div>
          <div className="row"><span>Location</span><span>Pune, IN</span></div>
          <div className="row"><span>Status</span><span>Open to work</span></div>
          <div className="row"><span>GitHub</span><span>Gauravkadam-web</span></div>
          <div className="row"><span>Email</span><span>gaurav.kadam1911@gmail.com</span></div>
        </div>
      </div>
    </section>
  );
}
