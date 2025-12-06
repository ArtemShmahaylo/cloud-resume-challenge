export default function ProjectsEN() {
  return (
    <div className="resume-container">

      {/* PAGE TITLE */}
      <h1 className="resume-name">Projects</h1>
      <div className="resume-tagline">Portfolio of Cloud & Python Engineering Work</div>

      <div className="resume-content">

        <main>

          {/* CLOUD RESUME CHALLENGE */}
          <section className="section">
            <h2>Cloud Resume Challenge</h2>

            <div className="project">
              <h3>Multi-language Cloud Resume hosted on AWS</h3>
              <div className="date">2025</div>
              <ul>
                <li>Built a full multi-language resume website using HTML → React → AWS.</li>
                <li>Hosted via Amazon S3 + CloudFront with HTTPS using AWS Certificate Manager.</li>
                <li>Implemented visitor counter using Lambda & DynamoDB.</li>
                <li>Fully automated CI/CD pipeline using GitHub Actions.</li>
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
            <h2>AWS Configuration Automation Tool (Python)</h2>

            <div className="project">
              <h3>CLI Tool for Generating AWS JSON Configurations</h3>
              <div className="date">2025</div>
              <ul>
                <li>Created a modular CLI that outputs ready-to-use JSON templates for S3, EC2 and Lambda.</li>
                <li>Implements secure AWS defaults and IAM best practices.</li>
                <li>Added automatic testing using pytest and mocked AWS calls via moto.</li>
              </ul>

              <div className="badge-list">
                <span className="badge">
                  <a href="https://github.com/me50/ArtemShmahaylo#aws-configuration-automation-tool" target="_blank">
                    GitHub (Project Section)
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
