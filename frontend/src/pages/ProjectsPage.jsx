import '../assets/stylesheets/pages/projects.css';
import { projectsData } from '../data/projectsData';

export default function ProjectsPage({ lang }) {
  const t = projectsData[lang];

  return (
    <div className="page-container fade-in">

      <h1 className="page-title">{t.title}</h1>
      <div className="page-tagline">{t.tagline}</div>

      <div className="page-content">
        <main>

          {t.projects.map((project, index) => (
            <section key={index} className="section">
              <h2>{project.sectionTitle}</h2>

              <div className="project">
                <h3>{project.projectTitle}</h3>
                <div className="date">{project.date}</div>

                <ul>
                  {project.bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="badge-list">
                  {project.badges.map((badge, i) => (
                    <span className="badge" key={i}>
                      <a href={badge.url} target="_blank">{badge.label}</a>
                    </span>
                  ))}
                </div>

              </div>
            </section>
          ))}

        </main>
      </div>

    </div>
  );
}
