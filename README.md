# Constrong

A modern, responsive single-page website for **Constrong**, a professional concrete contractor serving the construction industry in Kitchener-Waterloo and surrounding areas in Ontario, Canada.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=flat-square&logo=tailwind-css)
![pnpm](https://img.shields.io/badge/pnpm-9.x-F69220?style=flat-square&logo=pnpm)

## About the Business

**Constrong** specializes in concrete formwork and construction services including:

- Foundations
- Footings
- Slabs
- Parking Garages
- High-Rise Bases
- Restoration
- Retaining Walls

**Location:** Kitchener, ON, Canada
**Phone:** +1 519-222-0700
**Email:** ryan.armstrong@constronginc.com

## Features

- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Dark Theme** - Modern dark design with gold accent colors
- **Smooth Scrolling** - Single-page navigation with smooth scroll behavior
- **Interactive Elements** - Animated hero, hover effects, image lightbox gallery
- **Contact Form** - Functional contact form with mailto fallback
- **SEO Optimized** - Proper meta tags, Open Graph data, and semantic HTML
- **Accessible** - ARIA labels, focus states, and keyboard navigation support

## Website Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen banner with logo, tagline, CTAs, and social links |
| **Services** | Three service cards (Foundations, Footings, Slabs) |
| **About** | Company story with statistics (100+ projects, 5+ years) |
| **Projects** | 6-image gallery with lightbox viewer |
| **Careers** | Job listings for Labourers and Carpenters |
| **Contact** | Contact form with company address and contact information |

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.0.5 | React framework with App Router |
| [React](https://react.dev/) | 19.2.0 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.9.3 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1.17 | Utility-first CSS |
| [Turbopack](https://turbo.build/pack) | - | Development bundler |
| [pnpm](https://pnpm.io/) | 9.x | Package manager |

## Project Structure

```
constrong/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts & metadata
│   │   ├── page.tsx            # Main page composing all sections
│   │   ├── globals.css         # Global styles & CSS variables
│   │   └── favicon.ico
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Sticky navigation with mobile menu
│   │   │   ├── Footer.tsx      # Site footer with social links
│   │   │   ├── Logo.tsx        # SVG shield logo component
│   │   │   └── index.ts
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Hero banner section
│   │   │   ├── Services.tsx    # Services cards section
│   │   │   ├── About.tsx       # About company section
│   │   │   ├── Projects.tsx    # Project gallery with lightbox
│   │   │   ├── Careers.tsx     # Job listings section
│   │   │   ├── Contact.tsx     # Contact form section
│   │   │   └── index.ts
│   │   └── ui/
│   │       ├── Button.tsx      # Reusable button component
│   │       ├── Card.tsx        # Card components for services
│   │       ├── Icons.tsx       # SVG icon components
│   │       └── index.ts
│   └── lib/
│       └── constants.ts        # Company info, services, careers data
├── public/
│   └── images/                 # Local images (when added)
├── mockups/                    # Design reference files (gitignored)
├── CLAUDE.md                   # AI assistant project guidelines
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.x or higher
- [pnpm](https://pnpm.io/) 9.x (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/spragginsdesigns/constrong.git
   cd constrong
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with Turbopack |
| `pnpm build` | Create optimized production build |
| `pnpm start` | Run production server |
| `pnpm lint` | Run ESLint for code quality |

## Customization

### Updating Company Information

All company data is centralized in `src/lib/constants.ts`:

```typescript
export const COMPANY = {
  name: "Constrong",
  tagline: "...",
  contact: {
    phone: "+1 519-222-0700",
    email: "ryan.armstrong@constronginc.com",
  },
  // ...
};
```

### Replacing Placeholder Images

The site currently uses Unsplash placeholder images. To use actual company photos:

1. Add images to `public/images/` directory
2. Update image paths in `src/lib/constants.ts`
3. Update hero background in `src/components/sections/Hero.tsx`
4. Update about image in `src/components/sections/About.tsx`

### Theming

Color variables are defined in `src/app/globals.css`:

```css
:root {
  --background: #0f0f0f;      /* Dark background */
  --foreground: #ededed;      /* Light text */
  --accent: #d4a853;          /* Gold accent */
  --accent-dark: #b8923f;     /* Darker gold for hover */
  --card-bg: #1a1a1a;         /* Card background */
  --card-border: #2a2a2a;     /* Card borders */
  --muted: #888888;           /* Muted text */
}
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/spragginsdesigns/constrong)

### Other Platforms

This Next.js app can be deployed to any platform supporting Node.js:

- **Netlify** - [Next.js on Netlify](https://docs.netlify.com/frameworks/next-js/overview/)
- **AWS Amplify** - [Deploy Next.js](https://docs.amplify.aws/guides/hosting/nextjs/q/platform/js/)
- **Docker** - Build with `next build` and serve with `next start`

## Image Attribution

This project uses placeholder images from [Unsplash](https://unsplash.com/). While Unsplash's license allows free use without attribution, we appreciate the photographers' work:

| Image | Unsplash Photo ID | Usage |
|-------|-------------------|-------|
| Construction Site 1 | [photo-1504307651254](https://unsplash.com/photos/1504307651254-35680f356dfd) | Hero background, Services, Projects |
| Construction Site 2 | [photo-1541888946425](https://unsplash.com/photos/1541888946425-d81bb19240f5) | Services, About, Projects |
| Concrete Work | [photo-1590069261209](https://unsplash.com/photos/1590069261209-f8e9b8642343) | Services, Projects |
| Architecture | [photo-1503387762](https://unsplash.com/photos/1503387762-592deb58ef4e) | Projects |
| Construction | [photo-1517581177682](https://unsplash.com/photos/1517581177682-a085bb7ffb15) | Projects |
| Building | [photo-1568992688065](https://unsplash.com/photos/1568992688065-536aad8a12f6) | Projects |

**Unsplash License:** Photos are released under the [Unsplash License](https://unsplash.com/license), which grants an irrevocable, nonexclusive, worldwide copyright license to download, copy, modify, distribute, perform, and use photos for free, including for commercial purposes, without permission or attribution (though attribution is appreciated).

> **Note:** These placeholder images should be replaced with actual Constrong project photos for production use.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Contributing

This is a private business website. For any updates or changes, please contact the repository owner.

## License

This project is proprietary software for Constrong. All rights reserved.

---

**Constrong** - Proudly serving the construction industry in KW and surrounding area.

Website: [constronginc.com](https://constronginc.com) (coming soon)
Facebook: [@Constrong](https://www.facebook.com/profile.php?id=100057175941535)
