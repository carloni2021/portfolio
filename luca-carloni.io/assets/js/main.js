/* ═══════════════════════════════════════════════════════
   Luca Carloni – Portfolio · main.js
═══════════════════════════════════════════════════════ */

/* ── i18n translations ── */
const translations = {
  it: {
    'nav.about':        'Chi Sono',
    'nav.projects':     'Progetti',
    'nav.portfolio':    'Portfolio',
    'nav.contact':      'Contatti',
    'nav.cv':           'Scarica CV',
    'nav.cv.mobile':    '⬇ Scarica CV',
    'hero.tag':         'Disponibile per opportunità',
    'hero.name':        'Ciao, sono<br/><span class="accent">Luca Carloni</span>',
    'hero.bio':         'Studente di Informatica con la passione per costruire prodotti digitali ben progettati. Amo lavorare su sistemi distribuiti, API scalabili e interfacce pulite. Cerco sempre di scrivere codice che sia non solo funzionante, ma elegante.',
    'hero.cta.github':  'Vedi su GitHub',
    'hero.cta.cv':      'Scarica CV',
    'hero.cta.contact': 'Contattami',
    'hero.status':      'Aperto a collaborazioni',
    'about.label':      'Chi sono',
    'about.title':      'Sviluppatore con curiosità da ingegnere',
    'about.p1':         'Sono <strong>Luca Carloni</strong>, studente magistrale di Cybersecurity, macroarea Ingegneria Informatica presso l\'Università degli studi di Tor Vergata con una forte inclinazione verso lo sviluppo full-stack e i sistemi distribuiti. Mi appassiona l\'esplorazione spaziale e gli aspetti di scalabilità delle architetture cloud che ho avuto modo di toccare con mano utilizzando Amazon Web Service',
    'about.p2':         'Nel tempo libero contribuisco a progetti open source, esploro nuovi stack tecnologici e lavoro su side project che spaziano da applicazioni web a strumenti da linea di comando.',
    'about.p3':         'Ho esperienza con progetti accademici complessi su <strong>sistemi operativi</strong>, <strong>architetture orientate ai servizi</strong> e <strong>sistemi distribuiti e cloud</strong>. Lavoro bene in team, con Git e metodologie agili.',
    'about.stat1':      'Progetti GitHub',
    'about.stat2':      'Anni di studio',
    'about.stat3':      'Caffè bevuti',
    'projects.label':   'Progetti selezionati',
    'projects.title':   'Cosa ho costruito',
    'projects.sub':     'Una selezione dei miei lavori più significativi tra universitari e personali. Tutto il codice è disponibile su GitHub.',
    'project1.name':    'Workflow Web App',
    'project1.desc':    'Applicazione web per la gestione di workflow aziendali: definizione di processi, assegnazione task e monitoraggio dello stato di avanzamento.',
    'project2.name':    'Syscall Table Throttling',
    'project2.desc':    'Modulo kernel Linux per il throttling dinamico delle system call. Progetto su architetture orientate ai servizi e programmazione di sistema a basso livello.',
    'projects.cta.text':'Vuoi vedere altro?',
    'projects.cta.sub': 'Tutti i miei progetti, contributi e repository sono disponibili sul profilo GitHub.',
    'projects.cta.btn': 'Vai al profilo GitHub',
    'portfolio.label':  'Portfolio siti',
    'portfolio.title':  'Siti realizzati',
    'portfolio.sub':    'Siti web sviluppati per clienti e collaborazioni esterne.',
    'p1.name':          'Sport Manager – Gestionale Gare WKSO',
    'p1.desc':          'Piattaforma web realizzata in collaborazione con <strong>WKSO</strong> per la gestione completa delle gare di karate: iscrizioni atleti, generazione tabelloni, gestione risultati e classifiche in tempo reale. Usato attivamente nelle competizioni ufficiali.',
    'p2.name':          'Studio Nutrizionale – Sito Nutrizionista',
    'p2.desc':          'Sito web professionale per uno studio nutrizionale: presentazione dei servizi, piani alimentari personalizzati, consulenze nutrizionali e sezione contatti. Design moderno e orientato alla conversione.',
    'p3.name':          'Axiom Systems – Portale Consulenza ICT',
    'p3.desc':          'Landing page B2B per una società di consulenza ICT: cloud architecture, cybersecurity &amp; hardening, full-stack development e digital transformation. Codice modulare React con form di contatto validato lato client.',
    'p4.name':          'Aequitas – Portale Consulenza Finanziaria',
    'p4.desc':          'Landing page B2B per una società di intermediazione creditizia: cessione del quinto, consolidamento debiti, prestiti e mutui. Include simulatore di rata interattivo, sezione compliance GDPR/OAM e form di lead generation.',
    'contact.label':    'Contatti',
    'contact.title':    'Parliamoci',
    'contact.sub':      'Sono disponibile per collaborazioni, stage, opportunità lavorative o semplicemente per scambiare idee su tecnologia e progetti. Non esitare a scrivermi.',
    'contact.cv.title': 'Curriculum Vitae',
    'contact.cv.desc':  'Scarica il mio CV aggiornato in PDF. Include formazione, esperienze, competenze tecniche e progetti principali — disponibile in italiano e inglese.',
    'contact.cv.btn':   'Scarica CV (PDF)',
    'footer.copy':      '© 2026 <span>Luca Carloni</span> · Fatto con ☕ e troppo terminale',
  },
  en: {
    'nav.about':        'About',
    'nav.projects':     'Projects',
    'nav.portfolio':    'Portfolio',
    'nav.contact':      'Contact',
    'nav.cv':           'Download CV',
    'nav.cv.mobile':    '⬇ Download CV',
    'hero.tag':         'Available for opportunities',
    'hero.name':        'Hi, I\'m<br/><span class="accent">Luca Carloni</span>',
    'hero.bio':         'Computer Science student passionate about building well-designed digital products. I love working on distributed systems, scalable APIs and clean interfaces. I always strive to write code that is not just functional, but elegant.',
    'hero.cta.github':  'View on GitHub',
    'hero.cta.cv':      'Download CV',
    'hero.cta.contact': 'Contact me',
    'hero.status':      'Open to collaborations',
    'about.label':      'About me',
    'about.title':      'Developer with an engineer\'s curiosity',
    'about.p1':         'I\'m <strong>Luca Carloni</strong>, a Master\'s student in Cybersecurity (Computer Engineering) at Università degli studi di Tor Vergata, with a strong inclination towards full-stack development and distributed systems. I\'m passionate about space exploration and cloud architecture scalability, which I\'ve experienced hands-on with Amazon Web Services.',
    'about.p2':         'In my spare time I contribute to open source projects, explore new tech stacks and work on side projects ranging from web applications to command-line tools.',
    'about.p3':         'I have experience with complex academic projects on <strong>operating systems</strong>, <strong>service-oriented architectures</strong> and <strong>distributed and cloud systems</strong>. I work well in teams, with Git and agile methodologies.',
    'about.stat1':      'GitHub Projects',
    'about.stat2':      'Years of study',
    'about.stat3':      'Coffees drunk',
    'projects.label':   'Selected projects',
    'projects.title':   'What I\'ve built',
    'projects.sub':     'A selection of my most significant academic and personal projects. All code is available on GitHub.',
    'project1.name':    'Workflow Web App',
    'project1.desc':    'Web application for managing business workflows: process definition, task assignment and progress tracking.',
    'project2.name':    'Syscall Table Throttling',
    'project2.desc':    'Linux kernel module for dynamic system call throttling. Project on service-oriented architectures and low-level system programming.',
    'projects.cta.text':'Want to see more?',
    'projects.cta.sub': 'All my projects, contributions and repositories are available on my GitHub profile.',
    'projects.cta.btn': 'View GitHub profile',
    'portfolio.label':  'Website portfolio',
    'portfolio.title':  'Websites built',
    'portfolio.sub':    'Websites developed for clients and external collaborations.',
    'p1.name':          'Sport Manager – WKSO Competition Manager',
    'p1.desc':          'Web platform developed in collaboration with <strong>WKSO</strong> for full management of karate competitions: athlete registrations, bracket generation, results management and real-time rankings. Actively used in official competitions.',
    'p2.name':          'Nutritional Studio – Nutritionist Website',
    'p2.desc':          'Professional website for a nutritional studio: service overview, personalised meal plans, nutritional consultations and contact section. Modern, conversion-oriented design.',
    'p3.name':          'Axiom Systems – ICT Consulting Portal',
    'p3.desc':          'B2B landing page for an ICT consulting firm: cloud architecture, cybersecurity &amp; hardening, full-stack development and digital transformation. Modular React code with client-side validated contact form.',
    'p4.name':          'Aequitas – Financial Consulting Portal',
    'p4.desc':          'B2B landing page for a credit brokerage firm: fifth-assignment loans, debt consolidation, personal loans and mortgages. Includes an interactive instalment simulator, GDPR/OAM compliance section and lead generation form.',
    'contact.label':    'Contact',
    'contact.title':    'Let\'s talk',
    'contact.sub':      'I\'m available for collaborations, internships, job opportunities or simply to exchange ideas on technology and projects. Don\'t hesitate to reach out.',
    'contact.cv.title': 'Curriculum Vitae',
    'contact.cv.desc':  'Download my updated CV in PDF. Includes education, experience, technical skills and main projects — available in Italian and English.',
    'contact.cv.btn':   'Download CV (PDF)',
    'footer.copy':      '© 2026 <span>Luca Carloni</span> · Made with ☕ and too much terminal',
  }
};

