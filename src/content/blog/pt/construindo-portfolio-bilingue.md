---
title: "Como Construí o meu Portfólio Bilingue com Astro e Tailwind v4"
date: 2026-07-11
readTime: "8 MIN READ"
category: "TUTORIAL"
tags: ["Astro", "Tailwind", "Arquitetura"]
description: "Um olhar técnico sobre a arquitetura deste portfólio, explorando as Content Collections do Astro e o novo motor do Tailwind v4."
---

Hoje, dia 11 de julho de 2026, coloco oficialmente em produção a primeira iteração da minha plataforma pessoal. A criação desta infraestrutura não é apenas a entrega de um website; é o primeiro passo concreto em direção aos meus objetivos profissionais a longo prazo.

Quando iniciei o planeamento arquitetónico deste projeto, defini três requisitos fundamentais:

1. **Um ecossistema robusto para documentar os meus desenvolvimentos futuros** (desde arquiteturas em C/C++ e automação no Zorin OS, até implementações de modelos 3D no Blender).
2. **Suporte bilingue nativo (Inglês e Português)**, refletindo o meu foco e preparação para o mercado de trabalho global.
3. **Um espaço dedicado aos meus Dev-Logs**, pensado especificamente para partilhar processos lógicos e de resolução de problemas.

Durante a fase de desenvolvimento, tirei partido de fluxos de trabalho assistidos por Inteligência Artificial e integrei ferramentas como o IDE Antigravity para acelerar a escrita de código redundante e focar-me na arquitetura.

Depois de avaliar várias frameworks, escolhi o **Astro** pela sua filosofia padrão de *zero-JS* e pelo seu excelente desempenho na geração de sites estáticos (SSG). Combinado com o recém-lançado **Tailwind CSS v4**, a experiência de desenvolvimento e a performance revelaram-se excecionais.

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

Construir e estabilizar esta base foi um excelente exercício prático de engenharia de frontend. Ao priorizar uma fundação puramente estática e injetando micro-interações de JavaScript Vanilla apenas onde estritamente necessário (como no controlo dos painéis modais), sem abdicar da estética técnica e imersiva.
