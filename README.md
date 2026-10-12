# Portfolio — Next.js (App Router) + Tailwind CSS

## Folder structure

```
portfolio-next/
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── profile.jpg           ← apni photo yahan daal dena
├── app/
│   ├── layout.jsx             ← fonts, metadata, Navbar + Footer wrap
│   ├── globals.css            ← Tailwind directives + base styles
│   ├── page.jsx                ← route "/" (home page)
│   ├── not-found.jsx            ← custom 404
│   └── work/
│       └── [slug]/
│           └── page.jsx        ← route "/work/analytics-dashboard" etc.
├── components/
│   ├── Navbar.jsx      ("use client" — mobile menu state)
│   ├── Hero.jsx
│   ├── Experience.jsx
│   ├── FeaturedWorks.jsx
│   ├── ProjectCard.jsx
│   ├── TechStack.jsx
│   ├── Contact.jsx     ("use client" — form state)
│   └── Footer.jsx
└── data/
    ├── projects.js      ← apne real projects
    ├── skills.js         ← apna real tech stack
    └── experience.js     ← apna real job history
```

Routing ab Next.js ka apna file-based system use karta hai (`react-router-dom`
ki zaroorat nahi) — har naya folder `app/` ke andar ek naya route hai, aur
`[slug]` wala folder dynamic route banata hai.

## Run it locally

```bash
npm install
npm run dev
```

Phir browser mein `http://localhost:3000` kholo.

## Build for production

```bash
npm run build
npm run start
```

Ya seedha [Vercel](https://vercel.com) par deploy kar do — Next.js unhi ne banaya hai, zero-config deploy hoga.

## Personalize karne ke liye

1. `data/projects.js` — apne real projects
2. `data/skills.js` — apna real stack
3. `data/experience.js` — apni real job history
4. `components/Contact.jsx` — abhi `mailto:` hai; chaho to ek `app/api/contact/route.js`
   bana kar apna backend laga sakte ho, ya Formspree/EmailJS use kar lo
5. `public/profile.jpg` — apni photo
6. `app/layout.jsx` — `metadata` object mein title/description update karo
