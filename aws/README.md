# Backend – View Counter API

## Overview
This backend implements a persistent view counter for the Cloud Resume Challenge.
It is built as a serverless API using AWS-managed services and exposes a single HTTP endpoint consumed by the frontend.
The backend is intentionally kept minimal, stateless, and cost-efficient.

---

## Architecture
The backend consists of the following AWS services:
- **API Gateway (REST API, Prod stage)**  
  Exposes the `/counter` endpoint.
- **AWS Lambda (Python)**  
  Handles read, increment, and reset operations.
- **Amazon DynamoDB (on-demand)**  
  Stores the counter value using a single-item table.
- **Custom API Domain**  
  Managed via Route53 and ACM for a clean, production-style endpoint.

---

## Infrastructure as Code
Backend infrastructure is defined using **AWS SAM** (Serverless Application Model),
which is based on CloudFormation.

Reasons for choosing SAM:
- Native CloudFormation integration
- Simple syntax for serverless resources
- No additional abstraction layer

Infrastructure deployment is wrapped with **Ansible** for consistency with the rest of the project.

---

## Deployment Flow
Backend deployment is performed using AWS SAM:
```bash
sam build
sam deploy
```

Deployment requires valid AWS credentials provided via AWS CLI.
No credentials are stored in templates or playbooks.

---

## AWS Authentication
Authentication is handled via the standard AWS CLI credential chain.

Recommended setup:
```bash
aws configure --profile prod
export AWS_PROFILE=prod
```

Verification:
```bash
aws sts get-caller-identity
```

If this command succeeds, backend deployment is authorized.

---

## Configuration Management
Ansible Vault is used to store non-sensitive configuration values
(e.g. resource identifiers).

Secrets such as AWS access keys are never committed
and are resolved exclusively via AWS CLI.

---

## API Endpoints

Primary endpoint (custom domain)
```
https://api.artemshmahaylo.com/counter
```

Fallback endpoint (AWS invoke URL)
```
https://<api-id>.execute-api.us-east-1.amazonaws.com/Prod/counter
```

---

## API Usage

**Get current counter value**
```bash
curl https://api.artemshmahaylo.com/counter
```

Response:
```json
{"count": 0}
```

**Increment counter**
```bash
curl -X POST https://api.artemshmahaylo.com/counter
```

**Reset counter**
```bash
curl -X DELETE https://api.artemshmahaylo.com/counter
```

---

## Custom Domain Configuration
Custom domain is configured directly in API Gateway (Regional endpoint).
TLS certificate is issued via AWS Certificate Manager in us-east-1.
DNS alias record is managed in Route53.

The custom domain is intentionally not managed by SAM
to avoid coupling DNS and edge configuration with core backend infrastructure.

The default AWS invoke URL is preserved as a fallback.

---

## Design Decisions
- Serverless-first: no persistent compute resources.
- Strict separation between frontend and backend deployments.
- Infrastructure created once, code updated independently.
- Custom domain managed outside SAM for operational simplicity.

---

## Notes
- Backend deployment does not affect frontend infrastructure.
- No CloudFormation updates are required after initial backend setup.
- The backend is fully production-ready and cost-safe.