# Guia: Como Adicionar Novos Projetos ao Portfólio

Este documento explica detalhadamente os passos para adicionar novos projetos ao teu portfólio Astro, tirando partido do componente de **Grid** de cards e do **Modal interativo** com suporte a carrossel de imagens, vídeos do YouTube, métricas dinâmicas e links opcionais.

---

## Estrutura do Sistema de Projetos

O sistema é dividido em duas partes:
1. **Visualização na Grelha (`ProjectCard.astro`)**: O card simplificado que aparece na página com uma descrição breve e botão "Ver Detalhes".
2. **Dados Detalhados (`__PROJECTS_DATA__`)**: Um objeto JavaScript no fundo da página que contém todo o conteúdo pesado (imagens, vídeo, métricas) que o modal lê dinamicamente quando clicas em "Ver Detalhes".

Como o portfólio suporta **Português (PT)** e **Inglês (EN)**, deves adicionar o projeto em ambas as páginas:
* Inglês: `src/pages/projects.astro`
* Português: `src/pages/pt/projects.astro`

---

## Passo 1: Adicionar o Card à Página

Abre o ficheiro da página correspondente e localiza a secção `<div class="grid grid-cols-1 md:grid-cols-3 gap-6">`. Adiciona um novo componente `<ProjectCard />` com os dados resumidos:

```astro
<ProjectCard
  projectId="o-meu-novo-projeto"  <!-- Deve ser um ID único (ex: sem espaços ou acentos) -->
  title="Nome do Projeto"
  subtitle="Subtítulo curto do Projeto"
  status="v1.0 STABLE"             <!-- Estado (ex: "v1.0 LIVE", "Em Desenvolvimento") -->
  description="Uma breve descrição que aparecerá na grelha da página principal..."
  tags={[
    { icon: "terminal", label: "Python" },
    { icon: "code", label: "Astro" }
  ]}
  viewDetailsLabel="Ver Detalhes" <!-- ou "View Details" para Inglês -->
/>
```

---

## Passo 2: Configurar os Dados do Modal

No fundo do mesmo ficheiro, localiza o bloco `<script>` onde a variável `window.__PROJECTS_DATA__` está definida. Adiciona uma nova chave com o mesmo **`projectId`** que definiste no Passo 1:

```javascript
window.__PROJECTS_DATA__ = {
  // ... projetos existentes ...
  
  "o-meu-novo-projeto": { // <--- IGUAL AO projectId DO CARD
    title: "Nome do Projeto",
    icon: "code_blocks",  // Ícone do topo do modal (Material Symbols Outlined)
    
    // MÍDIA (IMAGENS & VÍDEO DO YOUTUBE)
    // -------------------------------------------------------------
    // Opção A: Uma única imagem
    image: "https://exemplo.com/screenshot.png",
    
    // Opção B: Várias imagens (cria um carrossel com setas automaticamente)
    images: [
      "/images/screenshot1.png",
      "/images/screenshot2.png"
    ],
    
    // Opção C: Vídeo do YouTube (insere apenas o ID final do URL do vídeo)
    // Ex: para https://www.youtube.com/watch?v=dQw4w9WgXcQ coloque "dQw4w9WgXcQ"
    youtubeId: "dQw4w9WgXcQ", 
    
    // NOTA: Se colocar imagens E youtubeId, o modal cria uma barra para
    // alternar entre Imagem e Vídeo. Se não colocar nenhum, a secção desaparece.

    overview: "Descrição detalhada sobre a arquitetura e objetivos do projeto...",
    challenge: "Qual foi o maior desafio tecnológico deste projeto?",
    solution: "Como resolveu e superou esse desafio utilizando o seu stack?",
    
    // TECH BADGES (Lista de tecnologias no modal)
    techStack: [
      { icon: "terminal", label: "Python 3.11" },
      { icon: "database", label: "Ollama" }
    ],

    // MÉTRICAS DE DESEMPENHO (OPCIONAL)
    // -------------------------------------------------------------
    // Se o array estiver vazio, a caixa de métricas desaparece.
    metrics: [
      { label: "Velocidade", value: "< 1.2s" },
      { label: "Precisão", value: "98%" }
    ],

    // FUNCIONALIDADES (OPCIONAL)
    // Se o array estiver vazio, a caixa de funcionalidades desaparece.
    features: [
      "Integração em tempo real",
      "Interface Responsiva"
    ],
    
    // NOTA DE LAYOUT: Se omitir métricas E features, a barra lateral
    // cinzenta desaparece e o texto de Overview estende-se para largura inteira.

    // LINKS DE AÇÃO (OPCIONAL)
    // -------------------------------------------------------------
    // Deixe vazio ("") para esconder o respetivo botão
    github: "https://github.com/Dossantosjoel7/repositorio", // Botão "Ver Código"
    demo: "", // Esconde botão "Demo ao Vivo"

    statusText: "Pronto para Produção" // Texto do badge de estado no rodapé
  }
};
```

---

## Dicas de Ícones e Estilo
* **Ícones**: Podes pesquisar ícones em [Google Material Symbols](https://fonts.google.com/icons). Usa o nome exato em minúsculas (ex: `shopping_cart`, `terminal`, `web`, `database`) no atributo `icon` das tags e stack.
* **Caminhos de imagem**: Podes guardar imagens na pasta `public/` do teu projeto e referenciá-las diretamente como `/nome-imagem.png`.
