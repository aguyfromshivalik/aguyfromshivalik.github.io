---
layout: page
permalink: /research/
title: Research
description: Reaction dynamics, potential energy surfaces, and a bit of machine learning.
nav: true
nav_order: 2
---

<div class="research-page">

<p class="research-lead">
  Chemical reactions begin with a collision. Most collisions bounce or reshuffle energy;
  a few remake the molecules. I study that last case&mdash;how atoms and small molecules
  rearrange on a potential energy surface&mdash;with classical trajectories, quantum
  wave packets, and tools that make those surfaces easier to build and explore.
</p>

<h2>From surface to dynamics</h2>

<p>
  To follow a reaction, you need the potential energy of the system at every geometry
  the atoms visit. Fitting that landscape into a usable potential energy surface (PES)
  is the bottleneck; running the dynamics on it is the payoff. My PhD work at the
  University of Hyderabad centered on atom&ndash;diatom reactions
  (systems such as H&nbsp;+&nbsp;LiH<sup>+</sup> and He&nbsp;+&nbsp;LiH<sup>+</sup>):
  constructing PESs, then computing state-to-state cross sections and rates with
  time-dependent quantum mechanics and quasi-classical trajectories.
</p>

<p>
  That line of work also asked finer questions&mdash;how reagent vibration and rotation
  steer the outcome, when quantum interference shows up in the mechanism, and how
  isotopic substitution changes the picture.
</p>

<div class="pes-interactive-block">
  <p class="pes-interactive-caption">
    Interactive sketch of the pipeline: build a surface, then watch reactive motion on it.
  </p>
  <div class="pes-interactive-container">
    <iframe
      src="{{ '/assets/html/pes_interactive.html' | relative_url }}"
      title="Interactive 3D potential energy surface: from construction to dynamics"
      loading="lazy"
    ></iframe>
  </div>
</div>

<h2>What I focus on</h2>

<ul class="research-themes">
  <li>
    <strong>Potential energy surfaces</strong> &mdash;
    analytical and data-driven representations that are accurate enough for dynamics
    and fast enough to evaluate on the fly.
  </li>
  <li>
    <strong>State-to-state reaction dynamics</strong> &mdash;
    quantum and classical treatments of small reactive systems, with an eye on
    energy disposal, product distributions, and mechanism.
  </li>
  <li>
    <strong>Tools and ML in chemistry</strong> &mdash;
    software such as
    <a href="https://doi.org/10.1002/jcc.70397">PES-trotter</a>
    for exploring 3D landscapes, and broader interest in where machine learning
    helps (and where it should stay out of the way).
  </li>
</ul>

<h2>Now</h2>

<p>
  At the University of Padova I work with
  <a href="https://sites.google.com/view/sergio-rampino/home">Dr.&nbsp;Sergio Rampino</a>
  on reaction dynamics and on making PES analysis more interactive and portable.
  Details and papers live on the
  <a href="{{ '/publications/' | relative_url }}">Publications</a> page.
</p>

</div>
