---
layout: page
---

<script setup>
import profile from './data/profile.json'
import timeline from './data/timeline.json'
import videos from './data/talks.json'
</script>

<div class="container">
  <ProfileHeader :profile="profile" />

  <Timeline :items="timeline" />
  
  <br><br>

  <div class="section-title">featured talks</div>
  <VideoGrid :videos="videos" />
</div>
