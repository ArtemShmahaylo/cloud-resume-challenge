# Week 3

## December 8 – Frontend Refactor: Styles, Animations, and Data Cleanup

### What I worked on
- Added proper page-specific CSS for Projects and Contacts; updated imports so each page uses its own styles.
- Moved fade-in logic to `default.css` and enabled global animations across all pages.
- Cleaned HomePage layout: fixed top spacing, improved photo cropping and scaling.
- Converted ContactsPage to a data-driven structure using `contactsData.js`.
- Restarted Vite to clear cached imports and remove ghost file errors.

### Obstacles
- HomePage spacing issues caused by mixed CSS sources.
- Fade-in duplication between Home and global styles.
- Contacts page initially broke due to mismatched data structure.
- Old Vite cache kept referencing deleted files.

### What I learned
- Global animations belong in `default.css` for consistency.
- Page-specific CSS keeps the architecture clean and scalable.
- Data-driven pages simplify multilingual updates.
- Many Vite errors are cache-related, not code-related.

### Next steps
- Improve HomePage visuals (portrait, buttons, spacing).
- Begin breaking Resume into smaller components as Andrew suggests.
- Continue following the frontend refactor lessons.
