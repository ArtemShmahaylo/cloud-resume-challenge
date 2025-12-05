import ProjectsEN from '../components/ProjectsEN';
import ProjectsNL from '../components/ProjectsNL';

export default function Projects({ lang }) {
  return lang === 'en' ? <ProjectsEN /> : <ProjectsNL />;
}
