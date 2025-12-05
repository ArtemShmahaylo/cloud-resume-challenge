# Week 2 – Journal Entry

## December 1 – React Setup with Vite

### What I worked on
- Created a new React project with Vite and reviewed the folder structure.
- Moved old HTML/CSS assets into `src/assets` and updated import paths.
- Built my first React component (`Nav.jsx`) and rendered it through `App.jsx`.
- Prepared empty page components for future React Router setup.

### Obstacles
- JSX and the React rendering flow (`index.html` → `main.jsx` → `App.jsx`) were confusing at first.
- Needed to adapt Andrew’s code to my own project structure instead of copying directly.
- Decided not to use absolute import paths yet to keep things simple.

### What I learned
- JSX is not HTML but a syntax React converts into JavaScript.
- `index.html` is just a root container; the app lives inside components.
- Vite handles JSX transformation and live reloading.
- My Cloud Resume can be cleanly modularized into React components.

### Progress Summary
Good progress: React + Vite project running, navigation converted to a component, and groundwork set for routing.


## December 5 – React Setup, Routing, and Multi-Language Structure

### What I worked on
- Added React Router and wrapped App.jsx in BrowserRouter.
- Created Home, Resume, Projects, and Contacts pages.
- Built a clean multilingual structure using lang state in App.jsx.
- Added LanguageSwitcher component and connected switching logic.
- Updated Nav and prepared it for routing.
- Fixed Vite error caused by missing index.css import.
- Organized folders into pages/ and components/ following React best practices.

### Obstacles
- Hard to follow Andrew’s fast switching between files.
- Confusion about which files belong to pages vs components.
- Vite import error after refactoring main.jsx.

### What I learned
- How React Router handles multi-page navigation.
- How to manage global state (language) at the App.jsx level.
- How to structure multilingual pages cleanly without duplicating routing.
24.09