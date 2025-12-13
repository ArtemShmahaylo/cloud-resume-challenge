
## Using CloudFormation

I have multiple options for IaC:
- CloudFormation
- CDK
- Terraform

I am going to use CloudFormation because its dead simple to use.

## Install Ansible

```sh
pip install boto3 botocore
pipx install --include-deps ansible
ansible-galaxy collection install amazon.aws
```

## Edit Vault

I am going to store all of my configuration in a vault
I do not have to, but just for learning I will use a vault for non-sensitive information

```sh
cd aws
ansible-vault create playbooks/vaults/prod.yml
ansible-vault edit playbooks/vaults/prod.yml
ansible-vault view playbooks/vaults/prod.yml
```

## Consideration with boto3

When trying to deploy the cloudformation template I had complaints about boto3 not being installed despite running 'pip install boto3'.

It looks as though ansible creates their own Python virtual environment

>[ERROR]: Task failed: Module failed: Failed to import the required Python library (botocore and boto3) 
on codespaces-a2f5e9's Python /usr/local/py-utils/venvs/ansible/bin/python. Please read the module 
documentation and install it in the appropriate location. If the required library is installed, but 
Ansible is using the wrong Python interpreter, please consult the documentation on ansible_python_interpreter
Origin: /workspaces/cloud-resume-challenge/aws/playbooks/deploy.yml:23:7

Whith following commands the issue was resolved:

```sh
/usr/local/py-utils/venvs/ansible/bin/python -m pip install --upgrade pip
/usr/local/py-utils/venvs/ansible/bin/python -m pip install --upgrade botocore boto3
```

## Install Deps for Ansible

```sh
ansible-galaxy collection install -r requirements.txt
```


## Prerequisites – AWS SAM CLI

This project uses AWS SAM (Serverless Application Model) for deploying the backend View Counter (Lambda + DynamoDB + HTTP API).

The AWS SAM CLI must be installed both locally and in GitHub Codespaces in order to build and deploy the backend.



Installing AWS SAM CLI (Linux / GitHub Codespaces)

Run the following commands in the terminal:

```sh
curl -Lo sam.zip https://github.com/aws/aws-sam-cli/releases/latest/download/aws-sam-cli-linux-x86_64.zip
unzip sam.zip -d sam-installation
sudo ./sam-installation/install
```

After installation, verify that SAM CLI is available:

```sh
sam --version
```

The sam binary is installed globally (typically under /usr/local/bin) and can be used from any project directory.


Installing AWS SAM CLI (Windows – Local VS Code)

On Windows, install AWS SAM CLI using winget or the official installer.

Using winget (recommended):

```bash
winget install Amazon.SAM-CLI
```

After installation, restart the terminal and verify:

```bash
sam --version
```

Required Tools

The following tools must be available in the environment:

- AWS CLI
- Docker
- Python 3.x
- AWS SAM CLI


## AWS CLI Installation (GitHub Codespaces / Linux)

AWS CLI is required for deploying backend infrastructure using AWS SAM.
It must be installed only in the environment where `sam deploy` is executed.

IMPORTANT:
AWS CLI should NOT be installed from the project root directory.
Always use a temporary system directory to avoid polluting the repository.

Correct installation steps:

1. Move to a temporary directory:
```sh
cd /tmp
```

2. Download AWS CLI installer:
```sh
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
```

3. Unzip the installer:
```sh
unzip awscliv2.zip
```

4. Install AWS CLI globally:
```sh
sudo ./aws/install
```

The installer places the `aws` binary in a global system path
(e.g. /usr/local/bin), independent of the project directory.

5. Verify installation:
```sh
aws --version
```

Expected output:
aws-cli/2.x.x Python/3.x Linux/...

Notes:
- AWS CLI installation is a system-level operation.
- Installation artifacts (zip files and folders) should never be committed.
- The project repository remains clean and unchanged.


## AWS Credentials Setup (AWS CLI)

AWS credentials are required for deploying infrastructure using AWS SAM.
Credentials are managed by AWS CLI and are NOT stored in Ansible playbooks
or committed to the repository.

Credentials must be configured only in the environment where deployment
commands are executed (e.g. GitHub Codespaces).

---

### Configure AWS credentials using a named profile

```bash
aws configure --profile prod
```

You will be prompted for the following values:

```text
AWS Access Key ID:
AWS Secret Access Key:
Default region name:
Default output format:
```

After configuration, credentials are stored locally in:

```text
~/.aws/credentials
~/.aws/config
```

These files must never be committed to the repository.

---

### Activate the AWS profile

```bash
export AWS_PROFILE=prod
```

This ensures that AWS CLI, SAM, and Ansible use the correct account and region.

---

### Verify credentials

```bash
aws sts get-caller-identity
```

Expected result:

```text
- AWS Account ID
- User or Role ARN
```

If this command succeeds, AWS authentication is correctly configured and
backend deployment via SAM is ready to proceed.

---

### Notes

- Credentials are resolved via the standard AWS SDK credential chain.
- Ansible playbooks invoking `sam` rely on AWS CLI authentication.
- No AWS credentials are defined inside playbooks or templates.
