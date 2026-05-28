import React from "react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const skills = [
  "JavaScript", "TypeScript", "Node.js", "Express.js", "React", "Angular", "Python", "Java", "C#", ".NET",
  "Spring Boot", "REST APIs", "Microservices", "AWS", "Docker", "CI/CD", "MySQL", "MongoDB", "DynamoDB", "Redis"
];

const projects = [
  {
    title: "SprayzApp — Mobile Vehicle Washing Platform",
    description: "Built backend APIs for booking, payments, scheduling workflows, QuickBooks invoicing, and PWA offline support.",
    tags: ["Node.js", "APIs", "Payments", "PWA"]
  },
  {
    title: "SSENSE — E-Commerce Platform",
    description: "Developed inventory and order processing services using microservices, AWS migration, DDD, and TDD practices.",
    tags: ["Microservices", "AWS", "DDD", "TDD"]
  },
  {
    title: "Kokos.ai — AI Learning Management System",
    description: "Implemented LMS backend features using Node.js, Open edX, MySQL, WebXR coding environments, and ML workflow integrations.",
    tags: ["Node.js", "Open edX", "MySQL", "AI"]
  },
  {
    title: "NLP-Based Inference on Drug Abuse News Data",
    description: "Built an NLP pipeline using BERT, Hugging Face Transformers, NER, text classification, prompt engineering, and RAG concepts.",
    tags: ["BERT", "NLP", "NER", "LLM"]
  }
];

const experience = [
  {
    role: "Software Engineer — Backend / Full Stack Developer",
    company: "ZDistance Lab, India",
    period: "Oct 2020 — Dec 2023",
    points: [
      "Designed scalable backend services and RESTful APIs using Node.js, Express.js, and TypeScript.",
      "Built distributed systems with reliability, scalability, and fault tolerance in mind.",
      "Deployed cloud-native applications on AWS Lambda, ECS, S3, RDS, and API Gateway.",
      "Improved CI/CD workflows using Jenkins, GitLab CI, SonarQube, and automated testing."
    ]
  },
  {
    role: "Backend Developer — Project Experience",
    company: "Briticana Solutions, Ireland",
    period: "2025 — 2026",
    points: [
      "Developed backend microservices using Node.js and Python.",
      "Designed secure APIs with authentication, authorization, and access control.",
      "Containerized services using Docker for reliable development and deployment environments."
    ]
  }
];

const services = [
  { icon: "⚙️", title: "Backend Engineering", text: "Scalable APIs, microservices, authentication, system design, and production-ready backend services." },
  { icon: "☁️", title: "Cloud & DevOps", text: "AWS deployments, CI/CD pipelines, Docker, monitoring, logging, and production debugging." },
  { icon: "💻", title: "Full Stack Development", text: "Modern React and Angular frontends integrated with secure backend systems." },
  { icon: "🤖", title: "AI/NLP Systems", text: "BERT, Hugging Face, NER, text classification, prompt engineering, and RAG-based workflows." }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_30%)]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#home" className="text-xl font-bold tracking-tight">Tibi Sunny</a>
        <nav className="hidden gap-8 text-sm text-zinc-300 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <Button asChild className="rounded-2xl">
          <a href="mailto:tibisunny42@gmail.com">Hire Me</a>
        </Button>
      </header>

      <main className="relative z-10">
        <section id="home" className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-4 inline-flex rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-sm text-emerald-300">
              Backend / Full Stack Software Engineer · AWS Certified Developer
            </p>
            <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Building scalable web systems, cloud APIs, and AI-powered products.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              I’m a Dublin-based software engineer with 3+ years of experience building backend services, distributed web applications, REST APIs, microservices, and cloud-native systems using Node.js, TypeScript, React, Python, Java, and AWS.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-2xl">
                <a href="#projects">View Projects →</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-2xl border-zinc-700 bg-transparent text-white hover:bg-zinc-900">
                <a href="mailto:tibisunny42@gmail.com">Contact Me</a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-zinc-400">
              <span className="flex items-center gap-2">📍 Santry, Dublin</span>
              <span className="flex items-center gap-2">✉️ tibisunny42@gmail.com</span>
              <span className="flex items-center gap-2">📞 +353 892585127</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <Card className="rounded-[2rem] border-zinc-800 bg-zinc-900/70 shadow-2xl backdrop-blur">
              <CardContent className="p-8">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-400">Current focus</p>
                    <h2 className="mt-1 text-2xl font-semibold text-white">Cloud, APIs & AI Engineering</h2>
                  </div>
                  <span className="text-4xl">🏆</span>
                </div>
                <div className="grid gap-4">
                  <Metric label="Experience" value="3+ Years" />
                  <Metric label="Cloud" value="AWS Lambda · ECS · S3 · RDS" />
                  <Metric label="Architecture" value="REST APIs · Microservices · Event Driven" />
                  <Metric label="Databases" value="MySQL · MongoDB · DynamoDB · Redis" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">What I do</p>
            <h2 className="mt-3 text-4xl font-bold">I design and build reliable software systems.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {services.map((item) => (
              <Card key={item.title} className="rounded-3xl border-zinc-800 bg-zinc-900/70">
                <CardContent className="p-6">
                  <span className="mb-5 block text-3xl">{item.icon}</span>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Skills</p>
              <h2 className="mt-3 text-4xl font-bold">Tech Stack</h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-300">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Career</p>
            <h2 className="mt-3 text-4xl font-bold">Professional Experience</h2>
          </div>
          <div className="grid gap-6">
            {experience.map((job) => (
              <Card key={job.role} className="rounded-3xl border-zinc-800 bg-zinc-900/70">
                <CardContent className="p-7">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{job.role}</h3>
                      <p className="mt-1 text-zinc-400">{job.company}</p>
                    </div>
                    <p className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300">{job.period}</p>
                  </div>
                  <ul className="mt-6 grid gap-3 text-zinc-300 md:grid-cols-2">
                    {job.points.map((point) => (
                      <li key={point} className="leading-7">• {point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Selected Work</p>
            <h2 className="mt-3 text-4xl font-bold">Projects</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.title} className="group rounded-3xl border-zinc-800 bg-zinc-900/70 transition hover:-translate-y-1 hover:bg-zinc-900">
                <CardContent className="p-7">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <span className="text-3xl">🗄️</span>
                    <span className="text-zinc-500 transition group-hover:text-white">↗</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 leading-7 text-zinc-400">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">{tag}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
          <Card className="rounded-[2rem] border-zinc-800 bg-zinc-900/80">
            <CardContent className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Contact</p>
                <h2 className="mt-3 text-4xl font-bold text-white">Let’s build something scalable.</h2>
                <p className="mt-4 max-w-2xl text-zinc-400">
                  I’m open to backend, full stack, cloud, and AI-focused engineering opportunities in Ireland and remote teams.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="rounded-2xl">
                  <a href="mailto:tibisunny42@gmail.com">✉️ Email</a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl border-zinc-700 bg-transparent text-white hover:bg-zinc-900">
                  <a href="https://github.com/TibiSunny" target="_blank" rel="noreferrer">GitHub</a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl border-zinc-700 bg-transparent text-white hover:bg-zinc-900">
                  <a href="https://linkedin.com/in/tibisunny" target="_blank" rel="noreferrer">LinkedIn</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
      <p className="text-sm text-zinc-500">{label}</p>
      <p className="mt-1 font-medium text-zinc-100">{value}</p>
    </div>
  );
}
