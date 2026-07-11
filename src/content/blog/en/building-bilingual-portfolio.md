---
title: "How I Built My Bilingual Portfolio with Astro and Tailwind v4"
date: 2026-07-11
readTime: "8 MIN READ"
category: "TUTORIAL"
tags: ["Astro", "Tailwind", "Architecture"]
description: "A deep dive into the architecture of this portfolio, exploring Astro Content Collections and Tailwind v4's new engine."
---

When I started building this portfolio, I had three main goals:
1. **Blazing fast performance.**
2. **Native bilingual support (English and Portuguese).**
3. **A modern, cyberpunk-inspired glassmorphism aesthetic.**

After evaluating several frameworks, I chose **Astro** for its zero-JS default approach and excellent support for static site generation (SSG). Paired with the newly released **Tailwind CSS v4**, the developer experience was incredible.

## The Architecture

The site uses Astro's file-based routing. To support multiple languages, I adopted a simple directory structure:

- `/src/pages/index.astro` (English - Default)
- `/src/pages/pt/index.astro` (Portuguese)

For dynamic content like this blog, I leveraged **Astro Content Collections**.

### Content Collections

Content Collections allow me to write my blog posts in standard Markdown (`.md`) while ensuring type safety through Zod schemas. If I forget to add a `title` or `date` to my frontmatter, Astro throws an error at build time instead of breaking in production.

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

Building this portfolio was a great exercise in architectural planning. By keeping the foundation static and progressively enhancing it with vanilla JavaScript (like the modal you might be viewing this in!), I was able to achieve a perfect lighthouse score without sacrificing the visual "wow" factor.
