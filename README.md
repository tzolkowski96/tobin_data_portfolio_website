# Architectural Redirect Hub

A precision-engineered, minimalist landing page and redirect hub for a Data Professional. Designed with an architectural aesthetic, focusing on geometric balance, subtle motion, and high-performance delivery.

## 🏛️ Design Philosophy

This project moves away from generic "web developer" templates in favor of a **Data Science Aesthetic**:
- **Precision Typography:** Clean, high-contrast layouts using Stone palettes.
- **Geometric Feedback:** A SVG-based circular progress ring visualizes the countdown logic.
- **Architectural Grid:** A custom-engineered radial dot-grid background for depth without noise.
- **Framer Motion Integration:** Smooth, physics-based transitions for the countdown numbers.

## ✨ Features

- **Smart Countdown:** 5-second precision timer with automated redirection.
- **Interactive Controls:** Pause and resume the countdown or trigger an immediate skip.
- **SEO Optimized:** Full Open Graph metadata and canonical linking for professional social sharing.
- **Responsive Architecture:** Pixel-perfect layout across mobile, tablet, and desktop viewports.
- **Low Friction:** Single-config setup for easy maintenance.

## 🛠️ Tech Stack

- **Framework:** [React 18](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Iconography:** [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Configuration

To change the destination URL, update the `REDIRECT_CONFIG` constant in [src/App.tsx](src/App.tsx#L9):

```typescript
const REDIRECT_CONFIG = {
  url: "https://your-new-destination.com",
  seconds: 5,
};
```

## 📦 Build & Deploy

Compile the production-ready assets:

```bash
npm run build
```

The output will be in the `dist/` folder, ready for deployment to GitHub Pages, Vercel, or Netlify.
