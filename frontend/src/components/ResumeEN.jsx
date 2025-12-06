export default function ResumeEN() {
  return (
    <div className="resume-container">

      {/* NAME */}
      <h1 className="resume-name">Artem Shmahaylo</h1>

      {/* TAGLINE */}
      <div className="resume-tagline">AWS Cloud Resume</div>

      {/* EVERYTHING BELOW WILL BE CENTERED BUT LEFT-ALIGNED */}
      <div className="resume-content">

        {/* PROFILE */}
        <p className="profile-text">
          Cloud engineering professional transitioning from a successful 20+ year international career as a principal cellist.
          AWS Solutions Architect Associate with hands-on experience in IAM, S3, EC2, VPC and CloudFront. Motivated by building
          secure, reliable solutions and bringing discipline, focus and calm under pressure into technical teams.
        </p>

        {/* MAIN CONTENT */}
        <main>

          <section className="section">
            <h2>Work Experience</h2>

            <div className="job">
              <h3>Proximus On-Site Technician (Fiber In-Home Splicer)</h3>
              <div className="date">October 2023 – Present</div>
              <div className="location">Circet Belgium — Kontich, Belgium</div>
              <ul>
                <li>Install, activate and test fiber connections for residential and business customers.</li>
                <li>Perform OTDR and signal-level measurements to verify service quality and stability.</li>
                <li>Diagnose and resolve connectivity issues (ONT, modem, Wi-Fi, in-house wiring) on-site.</li>
                <li>Configure customer equipment and provide clear, customer-friendly explanations.</li>
                <li>Work autonomously in the field with a strong focus on safety, accuracy and reliability.</li>
                <li>Escalate complex technical issues to Proximus engineering teams when required.</li>
              </ul>
            </div>

            <div className="job">
              <h3>Principal Cellist / Orchestral Musician</h3>
              <div className="date">1999 – 2023</div>
              <div className="location">Belgian National Orchestra, Antwerp Symphony Orchestra, Casco Phil</div>
              <ul>
                <li>Led the cello section in national and international performances for leading orchestras.</li>
                <li>Performed at major concert halls and festivals across Europe and the United States.</li>
                <li>Collaborated with world-class conductors, soloists and production teams.</li>
                <li>Participated in large-scale film-in-concert productions (e.g. Lord of the Rings, Harry Potter).</li>
                <li>Maintained consistent high performance under pressure in fast-paced, demanding environments.</li>
              </ul>
            </div>

            <div className="job">
              <h3>Principal Cellist — Ukrainian Freedom Orchestra</h3>
              <div className="date">2022 – Present</div>
              <div className="location">International touring orchestra</div>
              <ul>
                <li>Selected as principal cellist for an international orchestra representing Ukrainian culture abroad.</li>
                <li>Toured across Europe and North America in support of cultural diplomacy and humanitarian causes.</li>
              </ul>
            </div>
          </section>

          <section className="section">
            <h2>Education & Training</h2>

            <div className="education">
              <h3>AWS Solutions Architect Associate — Certified</h3>
              <div className="date">2025</div>
              <div className="location">Amazon Web Services</div>
              <ul>
                <li>Validated knowledge of designing secure, resilient and cost-optimised workloads on AWS.</li>
              </ul>
            </div>

            <div className="education">
              <h3>CS50’s Introduction to Programming with Python</h3>
              <div className="date">2024 – 2025</div>
              <div className="location">HarvardX / edX (online)</div>
              <ul>
                <li>Completed a comprehensive introduction to programming, algorithms and problem solving in Python.</li>
                <li>Developed multiple projects including a final automation-oriented CLI tool.</li>
              </ul>
            </div>

            <div className="education">
              <h3>Master of Arts in Music Performance (Violoncello) — Cum Laude</h3>
              <div className="date">2010 – 2013</div>
              <div className="location">Royal Academy of Fine Arts (KASK), Gent, Belgium</div>
              <ul>
                <li>Graduated with a 20/20 jury score, an exceptionally rare distinction.</li>
                <li>Received a cultural prize from the Mayor of Gent for outstanding performance.</li>
              </ul>
            </div>
          </section>

          <section className="section">
            <h2>Technical Skills</h2>
            <div className="skill-groups">
              <div>
                <div className="skill-group-title">Cloud & AWS</div>
                <div>IAM, S3, EC2, VPC, CloudFront, Lambda (basic), CloudWatch, CloudTrail</div>
              </div>
              <div>
                <div className="skill-group-title">Security & IAM</div>
                <div>Least privilege, IAM policies and roles, MFA, role assumption, secure defaults</div>
              </div>
              <div>
                <div className="skill-group-title">Programming & Tools</div>
                <div>Python, Bash, PowerShell, Git, GitHub, Linux CLI, VS Code</div>
              </div>
              <div>
                <div className="skill-group-title">Soft Skills</div>
                <div>Communication, autonomy, discipline, analytical thinking, mentoring and teamwork</div>
              </div>
            </div>
          </section>

          <section className="section">
            <h2>Languages</h2>
            <div className="lang-list">
              <span><strong>Ukrainian:</strong> native</span>
              <span><strong>Russian:</strong> native</span>
              <span><strong>English:</strong> C1</span>
              <span><strong>Dutch:</strong> B1</span>
            </div>
          </section>

        </main>

      </div> {/* END resume-content */}

    </div>
  );
}
