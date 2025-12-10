import '../assets/stylesheets/pages/home.css';
import { homeData } from '../data/homeData';
import profilePhoto from '../assets/images/profile_photo.jpg';
import ViewCounter from "../components/ViewCounter";

export default function HomePage({ lang }) {
  const t = homeData[lang];

  return (
    <div className="home-container">

      {/* View Counter */}
      <ViewCounter />

      <h1 className="home-name fade-in">{t.name}</h1>

      <div className="photo-wrapper fade-in">
        <img 
          src={profilePhoto} 
          alt="Artem Shmahaylo" 
          className="home-photo"
        />
      </div>

      {/* Tagline */}
      <div className="home-tagline fade-in">{t.tagline}</div>

      {/* Intro paragraphs */}
      <div className="home-intro fade-in">
        {t.intro.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      {/* Buttons */}
      <div className="home-buttons fade-in">
        {t.buttons.map((btn, index) => (
          <a key={index} className="home-btn" href={btn.link}>
            {btn.label}
          </a>
        ))}
      </div>

    </div>
  );
}
