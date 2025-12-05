import ContactsEN from '../components/ContactsEN';
import ContactsNL from '../components/ContactsNL';

export default function Contacts({ lang }) {
  return lang === 'en' ? <ContactsEN /> : <ContactsNL />;
}
