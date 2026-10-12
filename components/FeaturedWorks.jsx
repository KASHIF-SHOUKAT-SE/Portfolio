import projects from '../data/projects'
import ProjectCard from './ProjectCard'

export default function FeaturedWorks() {
  return (
    <section id="work" className="max-w-content mx-auto px-6 py-20 md:py-28 border-t border-base-border">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="font-mono text-sm text-accent mb-2">Selected work</p>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">
            Featured Works ({projects.length} selected)
          </h2>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
