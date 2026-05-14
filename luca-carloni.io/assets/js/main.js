/* ═══════════════════════════════════════════════════════
   Luca Carloni – Portfolio · main.js
═══════════════════════════════════════════════════════ */

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

});
