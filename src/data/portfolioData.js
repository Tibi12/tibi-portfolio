import { Award, BriefcaseBusiness, Cloud, Code2, Database, GitBranch, Mail, MapPin, Server, ShieldCheck, Workflow } from "lucide-react";

export const profile = {
  name: "Tibi Sunny",
  email: "tibisunny42@gmail.com",
  phone: "+353 892585127",
  location: "Santry, Dublin",
  github: "https://github.com/TibiSunny",
  linkedin: "https://www.linkedin.com/in/tibisunny",
  certification: "https://cp.certmetrics.com/amazon/en/public/verify/credential/ef4f1ccc775041d5b725f3f58d3e46cf"
};

export const skillGroups = [
  { label: "Backend", icon: Server, items: ["Node.js", "Express.js", "TypeScript", "Python", "Java", "Spring Boot", "REST APIs", "Microservices"] },
  { label: "AWS & Messaging", icon: Cloud, items: ["EC2", "ECS", "Lambda", "S3", "RDS", "API Gateway", "CloudWatch", "Step Functions", "SQS", "SNS", "Kafka"] },
  { label: "Data", icon: Database, items: ["MySQL", "MongoDB", "DynamoDB", "Redis"] },
  { label: "Delivery & Quality", icon: Workflow, items: ["Docker", "Kubernetes", "Jenkins", "GitLab CI/CD", "SonarQube", "Datadog", "Jest", "Mocha", "Supertest"] }
];

export const education = [
  { qualification: "MSc in Information Systems with Computing", institution: "Dublin Business School, Ireland", period: "Jan 2024 — Oct 2025" },
  { qualification: "B.Tech in Computer Science and Engineering", institution: "APJ Abdul Kalam Technological University", period: "2016 — 2020" }
];

export const projects = [
  {
    id: "sprayzapp",
    title: "SprayzApp — Mobile Vehicle Washing Platform",
    description: "Built Node.js backend APIs for service booking, payments, scheduling workflows, QuickBooks invoicing, and PWA offline support.",
    link: "https://www.sprayzapp.com/",
    linkLabel: "Visit website",
    tags: ["Node.js", "REST APIs", "Payments", "QuickBooks", "PWA"]
  },
  {
    id: "ssense",
    title: "SSENSE — E-Commerce Platform",
    description: "Developed microservices for inventory and order processing, migrated production workloads to AWS, and applied DDD and TDD practices.",
    link: "https://www.ssense.com/en-ie",
    linkLabel: "Visit website",
    tags: ["Microservices", "AWS", "DDD", "TDD"]
  },
  {
    id: "meetmind",
    title: "MeetMind — Meeting Management Platform",
    description: "Developed a full-stack meeting management application with REST APIs, SQL Server persistence, Angular, Swagger documentation, and responsive workflows.",
    link: "https://github.com/TibiSunny",
    linkLabel: "View on GitHub",
    tags: ["C#", "ASP.NET Core", "Angular", "SQL Server", "Swagger"]
  },
  {
    id: "kokos",
    title: "Kokos.ai — AI Learning Management System",
    description: "Implemented LMS backend features using Node.js, Open edX, MySQL, WebXR coding environments, and Google Teachable Machine integrations.",
    link: "https://kokos.ai/",
    linkLabel: "Visit website",
    tags: ["Node.js", "Open edX", "MySQL", "AI"]
  },
  {
    id: "nlp-research",
    title: "NLP-Based Inference on Drug Abuse News Data",
    description: "Built an NLP pipeline using Google BERT, Hugging Face Transformers, NER, text classification, prompt engineering, and RAG concepts.",
    tags: ["BERT", "NLP", "NER", "LLM"]
  }
];

export const experience = [
  {
    id: "zdistance-lab",
    role: "Software Engineer — Backend / Full Stack Developer",
    company: "ZDistance Lab, India",
    period: "Oct 2020 — Dec 2023",
    points: [
      "Designed scalable backend services and RESTful APIs using Node.js, Express.js, and TypeScript.",
      "Built distributed, event-driven systems with AWS SQS, SNS, Kafka, and Step Functions, focusing on reliability, scalability, and fault tolerance.",
      "Deployed cloud-native applications using AWS EC2, ECS, Lambda, S3, RDS, API Gateway, CloudWatch, and Step Functions.",
      "Implemented observability with structured logging, metrics, CloudWatch dashboards, Datadog monitoring, and production debugging.",
      "Improved CI/CD workflows using Jenkins, GitLab CI/CD, SonarQube, Jest, Mocha, Supertest, and automated deployments.",
      "Managed MySQL, DynamoDB, and Redis caching, and contributed to architecture decisions, design documents, API documentation, and deployment runbooks."
    ]
  },
  {
    id: "briticana-solutions",
    role: "Backend Developer — Project Experience",
    company: "Briticana Solutions, Ireland",
    period: "2025 — 2026",
    points: [
      "Developed backend microservices using Node.js and Python.",
      "Designed secure APIs with authentication, authorization, and access control.",
      "Containerized services using Docker and applied Kubernetes fundamentals for reliable development and deployment environments.",
      "Collaborated in agile teams through sprint planning, peer code reviews, technical documentation, and production deployments."
    ]
  }
];

export const services = [
  { icon: Code2, title: "Backend Engineering", text: "Scalable APIs, microservices, authentication, system design, and production-ready backend services." },
  { icon: Cloud, title: "Cloud & DevOps", text: "AWS EC2, ECS, Lambda, S3, RDS, API Gateway, CloudWatch, Step Functions, CI/CD, Docker, and production debugging." },
  { icon: ShieldCheck, title: "Reliable Delivery", text: "Secure APIs, automated testing, CI/CD quality gates, observability, and fault-tolerant production systems." },
  { icon: Workflow, title: "AI/NLP Systems", text: "BERT, Hugging Face, NER, text classification, prompt engineering, and RAG-based workflows." }
];

export const contactLinks = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", href: profile.github, icon: GitBranch },
  { label: "LinkedIn", href: profile.linkedin, icon: BriefcaseBusiness }
];

export const heroMeta = [
  { label: profile.location, icon: MapPin },
  { label: "AWS Certified Developer", icon: Award }
];
