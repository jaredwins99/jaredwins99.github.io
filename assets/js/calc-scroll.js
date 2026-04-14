(function () {
  'use strict';

  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const state = {
    sections: [],
    visible: new Set(),
    ticking: false,
    io: null,
  };

  function collectSections(root) {
    const nodes = root.querySelectorAll('[data-scroll-pin="true"]');
    const sections = [];
    nodes.forEach((section) => {
      if (!section.classList.contains('scroll-section')) {
        section.classList.add('scroll-section');
      }
      const stage = section.querySelector('[data-scroll-progress]') || section.firstElementChild;
      if (!stage) return;
      stage.classList.add('scroll-stage');

      const splitY = Array.from(stage.querySelectorAll('[data-split-y]')).map((el) => ({
        el,
        n: parseFloat(el.getAttribute('data-split-y')) || 0,
      }));
      const fadeIn = Array.from(stage.querySelectorAll('[data-fade-in-at]')).map((el) => ({
        el,
        at: parseFloat(el.getAttribute('data-fade-in-at')) || 0,
      }));
      const morphOut = Array.from(stage.querySelectorAll('[data-morph-out-at]')).map((el) => ({
        el,
        at: parseFloat(el.getAttribute('data-morph-out-at')) || 0,
      }));
      const morphIn = Array.from(stage.querySelectorAll('[data-morph-in-at]')).map((el) => ({
        el,
        at: parseFloat(el.getAttribute('data-morph-in-at')) || 0,
      }));

      sections.push({ section, stage, splitY, fadeIn, morphOut, morphIn });
    });
    return sections;
  }

  function computeProgress(section) {
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    const travel = section.offsetHeight - vh;
    if (travel <= 0) return rect.top <= 0 ? 1 : 0;
    return clamp(-rect.top / travel, 0, 1);
  }

  function applyFrame(entry) {
    const { section, stage, splitY, fadeIn, morphOut, morphIn } = entry;
    let p = computeProgress(section);

    if (prefersReducedMotion) {
      p = p >= 0.5 ? 1 : 0;
    }

    stage.style.setProperty('--p', p.toFixed(4));
    stage.setAttribute('data-progress', p.toFixed(2));

    if (prefersReducedMotion) {
      splitY.forEach(({ el }) => { el.style.transform = ''; });
      fadeIn.forEach(({ el, at }) => {
        const on = p >= at;
        el.style.opacity = on ? '1' : '0';
        el.style.transform = on ? 'translateY(0)' : 'translateY(12px)';
      });
      morphOut.forEach(({ el, at }) => {
        const gone = p >= at;
        el.style.opacity = gone ? '0' : '1';
        el.style.transform = gone ? 'scale(0.9)' : 'scale(1)';
      });
      morphIn.forEach(({ el, at }) => {
        const on = p >= at;
        el.style.opacity = on ? '1' : '0';
        el.style.transform = on ? 'scale(1)' : 'scale(1.05)';
      });
      return;
    }

    splitY.forEach(({ el, n }) => {
      const offset = n * 100 * p;
      el.style.transform = `translateY(${offset}px)`;
    });

    fadeIn.forEach(({ el, at }) => {
      const span = 0.15;
      const t = clamp((p - at) / span, 0, 1);
      el.style.opacity = String(t);
      el.style.transform = `translateY(${(1 - t) * 12}px)`;
    });

    morphOut.forEach(({ el, at }) => {
      const span = 0.12;
      const t = clamp((p - (at - span)) / span, 0, 1);
      el.style.opacity = String(1 - t);
      el.style.transform = `scale(${1 - t * 0.1})`;
    });

    morphIn.forEach(({ el, at }) => {
      const span = 0.12;
      const t = clamp((p - at) / span, 0, 1);
      el.style.opacity = String(t);
      el.style.transform = `scale(${1.05 - t * 0.05})`;
    });
  }

  function tick() {
    state.ticking = false;
    state.visible.forEach((entry) => applyFrame(entry));
  }

  function onScroll() {
    if (state.ticking) return;
    state.ticking = true;
    requestAnimationFrame(tick);
  }

  function setupObserver() {
    if (state.io) state.io.disconnect();
    state.io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const entry = state.sections.find((s) => s.section === e.target);
        if (!entry) return;
        if (e.isIntersecting) {
          state.visible.add(entry);
          applyFrame(entry);
        } else {
          state.visible.delete(entry);
        }
      });
    }, { rootMargin: '0px', threshold: 0 });

    state.sections.forEach((entry) => state.io.observe(entry.section));
  }

  function init(root) {
    const scope = root || document;
    state.sections = collectSections(scope);
    state.visible.clear();
    setupObserver();
    state.sections.forEach(applyFrame);
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
  }

  function refresh() {
    init(document);
  }

  window.CalcScroll = { init, refresh };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => init(document));
  } else {
    init(document);
  }
})();
