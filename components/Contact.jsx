'use client'

import { useState } from 'react'
import { Mail, Loader2, CheckCircle2 } from 'lucide-react'

const FORM_ENDPOINT = 'https://formspree.io/f/xdekgwqr'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('idle')
  // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('sent')

        setForm({
          name: '',
          email: '',
          message: '',
        })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="max-w-content mx-auto px-6 py-20 md:py-28 border-t border-base-border"
    >
      <div className="grid md:grid-cols-2 gap-12">

        {/* Left Side */}
        <div>
          <p className="font-mono text-sm text-accent mb-2">
            Get in touch
          </p>

          <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-4">
            Let&apos;s build something well-crafted
          </h2>

          <p className="text-ink-muted max-w-[42ch]">
            Open to frontend and UI architecture roles, as well as select
            freelance projects.
          </p>

          <a
            href="mailto:kashifshoukat91@gmail.com"
            className="mt-6 inline-flex items-center gap-2 text-sm text-ink hover:text-accent transition-colors"
          >
            <Mail size={16} />
            kashifshoukat91@gmail.com
          </a>
        </div>

        {/* Right Side */}
        {status === 'sent' ? (
          <div className="rounded-xl border border-accent/30 bg-accent/10 p-8 flex flex-col items-center text-center justify-center gap-3">
            <CheckCircle2 size={28} className="text-accent" />

            <p className="text-ink font-medium">
              Message sent!
            </p>

            <p className="text-sm text-ink-muted">
              Thanks for reaching out — I&apos;ll reply soon.
            </p>

            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="mt-2 text-sm text-accent hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-ink-muted mb-1.5"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-md bg-base-card border border-base-border px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent/60 transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-ink-muted mb-1.5"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md bg-base-card border border-base-border px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent/60 transition-colors"
                placeholder="you@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-ink-muted mb-1.5"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-md bg-base-card border border-base-border px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent/60 transition-colors resize-none"
                placeholder="Tell me about your project"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-accent text-white font-medium py-2.5 text-sm hover:bg-accent-soft transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' && (
                <Loader2
                  size={16}
                  className="animate-spin"
                />
              )}

              {status === 'sending'
                ? 'Sending…'
                : 'Send message'}
            </button>

            {/* Error */}
            {status === 'error' && (
              <p
                className="text-sm text-red-400"
                role="alert"
              >
                Something went wrong — please try again or email me directly.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}




