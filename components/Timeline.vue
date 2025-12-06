<script setup lang="ts">
defineProps<{
  items: {
    year: string
    logo: string
    content: string
  }[]
}>()
</script>

<template>
  <div class="timeline">
    <div v-for="(item, index) in items" :key="index" class="timeline-item">
      <div class="year">{{ item.year }}</div>
      <div class="marker">
        <div class="dot"></div>
        <div class="line" v-if="index !== items.length - 1"></div>
      </div>
      <div class="content local-flex">
         <img :src="item.logo" alt="logo" class="logo" />
         <div v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  display: flex;
  flex-direction: column;
}

.timeline-item {
  display: flex;
  gap: 1.5rem;
  position: relative;
  padding-bottom: 2rem;
}

.year {
  width: 100px;
  text-align: right;
  font-size: 0.9rem;
  color: #888;
  flex-shrink: 0;
  padding-top: 5px; 
}

.marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20px;
  flex-shrink: 0;
  padding-top: 8px; /* Alignment with text */
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ddd;
}

.line {
  width: 1px;
  background-color: #ddd;
  flex-grow: 1;
  margin-top: 5px;
  min-height: 50px;
}

.content {
  flex-grow: 1;
  padding-bottom: 1rem;
}

.local-flex {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
}

.logo {
    width: 50px;
    height: 50px;
    object-fit: contain;
    border-radius: 4px;
}

@media (max-width: 600px) {
  .timeline-item {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .year {
    text-align: left;
    width: auto;
  }
  
  .marker {
    display: none; /* Hide vertical line on mobile for simpler layout */
  }
}
</style>
