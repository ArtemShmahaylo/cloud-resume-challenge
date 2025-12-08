import '../assets/stylesheets/pages/resume.css';
import { resumeData } from '../data/resumeData';


export default function ResumePage({ lang }) {
  const t = resumeData[lang];

  return (
    <div className="resume-container fade-in">

      <h1 className="resume-name">{t.name}</h1>
      <div className="resume-tagline">{t.tagline}</div>

      <div className="resume-content">

        <p className="profile-text">{t.profile}</p>

        <main>

          {/* WORK EXPERIENCE */}
          <section className="section">
            <h2>{lang === 'en' ? 'Work Experience' : 'Werkervaring'}</h2>

            {t.experience.map((job, index) => (
              <div className="job" key={index}>
                <h3>{job.role}</h3>
                <div className="date">{job.date}</div>
                <div className="location">{job.location}</div>
                <ul>
                  {job.bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* EDUCATION */}
          <section className="section">
            <h2>{lang === 'en' ? 'Education & Training' : 'Opleiding & Training'}</h2>

            {t.education.map((ed, index) => (
              <div className="education" key={index}>
                <h3>{ed.title}</h3>
                <div className="date">{ed.date}</div>
                <div className="location">{ed.location}</div>
                <ul>
                  {ed.bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* TECHNICAL SKILLS */}
          <section className="section">
            <h2>{lang === 'en' ? 'Technical Skills' : 'Technische Vaardigheden'}</h2>

            <div className="skill-groups">
              {t.technicalSkills.map((sg, index) => (
                <div key={index}>
                  <div className="skill-group-title">{sg.group}</div>
                  <div>{sg.items}</div>
                </div>
              ))}
            </div>
          </section>

          {/* LANGUAGES */}
          <section className="section">
            <h2>{lang === 'en' ? 'Languages' : 'Talen'}</h2>

            <div className="lang-list">
              {t.languages.map((lng, index) => (
                <span key={index}>
                  <strong>{lng.label}:</strong> {lng.level}
                </span>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
