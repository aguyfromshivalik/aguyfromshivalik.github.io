---
layout: page
permalink: /research/
title: Research
description: # News
nav: true
nav_order: 2
---

<p style="text-align:justify;">
  Collision between the two chemical species is the necessary condition for the reactions.
  Any collision event can result into elastic, inelastic, and reactive outcomes. In the case
  of first two (elastic and inelastic) events, the reactants don't change their chemical form,
  whereas in the third, reactants transform to different chemical species. My PhD research
  was focused on the
  <u>theoretical study of reactive collision between atom and diatom pair</u>.
  This requires solving either the classical or quantum equations of motion for the
  reaction system. <br>

  However, computationally, it is not an easy task and requires accurate and instantaneous
  calculation of potential energes (or forces) of the chemical system at different spatial
  configurations in time. This generates a need to find an analytical equation of potential
  as a function of spatial configuration of the system, a process which is termed as
  construction of potential energy surface (PES). This is an important and still evolving
  field of research. <u>Construction of PES</u> using machine learning and non-machine
  learning methods was also explored during my PhD work.
</p>


<!-- =========================================================
     INTERACTIVE POTENTIAL ENERGY SURFACE
     ========================================================= -->

<div class="pes-interactive-container">

  <iframe
    src="{{ '/assets/html/pes_interactive.html' | relative_url }}"
    title="Interactive 3D Potential Energy Surface construction to dynamics"
    loading="lazy">
  </iframe>

</div>


<!-- =========================================================
     STYLES FOR INTERACTIVE PES
     ========================================================= -->

<style>

  .pes-interactive-container {
    width: 100%;
    margin: 1.8em 0 2.2em 0;
    overflow: hidden;
    border-radius: 14px;
  }

  .pes-interactive-container iframe {
    display: block;
    width: 100%;
    height: 650px;
    border: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }


  /* Tablet */
  @media (max-width: 900px) {

    .pes-interactive-container iframe {
      height: 620px;
    }

  }


  /* Mobile */
  @media (max-width: 600px) {

    .pes-interactive-container {
      margin-top: 1.2em;
      margin-bottom: 1.8em;
      border-radius: 10px;
    }

    .pes-interactive-container iframe {
      height: 560px;
    }

  }

</style>
