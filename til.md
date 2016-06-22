---
layout: default
title: TIL
permalink: /til/
order: 1
---

<div class="home">

  <h1 class="page-heading">TIL</h1>

  <div class="box">
    <ul class="post-list">
      {% for post in site.categories.til %}
        <li>
          <div class="post-info-card">
            <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

            <h2 class="post-link">
              <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
            </h2>
          </div>
        </li>
      {% endfor %}
    </ul>
  </div>

</div>
