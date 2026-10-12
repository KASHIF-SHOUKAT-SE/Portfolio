import skills from '../data/skills'

export default function TechStack() {
  return (
    <section id="stack" className="max-w-content mx-auto px-6 py-20 md:py-28 border-t border-base-border">
      <p className="font-mono text-sm text-accent mb-2">What I work with</p>
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-10">
        Technical Stack & Proficiencies
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-base-border bg-base-card p-6"
          >
            <h3 className="text-sm font-medium text-ink mb-4">{group.category}</h3>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-ink-muted flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
