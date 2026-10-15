/* =========================================================
   script.js | Nnenna's Chips (all pages)
   Replaces: home.js, our-flavours.js, the-process.js,
             about-us.js, learn-more.js
   Each <body> has a data-page attribute that decides which
   page code runs, so nothing leaks onto the wrong page.
   ========================================================= */

/* ---------- 1. Tailwind config (was duplicated in all 5 files) ---------- */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "tertiary-container": "#90d928",
        "inverse-surface": "#412c18",
        "primary": "#7c5800",
        "on-secondary-fixed-variant": "#93000d",
        "on-primary-container": "#6b4c00",
        "background": "#fff8f5",
        "secondary-fixed": "#ffdad6",
        "primary-fixed": "#ffdea8",
        "secondary-container": "#e51d24",
        "on-error-container": "#93000a",
        "on-primary-fixed-variant": "#5e4200",
        "error": "#ba1a1a",
        "tertiary": "#416900",
        "on-background": "#291806",
        "on-primary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "surface": "#fff8f5",
        "on-secondary-fixed": "#410002",
        "inverse-on-surface": "#ffeee1",
        "on-tertiary-container": "#375b00",
        "tertiary-fixed-dim": "#91db2a",
        "surface-variant": "#ffdcbe",
        "on-primary-fixed": "#271900",
        "outline": "#837560",
        "secondary": "#bb0014",
        "on-secondary-container": "#fffbff",
        "error-container": "#ffdad6",
        "surface-container-high": "#ffe3cc",
        "on-error": "#ffffff",
        "tertiary-fixed": "#acf847",
        "on-tertiary-fixed": "#102000",
        "on-surface": "#291806",
        "surface-container-highest": "#ffdcbe",
        "surface-bright": "#fff8f5",
        "on-surface-variant": "#514532",
        "secondary-fixed-dim": "#ffb4ac",
        "outline-variant": "#d5c4ab",
        "primary-fixed-dim": "#ffba20",
        "surface-tint": "#7c5800",
        "on-secondary": "#ffffff",
        "surface-dim": "#f6d4b6",
        "inverse-primary": "#ffba20",
        "primary-container": "#ffb800",
        "surface-container-low": "#fff1e7",
        "on-tertiary-fixed-variant": "#304f00",
        "surface-container": "#ffeada",
        "on-tertiary": "#ffffff"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "section-gap": "80px",
        "margin-mobile": "16px",
        "container-max": "1280px",
        "stack-lg": "24px",
        "stack-sm": "4px",
        "stack-md": "12px",
        "base": "8px",
        "gutter": "24px"
      },
      "fontFamily": {
        "body-md": ["Be Vietnam Pro"],
        "headline-md": ["Bricolage Grotesque"],
        "body-lg": ["Be Vietnam Pro"],
        "headline-lg-mobile": ["Bricolage Grotesque"],
        "display-lg": ["Bricolage Grotesque"],
        "headline-lg": ["Bricolage Grotesque"],
        "label-bold": ["Space Grotesk"],
        "label-sm": ["Space Grotesk"]
      },
      "fontSize": {
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "headline-md": ["32px", { "lineHeight": "40px", "fontWeight": "700" }],
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "headline-lg-mobile": ["36px", { "lineHeight": "40px", "fontWeight": "800" }],
        "display-lg": ["80px", { "lineHeight": "88px", "letterSpacing": "-0.04em", "fontWeight": "800" }],
        "headline-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
        "label-bold": ["14px", { "lineHeight": "20px", "fontWeight": "700" }],
        "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }]
      }
    }
  }
};


/* ---------- 2. Shared helper ---------- */

/* Fade and slide elements in as they scroll into view. */
function revealOnScroll(selector, threshold, hiddenClass) {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', hiddenClass);
      }
    });
  }, { threshold: threshold });

  document.querySelectorAll(selector).forEach(function (el) {
    el.classList.add('transition-all', 'duration-700', 'opacity-0', hiddenClass);
    observer.observe(el);
  });
}


/* ---------- 3. Page code ---------- */

var pages = {

  /* home.html */
  home: function () {
    revealOnScroll('.grid > div, .columns-1 > div', 0.1, 'translate-y-10');
    console.log("Chip's Loaded - Stay Crunchy!");
  },

  /* about-us.html */
  about: function () {
    // Buttons "press in" while held down
    var press = ['translate-x-[2px]', 'translate-y-[2px]', 'shadow-none'];
    document.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('mousedown', function () { btn.classList.add.apply(btn.classList, press); });
      btn.addEventListener('mouseup', function () { btn.classList.remove.apply(btn.classList, press); });
      btn.addEventListener('mouseleave', function () { btn.classList.remove.apply(btn.classList, press); });
    });
    revealOnScroll('section > div', 0.1, 'translate-y-10');
  },

  /* the-process.html */
  process: function () {
    revealOnScroll('section > div', 0.2, 'translate-y-12');
  },

  /* learn-more.html */
  learn: function () {
    // Slight random tilt on hover for a tactile feel
    document.querySelectorAll('.hard-shadow-hover').forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        var rot = (Math.random() * 2 - 1).toFixed(1);
        el.style.transform = 'rotate(' + rot + 'deg) translate(-2px, -2px)';
      });
      el.addEventListener('mouseleave', function () {
        el.style.transform = 'rotate(0deg) translate(0, 0)';
      });
    });
  },

  /* our-flavours.html */
  flavours: function () {
    // Springy hover transition on every button
    document.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('mouseenter', function () {
        btn.style.transition = 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
      });
    });

    // Filter buttons: highlight the chosen one (visual only, it does not hide cards yet)
    document.querySelectorAll('button[class*="rounded-xl"]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var parent = btn.parentElement;
        parent.querySelectorAll('button').forEach(function (b) {
          b.classList.remove('bg-secondary', 'bg-primary', 'text-on-secondary', 'text-on-primary');
          b.classList.add('bg-surface-container-highest', 'text-on-surface-variant');
        });
        var isHeat = parent.textContent.includes('Heat');
        btn.classList.remove('bg-surface-container-highest', 'text-on-surface-variant');
        btn.classList.add(isHeat ? 'bg-secondary' : 'bg-primary', isHeat ? 'text-on-secondary' : 'text-on-primary');
      });
    });
  }
};


/* ---------- 4. Run the code for the current page ---------- */

function currentPage() {
  var tagged = document.body && document.body.getAttribute('data-page');
  if (tagged) return tagged;
  // Fallback: work it out from the file name
  var file = location.pathname.split('/').pop().replace('.html', '');
  return {
    'home': 'home',
    'about-us': 'about',
    'the-process': 'process',
    'learn-more': 'learn',
    'our-flavours': 'flavours'
  }[file];
}

document.addEventListener('DOMContentLoaded', function () {
  var run = pages[currentPage()];
  if (run) run();
});
