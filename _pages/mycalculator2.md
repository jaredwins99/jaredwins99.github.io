---
layout: calculator
permalink: /mycalculator2/
title: "My Calculator 2"
---

<style>
  .stage-canvas {
    position: relative;
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
    background: var(--c-bg);
    overflow: hidden;
  }
  .uni-wrap {
    position: relative;
    width: min(85vmin, 800px);
    aspect-ratio: 600 / 400;
  }
  .uni-wrap > img,
  .uni-wrap > svg {
    width: 100%;
    height: 100%;
    display: block;
  }
  .annot {
    position: absolute;
    font-family: var(--font-brand);
    font-size: 1rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--c-accent);
    white-space: nowrap;
    pointer-events: none;
  }
  .annot .num {
    display: block;
    font-size: 1.6rem;
    color: var(--c-fg);
    letter-spacing: -0.01em;
  }
  .annot::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 1px;
    background: var(--c-accent);
    top: 50%;
  }
  .annot.tl { top: -10%; left: 5%; }
  .annot.tl::after { left: 100%; margin-left: 6px; transform: rotate(20deg); transform-origin: left; }
  .annot.tr { top: -10%; right: 5%; text-align: right; }
  .annot.tr::after { right: 100%; margin-right: 6px; transform: rotate(-20deg); transform-origin: right; }
  .annot.bl { bottom: -10%; left: 10%; }
  .annot.bl::after { left: 100%; margin-left: 6px; transform: rotate(-20deg); transform-origin: left; }
  .annot.br { bottom: -10%; right: 10%; text-align: right; }
  .annot.br::after { right: 100%; margin-right: 6px; transform: rotate(20deg); transform-origin: right; }

  .stage-headline {
    position: absolute;
    top: 6%;
    left: 50%;
    transform: translateX(-50%);
    font-family: var(--font-brand);
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    color: var(--c-fg);
    text-align: center;
    max-width: 80%;
  }
  .stage-sub {
    position: absolute;
    bottom: 6%;
    left: 50%;
    transform: translateX(-50%);
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--c-muted);
    max-width: 28rem;
    text-align: center;
  }

  .animal-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    align-items: end;
    width: min(90vmin, 900px);
  }
  .animal-cell {
    text-align: center;
  }
  .animal-cell .imgwrap {
    height: 140px;
    display: grid;
    place-items: center;
    margin-bottom: 1rem;
  }
  .animal-cell img { max-width: 100%; max-height: 100%; }
  .animal-cell .count {
    font-family: var(--font-brand);
    font-size: clamp(1.6rem, 4vw, 2.6rem);
    color: var(--c-accent);
  }
  .animal-cell .label2 {
    font-family: var(--font-brand);
    font-size: 0.9rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--c-muted);
  }

  .summary-card {
    margin-top: 3rem;
    padding: 2rem;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    text-align: center;
  }
  .summary-card .big {
    font-family: var(--font-brand);
    font-size: clamp(2rem, 5vw, 3.2rem);
    color: var(--c-accent);
    margin: 0.5rem 0;
  }
</style>

<section class="calc-section" id="intro">
  <p class="calc-eyebrow reveal">A university, in animals</p>
  <h2 class="calc-h2 reveal">What does an institution buy in a year?</h2>
  <p class="calc-p reveal">
    A campus is concrete and people. But its food procurement, expressed honestly,
    is also animals. Scroll down to see one university's footprint translated.
  </p>
</section>

<!-- STAGE 1: University with procurement numbers -->
<section data-scroll-pin="true" style="height: 250vh;">
  <div data-scroll-progress class="stage-canvas">
    <div class="stage-headline" data-fade-in-at="0.05">An average university.</div>

    <div class="uni-wrap">
      <img src="{{ '/assets/images/calculator/university.svg' | relative_url }}" alt="university">

      <div class="annot tl" data-fade-in-at="0.30">
        Annual food spend
        <span class="num">$8.2M</span>
      </div>
      <div class="annot tr" data-fade-in-at="0.45">
        Meals served
        <span class="num">3.4M</span>
      </div>
      <div class="annot bl" data-fade-in-at="0.60">
        Beef purchased
        <span class="num">180,000 lb</span>
      </div>
      <div class="annot br" data-fade-in-at="0.75">
        Seafood purchased
        <span class="num">45,000 lb</span>
      </div>
    </div>

    <div class="stage-sub" data-fade-in-at="0.9">These are line items. They translate into something else.</div>
  </div>
</section>

<!-- STAGE 2: Numbers turn into animal counts -->
<section data-scroll-pin="true" style="height: 250vh;">
  <div data-scroll-progress class="stage-canvas">
    <div class="stage-headline" data-fade-in-at="0.05">Translated into animals.</div>

    <div class="animal-grid">
      <div class="animal-cell" data-fade-in-at="0.20">
        <div class="imgwrap"><img src="{{ '/assets/images/calculator/cow.svg' | relative_url }}" alt="cow"></div>
        <div class="count">~ 350</div>
        <div class="label2">cows</div>
      </div>
      <div class="animal-cell" data-fade-in-at="0.45">
        <div class="imgwrap"><img src="{{ '/assets/images/calculator/fish.svg' | relative_url }}" alt="fish"></div>
        <div class="count">~ 12,000</div>
        <div class="label2">fish</div>
      </div>
      <div class="animal-cell" data-fade-in-at="0.70">
        <div class="imgwrap" style="font-size:6rem;">🐔</div>
        <div class="count">~ 50,000</div>
        <div class="label2">chickens</div>
      </div>
    </div>

    <div class="stage-sub" data-fade-in-at="0.9">Per year. From one institution.</div>
  </div>
</section>

<section class="calc-section">
  <p class="calc-eyebrow reveal">The chain</p>
  <h2 class="calc-h2 reveal">A single institution accounts for tens of thousands of lives a year.</h2>
  <p class="calc-p reveal">
    Numbers above are illustrative for the prototype, not sourced. Real
    procurement data, conversion factors, and species-level estimates would
    plug in here. The visual chain — building → dollars → animals — is the point.
  </p>

  <div class="summary-card reveal">
    <div>1 university / year</div>
    <div class="big">≈ 350 cows + 12,000 fish + 50,000 chickens</div>
    <div style="color: var(--c-muted); font-size: 0.9rem;">illustrative figures, prototype only</div>
  </div>

  <p class="calc-p reveal" style="margin-top:2rem;">
    <a href="{{ '/mycalculator/' | relative_url }}">← Back to the burger version</a>
  </p>
</section>
