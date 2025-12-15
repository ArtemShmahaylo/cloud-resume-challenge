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


## December 12 – CloudFront, DNS, Budgets & Cache Invalidation

### What I worked on
- Finalized CloudFormation stack update:
  - S3 buckets split into:
    - `www.<domain>` as primary hosting bucket
    - root domain as redirect bucket
  - CloudFront distributions updated and deployed successfully.
- Configured Route53 hosted zone:
  - Alias record for root domain → CloudFront
  - Alias record for `www` → CloudFront
- Verified end-to-end flow:
  - HTTPS works
  - www / root redirect works
  - SPA routing works via CloudFront custom error responses.
- Implemented Ansible playbook for CloudFront cache invalidation (`invalidate.yml`):
  - Supports manual invalidation of `/` and `/*`
  - Designed as an on-demand operational tool (not part of default deploy flow).
- Completed AWS billing safety tasks:
  - Enabled AWS Budgets
  - Reviewed AWS Free Tier usage
  - Created billing alarms to prevent unexpected costs.

### Key decisions
- Cache invalidation kept as a separate, manual playbook:
  - Not executed on every deploy
  - Used only when cache policies or behavior require it.
- Followed best practice:
  - `index.html` → no-store
  - static assets → long-lived immutable cache

### Result
- Cloud Resume site fully live behind CloudFront
- DNS, SSL, caching, and billing safeguards correctly configured
## December 12 – Frontend Infrastructure & Backend View Counter Setup

### What I worked on
- Finalized frontend infrastructure:
  - Split S3 buckets (`www.<domain>` hosting + root redirect).
  - Updated and deployed CloudFront distributions.
  - Configured Route53 alias records for root and `www`.
  - Verified HTTPS, redirects, and SPA routing.
- Implemented CloudFront cache invalidation playbook (`invalidate.yml`):
  - Manual, on-demand usage (`/` and `/*`).
- Completed AWS billing safety setup:
  - Enabled AWS Budgets
  - Reviewed Free Tier usage
  - Created billing alarms.

- Started backend View Counter implementation:
  - Introduced AWS SAM for backend infrastructure.
  - Split templates into `frontend.yaml` and `backend-counter.yaml`.
  - Defined backend architecture:
    - DynamoDB
    - Lambda (Python)
    - API Gateway (REST).
  - Aligned SAM configuration with existing project structure.
  - Installed AWS SAM CLI in Codespaces and locally.
  - Standardized runtime to `python3.11`.
  - Added Ansible playbook to build and deploy backend via SAM.

### Key decisions
- Cache invalidation kept separate from default deploy flow.
- Backend managed exclusively via SAM + CloudFormation.
- Avoided preview runtimes shown in AWS Console.
- Preserved course project structure.

### Result
- Frontend fully live and stable behind CloudFront.
- Backend View Counter defined and ready for deployment.
- Reproducible deploy process established via Ansible.


## December 13 – Backend View Counter Deployed & Tested (AWS SAM)

### What I worked on
- Completed backend deployment for Cloud Resume Challenge using AWS SAM.
- Resolved deployment blockers:
  - Installed and configured AWS CLI in GitHub Codespaces.
  - Set up AWS credentials via AWS CLI profile.
  - Aligned SAM runtime with local Python version (python3.12).
  - Enabled managed S3 bucket for SAM deployment (`--resolve-s3`).
- Deployed backend infrastructure via Ansible + SAM:
  - DynamoDB table
  - Lambda function (Python)
  - API Gateway (REST API)
- Verified successful deployment in CloudFormation.
- Located REST API Gateway endpoint and tested it with curl:
  - Confirmed API Gateway → Lambda → DynamoDB flow.
- Reviewed REST API vs HTTP API differences compared to course setup.
- Ensured repository hygiene by ignoring `.aws-sam/` build artifacts.

### Key decisions
- Kept REST API configuration generated by SAM.
- Skipped custom domain setup for API Gateway.
- Preserved existing handler naming instead of cosmetic refactoring.
- Avoided manual configuration outside Infrastructure-as-Code.

### Result
- Backend view counter fully deployed and operational.
- Public API endpoint responding correctly.
- Backend ready for frontend integration.


## December 14–15 – Frontend ↔ Backend Integration (View Counter)

### What I worked on
- Connected the React frontend view counter to the live backend API (`API Gateway + Lambda + DynamoDB`).
- Fixed frontend logic to prevent double increments caused by React dev behavior.
- Built the production frontend bundle and deployed it to S3.
- Synced static assets with long-lived immutable caching and uploaded `index.html` with `no-store`.
- Invalidated CloudFront cache to ensure the new frontend was served immediately.
- Verified end-to-end functionality:
  - Page load triggers exactly one counter increment.
  - Counter increases by +1 on each page refresh.
  - API endpoint responds correctly in production.

### Key decisions
- Treated infrastructure (S3, CloudFront, DNS) as immutable after initial setup.
- Limited changes to frontend code and content deployment only (no CloudFormation updates).
- Kept backend and frontend deployments strictly separated.

### Result
- Fully working production website with a persistent backend-powered view counter.
- Clean, repeatable deployment flow without infrastructure churn.

# Cloud Resume Challenge - COMPLETED
