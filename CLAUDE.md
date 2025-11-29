# Constrong Website - Project Guidelines

## Project Overview
Single-page website for **Constrong** - a concrete contractor company serving the construction industry in Kitchener-Waterloo and surrounding areas in Ontario, Canada.

## Company Information
- **Company Name:** Constrong
- **Industry:** Concrete Contractor
- **Location:** Kitchener, ON, Canada, Ontario
- **Phone:** +1 519-222-0700
- **Email:** ryan.armstrong@constronginc.com
- **Tagline:** Proudly serving the construction industry in KW and surrounding area

## Tech Stack
- **Framework:** Next.js 16+ (App Router ONLY - no Pages Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Package Manager:** pnpm
- **Build Tool:** Turbopack

## Project Structure
```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main single-page content
│   └── globals.css     # Global styles
├── components/
│   ├── layout/         # Header, Footer, Navigation
│   ├── sections/       # Hero, Services, About, Projects, Careers, Contact
│   └── ui/             # Reusable UI components (Button, Card, etc.)
└── lib/
    └── constants.ts    # Company info, content data
```

## Design Guidelines
- **Theme:** Dark modern design with industrial feel
- **Primary Colors:** Dark grays/blacks with accent colors (gold/amber highlights)
- **Typography:** Clean, professional sans-serif fonts
- **Images:** Construction/concrete work photography
- **Style:** Modern, professional, trustworthy

## Sections (Single Page)
1. **Hero** - Full-width background, logo, tagline, CTA, social links
2. **Services** - Foundations, Footings, Slabs (card layout)
3. **About** - Company history and description
4. **Projects** - Photo gallery of completed work
5. **Careers** - Job listings (Labourers, Carpenters)
6. **Contact** - Contact form + company address + contact info
7. **Footer** - Copyright, social links

## Development Commands
```bash
pnpm dev      # Start development server (localhost:3000)
pnpm build    # Production build
pnpm lint     # Run ESLint
```

## Git Workflow
- Use Conventional Commits: `feat(scope): message`, `fix(scope): message`
- Remote: https://github.com/spragginsdesigns/constrong.git
- Branch: main

## Notes
- Mockup reference files are in `/mockups` directory
- Mobile-first responsive design is required
- No database needed - static content only
- Prioritize performance and accessibility
