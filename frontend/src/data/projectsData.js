export const projectsData = {
  en: {
    title: "Projects",
    tagline: "Portfolio of Cloud & Python Engineering Work",

    projects: [
      {
        sectionTitle: "Cloud Resume Challenge",
        projectTitle: "Multi-language Cloud Resume hosted on AWS",
        date: "2025",
        bullets: [
          "Built a full multi-language resume website using HTML → React → AWS.",
          "Hosted via Amazon S3 + CloudFront with HTTPS using AWS Certificate Manager.",
          "Implemented visitor counter using Lambda & DynamoDB.",
          "Fully automated CI/CD pipeline using GitHub Actions."
        ],
        badges: [
          {
            label: "GitHub Repository",
            url: "https://github.com/ArtemShmahaylo/cloud-resume-challenge"
          },
        ]
      },

      {
        sectionTitle: "AWS Configuration Automation Tool (Python)",
        projectTitle: "CLI Tool for Generating AWS JSON Configurations",
        date: "2025",
        bullets: [
          "Created a modular CLI that outputs ready-to-use JSON templates for S3, EC2 and Lambda.",
          "Implements secure AWS defaults and IAM best practices.",
          "Added automatic testing using pytest and mocked AWS calls via moto."
        ],
        badges: [
          {
            label: "GitHub (Project Section)",
            url: "https://github.com/me50/ArtemShmahaylo#aws-configuration-automation-tool"
          },
          {
            label: "YouTube Demo",
            url: "https://youtu.be/rJxdXfjxMkM"
          }
        ]
      }
    ]
  },

  nl: {
    title: "Projecten",
    tagline: "Portfolio van Cloud & Python Engineering Werk",

    projects: [
      {
        sectionTitle: "Cloud Resume Challenge",
        projectTitle: "Meertalig Cloud CV gehost op AWS",
        date: "2025",
        bullets: [
          "Volledige website gebouwd (HTML → React → AWS) met twee talen.",
          "Gehost via Amazon S3 + CloudFront met HTTPS en AWS Certificate Manager.",
          "Bezoekerscounter geïmplementeerd met Lambda & DynamoDB.",
          "Geautomatiseerde CI/CD pipeline via GitHub Actions."
        ],
        badges: [
          {
            label: "GitHub Repository",
            url: "https://github.com/ArtemShmahaylo/cloud-resume-challenge"
          },
        ]
      },

      {
        sectionTitle: "AWS Configuratie Automatisering Tool (Python)",
        projectTitle: "CLI-tool voor het genereren van AWS JSON-configuraties",
        date: "2025",
        bullets: [
          "Modulaire CLI-tool die JSON-sjablonen genereert voor S3, EC2 en Lambda.",
          "Implementeert veilige AWS-standaarden en IAM best practices.",
          "Automatische tests met pytest en gesimuleerde AWS-calls via moto."
        ],
        badges: [
          {
            label: "GitHub (Project Sectie)",
            url: "https://github.com/me50/ArtemShmahaylo#aws-configuration-automation-tool"
          },
          {
            label: "YouTube Demo",
            url: "https://youtu.be/rJxdXfjxMkM"
          }
        ]
      }
    ]
  }
};
