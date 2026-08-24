/* Air Control — minimal site JS: nav, one-shot scroll-in, email de-obfuscation. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  /* Mobile navigation */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      document.body.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* Scroll-in: opacity + 8px translate, 180ms, once */
  var fx = document.querySelectorAll('.fx');
  if ('IntersectionObserver' in window && fx.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    fx.forEach(function (el) { io.observe(el); });
  } else {
    fx.forEach(function (el) { el.classList.add('in'); });
  }

  /* Email address assembled at runtime — no plain-text mailto in markup */
  document.querySelectorAll('.em-slot').forEach(function (slot) {
    var u = slot.getAttribute('data-u');
    var d = slot.getAttribute('data-d');
    if (!u || !d) return;
    var addr = u + '@' + d;
    var a = document.createElement('a');
    a.href = 'mail' + 'to:' + addr;
    a.textContent = addr;
    slot.textContent = '';
    slot.appendChild(a);
  });
}());
