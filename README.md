# Digital Workforce

Next.js 15 application with Static Site Generation (SSG) for AI employee catalog.

## Tech Stack

- **Framework**: Next.js 15.0.3 (App Router)
- **Language**: TypeScript
- **Styling**: Custom CSS (no Tailwind)
- **Node**: 20.x

## Build Commands

```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## Deployment

This is a **Next.js application**. It should be deployed using Next.js deployment methods.

**Important**: Do NOT use Vite to build this project. The build command is `npm run build` which runs `next build`.

## Features

- Static Site Generation (SSG) for all pages
- Employee catalog with dynamic routes
- SEO optimized with sitemap.xml and robots.txt
- Google Tag Manager integration

## Project Structure

```
/app
  /data         - Employee data
  /employee/[id] - Dynamic employee pages (SSG)
  layout.tsx    - Root layout
  page.tsx      - Home page
  globals.css   - Global styles
```
