# CLAUDE.md — frelo Hub

## What This App Does
Central command center for all frelo apps. Single dashboard with cards that link out to each app's Vercel production URL. Includes Coming Soon ideas and Assets & Links sections.

## Tech Stack
- **Framework**: Next.js 14.2.35 + React 18 + TypeScript
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Deployment**: Vercel (auto-deploy from GitHub, Hobby plan)
- **Repo**: adam554433-cloud/frelo-hub

## Key File Paths
```
src/
  app/
    page.tsx                # Main dashboard
    layout.tsx              # Root layout
    globals.css             # Global styles
  components/
    AppCard.tsx             # Reusable card with live/beta/idea status
  config/
    apps.ts                 # SINGLE SOURCE for apps, ideas, and links
```

## How to Add a New App
1. Open `src/config/apps.ts`
2. Add to `apps[]` (live/beta) or `comingSoon[]` (idea)
3. Use a Lucide icon name for `icon`
4. Deploy

## Brand
Self-contained. Gold `#B9923B`, Chocolate `#1B0D02`, Cream `#E5D5BF`. Fonts: Fraunces serif + Afacad sans.

## Local Dev Commands
```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # ESLint
npm run typecheck    # TypeScript check (tsc --noEmit)
```

## Validation Rules
- After completing any task, ALWAYS run `npm run build` and `npm run lint` before saying "done"
- If either fails, fix the error and re-run. Do not report completion until both pass.
- After completing any task, ALWAYS include the local preview link (e.g., http://localhost:3000) so the user can check the result in their browser.

## Coding Conventions
- Path alias: `@/*` → `./src/*`
- `src/config/apps.ts` is the single source of truth — edit there to add/remove entries
- No external brand dependencies — brand palette is inline
