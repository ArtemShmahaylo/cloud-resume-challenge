import ResumeEN from '../components/ResumeEN';
import ResumeNL from '../components/ResumeNL';

export default function Resume({ lang }) {
  return lang === 'en' ? <ResumeEN /> : <ResumeNL />;
}
