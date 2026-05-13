/* ============================================
   LOGICDEV - JAVASCRIPT PURO
   Convertido de React para JS Vanilla
   
   ÍNDICE:
   1. Menu Mobile
   2. Navbar Scroll
   3. Filtro de Portfólio
   4. FAQ Accordion
   5. Formulário de Contato
   6. Scroll Suave
   7. Animações de Scroll
   8. Fechar menu ao clicar fora
   9. Ano atual no footer
   ============================================ */

// Aguarda o DOM carregar
document.addEventListener("DOMContentLoaded", function () {
  /* ============================================
     1. MENU MOBILE
     ============================================ */
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIconOpen = document.getElementById("menu-icon-open");
  const menuIconClose = document.getElementById("menu-icon-close");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  // Guarda estado do menu
  let menuOpen = false;

  function openMobileMenu() {
    menuOpen = true;
    mobileMenu.classList.add("active");
    if (menuIconOpen) menuIconOpen.style.display = "none";
    if (menuIconClose) menuIconClose.style.display = "block";
    mobileMenuBtn.setAttribute("aria-expanded", "true");
    mobileMenuBtn.setAttribute("aria-label", "Fechar menu");
    // Impede scroll do body quando menu está aberto
    document.body.style.overflow = "";
  }

  function closeMobileMenu() {
    menuOpen = false;
    mobileMenu.classList.remove("active");
    if (menuIconOpen) menuIconOpen.style.display = "block";
    if (menuIconClose) menuIconClose.style.display = "none";
    mobileMenuBtn.setAttribute("aria-expanded", "false");
    mobileMenuBtn.setAttribute("aria-label", "Abrir menu");
    document.body.style.overflow = "";
  }

  function toggleMobileMenu(e) {
    e.stopPropagation();
    if (menuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  // Event listeners do menu mobile
  if (mobileMenuBtn && mobileMenu) {
    // Usa tanto click quanto touchend para melhor resposta em mobile
    mobileMenuBtn.addEventListener("click", toggleMobileMenu);

    // Estado inicial
    closeMobileMenu();
  }

  // Fechar menu ao clicar em um link
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      closeMobileMenu();
    });
  });

  /* ============================================
     2. NAVBAR SCROLL
     Adiciona background ao rolar a página
     ============================================ */
  const navbar = document.getElementById("navbar");

  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleNavbarScroll, { passive: true });

  // Verificar estado inicial
  handleNavbarScroll();

  /* ============================================
     3. FILTRO DE PORTFÓLIO
     ============================================ */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      // Atualiza botões ativos
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      // Filtra projetos
      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");

        if (filter === "todos" || category === filter) {
          card.style.display = "block";
          // Animação de fade in
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";
          setTimeout(() => {
            card.style.transition = "opacity 0.3s ease, transform 0.3s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 50);
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  /* ============================================
     4. FAQ ACCORDION
     ============================================ */
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function () {
      const isActive = item.classList.contains("active");

      // Fecha todos os outros itens (comportamento de accordion)
      faqItems.forEach((i) => i.classList.remove("active"));

      // Toggle do item atual
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  /* ============================================
     5. FORMULÁRIO DE CONTATO
     ============================================ */
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Coleta dados do formulário
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone")
          ? document.getElementById("phone").value
          : "",
        message: document.getElementById("message").value,
      };

      // Log dos dados (em produção, enviaria para servidor)
      console.log("Dados do formulário:", formData);

      // Validação básica
      if (!formData.name || !formData.email || !formData.message) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      // Validação de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        alert("Por favor, insira um email válido.");
        return;
      }

      // Simula envio bem-sucedido
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");

      // Limpa o formulário
      contactForm.reset();
    });
  }

  /* ============================================
     6. SCROLL SUAVE
     Para links de âncora
     ============================================ */
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      // Ignora links vazios ou apenas #
      if (targetId === "#" || targetId === "") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();

        // Calcula offset para navbar fixa
        const navbarHeight = navbar ? navbar.offsetHeight : 64;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Fecha menu mobile se estiver aberto
        closeMobileMenu();
      }
    });
  });

  /* ============================================
     7. ANIMAÇÕES DE SCROLL
     Fade in de elementos ao entrar na viewport
     ============================================ */
  const fadeElements = document.querySelectorAll(".fade-in");

  function checkFadeElements() {
    fadeElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Elemento entra na viewport quando está a 85% da altura da janela
      if (elementTop < windowHeight * 0.85) {
        element.classList.add("visible");
      }
    });
  }

  // Verifica no scroll
  window.addEventListener("scroll", checkFadeElements, { passive: true });

  // Verifica no carregamento inicial
  checkFadeElements();

  /* ============================================
     8. FECHAR MENU AO CLICAR FORA
     ============================================ */
  document.addEventListener("click", function (e) {
    if (!menuOpen) return;
    const isClickInsideMenu = mobileMenu && mobileMenu.contains(e.target);
    const isClickOnButton = mobileMenuBtn && mobileMenuBtn.contains(e.target);

    if (!isClickInsideMenu && !isClickOnButton) {
      closeMobileMenu();
    }
  });

  // Fechar menu com tecla Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menuOpen) {
      closeMobileMenu();
      mobileMenuBtn.focus();
    }
  });

  // Fechar menu ao redimensionar para desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1024 && menuOpen) {
      closeMobileMenu();
    }
  });

  /* ============================================
     9. ANO ATUAL NO FOOTER
     ============================================ */
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  /* ============================================
     FUNÇÕES UTILITÁRIAS ADICIONAIS
     ============================================ */

  // Debounce para performance em eventos de scroll
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Otimiza scroll handlers
  const optimizedScrollHandler = debounce(function () {
    handleNavbarScroll();
    checkFadeElements();
  }, 10);

  // Substitui handlers por versão otimizada
  window.removeEventListener("scroll", handleNavbarScroll);
  window.removeEventListener("scroll", checkFadeElements);
  window.addEventListener("scroll", optimizedScrollHandler, { passive: true });
});

/* ============================================
   FUNÇÕES GLOBAIS
   Disponíveis fora do DOMContentLoaded
   ============================================ */

// Função para scroll suave programático
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    const navbar = document.getElementById("navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    const targetPosition =
      section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

// Função para abrir/fechar FAQ específico
function toggleFaq(index) {
  const faqItems = document.querySelectorAll(".faq-item");
  if (faqItems[index]) {
    faqItems.forEach((item, i) => {
      if (i === index) {
        item.classList.toggle("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
}

// Função para filtrar portfólio programaticamente
function filterPortfolio(category) {
  const filterBtn = document.querySelector(`[data-filter="${category}"]`);
  if (filterBtn) {
    filterBtn.click();
  }
}
