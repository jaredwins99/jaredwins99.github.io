---
layout: calculator
permalink: /mycalculator/
title: "My Calculator"
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
  .burger-wrap {
    position: relative;
    width: min(60vmin, 480px);
    height: min(60vmin, 480px);
  }
  .burger-wrap .layer {
    position: absolute;
    inset: 0;
    will-change: transform;
  }
  .burger-wrap .layer svg {
    width: 100%;
    height: 100%;
    display: block;
  }
  .label {
    position: absolute;
    font-family: var(--font-brand);
    font-size: 0.95rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--c-accent);
    white-space: nowrap;
    pointer-events: none;
    z-index: 5;
  }
  .label::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 50px;
    height: 1px;
    background: var(--c-accent);
  }
  .label.left { right: calc(100% + 60px); text-align: right; }
  .label.left::after { left: 100%; margin-left: 6px; }
  .label.right { left: calc(100% + 60px); text-align: left; }
  .label.right::after { right: 100%; margin-right: 6px; }

  .morph-stage {
    position: relative;
    width: min(80vmin, 700px);
    height: min(60vmin, 500px);
  }
  .morph-item {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
  }
  .morph-item img,
  .morph-item svg { max-width: 60%; max-height: 100%; }

  .fish-cluster {
    position: absolute;
    bottom: 5%;
    left: 5%;
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .fish-cluster img { width: 110px; height: auto; }

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
    right: 5%;
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--c-muted);
    max-width: 18rem;
    text-align: right;
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
  <p class="calc-eyebrow reveal">A burger, taken apart</p>
  <h2 class="calc-h2 reveal">What is one burger, really?</h2>
  <p class="calc-p reveal">
    Scroll down. A single burger comes apart, then becomes the animals it
    actually represents. Numbers here are illustrative — the point is the chain.
  </p>
</section>

<!-- STAGE 1: Burger splits into ingredients -->
<section data-scroll-pin="true" style="height: 300vh;">
  <div data-scroll-progress class="stage-canvas">
    <div class="stage-headline" data-fade-in-at="0.05">A burger has parts.</div>

    <div class="burger-wrap">
      <div class="layer" data-split-y="-2.6">
        <svg viewBox="0 0 400 400"><use href="{{ '/assets/images/calculator/burger.svg' | relative_url }}#bun-top"/></svg>
        <span class="label left" style="top: 33%;" data-fade-in-at="0.30">Bun (top)</span>
      </div>
      <div class="layer" data-split-y="-1.4">
        <svg viewBox="0 0 400 400"><use href="{{ '/assets/images/calculator/burger.svg' | relative_url }}#lettuce"/></svg>
        <span class="label right" style="top: 47%;" data-fade-in-at="0.40">Lettuce</span>
      </div>
      <div class="layer" data-split-y="-0.4">
        <svg viewBox="0 0 400 400"><use href="{{ '/assets/images/calculator/burger.svg' | relative_url }}#tomato"/></svg>
        <span class="label left" style="top: 53%;" data-fade-in-at="0.50">Tomato</span>
      </div>
      <div class="layer" data-split-y="0.6">
        <svg viewBox="0 0 400 400"><use href="{{ '/assets/images/calculator/burger.svg' | relative_url }}#cheese"/></svg>
        <span class="label right" style="top: 60%;" data-fade-in-at="0.60">Cheese</span>
      </div>
      <div class="layer" data-split-y="1.6">
        <svg viewBox="0 0 400 400"><use href="{{ '/assets/images/calculator/burger.svg' | relative_url }}#patty"/></svg>
        <span class="label left" style="top: 67%;" data-fade-in-at="0.70">Patty</span>
      </div>
      <div class="layer" data-split-y="2.6">
        <svg viewBox="0 0 400 400"><use href="{{ '/assets/images/calculator/burger.svg' | relative_url }}#bun-bottom"/></svg>
        <span class="label right" style="top: 76%;" data-fade-in-at="0.80">Bun (bottom)</span>
      </div>
    </div>

    <div class="stage-sub" data-fade-in-at="0.9">The patty is the part that came from an animal.</div>
  </div>
</section>

<!-- STAGE 2: Patty becomes a cow, then fish appear -->
<section data-scroll-pin="true" style="height: 250vh;">
  <div data-scroll-progress class="stage-canvas">
    <div class="stage-headline" data-fade-in-at="0.05">The patty was a cow.</div>

    <div class="morph-stage">
      <div class="morph-item" data-morph-out-at="0.30">
        <svg viewBox="0 0 400 400" style="width:35%;"><use href="{{ '/assets/images/calculator/burger.svg' | relative_url }}#patty"/></svg>
      </div>
      <div class="morph-item" data-morph-in-at="0.30">
        <img src="{{ '/assets/images/calculator/cow.svg' | relative_url }}" alt="cow">
      </div>

      <div class="fish-cluster" data-fade-in-at="0.60">
        <img src="{{ '/assets/images/calculator/fish.svg' | relative_url }}" alt="fish">
        <img src="{{ '/assets/images/calculator/fish.svg' | relative_url }}" alt="fish">
        <img src="{{ '/assets/images/calculator/fish.svg' | relative_url }}" alt="fish">
      </div>
    </div>

    <div class="stage-sub" data-fade-in-at="0.6">The cow ate fishmeal. Three fish per patty (illustrative).</div>
  </div>
</section>

<section class="calc-section">
  <p class="calc-eyebrow reveal">The chain</p>
  <h2 class="calc-h2 reveal">One burger ≈ one cow's worth of patty + fish in feed.</h2>
  <p class="calc-p reveal">
    Scaled to a single meal, the picture is small. Scaled to a year, a
    cafeteria, or a city, the same chain stretches into thousands of animals.
    The next page applies it to a university.
  </p>

  <div class="summary-card reveal">
    <div>1 burger</div>
    <div class="big">≈ 1 cow + 3 fish</div>
    <div style="color: var(--c-muted); font-size: 0.9rem;">illustrative; not literal per-burger</div>
  </div>

  <p class="calc-p reveal" style="margin-top:2rem;">
    <a href="{{ '/mycalculator2/' | relative_url }}">→ Try the university version</a>
  </p>
</section>
