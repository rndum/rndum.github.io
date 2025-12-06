<script setup lang="ts">
defineProps<{
  videos: {
    title: string
    image: string
    link: string
  }[]
}>()
</script>

<template>
  <div class="video-grid">
    <a v-for="video in videos" :key="video.title" :href="video.link" class="video-card">
      <div class="thumbnail-container">
        <img :src="video.image" :alt="video.title" class="thumbnail" />
      </div>
      <div class="title">{{ video.title }}</div>
    </a>
  </div>
</template>

<style scoped>
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.video-card {
  display: block;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.video-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-decoration: none;
}

.thumbnail-container {
  aspect-ratio: 16/9;
  background: #f0f0f0;
  overflow: hidden;
}

.thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  padding: 1rem;
  font-weight: 500;
  font-size: 0.95rem;
}
</style>
