
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

--------------------------------------------------

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

--------------------------------------------------

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

--------------------------------------------------

Required Tools

The following tools must be available in the environment:

- AWS CLI
- Docker
- Python 3.x
- AWS SAM CLI

