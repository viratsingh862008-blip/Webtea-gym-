# KINGDOM GYM — Bettiah

React + Vite full-stack fitness experience for KINGDOM GYM, Bettiah.

## Stack
- React + TypeScript + Vite
- GSAP + ScrollTrigger
- Lenis smooth scrolling
- Framer Motion for interactive transitions
- Lucide icons
- Vercel-compatible serverless API endpoints
- Optional Airtable persistence + webhook forwarding

## Experience
Cinematic hero, scroll choreography, interactive training zones, goal-based route selector, first-visit journey, conversion signals, mobile sticky CTA and a lead enquiry flow.

## Public business data
The public listing currently identifies KINGDOM GYM at **Basant Vihar, Hariwatika Chowk, Bettiah, Bihar 845438**, with phone **+91 70049 04254**, rating **4.5/5 from 40 reviews**, and hours **05:00–21:00 Monday–Saturday**. Public local directories also list KINGDOM GYM at Basant Vihar, Hariwatika Chowk. Reconfirm business details before production marketing.

Visual fitness photography in the experience is **editorial imagery and is not represented as Kingdom Gym-owned photography**. Replace it with gym-owned/licensed imagery before launch.

## Full-stack lead handling
Set these Vercel environment variables when connecting production:
- `LEAD_WEBHOOK_URL` — optional CRM/automation webhook.
- `ANALYTICS_WEBHOOK_URL` — optional event destination.
- `AIRTABLE_PAT`, `AIRTABLE_BASE_ID`, `AIRTABLE_TABLE_NAME` — optional durable lead storage.

The frontend remains functional without these integrations, but durable lead storage requires one of the configured destinations.

## Development
```bash
npm install
npm test
npm run check
npm run build
npm run dev
```

## Production
Vite generates the frontend build. The `api/` directory contains Vercel-compatible serverless endpoints:
- `/api/health`
- `/api/events`
- `/api/leads`

## QA checklist
1. Run `npm test` and `npm run check`.
2. Run `npm run build`.
3. Verify API environment variables in the deployment provider.
4. Replace editorial images with licensed Kingdom Gym photography.
5. Reconfirm phone, hours and public rating before launch.
