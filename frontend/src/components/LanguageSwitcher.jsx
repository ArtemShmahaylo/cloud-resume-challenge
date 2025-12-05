export default function LanguageSwitcher({ lang, setLang }) {
  return (
    <div className="lang-switch">
      <button
        type="button"
        onClick={() => setLang('en')}
        disabled={lang === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('nl')}
        disabled={lang === 'nl'}
      >
        NL
      </button>
    </div>
  )
}