/* ── Apply theme ── */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('lc-theme', theme);
  const isDark = theme === 'dark';
  document.getElementById('icon-sun').style.display   = isDark ? '' : 'none';
  document.getElementById('icon-moon').style.display  = isDark ? 'none' : '';
  document.getElementById('icon-sun-m').style.display  = isDark ? '' : 'none';
  document.getElementById('icon-moon-m').style.display = isDark ? 'none' : '';
}

/* ── Apply language ── */
function applyLang(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = lang;
  localStorage.setItem('lc-lang', lang);
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  const label = lang === 'it' ? 'EN' : 'IT';
  document.getElementById('lang-toggle').textContent        = label;
  document.getElementById('lang-toggle-mobile').textContent = label;
}

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar: hide on scroll down, show on scroll up ── */
  const navbar = document.getElementById('lc-navbar');
  let lastY = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y > 80) {
          navbar.classList.add('scrolled');
          if (y > lastY + 8) {
            navbar.classList.add('hidden-nav');
          } else if (y < lastY - 8) {
            navbar.classList.remove('hidden-nav');
          }
        } else {
          navbar.classList.remove('scrolled', 'hidden-nav');
        }
        lastY = y;
        ticking = false;
      });
      ticking = true;
    }
  });

  /* ── Mobile menu toggle ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  /* ── Typing effect for hero title ── */
  const titles = [
    'Full-Stack Developer',
    'Computer Science Student',
    'Open Source Enthusiast',
    'Problem Solver',
  ];
  const typingEl = document.getElementById('typing-text');
  if (typingEl) {
    let titleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let pause = false;

    function type() {
      if (pause) return;
      const current = titles[titleIdx];

      if (!deleting) {
        typingEl.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          pause = true;
          setTimeout(() => { pause = false; deleting = true; type(); }, 2000);
          return;
        }
        setTimeout(type, 65);
      } else {
        typingEl.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          titleIdx = (titleIdx + 1) % titles.length;
          setTimeout(type, 300);
          return;
        }
        setTimeout(type, 35);
      }
    }
    type();
  }

  /* ── Scroll reveal ── */
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 72; // navbar height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ── Active nav link on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}`
            ? 'var(--text-primary)'
            : '';
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(s => sectionObserver.observe(s));

  /* ── Theme toggle ── */
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('theme-toggle-mobile').addEventListener('click', toggleTheme);

  /* ── Language toggle ── */
  function toggleLang() {
    const current = document.documentElement.getAttribute('data-lang') || 'it';
    applyLang(current === 'it' ? 'en' : 'it');
  }
  document.getElementById('lang-toggle').addEventListener('click', toggleLang);
  document.getElementById('lang-toggle-mobile').addEventListener('click', toggleLang);

  /* ── Initialise theme & lang from localStorage ── */
  const savedTheme = localStorage.getItem('lc-theme') || document.documentElement.getAttribute('data-theme') || 'dark';
  applyTheme(savedTheme);
  const savedLang = localStorage.getItem('lc-lang') || document.documentElement.getAttribute('data-lang') || 'it';
  applyLang(savedLang);

});
