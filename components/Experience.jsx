import experience from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="max-w-content mx-auto px-6 py-20 md:py-28 border-t border-base-border">
      <p className="font-mono text-sm text-accent mb-2">Where I&apos;ve worked</p>
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-10">
        Experience
      </h2>

      <div className="space-y-4">
        {experience.map((job) => (
          <div
            key={job.role + job.period}
            className="rounded-xl border border-base-border bg-base-card p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3"
          >
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-display text-lg font-semibold text-ink">{job.role}</h3>
                {job.current && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-accent">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Current
                  </span>
                )}
              </div>
              <p className="text-sm text-ink-muted mt-1">{job.company}</p>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed max-w-[60ch]">
                {job.description}
              </p>
            </div>
            <p className="font-mono text-xs text-ink-faint whitespace-nowrap sm:pt-1">
              {job.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
