---
layout: calculator
permalink: /calculator/
title: "Calculator"
---

<section class="calc-section" id="intro">
  <p class="calc-eyebrow reveal">The premise</p>
  <h2 class="calc-h2 reveal">Some questions don't yield to intuition.</h2>
  <p class="calc-p reveal">
    Numbers can change how a question feels. This page is a sandbox for a tool
    that turns a few inputs into a single, legible answer — a starting point
    for thinking, not the final word.
  </p>
</section>

<section class="calc-section calc-section--alt">
  <div class="calc-inner">
    <p class="calc-eyebrow reveal">The tool</p>
    <h2 class="calc-h2 reveal">Try it.</h2>
    <p class="calc-p reveal">Adjust the inputs below. The result updates live.</p>

    <div class="calc-tool reveal">
      <div class="calc-tool__row">
        <label class="calc-tool__label" for="input-a">Input A</label>
        <input class="calc-tool__input" type="number" id="input-a" value="10">
      </div>
      <div class="calc-tool__row">
        <label class="calc-tool__label" for="input-b">Input B</label>
        <input class="calc-tool__input" type="number" id="input-b" value="5">
      </div>
      <div class="calc-tool__row">
        <label class="calc-tool__label" for="input-c">Multiplier</label>
        <input class="calc-tool__input" type="number" step="0.1" id="input-c" value="1.5">
      </div>
      <div class="calc-tool__result">
        <span class="calc-tool__result-label">Result</span>
        <span class="calc-tool__result-value" id="result">22.5</span>
      </div>
    </div>
  </div>
</section>

<section class="calc-section">
  <p class="calc-eyebrow reveal">What's next</p>
  <h2 class="calc-h2 reveal">This is a prototype.</h2>
  <p class="calc-p reveal">
    The visual scaffolding is in place. Swap in real inputs, real math, and
    real copy as the design solidifies.
  </p>
</section>

<script>
  const a = document.getElementById('input-a');
  const b = document.getElementById('input-b');
  const c = document.getElementById('input-c');
  const out = document.getElementById('result');
  function recalc() {
    const v = (Number(a.value) + Number(b.value)) * Number(c.value);
    out.textContent = Number.isFinite(v) ? v.toLocaleString(undefined, { maximumFractionDigits: 2 }) : '—';
  }
  [a, b, c].forEach(el => el.addEventListener('input', recalc));
  recalc();
</script>
