# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a React/Vite/TypeScript project. Common development commands:

- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
- **Run linting**: `npm run lint`

## Project Structure

The project follows a component-based architecture:

- **Entry points**: 
  - `src/main.tsx` - React root
  - `src/App.tsx` - Main application component

- **Components** (in `src/component/`):
  - `navbar/` - Navigation bar component
  - `about_us/` - About Us section
  - `introduction/` - Introduction section

- **Assets** (in `src/assets/`):
  - Images and icons used throughout the site

- **Styles**:
  - Component-specific CSS files alongside each component
  - Global styles in `src/index.css` and `src/App.css`

## Key Files

- `package.json` - Contains scripts and dependencies
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration

## Current State

Based on recent commits, this project is in early development with:
- Basic layout for introduction and about us sections
- Navbar template implemented
- Initial template ready for merging to main branch

The site appears to be a simple multi-section website for what seems to be a "SeaSea" organization or project.