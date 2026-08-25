export default function SkillGroups({ groups }) {
  return (
    <div className="skill-groups grid gap-5 md:grid-cols-2">
      {groups.map(({ label, icon: Icon, items }) => (
        <article className="skill-group" key={label}>
          <div className="skill-group-title"><Icon size={18} aria-hidden="true" /><h3>{label}</h3></div>
          <div className="flex flex-wrap gap-2">
            {items.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </article>
      ))}
    </div>
  );
}
