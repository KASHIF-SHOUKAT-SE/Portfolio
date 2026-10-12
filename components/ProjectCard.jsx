import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import ProjectImage from './ProjectImage'

export default function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl border border-base-border bg-base-card overflow-hidden flex flex-col">
      <div className="p-4 pb-0">
        <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-white">
          <ProjectImage
            src={project.image}
            alt={`${project.title} preview`}
            className="object-cover object-top"
          />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl font-semibold text-ink mb-2">
          {project.title}.
        </h3>
        <p className="text-sm text-ink-muted leading-relaxed mb-4 line-clamp-2">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-accent bg-accent/10 border border-accent/30 rounded-full px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3">
          <Link
            href={`/work/${project.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-ink text-base px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View Details
            <ArrowRight size={16} />
          </Link>
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title} live link`}
              className="w-11 h-11 shrink-0 rounded-xl border border-base-border flex items-center justify-center text-ink-muted hover:text-accent hover:border-accent/40 transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
