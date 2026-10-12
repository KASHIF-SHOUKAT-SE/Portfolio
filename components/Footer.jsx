export default function Footer() {
  return (
    <footer className="border-t border-base-border">
      <div className="max-w-content mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-ink-faint">© {new Date().getFullYear()} Kashif. All rights reserved.</p>
        <p className="text-sm text-ink-faint">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  )
}
