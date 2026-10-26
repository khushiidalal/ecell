# E-Cell E-Summit Website

A responsive event website prototype for E-Summit 2026, built using Next.js, React, TypeScript, and Tailwind CSS.

## Live Demo

**Deployed Website:** [E-Cell E-Summit 2026](https://ecell-git-main-khushiidalals-projects.vercel.app/)

Explore the live website to view events, competitions, schedules, speakers, sponsors, and the registration interface.

## Features

- Responsive landing page
- Event cards with category-based filtering
- Event schedules and speaker sections
- Countdown timer
- Registration form with client-side validation
- Registration API using Next.js Route Handlers
- Statistics API endpoint
- TypeScript interfaces for structured data
- Responsive styling using Tailwind CSS

## Tech Stack

- **Next.js 14** — App Router and API routes
- **React 18** — Component-based UI
- **TypeScript** — Static type checking
- **Tailwind CSS 3** — Responsive styling
- **Lucide React** — Icons

## Project Structure

```text
ecell-main/
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── index.html
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── globals.css
    │   └── api/
    │       ├── register/
    │       │   └── route.ts
    │       └── stats/
    │           └── route.ts
    ├── components/
    ├── data/
    │   ├── eventsData.ts
    │   ├── speakersData.ts
    │   └── scheduleData.ts
    └── types/
        └── index.ts
```

The root-level `index.html` is a separate standalone HTML prototype. The Next.js homepage is defined in `src/app/page.tsx`.

## Getting Started

### Prerequisites

- Node.js compatible with the project's Next.js version
- npm

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

These commands assume the corresponding scripts are defined in `package.json`.

## API Endpoints

### `POST /api/register`

Accepts registration information as JSON, performs basic server-side validation, and returns a registration response with a generated ticket identifier.

Example request:

```json
{
  "fullName": "Example Student",
  "email": "student@example.com",
  "phone": "9876543210",
  "college": "Example College",
  "selectedEvent": "Ideathon 2026",
  "teamName": "Example Team"
}
```

### `GET /api/stats`

Returns the event statistics configured in the application.

## System Architecture

The project uses a component-based architecture with the Next.js App Router.

1. **Presentation layer:** React components render the page sections and interactive UI.
2. **Static content layer:** TypeScript modules in `src/data/` provide event, speaker, and schedule information.
3. **API layer:** Next.js Route Handlers process registration requests and provide statistics.
4. **Type layer:** `src/types/index.ts` defines shared TypeScript data structures.

React state and hooks support features such as category filtering, navigation, countdown updates, and form submission.

## Current Limitations

This repository is a prototype rather than a complete production registration platform.

- Registration data is not persisted to a database.
- Generated ticket IDs are not guaranteed unique through persistent storage.
- Statistics are configured as static values rather than calculated from live registrations.
- Real payment processing and payment verification are not implemented.
- Authentication, admin authorization, rate limiting, and complete ticket verification are not implemented.
- TypeScript types do not replace runtime validation of incoming API data.

## Future Improvements

- Integrate PostgreSQL or another persistent database.
- Enforce unique ticket IDs and registration constraints.
- Add robust server-side schema validation.
- Implement authentication and role-based authorization.
- Integrate a payment provider if required.
- Add email confirmations and verifiable QR tickets.
- Add automated tests, logging, and monitoring.
- Replace hardcoded statistics with database-backed metrics.

## Development Notes

- Keep reusable UI components in `src/components/`.
- Keep static content in `src/data/`.
- Keep shared TypeScript interfaces in `src/types/`.
- Keep API request handling in `src/app/api/`.
- Never commit secrets or private environment variables.

## License

No license information is specified. Add a `LICENSE` file if you intend to distribute the project publicly.
