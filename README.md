# Toy Store Landing Page (Vite + React + Tailwind — Space Theme)

This is a simple, single-page toy store landing page built with **Vite + React** and styled with **Tailwind CSS** in a space theme.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

## GoDaddy domain -> Vercel (DNS records approach)

1. In Vercel: Project → Settings → Domains, add:
   - `yourdomain.com`
   - `www.yourdomain.com`

2. In GoDaddy DNS, set records exactly as Vercel shows (commonly):
   - A record: `@` -> `76.76.21.21`
   - CNAME: `www` -> `cname.vercel-dns.com`

Then wait for verification + SSL to complete in Vercel.
