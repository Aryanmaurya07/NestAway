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
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ── Reveal on scroll (IntersectionObserver) ───────────────
// This makes .reveal and .reveal-stagger elements animate in
// WITHOUT this, everything stays at opacity:0 and is invisible!
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.08 }
  );

  // Observe all .reveal elements
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Observe all .reveal-stagger elements
  document.querySelectorAll(".reveal-stagger").forEach((el) => observer.observe(el));

  // Also immediately make visible anything already in viewport on load
  setTimeout(() => {
    document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("visible");
      }
    });
  }, 100);
});
