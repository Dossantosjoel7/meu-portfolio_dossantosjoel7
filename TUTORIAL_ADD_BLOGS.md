# 📝 Como Adicionar Novos Blogs (Diário Dev)

Este guia rápido explica como criar novos artigos para a página do Blog (Diário Dev) usando ficheiros Markdown (`.md`). O portfólio suporta bilinguismo, pelo que cada artigo deve ter uma versão em Inglês e uma versão em Português.

## 1. Onde Guardar os Ficheiros?

O sistema de gestão de conteúdos (Content Collections) do Astro está configurado para procurar na pasta `src/content/blog/`. Devido ao suporte bilingue, organizamos os artigos em duas sub-pastas:

- **Inglês**: `/src/content/blog/en/`
- **Português**: `/src/content/blog/pt/`

> [!NOTE]
> Os nomes dos ficheiros devem corresponder nas duas línguas para manter a organização, mas o Astro irá criar o link (slug) com base no nome exato do ficheiro. Recomendamos o uso de minúsculas e traços (`-`). Exemplo: `o-meu-novo-artigo.md` e `my-new-article.md`.

## 2. A Estrutura Obrigatória (Frontmatter)

Cada ficheiro de texto deve começar com um cabeçalho (Frontmatter) delimitado por três traços (`---`). O Astro é muito rígido e vai disparar um erro se alguma informação obrigatória faltar ou tiver o formato errado!

Aqui está o modelo exato que deves colar no topo de um novo artigo:

```yaml
---
title: "Título do Teu Artigo"
description: "Uma breve descrição que vai aparecer no cartão da grelha."
date: 2026-11-20
readTime: "5 MIN READ"
category: "Devlog"
tags: ["Astro", "Tailwind", "Architecture"]
---
```

### O que significa cada campo?

- **`title`**: O título principal do teu artigo.
- **`description`**: O resumo que os leitores veem antes de clicar.
- **`date`**: A data de publicação no formato `YYYY-MM-DD`. *(Nota: O Astro converte isto automaticamente para mostrar coisas como "NOV 20, 2026")*
- **`readTime`**: Estimativa do tempo de leitura. *(Ex: "5 MIN READ" ou "12 MIN LEITURA")*
- **`category`**: Categoria do artigo. O código das cores está programado para três categorias principais (usa exatamente estas palavras):
  - `Devlog` (Laranja)
  - `Tutorial` (Azul Elétrico)
  - `IT Insights` (Verde Seco / Tertiary)
- **`tags`**: Uma lista de tecnologias (array). Os ícones associam-se automaticamente a certas palavras-chave (`astro`, `tailwind`, `linux`, `rust`, `python`, `security`, `ai`, etc.).

## 3. Escrever o Conteúdo

Imediatamente após os três traços finais do cabeçalho `---`, podes começar a escrever usando sintaxe normal de Markdown!

### Exemplo de um artigo completo (`/src/content/blog/pt/a-minha-primeira-api.md`):

```md
---
title: "Como criei a minha primeira API em Rust"
description: "Um mergulho profundo na segurança e performance das APIs com Rust."
date: 2027-01-15
readTime: "8 MIN LEITURA"
category: "Tutorial"
tags: ["Rust", "Security", "Architecture"]
---

# A Minha Primeira API em Rust

Hoje vou falar-vos de como transitei os meus serviços lentos para a linguagem Rust.

## Porque escolhi Rust?

Rust é conhecido por ter um controlo total da gestão de memória. Vejam um exemplo básico de código:

```rust
fn main() {
    println!("Hello, cyber world!");
}
```

### Principais Benefícios:
1. Performance incrível
2. Zero erros de memória em runtime
3. Sistema de tipagem rigoroso

> A segurança começa no desenho da arquitetura e não apenas numa firewall!
```

## 4. O Sistema de Ícones das Tags Automático

No teu código do blogue, criámos uma regra em que certas **tags** detetam um ícone específico do Material Symbols. Se usares estas tags, recebes ícones personalizados:

- `astro` -> 💻 (code)
- `tailwind` -> 🎨 (palette)
- `architecture` ou `arquitetura` -> ☁️ (cloud)
- `c++` -> 🧠 (memory)
- `python` -> 📝 (integration_instructions)
- `rust` -> 🖧 (hub)
- `linux` -> ⌨️ (terminal)
- `security` -> 🔒 (security)
- `ai` ou `ia` -> 🤖 (psychology)
- `debugging` -> 🐛 (bug_report)

Qualquer outra tag que não conste na lista, receberá o ícone genérico de uma etiqueta 🏷️ (label).

## 5. Publicar!

Basta gravar o ficheiro `.md`. Como tens o comando `astro dev --background` a correr, o Vite (motor do Astro) vai detetar o novo ficheiro automaticamente, reconstruir a lista e o artigo aparecerá na tua grelha de blogs instantaneamente!
