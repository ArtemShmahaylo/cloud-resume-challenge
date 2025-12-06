export default function ProjectsNL() {
  return (
    <div className="resume-container">

      {/* PAGE TITLE */}
      <h1 className="resume-name">Projecten</h1>
      <div className="resume-tagline">Portfolio van Cloud & Python Engineering Werk</div>

      <div className="resume-content">

        <main>

          {/* CLOUD RESUME CHALLENGE */}
          <section className="section">
            <h2>Cloud Resume Challenge</h2>

            <div className="project">
              <h3>Meertalig Cloud CV gehost op AWS</h3>
              <div className="date">2025</div>
              <ul>
                <li>Volledige website gebouwd (HTML → React → AWS) met twee talen.</li>
                <li>Gehost via Amazon S3 + CloudFront met HTTPS en AWS Certificate Manager.</li>
                <li>Bezoekerscounter geïmplementeerd met Lambda & DynamoDB.</li>
                <li>Geautomatiseerde CI/CD pipeline via GitHub Actions.</li>
              </ul>

              <div className="badge-list">
                <span className="badge">
                  <a href="https://github.com/ArtemShmahaylo/cloud-resume-challenge" target="_blank">GitHub Repository</a>
                </span>
                <span className="badge">
                  <a href="https://youtu.be/rJxdXfjxMkM" target="_blank">YouTube Demo</a>
                </span>
              </div>
            </div>
          </section>

          {/* PYTHON AUTOMATION TOOL */}
          <section className="section">
            <h2>AWS Configuratie Automatisering Tool (Python)</h2>

            <div className="project">
              <h3>CLI-tool voor het genereren van AWS JSON-configuraties</h3>
              <div className="date">2025</div>
              <ul>
                <li>Modulaire CLI-tool die JSON-sjablonen genereert voor S3, EC2 en Lambda.</li>
                <li>Implementeert veilige AWS-standaarden en IAM best practices.</li>
                <li>Automatische tests met pytest en gesimuleerde AWS-calls via moto.</li>
              </ul>

              <div className="badge-list">
                <span className="badge">
                  <a href="https://github.com/me50/ArtemShmahaylo#aws-configuration-automation-tool" target="_blank">
                    GitHub (Project Sectie)
                  </a>
                </span>
                <span className="badge">
                  <a href="https://youtu.be/rJxdXfjxMkM" target="_blank">YouTube Demo</a>
                </span>
              </div>
            </div>
          </section>

        </main>

      </div>
    </div>
  );
}
