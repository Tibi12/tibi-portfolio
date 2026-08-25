export default function ExperienceCard({ job }) {
  return (
    <article className="experience-card rounded-3xl border-zinc-800 bg-zinc-900/70">
      <div className="p-7">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white">{job.role}</h3>
            <p className="mt-1 text-zinc-400">{job.company}</p>
          </div>
          <p className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300">{job.period}</p>
        </div>
        <ul className="mt-6 grid gap-3 text-zinc-300 md:grid-cols-2">
          {job.points.map((point) => <li key={point} className="leading-7">{point}</li>)}
        </ul>
      </div>
    </article>
  );
}
