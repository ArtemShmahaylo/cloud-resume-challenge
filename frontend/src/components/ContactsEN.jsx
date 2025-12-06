export default function ContactsEN() {
  return (
    <div className="resume-container">

      {/* PAGE HEADER */}
      <h1 className="resume-name">Contact</h1>
      <div className="resume-tagline">Get in Touch</div>

      <div className="resume-content">

        <main>

          <section className="section">
            <h2>Contact Information</h2>

            <div className="contact-block">
              <p><strong>Email:</strong> artshmagailo@gmail.com</p>
              <p><strong>Phone:</strong> +32 485 38 29 14</p>
              <p><strong>Location:</strong> Gent, Belgium</p>
              <p><strong>GitHub:</strong> <a href="https://github.com/me50/ArtemShmahaylo" target="_blank">github.com/me50/ArtemShmahaylo</a></p>
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/artem-shmahaylo" target="_blank">linkedin.com/in/artem-shmahaylo</a></p>
            </div>
          </section>

          <section className="section">
            <h2>About This Website</h2>

            <p>
              This website is part of my Cloud Resume Challenge — a modern, multi-language portfolio built
              using React, Vite, and AWS technologies such as S3, CloudFront, Lambda, DynamoDB and GitHub Actions.
            </p>

            <p>
              You can explore more technical details in the project section or directly on my GitHub profile.
            </p>
          </section>

        </main>

      </div>
    </div>
  );
}
