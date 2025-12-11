
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