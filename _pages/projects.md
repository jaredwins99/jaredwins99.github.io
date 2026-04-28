---
layout: single
permalink: /projects/
title: "Projects"
author_profile: false
---

Here are some projects I've worked on:

## Publications

#### In Preparation

*Estimating the Effect of Introducing Modern Plant-Based Analogs in Restaurants*\
J. Winslow, J. Peacock, J. Dhargawe, H. Sherman, S. Green, M. B. Mathur

*Probing Adaptive Decision-Making Under Uncertainty Using Extended Hidden Markov Models*\
R. Singha, J. Winslow, R. Kim, J. T. Serences, N. Rungratsameetaweemana

#### Under Review

*Asymmetric Social Representations in the Prefrontal Cortex for Cooperative Behavior*\
Y. Cheng, Y. Chen, M. Kwak, R. P. Kempner, R. Singha, J. Winslow, R. Liu, U. Khan, T. Spangler, A. Khan, T. Pereira, M. Whiteway, E. S. Schaffer, N. Rungratsameetaweemana, N. Yang, H. Z. Wu

#### 2025
*Reanalysis of “A Longitudinal Study of Meat Reduction Over Time in the UK”*\
J. Winslow, M. B. Mathur

## RL & Explainable AI

###### Leader-Follower Dynamics in Multi-Agent RL
Does one agent have what it takes to become a leader? The real [research](https://github.com/jaredwins99/marl-leader-follower) questions here are: Can RL agents cooperate? Yes. Do they adopt leader-follower dynamics in our environment? Somewhat. To the extent that mice do? Not at all.

###### Layerwise Relevance Propagation for Feature Networks
Unfortunately, many black-box saliency maps seem to be edge detectors. If a confused model calls a picture of an elephant a giraffe (through adversarial training), and everything in the interpretability method says the model still thinks it's an elephant, it's not a very good [interpretability](https://github.com/jaredwins99/lrp-feature-attribution) method now is it.

## Statistics & Applications

###### ITS with Multilevel Integer-Valued GARCHs 
Aka the [ITSMLZINBINGARCHX](https://github.com/jaredwins99/alt-protein-sales-effects). Thank you Stan for allowing this large, unwieldy model to converge. A win for partial pooling, and a success for classical time series forecasting in balancing interpretability and prediction capability.

###### RAG for Stan Modeling
I'm sure people have tried using RAG with LLMs on more domains and in more ways than I can count, but I still think there may be room on the table for forcing LLMs to use best practices when those standards have already been exhaustively detailed somewhere.

###### Social Ties and the 2025 Presidential Election
Remember that French "whale" who made a fortune on polymarket betting on neighbor polling? Well, let's see whether he was on to something in guessing political affiliations or just on the right side of variance. From our [analysis](https://github.com/jaredwins99/social-ties), it seems social ties seem to reveal at least a small amount information about individuals' politics hidden from standard polling.

###### Cost-Effective Lead Sampling with GPs
I'd say it this is a perfect use [case](https://github.com/jaredwins99/gaussian-processes-xrf-soil-predictions) for high-dimensional Bayesian Gaussian processes, especially when you have few samples. If we can guess where the lead *isn't* in a containment site (and be confident about it) then we don't need to dig it all up.

###### Textbook Parser
Textbooks can sometimes be incredibly uninteractive, and I wanted to change that. So far, breaking down *ELements of Statistical Learning* into [knowledge graphs](https://github.com/jaredwins99/textparse) and interactive visuals seems to be working, albeit with much misplaced emphasis by Claude. It works well as an example since 1) it's very popular, and 2) I know it well to validate.

## Fun Stuff

##### Auto Anki (Chinese Proof-of-Concept)
I've been wanting to make something to [auto-generate](https://github.com/jaredwins99/autoanki) anki cards for a long time, and it works perfectly. Upload a show and it will create single-word cards based on your current vocabulary including video, audio, full text context, and translation.

##### Pokemon TCG Scanner
Pokemon TCG [scanner](https://github.com/jaredwins99/pokemon-tcg-scanner)! I'm surprised by how much other scanners are missing, so that was my focus: multi-card identification, variant detection (e.g., 1st edition), multiple language support, and individual-sales condition-level pricing.

