import { Space_Grotesk, Inter, JetBrains_Mono, Caveat } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-hand',
})

export const metadata = {
  title: 'Kashif — Senior Frontend Engineer & UI Architect',
  description:
    'Portfolio of Kashif, a senior frontend engineer specializing in React.js, Next.js and Tailwind CSS.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${caveat.variable}`}>
      <body className="font-sans bg-base min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

// import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
// import './globals.css'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// const spaceGrotesk = Space_Grotesk({
//   subsets: ['latin'],
//   weight: ['500', '600', '700'],
//   variable: '--font-display',
// })

// const inter = Inter({
//   subsets: ['latin'],
//   weight: ['400', '500', '600'],
//   variable: '--font-sans',
// })

// const jetbrainsMono = JetBrains_Mono({
//   subsets: ['latin'],
//   weight: ['400', '500'],
//   variable: '--font-mono',
// })

// export const metadata = {
//   title: 'Kashif — Senior Frontend Engineer & UI Architect',
//   description:
//     'Portfolio of Kashif, a senior frontend engineer specializing in React.js, Next.js and Tailwind CSS.',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
//       <body className="font-sans bg-base min-h-screen flex flex-col">
//         <Navbar />
//         <main className="flex-1">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   )
// }
