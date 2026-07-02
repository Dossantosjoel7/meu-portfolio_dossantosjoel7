# Documento de Design: Portfólio Moderno de IT / Engenharia de Software

## 1. Visão Geral
*   **Objetivo:** Criar um portfólio digital direto e rápido para alavancar a transição de carreira para IT Support e Engenharia de Software.
*   **Público-Alvo:** Recrutadores internacionais e nacionais.
*   **Estilo Visual:** Clean, minimalista e focado em legibilidade. O **Dark Mode** será o tema padrão.

---

## 2. Navegação e Cabeçalho (Header)
O header terá um design em barra horizontal contínua (inspirado na referência image_9538c7.png), com os elementos distribuídos de forma equilibrada em três secções principais, sem fotografia de perfil.

*   **Bloco Esquerdo (Identidade):**
    *   **Nome:** O teu nome na linha superior, em texto forte/destacado.
    *   **Cargo/Subtítulo:** Na linha logo abaixo, em texto mais pequeno e cor mais suave (ex: *Software Engineering Student & IT Support*).
*   **Bloco Central (Navegação):**
    *   Links alinhados horizontalmente: `Home` | `About Me` | `Experience` | `Skills` | `Projects` | `Blog` | `Contacts`.
*   **Bloco Direito (Ações e Configurações):**
    *   **Currículo:** Texto `Download my CV` com um sublinhado elegante.
    *   **Tema (Theme Toggle):** Um ícone minimalista (Sol/Lua) para alternar entre Light e Dark Mode.
    *   **Idioma (i18n):** Toggle discreto `[ EN | PT ]` posicionado junto ao ícone do tema.

---

## 3. Internacionalização (i18n)
O site será bilingue para maximizar oportunidades nos mercados internacional e nacional.
*   **Idioma Padrão:** Inglês (EN) ao carregar a página.
*   **Regra de Tradução:** Manter sempre a terminologia técnica em inglês, mesmo na versão em português (ex: *Helpdesk*, *Script*, *Framework*, *Deploy*).
*   **Estrutura de URL:** `dominio.com/en/` e `dominio.com/pt/` para otimização de motores de busca (SEO).

---

## 4. Estrutura da Página Principal (Conteúdo)

### A. Hero Section (Topo) - Layout de Duas Colunas
Inspirado na referência image_953fe7.png, o ecrã inicial será dividido em duas secções lado a lado.

#### A1. Coluna da Esquerda (Apresentação e Call-to-Action)
*   **Saudação:** "Hi, I am" (em texto pequeno e subtil).
*   **Nome:** Em grande destaque tipográfico.
*   **Títulos:** 
    *   *Software Engineering Student* (cor principal).
    *   *& IT Support* (cor de destaque).
*   **Botões de Ação:**
    *   **Botão Primário:** `Start a project ->` (Ação: Scroll suave para **Contactos**).
    *   **Botão Secundário:** `My work ->` (Ação: Scroll suave para **Projetos**).

#### A2. Coluna da Direita (Resumo e Redes Profissionais)
*   **Texto "Sobre Mim":** Foco na forte base em resolução de problemas, disciplina de conciliar responsabilidades profissionais (turnos 08:00/14:00) com a Licenciatura em Engenharia Informática, e interesses em C/C++, Linux, automação, IA local e modelação 3D.
*   **Links / Badges (Rodapé da coluna):** `Resume` (CV em PDF) | `LinkedIn` | `GitHub`.

### B. Secção de Projetos (O Coração do Site)
Dividida em duas categorias (`Professional Projects` e `Academic & Personal Projects`).

#### B1. Interação UI/UX: Sistema de Modal (Lightbox)
Em vez de encaminhar o utilizador diretamente para o GitHub, ao clicar num cartão de projeto, abrirá uma "Caixa" (Modal) sobreposta ao ecrã com a seguinte estrutura:
*   **Cabeçalho:** Título do Projeto e botão de fechar (X).
*   **Zona Visual (Media):** Espaço para um GIF, pequeno vídeo ou carrossel de capturas de ecrã a demonstrar o projeto a funcionar.
*   **Zona de Informação:**
    *   *Visão Geral:* Resumo do que é.
    *   *Desafio & Solução:* O problema real que resolve e o impacto obtido.
    *   *Tech Stack:* Badges das ferramentas utilizadas (ex: Python, Streamlit, C++, Blender).
*   **Rodapé do Modal:** Botão primário `View Code on GitHub` (e um botão secundário `Live Demo`, se aplicável).

#### B2. Exemplos de Projetos a Destacar
*   *Profissionais:* Scripts de automação e manutenção de Sistemas Operativos (Zorin OS/Windows); Agente educacional de IA (Edu).
*   *Académicos/Pessoais:* Manipulação complexa de ficheiros e algoritmos em C/C++; Modelação 3D e animação low-poly.

### C. Secção de Habilidades (Stack)
Inspirado na referência image_9547e5.png, apresentando tecnologias em listagem horizontal categorizada com *badges*.
*   **Título:** `Tools I trust.`
*   **Categorias:**
    *   `01 | Core & Scripting`: C, C++, Python, Bash/Shell.
    *   `02 | Systems & Tools`: Linux, Windows, Git, GitHub.
    *   `03 | AI & Creative`: Ollama, Streamlit, Blender 3D.

### D. Secção de Educação e Experiência
Inspirado na referência image_959a9c.png, usando cartões largos e centralizados com contorno luminoso (glow) no dark mode.
*   **Educação:** ISEC (Instituto Superior de Engenharia de Coimbra) | Engineering Informatics | Present.
*   **Experiência:** Delivery Driver | Present. Destaque estratégico para *soft skills* cruciais em Helpdesk/IT Support (gestão de tempo, serviço ao cliente, resiliência).

### E. Secção de Blog / Devlog
Área dedicada à publicação de artigos, reforçando a autoridade técnica e capacidade de comunicação escrita (maioritariamente em Inglês).
*   **Foco de Conteúdo:**
    *   *Devlogs:* Diários de desenvolvimento explicando a linha de raciocínio passo a passo na criação de soluções (ex: desenvolvimento da IA Edu).
    *   *Tutoriais:* Explicações técnicas sobre ferramentas, fundamentos de engenharia (ex: recursividade em C) e resolução de problemas práticos de IT Support (ex: criação de scripts de limpeza).

### F. Secção de Contacto
*   Formulário direto ou *Call to Action* claro (ex: "Let's build something together").
*   Email profissional e links para as redes (GitHub / LinkedIn) no *Footer* (rodapé).

---

## 5. Alojamento (Deploy)
O projeto será alojado através de soluções modernas, gratuitas e com integração contínua (CI/CD) ao repositório do GitHub.
*   **Plataformas alvo:** GitHub Pages, Vercel ou Netlify.