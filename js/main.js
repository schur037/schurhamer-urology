/* ==========================================================================
   main.js — shared navigation, footer, and social configuration
   ========================================================================== */

/* ---- Single source of truth for social handles ----
   To update a handle, change it here once and every link/icon updates. */
const SOCIAL = {
  x: 'beschur',          // X / Twitter handle (no @)
  instagram: 'dr.schurhamer'   // Instagram handle
};

(function () {
  'use strict';

  /* Populate social links from the SOCIAL config.
     Mark links with class js-social-x / js-social-ig in the HTML. */
  function applySocial() {
    document.querySelectorAll('.js-social-x').forEach(function (a) {
      a.href = 'https://x.com/' + SOCIAL.x;
    });
    document.querySelectorAll('.js-social-ig').forEach(function (a) {
      a.href = 'https://instagram.com/' + SOCIAL.instagram;
    });
  }

  /* Mobile navigation toggle */
  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        var open = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
    /* Highlight the current page in the nav */
    var here = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      var target = a.getAttribute('href');
      if (target === here || (here === '' && target === 'index.html')) {
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
      }
    });
  }

  /* Footer year */
  function initYear() {
    document.querySelectorAll('.js-year').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  function init() {
    applySocial();
    initNav();
    initYear();
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
