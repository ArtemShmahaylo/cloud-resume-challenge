export default function Home({ lang }) {
  return (
    <section id="home">
      {lang === 'en' ? (
        <>
          <h1>Welcome</h1>
          <p>This is the home page of my Cloud Resume React app.</p>
        </>
      ) : (
        <>
          <h1>Welkom</h1>
          <p>Dit is de startpagina van mijn Cloud Resume React app.</p>
        </>
      )}
    </section>
  )
}
