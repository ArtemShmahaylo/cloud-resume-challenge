export default function ResumeNL() {
  return (
    <div className="resume-container">

      {/* NAME */}
      <h1 className="resume-name">Artem Shmahaylo</h1>

      {/* TAGLINE */}
      <div className="resume-tagline">AWS Cloud Resume</div>

      {/* CONTENT BLOCK */}
      <div className="resume-content">

        {/* PROFILE */}
        <p className="profile-text">
          Cloud engineer in transitie vanuit een succesvolle internationale carrière van meer dan 20 jaar als solocellist.
          Gecertificeerd AWS Solutions Architect Associate met praktijkervaring in IAM, S3, EC2, VPC en CloudFront.
          Gedreven door het bouwen van veilige, betrouwbare oplossingen en bekend om discipline, focus en rust onder druk
          binnen technische teams.
        </p>

        {/* MAIN CONTENT */}
        <main>

          {/* WORK EXPERIENCE */}
          <section className="section">
            <h2>Werkervaring</h2>

            <div className="job">
              <h3>Proximus On-Site Technician (Fiber In-Home Splicer)</h3>
              <div className="date">Oktober 2023 – Heden</div>
              <div className="location">Circet Belgium — Kontich, België</div>
              <ul>
                <li>Installeren, activeren en testen van glasvezelverbindingen voor particuliere en zakelijke klanten.</li>
                <li>Uitvoeren van OTDR- en signaalmetingen ter verificatie van kwaliteit en stabiliteit.</li>
                <li>Diagnose en oplossing van connectiviteitsproblemen (ONT, modem, Wi-Fi, interne bekabeling) op locatie.</li>
                <li>Configureren van klantapparatuur en geven van duidelijke, klantvriendelijke uitleg.</li>
                <li>Zelfstandig werken in het veld met focus op veiligheid, nauwkeurigheid en betrouwbaarheid.</li>
                <li>Escaleren van complexe technische problemen naar Proximus engineeringteams wanneer nodig.</li>
              </ul>
            </div>

            <div className="job">
              <h3>Principal Cellist / Orkestmusicus</h3>
              <div className="date">1999 – 2023</div>
              <div className="location">Belgian National Orchestra, Antwerp Symphony Orchestra, Casco Phil</div>
              <ul>
                <li>Aanvoerder van de cellosectie tijdens nationale en internationale optredens voor toonaangevende orkesten.</li>
                <li>Optredens in grote concertzalen en festivals in Europa en de Verenigde Staten.</li>
                <li>Samenwerking met dirigenten, solisten en productieteams van wereldklasse.</li>
                <li>Deelname aan grootschalige film-in-concert producties (zoals Lord of the Rings, Harry Potter).</li>
                <li>Constant hoog presteren onder druk in dynamische en veeleisende omgevingen.</li>
              </ul>
            </div>

            <div className="job">
              <h3>Principal Cellist — Ukrainian Freedom Orchestra</h3>
              <div className="date">2022 – Heden</div>
              <div className="location">Internationaal tourend orkest</div>
              <ul>
                <li>Geselecteerd als solocellist voor een internationaal orkest dat Oekraïense cultuur in het buitenland vertegenwoordigt.</li>
                <li>Getourd door Europa en Noord-Amerika ter ondersteuning van culturele diplomatie en humanitaire initiatieven.</li>
              </ul>
            </div>
          </section>

          {/* EDUCATION */}
          <section className="section">
            <h2>Opleiding & Training</h2>

            <div className="education">
              <h3>AWS Solutions Architect Associate — Gecertificeerd</h3>
              <div className="date">2025</div>
              <div className="location">Amazon Web Services</div>
              <ul>
                <li>Aangetoonde kennis in het ontwerpen van veilige, robuuste en kostgeoptimaliseerde AWS-workloads.</li>
              </ul>
            </div>

            <div className="education">
              <h3>CS50’s Introduction to Programming with Python</h3>
              <div className="date">2024 – 2025</div>
              <div className="location">HarvardX / edX (online)</div>
              <ul>
                <li>Uitgebreide introductie tot programmeren, algoritmes en probleemoplossing in Python.</li>
                <li>Meerdere projecten uitgewerkt, inclusief een eindproject gericht op automatisering.</li>
              </ul>
            </div>

            <div className="education">
              <h3>Master of Arts in Muziek (Cello) — Cum Laude</h3>
              <div className="date">2010 – 2013</div>
              <div className="location">Koninklijke Academie voor Schone Kunsten (KASK), Gent</div>
              <ul>
                <li>Afgestudeerd met een uitzonderlijke 20/20 jurybeoordeling.</li>
                <li>Ontving een culturele prijs van de burgemeester van Gent voor uitstekende prestaties.</li>
              </ul>
            </div>
          </section>

          {/* TECHNICAL SKILLS */}
          <section className="section">
            <h2>Technische Vaardigheden</h2>
            <div className="skill-groups">
              <div>
                <div className="skill-group-title">Cloud & AWS</div>
                <div>IAM, S3, EC2, VPC, CloudFront, Lambda (basis), CloudWatch, CloudTrail</div>
              </div>
              <div>
                <div className="skill-group-title">Beveiliging & IAM</div>
                <div>Least privilege, IAM policies en rollen, MFA, role assumption, veilige defaults</div>
              </div>
              <div>
                <div className="skill-group-title">Programmeren & Tools</div>
                <div>Python, Bash, PowerShell, Git, GitHub, Linux CLI, VS Code</div>
              </div>
              <div>
                <div className="skill-group-title">Soft Skills</div>
                <div>Communicatie, zelfstandigheid, discipline, analytisch denken, samenwerken</div>
              </div>
            </div>
          </section>

          {/* LANGUAGES */}
          <section className="section">
            <h2>Talen</h2>
            <div className="lang-list">
              <span><strong>Oekraïens:</strong> moedertaal</span>
              <span><strong>Russisch:</strong> moedertaal</span>
              <span><strong>Engels:</strong> C1</span>
              <span><strong>Nederlands:</strong> B1</span>
            </div>
          </section>

        </main>

      </div> {/* resume-content end */}

    </div>
  );
}
