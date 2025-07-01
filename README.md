# Flight Booking Multi-Step Form

This project is a fully responsive, multi-step flight booking form built with Next.js and React.  
It features form validation, a progress indicator, and a summary step before submission.

## Features

- Multi-step registration form (5 steps)
- Form validation with error messages on each step
- Progress indicator at the top of every page
- Responsive design for all devices
- Summary step before submission
- Thank you page after submission

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.
## Folder Structure

```
flight-booking-form/
├── context/
│   └── FormContext.tsx
├── pages/
│   ├── step1.tsx
│   ├── step2.tsx
│   ├── step3.tsx
│   ├── miles.tsx
│   ├── help.tsx
│   ├── thankyou.tsx
│   └── _app.tsx
├── public/
│   ├── location.png
│   ├── type.png
│   ├── plan.png
│   ├── bx_bx-detail.png
│   ├── love.png
│   ├── business.png
│   ├── economy.png
│   ├── foundation1.png
│   ├── foundation2.png
│   ├── foundation3.png
│   ├── foundation4.png
│   └── plane.png
├── styles/
│   └── globals.css
├── README.md
├── package.json
└── ...
```

- `context/` — React Context for global form state
- `pages/` — Next.js pages for each step and thank you
- `public/` — Images and static assets
- `styles/` — Global CSS styles

