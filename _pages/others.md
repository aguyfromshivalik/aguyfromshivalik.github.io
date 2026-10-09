---
layout: page
title: Others
permalink: /others/
description: Life outside of the lab
nav: true
nav_order: 10
---
<div class="others-grid">
  {% assign sections = site.pages | where: "others_section", true | sort: "others_order" %}
  {% for section in sections %}
    <a class="others-tile" href="{{ section.url | relative_url }}">
      <span class="others-tile-media">
        <img src="{{ section.img | relative_url }}" alt="">
      </span>
      <span class="others-tile-title">{{ section.title }}</span>
    </a>
  {% endfor %}
</div>
