# Week 1 – Journal Entry

## November 23–24 – Git History Fix & Local Environment Setup

### What I worked on
- Investigated how commit amending works in github.dev.
- Discovered that github.dev does not allow rewriting commit history through the UI.
- Set up a local VS Code environment and cloned the repository.
- Rewrote the last three commits locally using `git reset --soft` and pushed the corrected history.

### Obstacles
- Expected github.dev to support amend commit workflows, but it does not.
- Needed to switch to local VS Code to apply the proper Git commands.

### What I learned
- github.dev is limited for advanced Git operations.
- Rewriting commit history must be done locally (or through Codespaces).
- Local VS Code is the correct environment for professional Git workflows.

### Progress Summary
Cleaned up commit history, configured local environment, and now have a much smoother workflow for future development.


## November 25 – HTML Review & README Update

### What I worked on
- Reviewed the generated HTML resume and started planning the refactor.
- Added a short “HTML Adjustments” section to my README to document decisions:
  - Use UTF-8 for multi-language support (EN/NL)
  - Add mobile viewport tag
  - Keep styles inline for now and extract later
  - Simplify CSS selectors once structure stabilises

### Obstacles
- Unsure how much refactoring Andrew expects at this stage.
- Needed clarity on when to extract CSS and when to keep markup simple.

### What I learned
- Early HTML does not need to be perfect; clarity and minimalism matter more.
- Documenting intent in README helps keep the project organized and maintainable.

### Progress summary
Small but steady progress today — clarified the frontend refactor plan and updated project documentation.


## November 26 – README Updates & Project Review

### What I worked on
- Continued updating the README to match Andrew’s style and document my frontend process.
- Added sections describing generated HTML, refactoring decisions, screenshots, and AI involvement.

### Obstacles
- Unsure how detailed the README should be at this stage and whether my documentation is becoming too long.
- Needed clarity on whether to include all screenshots or only selected examples.

### What I learned
- README can be verbose during development; the final professional cleanup will happen after the frontend is complete.
- Only 1–2 screenshots belong in README, while the full set can be stored in the documentation folder.
- Andrew’s “document everything” applies mainly to journal notes, not the final README structure.

### Progress Summary
Small but steady progress: expanded README, clarified documentation strategy, and prepared for the upcoming HTML refactor stage.


## November 27 – Static Server Setup & CSS Refactor

### What I worked on
- Watched part of the “Static Web Server and Basic Styling” video
- Created `assets/stylesheets/` and moved CSS into `style.css`
- Linked the external stylesheet from `index.html` and removed inline styles
- Fixed HTML indentation after the refactor
- Tested the site locally with `http-server` (Codespaces/local)

### Obstacles
- Very low energy after a difficult workday
- Needed time to understand how Codespaces + local static server fit into the workflow
- Had to manually correct indentation after moving styles

### What I learned
- How to serve a static website using `http-server`
- How to structure frontend assets (`public/assets/stylesheets`) for a cleaner project
- Quick ways to adjust indentation in VS Code

### Progress Summary
Small but solid step: external CSS is working, project structure is cleaner, and the static server setup is ready for the next styling changes.


## November 29 – Navigation Bar & Page Structure Setup

### What I worked on
- Added the navigation bar (`<nav>`) at the top of the page following Andrew’s structure.
- Updated the HTML layout so the site can expand into a multi-page format later.
- Confirmed CSS linking and styling for the navigation bar.

### Obstacles
- Needed clarity on where exactly to place the navigation block inside the HTML.
- Ensured that adding navigation did not break existing layout or language switching.

### What I learned
- Navigation bars should always be placed at the top of the `<body>` for multi-page websites.
- Internal anchor links (`#resume`, `#projects`, etc.) work as placeholders until real pages are created.
- Andrew’s approach uses a multi-page layout, so preparing the structure now is the right step.

### Progress Summary
Solid progress: navigation bar implemented, HTML structure aligned with Andrew’s project format, and the site is ready for future pages (Resume, Projects, Contact).




