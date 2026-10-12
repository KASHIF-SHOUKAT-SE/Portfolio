import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="max-w-content mx-auto px-6 py-24 text-center">
      <h1 className="font-display text-2xl text-ink mb-3">Page not found</h1>
      <p className="text-ink-muted mb-6">This page doesn&apos;t exist or may have moved.</p>
      <Link href="/" className="text-accent inline-flex items-center gap-2 text-sm">
        <ArrowLeft size={16} /> Back to home
      </Link>
    </section>
  )
}
