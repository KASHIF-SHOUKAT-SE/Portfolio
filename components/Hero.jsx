'use client'

import Image from 'next/image'
import {
  Code2,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react'

export default function Hero() {
  return (
    <section id="about" className="max-w-content mx-auto px-6 pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        {/* Left: copy */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-accent" />
            <p className="text-ink-muted text-lg">Hi, I&apos;m</p>
          </div>

          <h1 className="font-display text-6xl md:text-7xl font-bold leading-[1.05] text-ink">
            Kashif
          </h1>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-[1.15] mt-1 mb-6">
            <span className="text-accent">Frontend</span>{' '}
            <span className="text-ink">Engineer</span>
          </h1>

          <p className="text-ink-muted text-base md:text-lg max-w-[52ch] leading-relaxed">
            I design and build fast, accessible and user-friendly web applications with
            modern technologies like React and Tailwind CSS. I turn ideas into real
            products that make an impact.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-6 py-3 text-sm font-semibold hover:bg-accent-soft transition-colors"
            >
              <Code2 size={16} />
              View My Work
              <ArrowRight size={16} />
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-base-border px-6 py-3 text-sm font-semibold text-ink hover:border-accent/60 transition-colors"
            >
              <Mail size={16} />
              Get In Touch
            </a>
          </div>

          <div className="flex items-center gap-4 mt-7">
            <a href="https://github.com/KASHIF-SHOUKAT-SE?tab=repositories" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-muted hover:text-accent transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/kashif-shoukat/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-muted hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-ink-muted hover:text-accent transition-colors">
              <Twitter size={20} />
            </a>
            <a href="mailto:your.email@example.com" aria-label="Email" className="text-ink-muted hover:text-accent transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right: photo + decorative shapes */}
        <div className="relative mx-auto md:mx-0 w-64 md:w-80">
          {/* dotted grid, bottom-right */}
          <div
            className="hidden sm:block absolute -bottom-10 -right-10 w-28 h-28 -z-10"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.55) 1.5px, transparent 1.5px)',
              backgroundSize: '14px 14px',
            }}
            aria-hidden="true"
          />

          {/* blob backdrop */}
          <div
            className="absolute inset-0 translate-x-3 translate-y-3 rotate-3 -z-10 bg-gradient-to-br from-accent to-accent-soft rounded-[2.5rem] rounded-tl-[5rem]"
            aria-hidden="true"
          />

        

          <div className="relative aspect-[4/5] rounded-[2.5rem] rounded-tl-[5rem] overflow-hidden border border-base-border">
            <Image
              src="/projects/profilepic.jpeg"
              alt="Portrait of Kashif"
              fill
              sizes="320px"
              className="object-cover"
              priority
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

