# Developer Portfolio — Next.js 16

A modern, dark + neon-glow frontend developer portfolio built with **Next.js 16**, **React 19**, **Tailwind CSS v4** and **Motion**.

## Run it

```bash
npm run dev     # start dev server → http://localhost:3000
npm run build   # production build
npm start       # run the production build
```

## ✏️ How to edit everything

**All content lives in one file:** [`src/data/portfolio.ts`](src/data/portfolio.ts)

| What                                       | Where in `portfolio.ts`                         |
| ------------------------------------------ | ----------------------------------------------- |
| Your name, roles, tagline, email, location | `profile`                                       |
| Social links (GitHub, LinkedIn, etc.)      | `profile.socials`                               |
| Stats (years, projects…)                   | `profile.stats`                                 |
| "What I do" cards                          | `services`                                      |
| Skills / tech stack                        | `skills`                                        |
| Projects showcase                          | `projects` (set `featured: true` for big cards) |
| Work timeline                              | `experience`                                    |

No need to touch the components — just edit the data.

## Pages (multi-page, menu-wise)

| Route          | What's on it                                                              |
| -------------- | ------------------------------------------------------------------------- |
| `/`            | Landing — hero, stats, services preview, featured work, testimonials, CTA |
| `/about`       | Full bio, values, experience timeline, education, interests               |
| `/services`    | Detailed services with deliverables + my 4-step process                   |
| `/skills`      | Tech stack with proficiency bars + currently learning                     |
| `/work`        | All projects grid (each card → case study)                                |
| `/work/[slug]` | Full case study: overview, challenge, solution, features, results, tech   |
| `/contact`     | Contact form, details, social links + FAQ                                 |
| `*`            | Custom 404 page                                                           |

The navbar/footer are shared via the root layout, the active menu item is highlighted automatically, and routes fade in on navigation.

Add a project by appending an entry to the `projects` array in `portfolio.ts` (give it a unique `slug`) — its case-study page is generated automatically.

## Customize the look

- **Colors / theme:** edit the `@theme` tokens at the top of [`src/app/globals.css`](src/app/globals.css) (`--color-cyan`, `--color-violet`, `--color-pink`, etc.)
- **Fonts:** changed in [`src/app/layout.tsx`](src/app/layout.tsx) (currently Space Grotesk + JetBrains Mono)

## A few notes

- The **contact form** is demo-only. Wire it to an API route or a service like Resend / Formspree in `src/components/Contact.tsx`.
- Add your **resume** as `public/resume.pdf` (the Hero "Resume" button links to `/resume.pdf`).
- Replace project gradient placeholders with real screenshots by editing `Projects.tsx` if you want images.

Built with Next.js App Router, fully responsive, accessible, and reduced-motion friendly.
