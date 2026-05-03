/* ============================================================
   NestAway — Main Script
   ============================================================ */

// ── Bootstrap form validation ─────────────────────────────
(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener("submit", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    }, false);
  });
})();

// ── Navbar scroll effect ──────────────────────────────────
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ── Reveal on scroll (IntersectionObserver) ───────────────
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  document.querySelectorAll(".reveal-stagger").forEach((el) => observer.observe(el));

  // Immediately show anything already visible in viewport
  setTimeout(() => {
    document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("visible");
      }
    });
  }, 100);

  // ── Auto-scroll to listings after a search ────────────
  // If URL has ?q= param (search result), scroll listings into view
  const urlParams = new URLSearchParams(window.location.search);
  const hasSearch = urlParams.has('q') && urlParams.get('q').trim() !== '';

  if (hasSearch) {
    // Scroll to listings grid or filter row, with smooth animation
    const scrollTarget = document.getElementById('listingsGrid') 
                      || document.getElementById('filterRow')
                      || document.querySelector('.filter-scroll-wrapper');

    if (scrollTarget) {
      // Small delay so page has time to render
      setTimeout(() => {
        const navH  = document.querySelector('.navbar')?.offsetHeight || 70;
        const top   = scrollTarget.getBoundingClientRect().top + window.scrollY - navH - 24;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      }, 350);
    }
  }
});