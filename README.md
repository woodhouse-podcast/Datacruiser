# DataCruiser Website

A modern, enterprise-grade website for DataCruiser's spatio-temporal intelligence platform, inspired by Palantir's design aesthetic.

## Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for engaging user experience
- **Enterprise Aesthetic**: Dark theme with sophisticated visual design
- **Performance Optimized**: Fast loading with Vite's optimized build

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/         # React components
│   ├── Layout.tsx     # Main layout wrapper
│   ├── Header.tsx     # Navigation header
│   ├── Footer.tsx     # Site footer
│   ├── Hero.tsx       # Hero section
│   └── ...           # Other sections
├── styles/            # Global styles
│   └── globals.css   # Tailwind + custom CSS
├── App.tsx           # Main app component
└── main.tsx          # Entry point
```

## Design System

### Colors

- Primary Dark: `#0A0E27`
- Secondary Dark: `#1A1F3A`
- Accent Blue: `#3B82F6`
- Accent Purple: `#8B5CF6`
- Text Light: `#F8FAFC`
- Text Muted: `#94A3B8`

### Typography

- Font Family: Inter, SF Pro, Segoe UI
- Headings: Bold, large scale (4xl-7xl)
- Body: Regular weight, readable size

## Deployment

Build the production bundle:

```bash
npm run build
```

The `dist/` directory contains the optimized static files ready for deployment to any static hosting service (Vercel, Netlify, AWS S3, etc.).

## License

© 2026 DataCruiser. All rights reserved.
