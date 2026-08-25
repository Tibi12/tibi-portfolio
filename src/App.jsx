import { ArrowUpRight, Award, Download } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "./assets/hero.png";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import SkillGroups from "./components/SkillGroups";
import { contactLinks, education, experience, heroMeta, profile, projects, services, skillGroups } from "./data/portfolioData";

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="service-card rounded-3xl border-zinc-800 bg-zinc-900/70">
      <div className="p-6">
        <Icon className="service-icon mb-5" size={25} strokeWidth={1.5} aria-hidden="true" />
        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{service.text}</p>
      </div>
    </article>
  );
}

function EducationSection() {
  return (
    <section id="education" className="content-section w-full px-6 py-20 lg:px-12">
      <div className="section-heading mb-10">
        <p className="eyebrow"><span /> Education & credentials</p>
        <h2 className="mt-3 text-4xl font-bold">The foundation behind the work.</h2>
      </div>
      <div className="education-grid grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="timeline">
          {education.map((item) => (
            <div className="timeline-item" key={item.qualification}>
              <span className="timeline-marker" />
              <div><p className="timeline-period">{item.period}</p><h3>{item.qualification}</h3><p>{item.institution}</p></div>
            </div>
          ))}
        </div>
        <div className="credential-card">
          <Award size={24} aria-hidden="true" />
          <p className="eyebrow">Certification</p>
          <h3>AWS Certified Developer — Associate</h3>
          <p>Cloud-native application development, deployment, and AWS service integration.</p>
          <a className="credential-link" href={profile.certification} target="_blank" rel="noopener noreferrer">Verify credential <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}

function ContactLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {contactLinks.map(({ label, href, icon: Icon }) => (
        <a key={label} href={href} className={label === "Email" ? "primary-button" : "secondary-button"} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noopener noreferrer"} aria-label={`Open ${label}`}>
          <Icon size={16} aria-hidden="true" /> {label}
        </a>
      ))}
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="portfolio-shell min-h-screen text-zinc-100">
      <div className="ambient-grid pointer-events-none fixed inset-0" />
      <header className="site-header relative z-10 flex w-full items-center justify-between px-6 py-6 lg:px-12">
        <a href="#home" className="brand-mark"><span className="brand-dot" />{profile.name}</a>
        <nav className="hidden gap-8 text-sm text-zinc-300 md:flex" aria-label="Primary navigation">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Stack</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href={`mailto:${profile.email}?subject=Portfolio%20Enquiry`} className="header-cta">Let’s talk <ArrowUpRight size={16} aria-hidden="true" /></a>
      </header>

      <main className="relative z-10">
        <section id="home" className="hero-section grid w-full items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="eyebrow"><span /> Backend · Cloud · Full Stack</p>
            <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">I build the systems behind products people rely on.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">Backend / Full Stack Software Engineer with 3+ years of experience designing scalable APIs, distributed applications, event-driven systems, and cloud-native products with Node.js, TypeScript, React, Python, Java, and AWS.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="primary-button">Explore my work <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a href={`mailto:${profile.email}?subject=CV%20Request`} className="secondary-button"><Download size={16} aria-hidden="true" /> Request CV</a>
            </div>
            <div className="hero-meta mt-8 flex flex-wrap gap-5 text-sm text-zinc-400">
              {heroMeta.map(({ label, icon: Icon }) => <span key={label}><Icon size={15} aria-hidden="true" /> {label}</span>)}
              <span><span className="status-dot" /> Open to opportunities</span>
            </div>
          </motion.div>

          <motion.div className="system-panel" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="panel-topline"><span>ARCHITECTURE / 001</span><span className="panel-live">● LIVE</span></div>
            <div className="system-visual">
              <img src={heroImage} alt="Abstract layered system architecture" />
              <div className="visual-label label-api">API GATEWAY</div><div className="visual-label label-events">EVENTS / QUEUES</div><div className="visual-label label-data">DATA LAYER</div>
              <div className="visual-line line-one" /><div className="visual-line line-two" />
            </div>
            <div className="panel-footer"><span>Node.js · AWS · Datadog</span><span>Reliable by design</span></div>
          </motion.div>
        </section>

        <section className="proof-strip px-6 lg:px-12" aria-label="Career highlights">
          <div><strong>3+</strong><span>years engineering</span></div><div><strong>8</strong><span>AWS services in practice</span></div><div><strong>5</strong><span>featured projects</span></div><div><strong>1</strong><span>AWS certification</span></div>
        </section>

        <section id="about" className="content-section w-full px-6 py-20 lg:px-12">
          <div className="mb-10 max-w-3xl"><p className="eyebrow"><span /> What I do</p><h2 className="mt-3 text-4xl font-bold">I design and build reliable software systems.</h2></div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{services.map((service) => <ServiceCard key={service.title} service={service} />)}</div>
        </section>

        <section id="skills" className="content-section skills-section w-full px-6 py-20 lg:px-12">
          <div className="mb-8"><p className="eyebrow"><span /> Skills</p><h2 className="mt-3 text-4xl font-bold">A stack built for production.</h2></div>
          <SkillGroups groups={skillGroups} />
        </section>

        <EducationSection />

        <section id="experience" className="content-section w-full px-6 py-20 lg:px-12">
          <div className="mb-10"><p className="eyebrow"><span /> Career</p><h2 className="mt-3 text-4xl font-bold">Professional experience.</h2></div>
          <div className="grid gap-6">{experience.map((job) => <ExperienceCard key={job.id} job={job} />)}</div>
        </section>

        <section id="projects" className="content-section w-full px-6 py-20 lg:px-12">
          <div className="mb-10"><p className="eyebrow"><span /> Selected work</p><h2 className="mt-3 text-4xl font-bold">Projects with a point of view.</h2></div>
          <div className="grid gap-6 md:grid-cols-2">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
        </section>

        <section id="contact" className="content-section contact-section w-full px-6 py-20 lg:px-12">
          <div className="grid gap-8 rounded-[2rem] p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div><p className="eyebrow"><span /> Contact</p><h2 className="mt-3 text-4xl font-bold text-white">Let’s build something scalable.</h2><p className="mt-4 max-w-2xl text-zinc-400">I’m open to backend, full stack, cloud, and AI-focused engineering opportunities in Ireland and remote teams.</p></div>
            <ContactLinks />
          </div>
        </section>
      </main>
    </div>
  );
}
