import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  Target,
  Lightbulb,
  TrendingUp,
  Layers,
} from 'lucide-react'
import projects from '../../../data/projects'
import ProjectImage from '../../../components/ProjectImage'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug)
  return { title: project ? `${project.title} — Kashif` : 'Project not found' }
}

function BulletGrid({ items }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl border border-base-border bg-base-card p-5 flex items-start gap-3"
        >
          <span className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-accent/15 text-accent text-xs font-semibold flex items-center justify-center">
            {i + 1}
          </span>
          <p className="text-sm text-ink-muted leading-relaxed">{item}</p>
        </div>
      ))}
    </div>
  )
}

function SectionHeading({ icon: Icon, children }) {
  return (
    <h2 className="flex items-center gap-2 font-display text-2xl font-semibold text-ink mb-8">
      <Icon size={20} className="text-accent" />
      {children}
    </h2>
  )
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) return notFound()

  return (
    <article>
      {/* Header */}
      <section className="max-w-content mx-auto px-6 pt-14 pb-10">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink mb-8"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="text-xs font-medium text-accent bg-accent/10 border border-accent/30 rounded-full px-3 py-1">
            {project.category}
          </span>
          <span className="text-xs text-ink-faint font-mono">{project.year}</span>
        </div>

        <h1 className="font-display text-3xl md:text-5xl font-bold text-ink mb-5">
          {project.title}.
        </h1>

        <p className="text-ink-muted max-w-[70ch] leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="mb-6">
          <p className="text-xs uppercase tracking-wide text-ink-faint mb-1">Role</p>
          <p className="text-sm font-medium text-ink">{project.role}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-accent bg-accent/10 border border-accent/30 rounded-full px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-white border border-base-border">
          <ProjectImage
            src={project.image}
            alt={`${project.title} screenshot`}
            className="object-cover object-top"
          />
        </div>
      </section>

      {/* Challenges */}
      {project.challenges?.length > 0 && (
        <section className="max-w-content mx-auto px-6 py-14 border-t border-base-border">
          <SectionHeading icon={Target}>Challenges</SectionHeading>
          <BulletGrid items={project.challenges} />
        </section>
      )}

      {/* Solutions */}
      {project.solutions?.length > 0 && (
        <section className="max-w-content mx-auto px-6 py-14 border-t border-base-border">
          <SectionHeading icon={Lightbulb}>Solutions</SectionHeading>
          <BulletGrid items={project.solutions} />
        </section>
      )}

      {/* Results & Impact */}
      {project.results?.length > 0 && (
        <section className="max-w-content mx-auto px-6 py-14 border-t border-base-border">
          <SectionHeading icon={TrendingUp}>Results &amp; Impact</SectionHeading>
          <BulletGrid items={project.results} />
        </section>
      )}

      {/* Technologies Used */}
      {project.techStack && (
        <section className="max-w-content mx-auto px-6 py-14 border-t border-base-border">
          <SectionHeading icon={Layers}>Technologies Used</SectionHeading>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              ['Frontend', project.techStack.frontend],
              ['Backend', project.techStack.backend],
              ['Tools & Services', project.techStack.tools],
            ].map(([label, items]) =>
              items && items.length > 0 ? (
                <div key={label}>
                  <p className="text-sm text-ink-muted mb-3">{label}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-accent bg-accent/10 border border-accent/30 rounded-full px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-content mx-auto px-6 py-16 border-t border-base-border text-center">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-3">
          Interested in working together?
        </h2>
        <p className="text-ink-muted max-w-[50ch] mx-auto mb-8">
          I&apos;m available for freelance projects and consultations. Let&apos;s discuss how
          I can help bring your ideas to life.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-6 py-3 text-sm font-semibold hover:bg-accent-soft transition-colors"
          >
            <Mail size={16} />
            Get In Touch
          </Link>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded-full border border-base-border px-6 py-3 text-sm font-semibold text-ink hover:border-accent/60 transition-colors"
          >
            View More Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </article>
  )
}


