# CLAUDE.md — frelo Hub

## Build Standard
vibe-stack: Next.js 14 + TypeScript + Tailwind + Vercel + GitHub.

## Purpose
Central command center for all frelo apps. Single dashboard with cards that link out to each app's Vercel production URL. Includes Coming Soon ideas and Assets & Links sections.

## Architecture
- `src/config/apps.ts` — SINGLE SOURCE for apps, ideas, and links. Edit this to add/remove entries.
- `src/components/AppCard.tsx` — reusable card with live/beta/idea status.
- `src/app/page.tsx` — main dashboard.

## Brand
Self-contained. Matches frelo brand palette (Gold #B9923B, Chocolate #1B0D02, Cream #E5D5BF) and fonts (Fraunces serif + Afacad sans) inline. No dependency on `../brand-core`.

## How to add a new app
1. Open `src/config/apps.ts`
2. Add to `apps[]` (live/beta) or `comingSoon[]` (idea)
3. Use a Lucide icon name for `icon`
4. Deploy

## Deployment
Push to GitHub → Vercel auto-deploys. Hobby plan.
