import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card group rounded-3xl border-zinc-800 bg-zinc-900/70 transition hover:-translate-y-1 hover:bg-zinc-900">
      <div className="p-7">
        <div className="mb-6 flex items-start justify-between gap-4">
          <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
          {project.link && (
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.linkLabel}: ${project.title}`}
            >
              {project.linkLabel} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
        </div>
        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-4 leading-7 text-zinc-400">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => <span key={tag} className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">{tag}</span>)}
        </div>
      </div>
    </article>
  );
}
