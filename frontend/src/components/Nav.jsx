import { NavLink } from "react-router-dom";
import { navData } from "../data/navData";

function Nav({ lang }) {
  const t = navData[lang] || navData.en;

  return (
    <nav className="nav">
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? "active" : ""}
      >
        {t.home}
      </NavLink>

      <NavLink 
        to="/resume" 
        className={({ isActive }) => isActive ? "active" : ""}
      >
        {t.resume}
      </NavLink>

      <NavLink 
        to="/projects" 
        className={({ isActive }) => isActive ? "active" : ""}
      >
        {t.projects}
      </NavLink>

      <NavLink 
        to="/contact" 
        className={({ isActive }) => isActive ? "active" : ""}
      >
        {t.contact}
      </NavLink>
    </nav>
  );
}

export default Nav;
