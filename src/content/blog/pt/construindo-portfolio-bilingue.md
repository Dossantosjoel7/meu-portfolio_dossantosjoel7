---
title: "Como Construí o meu Portfólio Bilingue com Astro e Tailwind v4"
date: 2026-07-11
readTime: "8 MIN READ"
category: "TUTORIAL"
tags: ["Astro", "Tailwind", "Arquitetura"]
description: "Um olhar técnico sobre a arquitetura deste portfólio, explorando as Content Collections do Astro e o novo motor do Tailwind v4."
---

Quando comecei a construir este portfólio, tinha três objetivos principais:
1. **Desempenho incrivelmente rápido.**
2. **Suporte bilingue nativo (Inglês e Português).**
3. **Uma estética moderna, com inspiração cyberpunk e glassmorphism.**

Depois de avaliar várias frameworks, escolhi o **Astro** pela sua abordagem padrão de zero-JS e excelente suporte para geração de sites estáticos (SSG). Combinado com o recém-lançado **Tailwind CSS v4**, a experiência de desenvolvimento foi incrível.

## A Arquitetura

O site utiliza o sistema de rotas baseado em ficheiros do Astro. Para suportar múltiplos idiomas, adotei uma estrutura de diretórios simples:

- `/src/pages/index.astro` (Inglês - Padrão)
- `/src/pages/pt/index.astro` (Português)

Para conteúdo dinâmico como este blog, utilizei as **Content Collections do Astro**.

### Content Collections

As Content Collections permitem-me escrever os meus posts em Markdown padrão (`.md`) enquanto garantem a segurança de tipos através de schemas Zod. Se eu me esquecer de adicionar um `title` ou `date` no frontmatter, o Astro lança um erro na fase de build em vez de falhar em produção.

```typescript
import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    // ...outros campos
  }),
});
```

## Estilização com Tailwind v4

O Tailwind v4 traz um novo motor orientado ao CSS. Em vez de um ficheiro `tailwind.config.js` pesado, grande parte da configuração pode agora ser feita diretamente no CSS, utilizando variáveis nativas.

Construí um sistema de design personalizado com:
- `electric-blue` e `cyber-orange` para destaques.
- `surface-main`, `surface-card`, e `surface-border` para um tema escuro consistente.

O efeito de glassmorphism, como o que vês nos cartões de projetos, é facilmente alcançado com:

```html
<div class="bg-surface-card/80 backdrop-blur-xl border border-surface-border">
  <!-- Conteúdo -->
</div>
```

## Conclusão

Construir este portfólio foi um excelente exercício de planeamento arquitetónico. Ao manter a base estática e adicionando melhorias progressivas com JavaScript vanilla (como o modal em que possivelmente estás a ler isto!), consegui atingir uma pontuação perfeita no Lighthouse sem sacrificar o fator "wow" visual.
