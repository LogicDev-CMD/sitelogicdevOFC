# LogicDEV - Manual do Projeto

Landing page profissional para empresa de tecnologia, desenvolvida em HTML, CSS e JavaScript puro.

---

## Estrutura de Arquivos

```
html-version/
├── index.html      # Página principal
├── css/
│   └── style.css       # Estilos organizados por seções
├── js/
│   └── script.js       # Funcionalidades em JavaScript puro
├── img/            # Pasta para imagens
│   ├── hero-bg.jpg         # (opcional) Fundo do hero
│   ├── about-bg.jpg        # (opcional) Fundo da seção sobre
│   ├── services-bg.jpg     # (opcional) Fundo dos serviços
│   ├── portfolio-bg.jpg    # (opcional) Fundo do portfólio
│   ├── team-bg.jpg         # (opcional) Fundo do time
│   ├── testimonials-bg.jpg # (opcional) Fundo dos depoimentos
│   ├── faq-bg.jpg          # (opcional) Fundo do FAQ
│   └── contact-bg.jpg      # (opcional) Fundo do contato
└── README.md       # Este manual
```

---

## Como Usar

### Visualizar o Site

Basta abrir o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge, Safari).

### Hospedagem

O projeto pode ser hospedado em qualquer servidor web ou serviço de hospedagem estática:

- GitHub Pages
- Netlify
- Vercel
- Hostinger
- Qualquer servidor Apache/Nginx

---

## Personalizações

### 1. Cores do Site

Edite as variáveis CSS no início do arquivo `style.css`:

```css
:root {
  /* CORES PRINCIPAIS - Edite aqui para mudar o tema */
  --primary: #2e0294; /* Roxo principal */
  --primary-light: #4a14b8; /* Roxo claro (hover) */
  --primary-dark: #1e0163; /* Roxo escuro */
  --primary-glow: rgba(46, 2, 148, 0.5); /* Brilho do botão */

  /* CORES DE FUNDO */
  --background: #030014; /* Fundo principal (quase preto) */
  --background-light: #0a0520; /* Fundo secundário */
  --card-bg: #0f0a1f; /* Fundo dos cards */

  /* CORES DE TEXTO */
  --foreground: #ffffff; /* Texto principal (branco) */
  --muted: #a1a1aa; /* Texto secundário (cinza) */
  --muted-light: #71717a; /* Texto terciário */
}
```

### 2. Textos e Conteúdo

Todos os textos estão no arquivo `index.html`. Cada seção está identificada com comentários:

```html
<!-- ==================== HERO ==================== -->
<!-- ==================== SOBRE NÓS ==================== -->
<!-- ==================== SERVIÇOS ==================== -->
<!-- etc... -->
```

#### Principais locais para edição:

| Elemento         | Localização no HTML                  |
| ---------------- | ------------------------------------ |
| Nome da empresa  | `<a class="logo">` na navbar         |
| Título principal | `<h1>` na seção hero                 |
| Subtítulo        | `<p class="hero-subtitle">`          |
| Botões CTA       | `<a class="btn btn-primary">`        |
| Serviços         | Cards dentro de `.services-grid`     |
| Portfólio        | Cards dentro de `.portfolio-grid`    |
| Time             | Cards dentro de `.team-grid`         |
| Depoimentos      | Cards dentro de `.testimonials-grid` |
| FAQ              | Items dentro de `.faq-list`          |
| Contato          | Informações em `.contact-info`       |
| Redes sociais    | Links em `.footer-social`            |

### 3. Botões

Os botões usam classes específicas:

```html
<!-- Botão roxo preenchido -->
<a href="#contato" class="btn btn-primary">Iniciar Projeto</a>

<!-- Botão com borda (outline) -->
<a href="#portfolio" class="btn btn-outline">Ver Portfólio</a>
```

Para mudar o estilo dos botões, edite no `style.css`:

```css
.btn-primary {
  background: var(--primary);
  /* Altere para mudar cor de fundo */
}

.btn-outline {
  border: 2px solid var(--primary);
  /* Altere para mudar cor da borda */
}
```

### 4. Fontes

A fonte padrão é **Inter** (Google Fonts). Para trocar:

1. No `index.html`, altere o link do Google Fonts:

```html
<link
  href="https://fonts.googleapis.com/css2?family=SUA+FONTE&display=swap"
  rel="stylesheet"
/>
```

2. No `style.css`, altere a variável:

```css
--font-sans: "SuaFonte", sans-serif;
```

---

## Imagens de Fundo

### Como Ativar

1. **Adicione a imagem** na pasta `img/` (recomendado: 1920x1080px, formato JPG)

2. **No `style.css`**, descomente a classe da seção desejada (final do arquivo, seção 17):

