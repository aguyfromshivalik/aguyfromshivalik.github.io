---
layout: page
title: Memories
permalink: /memories/
description: Places and people along the way.
nav: true
nav_order: 9
---

<div class="memories-page">
  {% for place in site.data.photos %}
    <section class="memories-place" data-place="{{ place.id }}">
      <header class="memories-place-header">
        <h2>{{ place.title }}</h2>
        {% if place.subtitle %}<p class="memories-place-sub">{{ place.subtitle }}</p>{% endif %}
      </header>

      {% if place.photos and place.photos.size > 0 %}
        <div class="memories-strip" aria-label="{{ place.title }} photos">
          <button type="button" class="memories-nav memories-prev" aria-label="Scroll left">‹</button>
          <div class="memories-track" tabindex="0">
            {% for photo in place.photos %}
              {% capture photo_path %}/assets/img/memories/{{ place.id }}/{{ photo.file }}{% endcapture %}
              <button
                type="button"
                class="memories-thumb"
                data-full="{{ photo_path | relative_url }}"
                data-alt="{{ photo.alt | default: place.title }}"
                aria-label="Show {{ photo.alt | default: 'photo' }}"
              >
                <img
                  src="{{ photo_path | relative_url }}"
                  alt="{{ photo.alt | default: place.title }}"
                  loading="lazy"
                  width="{{ photo.width }}"
                  height="{{ photo.height }}"
                >
              </button>
            {% endfor %}
          </div>
          <button type="button" class="memories-nav memories-next" aria-label="Scroll right">›</button>
        </div>

        <div class="memories-stage" hidden>
          <div class="memories-stage-frame">
            <button type="button" class="memories-stage-nav memories-stage-prev" aria-label="Previous photo">‹</button>
            <div class="memories-stage-viewport">
              <img src="" alt="" class="memories-stage-img">
            </div>
            <button type="button" class="memories-stage-nav memories-stage-next" aria-label="Next photo">›</button>
          </div>
          <button type="button" class="memories-stage-close" aria-label="Close photo">Close</button>
        </div>
      {% else %}
        <p class="memories-empty">Photos coming soon.</p>
      {% endif %}
    </section>
  {% endfor %}
</div>

<script>
  (function () {
    document.querySelectorAll('.memories-strip').forEach(function (strip) {
      var track = strip.querySelector('.memories-track');
      var prev = strip.querySelector('.memories-prev');
      var next = strip.querySelector('.memories-next');
      if (!track || !prev || !next) return;
      var step = function () {
        return Math.max(220, Math.floor(track.clientWidth * 0.75));
      };
      prev.addEventListener('click', function () {
        track.scrollBy({ left: -step(), behavior: 'smooth' });
      });
      next.addEventListener('click', function () {
        track.scrollBy({ left: step(), behavior: 'smooth' });
      });
    });

    var activePlace = null;

    document.querySelectorAll('.memories-place').forEach(function (place) {
      var thumbs = Array.prototype.slice.call(place.querySelectorAll('.memories-thumb'));
      var stage = place.querySelector('.memories-stage');
      var stageImg = place.querySelector('.memories-stage-img');
      var closeBtn = place.querySelector('.memories-stage-close');
      var stagePrev = place.querySelector('.memories-stage-prev');
      var stageNext = place.querySelector('.memories-stage-next');
      if (!stage || !stageImg || !closeBtn || !thumbs.length) return;

      var index = 0;

      function show(i) {
        if (!thumbs.length) return;
        index = (i + thumbs.length) % thumbs.length;
        var btn = thumbs[index];
        stageImg.src = btn.getAttribute('data-full');
        stageImg.alt = btn.getAttribute('data-alt') || '';
        stage.hidden = false;
        activePlace = place;
        thumbs.forEach(function (el) {
          el.classList.toggle('is-active', el === btn);
        });
        btn.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
        stage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      function closeStage() {
        stage.hidden = true;
        stageImg.removeAttribute('src');
        thumbs.forEach(function (el) {
          el.classList.remove('is-active');
        });
        if (activePlace === place) activePlace = null;
      }

      place._memoriesShow = show;
      place._memoriesClose = closeStage;
      place._memoriesIndex = function () {
        return index;
      };

      thumbs.forEach(function (btn, i) {
        btn.addEventListener('click', function () {
          show(i);
        });
      });

      if (stagePrev) {
        stagePrev.addEventListener('click', function () {
          show(index - 1);
        });
      }
      if (stageNext) {
        stageNext.addEventListener('click', function () {
          show(index + 1);
        });
      }
      closeBtn.addEventListener('click', closeStage);
    });

    document.addEventListener('keydown', function (e) {
      if (!activePlace || !activePlace._memoriesShow) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        activePlace._memoriesShow(activePlace._memoriesIndex() - 1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        activePlace._memoriesShow(activePlace._memoriesIndex() + 1);
      } else if (e.key === 'Escape') {
        activePlace._memoriesClose();
      }
    });
  })();
</script>
