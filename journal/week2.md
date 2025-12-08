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


## December 6 – Resume Pages, Multilanguage Setup & Project Pages

### What I worked on
- Added full EN and NL versions of the Resume page using separated components.
- Improved layout formatting: centered container with left-aligned content for a professional CV look.
- Implemented EN/NL versions for the Projects page, including links to GitHub and video.
- Implemented EN/NL versions of the Contact page.
- Updated navigation to correctly highlight active pages.
- Restored README after accidental overwrite and added documentation for React/Vite setup.

### Obstacles
- Lost the entire README due to automatic Vite overwrite and had to recover it from Git history.
- Difficulties understanding where each component belongs in the React structure.
- Layout and CSS alignment required multiple adjustments to achieve correct positioning.

### What I learned
- GitHub's file history can restore deleted or overwritten files.
- React pages should stay minimal, while real content belongs in components.
- Central container + left-aligned text creates a clean, readable resume layout.
- Multi-language architecture is clearer and easier when components are fully separated.

### Progress Summary
Major progress today: resume, projects, and contact pages are fully working in both languages, navigation is stable, layout is professional, and documentation has been restored and updated. The project is now ready to proceed with further frontend refinement and backend integration.


## December 7 – Frontend Refactor: Data, Pages, and Home Layout

### What I worked on
- Continued refactoring the Cloud Resume Challenge frontend following Andrew’s video.
- Split global and page-specific CSS:  
  - `default.css` now holds global styles.  
  - Created `/stylesheets/pages/*` for resume, projects, contacts, home.  
- Fixed broken import paths caused by Vite and deeply nested folder structure.
- Created new data file structure (`/data/resumeData.js`, `/data/homeData.js`) to separate content from layout.
- Fully migrated Resume page to use data-driven rendering (`ResumePage.jsx`).
- Rebuilt Projects and Contacts pages using the same architecture.
- Implemented Home page structure with dynamic text, image import, and fade-in animations.

### Obstacles
- Vite repeatedly threw `Unexpected token` errors because of incorrect import paths.
- Webstorm/Codespaces cached old file lengths, causing “offset longer than source length” crash.
- The resume page initially failed due to incorrect relative paths to `/data`.
- Needed to manually fix CSS imports for every page to ensure styles loaded correctly.

### What I learned
- Structuring React pages using data files drastically simplifies translation and content updates.
- Vite import paths must be exact — one wrong `../` breaks everything.
- Moving all raw text into `/data` keeps components clean and future-proof.
- Even simple pages (Contacts, Projects) benefit immediately from data-driven rendering.
- Adding animation (`fade-in`) creates a more polished and professional user experience with minimal code.

### Next steps
- Improve Home page visual design (photo cropping, layout, button design).
- Add proper image assets and finalize profile portrait.
- Expand `homeData.js` and unify design across all pages.