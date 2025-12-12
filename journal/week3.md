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


## December 10 – Mobile Styling, View Counter, and Project Cleanup

### What I worked on
- Finished implementing **mobile responsiveness** across all pages (Home, Resume, Projects, Contacts).
- Fixed multiple layout issues: centered profile photo, improved text alignment, normalized spacing on mobile.
- Added a working **View Counter component** with state updates and live interaction.
- Replaced the old Python mock API with a clean **Vite mock server**, fully compatible with local dev and Codespaces.
- Cleaned up the project by removing unnecessary backend files, deprecated env configs, and unused mock scripts.
- Simplified environment handling and ensured consistent project behavior across environments.

### Obstacles
- Codespaces proxy repeatedly broke connections to the Python mock server, causing HTML/JSON parsing errors.
- CORS issues and port forwarding conflicts wasted significant time before switching to the Vite mock solution.
- Needed to refactor configuration and deeply understand Vite’s dev server pipeline to enable clean mock routing.

### Next Steps
- Prepare the frontend for integration with **AWS API Gateway + Lambda**.
- Add production-ready environment switching.
- Continue with the next video in Cloud Resume Challenge.


## December 11 – Domain Setup, Ansible, CloudFormation, and First IaC Deployment

### What I worked on
- Purchased a custom domain and configured DNS using **Route53 hosted zone**.
- Connected the domain registrar to AWS by updating name servers.
- Decided to deploy the project on the **main AWS account** (non–free tier) for a realistic setup.
- Created an initial **CloudFormation template** to provision an S3 bucket.
- Built the **Ansible project structure** for Infrastructure as Code.
- Implemented an **Ansible playbook** to deploy and update CloudFormation stacks.
- Configured **ansible-vault** to securely store AWS credentials.
- Added a deploy wrapper script to simplify execution.
- Successfully deployed the first AWS resource (S3 bucket) via **Ansible + CloudFormation**.
- Resolved Git branch divergence and manually fixed a merge conflict using rebase.

### Obstacles
- Significant incompatibilities between the course material and modern versions of Ansible and amazon.aws modules.
- Deprecated and mutually exclusive CloudFormation parameters caused repeated task failures.
- Codespaces used a restricted Python environment for Ansible, breaking boto3/botocore imports.
- Required deep debugging to identify the correct Ansible Python venv and manually upgrade pip and AWS SDK packages.
- Git rebase exposed a merge conflict in the frontend that had to be resolved manually.

### Next Steps
- Extend the CloudFormation template with S3 website hosting and access policies.
- Continue with the next Cloud Resume Challenge video.
- Move toward CloudFront integration and public site delivery.
