# Frontend – Cloud Resume Website

## Overview
The frontend is a static, single-page web application that presents my resume and projects.
It is built as part of the Cloud Resume Challenge and deployed as a static site behind Amazon CloudFront.
The frontend consumes a backend API to display a persistent view counter.

The application supports **multiple languages (EN / NL / UA)** with language-aware navigation and routing,
while keeping all user-facing text separated from UI components.

---

## Resume Format Considerations
Living and applying for jobs in Belgium imposes specific CV conventions.
A typical Belgian CV is expected to include:
- Photo
- Date of birth
- Nationality
- Full address
- Email address
- Mobile phone number
- LinkedIn profile
- GitHub profile
- Short professional summary (2–3 sentences)
- Work experience
- Education
- Hard and soft skills

To align with these expectations, the **Europass CV format** was chosen as a reference.

Reference document:
![](./docs/Europass_CV_Page_1.jpg)
![](./docs/Europass_CV_Page_2.jpg)

---

## Initial HTML Generation
As a starting point, an initial HTML draft was generated using GenAI to speed up the process.

Generation goals:
- English and Dutch language support (EN/NL)
- Minimalist HTML structure
- Inline CSS (no frameworks)
- Belgian CV conventions
- Simple JavaScript language switcher
- UTF-8 encoding
- Responsive viewport
- Clean and minimal CSS selectors

The generated HTML served only as a draft and reference.

---

## Manual HTML Refactor
The generated output was fully refactored manually to meet quality and maintainability standards.

Refactor included:
- Complete rewrite of the HTML structure
- Semantic sectioning
- Bilingual EN/NL support
- Accessibility improvements
- Minimal, readable CSS
- JavaScript-based language switcher
- Removal of irrelevant or non-cloud-related content
- Alignment with Cloud Resume Challenge requirements

The final `index.html` represents my own refactored work based on an AI-generated draft.

---

## Local Static Development
To work with external stylesheets and test changes locally, the site can be served as a static website.
This is optional for local development but useful in cloud-based environments such as GitHub Codespaces.

### Local static server
```bash
npm install -g http-server
cd frontend
http-server
```

By default, the server exposes the current directory over HTTP.
Frontend Framework Choice
After the initial static HTML phase, the frontend was migrated to a modern component-based setup.
Technologies used:
* React for component-based UI
* Vite for fast development and optimized builds
* React Router for client-side routing
* Language-aware routing and navigation (EN / NL / UA)
* Separation of content and presentation via language-specific data files
All user-facing text, including section titles and navigation labels, is stored in structured data files. This keeps components clean and makes adding new languages straightforward.
Project Structure
```
├── frontend/
│ ├── public/
│ │ └── index.html
│ ├── src/
│ │ ├── components/
│ │ ├── data/        # language-specific content (EN / NL / UA)
│ │ ├── pages/
│ │ └── assets/
│ ├── docs/          # screenshots + reference docs
│ ├── dist/          # build output (generated)
│ ├── node_modules/  # dependencies (generated, not committed)
│ ├── README.md
│ ├── package.json
│ └── vite.config.js
```

Frontend Setup

Create React project using Vite
```
npm create vite@latest
cd frontend
npm install
```

Install React Router
```
npm install react-router-dom
```

Enable routing
main.jsx:
```
<BrowserRouter>
  <App />
</BrowserRouter>
```

App.jsx:
```
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/resume" element={<Resume />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

Run development server
```
npm run dev
```

## Production Build and Deployment

The frontend is built into static assets and deployed to Amazon S3.

**Deployment flow:**
1. Build the production bundle with Vite
2. Sync generated assets to S3
3. Invalidate CloudFront cache

Infrastructure is provisioned once; frontend updates are deployed independently.

## Summary

The frontend combines a clean resume presentation with modern tooling and a clear separation of concerns. React and Vite provide a lightweight and maintainable setup, while CloudFront ensures fast global delivery. The result is a production-ready static site with multilingual support and a dynamic backend-powered view counter.