```css
/* ANTES (comentado - sem imagem) */
/*
.hero-with-bg {
    background-image: url('img/hero-bg.jpg');
    ...
}
*/

/* DEPOIS (descomentado - com imagem) */
.hero-with-bg {
    background-image: url('img/hero-bg.jpg');
    ...
}
```

3. **No `index.html`**, adicione a classe à seção:

```html
<!-- ANTES -->
<section id="inicio" class="hero">
  <!-- DEPOIS -->
  <section id="inicio" class="hero hero-with-bg"></section>
</section>
```

### Classes Disponíveis

| Seção       | Classe                 | Imagem                    |
| ----------- | ---------------------- | ------------------------- |
| Hero        | `hero-with-bg`         | `img/hero-bg.jpg`         |
| Sobre       | `about-with-bg`        | `img/about-bg.jpg`        |
| Serviços    | `services-with-bg`     | `img/services-bg.jpg`     |
| Portfólio   | `portfolio-with-bg`    | `img/portfolio-bg.jpg`    |
| Time        | `team-with-bg`         | `img/team-bg.jpg`         |
| Depoimentos | `testimonials-with-bg` | `img/testimonials-bg.jpg` |
| FAQ         | `faq-with-bg`          | `img/faq-bg.jpg`          |
| Contato     | `contact-with-bg`      | `img/contact-bg.jpg`      |

### Ajustar o Overlay

O overlay escuro garante legibilidade do texto. Para ajustar a intensidade:

```css
.hero-with-bg::before {
  background: linear-gradient(
    135deg,
    rgba(3, 0, 20, 0.95),
    /* Mais escuro = número maior */ rgba(46, 2, 148, 0.8)
      /* Menos escuro = número menor */
  );
}
```

---

## Funcionalidades JavaScript

### Menu Mobile

O menu abre/fecha ao clicar no botão hamburguer. O código está em `script.js` na função `initMobileMenu()`.

### Navbar com Scroll

A navbar muda de aparência ao rolar a página. Configurável em:

```javascript
if (window.scrollY > 50) {
  // 50 = pixels de scroll para ativar
}
```

### Scroll Suave

Todos os links internos (`#inicio`, `#sobre`, etc.) têm scroll suave automático.

### Filtro do Portfólio

Os botões filtram os projetos por categoria. Para adicionar um novo projeto:

```html
<div class="portfolio-item" data-category="web">
  <!-- Conteúdo do projeto -->
</div>
```

Categorias disponíveis: `web`, `mobile`, `design`

### FAQ Accordion

Clique em uma pergunta para expandir/recolher a resposta. Para adicionar nova pergunta:

```html
<div class="faq-item">
  <button class="faq-question">
    <span>Sua pergunta aqui?</span>
    <svg><!-- ícone --></svg>
  </button>
  <div class="faq-answer">
    <p>Sua resposta aqui.</p>
  </div>
</div>
```

### Animações de Scroll

Elementos aparecem com fade ao entrar na tela. A classe `animate-on-scroll` ativa a animação.

### Formulário de Contato

O formulário atual apenas exibe um alerta de sucesso. Para integrar com backend:

```javascript
// Em script.js, função initContactForm()
// Substitua o alert() por uma chamada fetch() para sua API
```

---

## Responsividade

O site é totalmente responsivo com breakpoints em:

| Breakpoint | Dispositivo                  |
| ---------- | ---------------------------- |
| < 480px    | Celulares pequenos           |
| < 768px    | Celulares e tablets pequenos |
| < 1024px   | Tablets                      |
| < 1280px   | Notebooks                    |
| > 1280px   | Desktops                     |

---

## Seções do Site

1. **Navbar** - Menu fixo com logo e navegação
2. **Hero** - Apresentação principal com CTAs
3. **Sobre Nós** - História e diferenciais da empresa
4. **Serviços** - 6 serviços oferecidos
5. **Estatísticas** - Números da empresa
6. **Portfólio** - Projetos com filtro por categoria
7. **Time** - Equipe de profissionais
8. **Depoimentos** - Feedback de clientes
9. **FAQ** - Perguntas frequentes
10. **Contato** - Formulário e informações
11. **Footer** - Links e redes sociais

---

## Suporte a Navegadores

- Google Chrome (recomendado)
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera

---

## Dicas de Otimização

### Imagens

- Use formato WebP para melhor compressão
- Otimize imagens com TinyPNG ou Squoosh
- Tamanho recomendado para backgrounds: 1920x1080px

### Performance

- Minifique CSS e JS para produção
- Habilite compressão GZIP no servidor
- Use CDN para arquivos estáticos

### SEO

- Edite as meta tags no `<head>` do `index.html`
- Adicione seu Google Analytics
- Crie um arquivo `sitemap.xml`

---

## Créditos

- Fonte: [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)
- Ícones: SVG inline (Lucide Icons)

---

## Licença

Este projeto é de uso privado para fins comerciais e pessoais.
