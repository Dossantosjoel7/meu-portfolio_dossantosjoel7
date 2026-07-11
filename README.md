# 🚀 Joel Luis dos Santos — Personal Portfolio

A modern, bilingual (EN/PT) portfolio website built with **Astro v7** and **Tailwind CSS v4**, featuring a cyber-minimalist dark mode design system with glassmorphism effects, smooth micro-animations, and a Markdown-powered blog.

> 🌐 **Live at**: *coming soon*

---

## ✨ Features

- 🌙 **Premium Dark Mode** — Curated color palette with glassmorphism, glow effects, and subtle gradients
- 🌐 **Bilingual (EN / PT)** — Full multilingual support across all pages and blog content
- 📝 **Dev Diary (Blog)** — Markdown-powered blog with Content Collections, categories, and auto-generated tag icons
- 💼 **Project Showcase** — Interactive modal system with image carousel, YouTube embeds, and dynamic metrics
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile with dedicated mobile navigation
- ⚡ **Static-First Performance** — Pre-rendered HTML with zero client-side JS frameworks
- 🔍 **SEO Ready** — JSON-LD structured data, Open Graph meta, sitemap, and RSS feed
- 🎭 **Micro-Animations** — IntersectionObserver scroll reveals, hover glows, and terminal cursor effects

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Astro v7](https://astro.build) (Static Site Generator) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) with custom design tokens |
| **Content** | Astro Content Collections + Markdown/MDX |
| **Fonts** | Geist, Inter, Material Symbols Outlined |
| **Image Processing** | Sharp |
| **Plugins** | `@astrojs/mdx`, `@astrojs/sitemap`, `@astrojs/rss` |

---

## 📂 Project Structure

```
src/
├── assets/              # Local fonts and static assets
├── components/
│   ├── Header.astro     # Responsive navbar with language switcher
│   ├── Footer.astro     # Site-wide footer
│   ├── SkillCard.astro  # Skill/tech badge cards
│   ├── ExperienceCard.astro  # Timeline experience entries
│   ├── ProjectCard.astro     # Project grid cards
│   └── ProjectModal.astro    # Interactive project detail modal
├── content/
│   └── blog/
│       ├── en/          # English blog posts (.md)
│       └── pt/          # Portuguese blog posts (.md)
├── layouts/
│   └── BaseLayout.astro # Global layout (head, header, footer, scripts)
├── pages/
│   ├── index.astro      # Home (EN)
│   ├── projects.astro   # Projects (EN)
│   ├── contact.astro    # Contact (EN)
│   ├── blog/
│   │   ├── index.astro  # Blog listing (EN)
│   │   └── [slug].astro # Blog post modal (EN)
│   ├── pt/              # All Portuguese page mirrors
│   └── rss.xml.js       # RSS feed generator
├── styles/
│   └── globals.css      # Global styles, animations, custom scrollbar
├── consts.ts            # Site-wide constants
└── content.config.ts    # Blog schema definition (Zod)
public/
├── cv_en(2026).pdf      # English CV
├── cv_pt(2026).pdf      # Portuguese CV
├── favicon.svg
└── robots.txt
```

---

## 🧞 Commands

All commands are run from the root of the project:

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro ...` | Run Astro CLI commands (`astro add`, `astro check`) |

---

## 📝 Adding Blog Posts

Create a new `.md` file in the appropriate language folder:

```
src/content/blog/en/my-new-post.md
src/content/blog/pt/o-meu-novo-post.md
```

Each post requires this frontmatter:

```yaml
---
title: "Post Title"
description: "Short description for the card."
date: 2026-11-20
readTime: "5 MIN READ"
category: "Devlog"         # Devlog | Tutorial | IT Insights
tags: ["Astro", "Tailwind"]
---
```

The dev server picks up new posts automatically — no restart needed.

---

## 🎨 Design System

The project uses a custom Tailwind v4 design token system defined in `tailwind.config.mjs`:

- **Colors**: Material Design 3 inspired palette with `electric-blue` (#007AFF) and `cyber-orange` (#FF8C00) as accent colors
- **Typography**: Hierarchical font scale (`headline-xl` → `label-sm`) with Geist + Inter
- **Spacing**: Semantic tokens (`stack-sm`, `margin-page`, `section-gap`, `gutter-grid`)
- **Effects**: `glow-border`, `hero-gradient`, `glass-panel`, `terminal-cursor`

---

## 🛠️ Software Engineering Techniques

### SEO & AI Readability
- **Structured Data (JSON-LD)** — Person schema for knowledge graph indexing
- **Semantic HTML** — Proper heading hierarchy, landmark elements
- **Meta Tags & Open Graph** — LinkedIn/Twitter card previews
- **Sitemap & Robots.txt** — Automated crawl discovery
- **Alt Text** — Descriptive image alternatives

### Architecture
- **Component-Based** — Reusable `.astro` components with typed props
- **Content Collections** — Type-safe Markdown with Zod schema validation
- **Static Generation** — Pre-rendered HTML for maximum performance
- **Design Tokens** — Centralized theming via Tailwind config

---

## 📄 License

This project is personal and not licensed for redistribution. All rights reserved.

---

Built with ☕ and 🎵 by **Joel Luis dos Santos**
