# 🚀 NASA Simple App

A modern, minimal React + TypeScript application built with Vite, designed to fetch and display data from NASA's Near Earth Object (NEO) API. The project includes global state management, routing, Tailwind CSS for styling, and a complete test setup using Vitest and Testing Library.

---

## 🛠️ Tech Stack

- **React 19** with functional components and hooks
- **TypeScript** for static typing
- **Vite** for lightning-fast build and development
- **Tailwind CSS 4** for utility-first styling
- **React Router v7** for routing
- **Axios** for HTTP requests
- **Vitest** + **Testing Library** for unit tests
- **ESLint** for code linting

---

## 🧱 Environment / Version

This project was built and tested using:

```bash
Node.js v22.12.0
```

---

## 📁 Project Structure

```
src/
├── assets/                 # Static assets (SVGs, images)
│   └── react.svg
├── components/            # Reusable UI components
│   └── Card.tsx
├── context/               # Context and data fetching logic
│   └── data/
│       ├── DataContext.ts
│       ├── DataProvider.tsx
│       ├── fetchData.ts
│       ├── types.ts
│       └── useData.ts
├── pages/                 # Page-level components
│   ├── DetailsPage/
│   │   ├── DetailsPage.tsx
│   │   └── DetailsPage.test.tsx
│   └── ItemsPage/
│       ├── ItemPage.tsx
│       └── ItemPage.test.tsx
├── test/                  # Global test setup
│   └── setup.ts
├── types/                 # Shared TypeScript definitions
│   └── feed.ts
├── App.tsx                # App root component
├── main.tsx               # App entry point
├── App.css / index.css    # Global styles
└── vite-env.d.ts          # Vite environment declarations
```

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone {repo}
cd nasa-simple-app
npm install
```

### 2. Configure Environment Variables

Create a `.env` file at the root and add your NASA API key:

```env
VITE_NASA_API_KEY={KEY}
```

You can get one at [api.nasa.gov](https://api.nasa.gov/).

---

## 🚀 Available Scripts

| Command            | Description                             |
|--------------------|-----------------------------------------|
| `npm run dev`      | Starts the Vite dev server              |
| `npm run build`    | Builds the app for production           |
| `npm run preview`  | Previews the production build locally   |
| `npm run lint`     | Runs ESLint across the codebase         |
| `npm run test`     | Runs unit tests once using Vitest       |
| `npm run test:watch` | Runs tests in watch mode              |

---

## 🧪 Testing

Vitest is configured for unit testing. Tests are placed next to their components under `pages/` or `components/`.

Run tests:

```bash
npm run test
```

Watch mode:

```bash
npm run test:watch
```

Test setup file: `src/test/setup.ts`

---

## 📋 Linting

Run ESLint:

```bash
npm run lint
```

Advanced configuration (in `eslint.config.js`) includes options for React and TypeScript. You may also integrate:

- `eslint-plugin-react-x`
- `eslint-plugin-react-dom`

for stricter and more specific rules.

---

## 🎨 Styling

Tailwind CSS is already configured. You can directly use utility classes in your JSX:

```tsx
<div className="p-4 rounded-lg shadow bg-white text-center">
  Hello, NASA 🌌
</div>
```

---

## 📦 Production Build

```bash
npm run build
```

Then preview with:

```bash
npm run preview
```

---

## 🌐 NASA API

This app fetches data from the [NASA NEO API](https://api.nasa.gov/). You'll need to sign up to get an API key.

---

