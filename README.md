# Cloud Resume Challenge – Artem Shmahaylo

This project is my implementation of the **Cloud Resume Challenge**, designed to demonstrate practical cloud, DevOps, and frontend skills using AWS.
The result is a production-ready resume website with a serverless backend view counter, deployed using Infrastructure as Code and modern frontend tooling.

---

## Live URLs
- **Website**  
  https://www.artemshmahaylo.com
- **Backend API (custom domain)**  
  https://api.artemshmahaylo.com/counter

---

## Architecture Overview
The project is split into three clearly separated layers:

### Frontend
- Static website built with **React + Vite**
- Hosted on **Amazon S3**
- Served globally via **Amazon CloudFront**
- EN / NL language support
- Backend-powered view counter

### Backend
- **API Gateway (REST API)**
- **AWS Lambda (Python)**
- **Amazon DynamoDB (on-demand)**
- Custom API domain via **Route53 + ACM**
- Fully serverless, stateless design

### Infrastructure & Operations
- **AWS SAM** for backend infrastructure
- **CloudFormation** for core infrastructure
- **Ansible** for deployment orchestration
- **Ansible Vault** for non-sensitive configuration
- Manual cache invalidation for CloudFront

---

## Repository Structure
```
cloud-resume-challenge/
├── aws/
│ ├── .aws-sam/ # SAM build artifacts (should not be committed)
│ ├── bin/ # helper scripts
│ │ ├── deploy
│ │ ├── deploy-backend-counter
│ │ ├── invalidate
│ │ ├── upload
│ │ └── counter/
│ │ ├── get
│ │ ├── post
│ │ └── delete
│ ├── function/ # Lambda source for the counter
│ │ ├── handler.py
│ │ └── requirements.txt
│ ├── playbooks/
│ │ ├── deploy.yml
│ │ ├── deploy-backend-counter.yml
│ │ ├── invalidate.yml
│ │ ├── upload.yml
│ │ └── vaults/
│ │ └── prod.yml
│ ├── vars/
│ │ └── parameters.yml
│ ├── backend-counter.yaml # SAM template (backend counter)
│ ├── frontend.yaml # CloudFormation template (frontend infra)
│ ├── requirements.txt # Ansible collections requirements
│ └── README.md # AWS/IaC/deploy docs
│
├── frontend/
│ ├── public/
│ │ └── index.html
│ ├── src/
│ │ ├── components/
│ │ ├── data/
│ │ ├── pages/
│ │ └── assets/
│ ├── docs/ # screenshots + reference docs
│ ├── dist/ # build output (generated)
│ ├── node_modules/ # dependencies (generated, not committed)
│ ├── README.md
│ ├── package.json
│ └── vite.config.js
│
├── journal/
│ ├── week1.md
│ ├── week2.md
│ └── week3.md
│
└── README.md # this file
```

---

## Deployment Model
This project follows a **strict separation between infrastructure and code**.

### Infrastructure
- Created once using CloudFormation / SAM
- Not redeployed unless infrastructure changes are required

### Frontend Code
- Built into static assets
- Uploaded to S3
- CloudFront cache invalidated manually when needed

### Backend Code
- Built and deployed using AWS SAM
- Infrastructure and code updates handled independently from frontend

---

## Key Design Decisions
- **Serverless-first architecture** to minimize cost and operational overhead
- **Immutable infrastructure** after initial provisioning
- **Canonical domain strategy** (`www` as primary, root domain redirect)
- **Custom API domain managed outside SAM** to avoid DNS and edge coupling
- **Clear separation of frontend and backend responsibilities**

---

## Documentation
Each part of the project is documented separately:
- **Frontend documentation**  
  See [Frontend](./frontend/README.md)
- **Backend documentation**  
  See [Backend](./aws/README.md)

---

## Purpose
This project demonstrates:
- Practical AWS usage beyond tutorials
- Infrastructure-as-Code discipline
- Understanding of caching, CDN behavior, and deployment workflows
- Ability to design and operate a small production-grade system end to end

---

## Status
Cloud Resume Challenge — **Completed**
