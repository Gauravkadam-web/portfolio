export default function Education() {
  return (
    <section id="education">
      <span className="eyebrow">Education</span>
      <h2 className="section-title">Education &amp; certifications</h2>

      <div className="edu-row">
        <div><div className="edu-name">Master's in Computer Application</div><div className="edu-org">APCOER, Pune</div></div>
        <div className="edu-date">2025 — Present</div>
      </div>
      <div className="edu-row">
        <div><div className="edu-name">B.Sc. Computer Science</div><div className="edu-org">Modern College of Arts, Science and Commerce, Shivajinagar, Pune</div></div>
        <div className="edu-date">2022 — 2025</div>
      </div>
      <div className="edu-row">
        <div><div className="edu-name">HSC (Class XII)</div><div className="edu-org">Modern College of Arts, Science and Commerce, Shivajinagar, Pune</div></div>
        <div className="edu-date">2021 — 2022</div>
      </div>
      <div className="edu-row">
        <div><div className="edu-name">SSC (Class X)</div><div className="edu-org">Sardar Dastur Hoshang Boys High School, Pune</div></div>
        <div className="edu-date">2019 — 2020</div>
      </div>

      <div style={{ height: '32px' }}></div>

      <div className="cert-row">
        <div className="cert-icon">JV</div>
        <div>
          <b>Certificate Course in Java Programming</b>
          <div className="cert-sub">NSG Academy · 3 months, 90 hrs · Grade A+ · 07/2025</div>
        </div>
      </div>
      <div className="cert-row">
        <div className="cert-icon">ST</div>
        <div>
          <b>Web Development Internship</b>
          <div className="cert-sub">SystemTron · Official completion certificate</div>
        </div>
      </div>
    </section>
  );
}
