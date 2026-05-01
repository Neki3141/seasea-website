# SeaSea Website

A modern, scalable React + TypeScript + Vite project with modular section-based architecture.

## Prerequisites

- Node.js ≥ 18
- npm (comes with Node.js)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:5173 in your browser.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | TypeScript check + production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
seasea-website/
├── src/
│   ├── main.tsx              # Entry point – mounts <App /> to #root
│   ├── App.tsx               # Root component – renders sections in order
│   ├── App.css               # Global styles & CSS variables (light/dark mode ready)
│   ├── index.css             # Base reset styles
│   └── components/
│       ├── Intro/            # Hero/intro section
│       │   ├── Intro.tsx
│       │   └── styles.module.css
│       ├── Footer/           # Footer component
│       │   ├── Footer.tsx
│       │   └── styles.module.css
│       ├── section1/         # Section 1: Intro content + Header1
│       │   ├── Section1.tsx  # Integrates Header1
│       │   ├── Header1.tsx
│       │   ├── Section1.css
│       │   └── styles.module.css
│       ├── section2/         # Section 2: About + Header2
│       │   ├── Section2.tsx  # Integrates Header2
│       │   ├── Header2.tsx
│       │   ├── Section2.css
│       │   └── styles.module.css
│       ├── section3/         # Section 3: Experiences + Header3
│       │   ├── Section3.tsx  # Integrates Header3
│       │   ├── Header3.tsx
│       │   ├── Section3.css
│       │   └── styles.module.css
│       └── section4/         # Section 4: Projects + Header4
│           ├── Section4.tsx  # Integrates Header4
│           ├── Header4.tsx
│           ├── Section4.css
│           └── styles.module.css
├── public/                   # Static assets (favicon, images, etc.)
├── index.html                # HTML template
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # Base TypeScript config
├── tsconfig.app.json         # App-specific TS config
└── package.json
```

## How to Add a New Section (Upscale Guide)

Each section follows a consistent pattern. To add a new feature or page section:

### 1. Create the section folder

```bash
mkdir -p src/components/section5
```

### 2. Create the required files

**`src/components/section5/Header5.tsx`**
```tsx
import React from 'react';
import styles from './styles.module.css';

interface Header5Props {
  title?: string;
  subtitle?: string;
}

const Header5: React.FC<Header5Props> = ({
  title = 'Header 5 Section',
  subtitle = 'Description for section 5.',
}) => {
  return (
    <section className={styles.header}>
      <h2 className={styles.header__title}>{title}</h2>
      <p className={styles.header__subtitle}>{subtitle}</p>
    </section>
  );
};

export default Header5;
```

**`src/components/section5/styles.module.css`**
```css
.header {
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #1a1a2e;
  color: white;
}

.header__title {
  margin: 0 1rem 0 0;
  font-size: 1.875rem;
  font-weight: 600;
  color: #ff69b4;
}

.header__subtitle {
  color: #c0caf5;
  font-size: 0.875rem;
  font-weight: 400;
  margin: 0;
}
```

**`src/components/section5/Section5.tsx`**
```tsx
import React from 'react';
import Header5 from './Header5';
import './Section5.css';

const Section5 = () => {
  return (
    <section id="section5" className="section-5">
      <Header5
        title="My New Section"
        subtitle="Describe your new feature here."
      />
      <div className="section-content">
        {/* Add your custom content here */}
        <p>Your content goes here.</p>
      </div>
    </section>
  );
};

export default Section5;
```

**`src/components/section5/Section5.css`**
```css
.section-5 {
  padding: 2rem 1rem;
}

.section-content {
  margin-top: 1rem;
}
```

### 3. Register in App.tsx

Edit `src/App.tsx`:
```tsx
import Section5 from './components/section5/Section5';
// ... inside the app div:
<Section5 />
```

## Where to Edit

| What you want to change | Where to look |
|------------------------|---------------|
| Global styles / theming | `src/App.css` (CSS variables for light/dark mode) |
| App layout & section order | `src/App.tsx` |
| Intro / Hero section | `src/components/Intro/` |
| Footer content | `src/components/Footer/` |
| Section X content | `src/components/sectionX/SectionX.tsx` |
| Section X header | `src/components/sectionX/HeaderX.tsx` |
| Section X header styles | `src/components/sectionX/styles.module.css` |
| Section X custom styles | `src/components/sectionX/SectionX.css` |
| Add a completely new feature | Create a new `sectionX/` folder (see guide above) |

## Technology Stack

- **React 19** – UI library
- **TypeScript 6** – Type-safe JavaScript
- **Vite 8** – Lightning-fast build tool
- **CSS Modules** – Scoped styling per component
- **Bootstrap 5** – (installed, available if needed)
- **ESLint** – Code quality

## Tips for Scaling

- **Follow the section pattern**: Each new feature gets its own folder with `SectionX.tsx`, `HeaderX.tsx`, and CSS files.
- **Keep headers modular**: Each header uses its own CSS module (`styles.module.css`) for isolation.
- **Dark mode ready**: CSS variables in `App.css` already define both light and dark themes (dark mode is commented out – uncomment the media query to enable).
- **Strict TypeScript**: The project uses `noUnusedLocals` and `noUnusedParameters` – remove unused imports/variables to keep builds clean.
- **Bootstrap**: Available for quick prototyping – import directly in any component: `import 'bootstrap/dist/css/bootstrap.min.css';`

## License

MIT (or your preferred license)
