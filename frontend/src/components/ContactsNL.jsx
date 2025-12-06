export default function ContactsNL() {
  return (
    <div className="resume-container">

      {/* PAGE HEADER */}
      <h1 className="resume-name">Contact</h1>
      <div className="resume-tagline">Neem Contact Op</div>

      <div className="resume-content">

        <main>

          <section className="section">
            <h2>Contactgegevens</h2>

            <div className="contact-block">
              <p><strong>Email:</strong> artshmagailo@gmail.com</p>
              <p><strong>Telefoon:</strong> +32 485 38 29 14</p>
              <p><strong>Locatie:</strong> Gent, België</p>
              <p><strong>GitHub:</strong> <a href="https://github.com/me50/ArtemShmahaylo" target="_blank">github.com/me50/ArtemShmahaylo</a></p>
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/artem-shmahaylo" target="_blank">linkedin.com/in/artem-shmahaylo</a></p>
            </div>
          </section>

          <section className="section">
            <h2>Over Deze Website</h2>

            <p>
              Deze website maakt deel uit van mijn Cloud Resume Challenge — een modern, meertalig portfolio
              gebouwd met React, Vite en AWS-technologieën zoals S3, CloudFront, Lambda, DynamoDB en GitHub Actions.
            </p>

            <p>
              Meer technische details vind je op de projectpagina of rechtstreeks op mijn GitHub-profiel.
            </p>
          </section>

        </main>

      </div>
    </div>
  );
}
