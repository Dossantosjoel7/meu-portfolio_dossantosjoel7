---
title: "How I Built My Bilingual Portfolio with Astro and Tailwind v4"
date: 2026-07-11
readTime: "8 MIN READ"
category: "TUTORIAL"
tags: ["Astro", "Tailwind", "Architecture"]
description: "A technical look into the architecture of this portfolio, exploring Astro's Content Collections and the new Tailwind v4 engine."
---

Today, July 11, 2026, I am officially launching the first iteration of my personal platform. The creation of this infrastructure is not just the delivery of a website; it is the first concrete step toward my long-term professional goals.

When I began the architectural planning for this project, I defined three fundamental requirements:

1. **A robust ecosystem to document my future developments** (from C/C++ architectures and Zorin OS automation to 3D model implementations in Blender).
2. **Native bilingual support (English and Portuguese)**, reflecting my focus and preparation for the global job market.
3. **A dedicated space for my Dev-Logs**, specifically designed to share logical and problem-solving processes.

During the development phase, I leveraged AI-assisted workflows and integrated tools like the Antigravity IDE to speed up the writing of redundant code and focus on the architecture.

After evaluating several frameworks, I chose **Astro** for its zero-JS default approach and excellent support for static site generation (SSG). Paired with the newly released **Tailwind CSS v4**, the developer experience was incredible.

## The Architecture

The site uses Astro's file-based routing. To support multiple languages, I adopted a simple directory structure:

- `/src/pages/index.astro` (English - Default)
- `/src/pages/pt/index.astro` (Portuguese)

For dynamic content like this blog, I leveraged **Astro Content Collections**.

### Content Collections

Content Collections allow me to write my posts in standard Markdown (`.md`) while ensuring type safety through Zod schemas. If I forget to add a `title` or `date` in the frontmatter, Astro throws an error at build time instead of failing in production.

```typescript
import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    // ...other fields
  }),
});
```

## Styling with Tailwind v4

Tailwind v4 brings a new CSS-first engine. Instead of a bulky `tailwind.config.js`, much of the configuration can now be done directly in CSS, utilizing native CSS variables.

I built a custom design system with:
- `electric-blue` and `cyber-orange` for accents.
- `surface-main`, `surface-card`, and `surface-border` for a consistent dark mode theme.

The glassmorphism effect, like the one you see on the project cards, is simply achieved with:

```html
<div class="bg-surface-card/80 backdrop-blur-xl border border-surface-border">
  <!-- Content -->
</div>
```

## Conclusion

Building and stabilizing this foundation was an excellent practical exercise in frontend engineering. By prioritizing a purely static foundation and injecting vanilla JavaScript micro-interactions only where strictly necessary, I was able to maintain a technical and immersive aesthetic without compromise.
