import '../assets/stylesheets/pages/contacts.css';
import { contactsData } from '../data/contactsData';

export default function ContactsPage({ lang }) {
  const t = contactsData[lang];

  return (
    <div className="page-container fade-in">

      <h1 className="page-title">{t.title}</h1>
      <div className="page-tagline">{t.tagline}</div>

      <div className="page-content">
        <main>

          {/* CONTACT INFORMATION SECTION */}
          <section className="section">
            <h2>{t.contactSectionTitle}</h2>

            <div className="contact-block">
              {t.contact.map((item, index) => (
                <p key={index}>
                  <strong>{item.label}:</strong>{" "}
                  {item.url ? (
                    <a href={item.url} target="_blank">{item.value}</a>
                  ) : (
                    item.value
                  )}
                </p>
              ))}
            </div>
          </section>

          {/* ABOUT WEBSITE SECTION */}
          <section className="section">
            <h2>{t.aboutSectionTitle}</h2>

            {t.aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

        </main>
      </div>

    </div>
  );
}
