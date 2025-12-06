<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps<{
  profile: {
    name: string
    tagline: string
    avatar: string
    socials: { icon: string; link: string }[]
    bio: string
  }
}>()
</script>

<template>
  <div class="profile-header">
    <div class="avatar-container">
      <img :src="profile.avatar" :alt="profile.name" class="avatar" />
    </div>
    <div class="info">
      <h1>{{ profile.name }}</h1>
      <p class="tagline" v-html="profile.tagline"></p>
      
      <div class="socials">
        <a v-for="social in profile.socials" :key="social.link" :href="social.link" target="_blank" rel="noopener noreferrer" class="social-link">
          <!-- GitHub SVG icon -->
          <svg v-if="social.icon === 'github'" height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          <!-- Email icon -->
          <span v-else-if="social.icon === 'email'" class="email-icon">✉️</span>
          <!-- Blog/RSS icon -->
          <svg v-else-if="social.icon === 'blog'" height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1 0-2zm0 4a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1 0-2zm.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
          </svg>
          <!-- Fallback -->
          <span v-else>{{ social.icon }}</span>
        </a>
      </div>
    </div>
  </div>
  
  <div class="bio-section">
    <p>{{ profile.bio }}</p>
  </div>
</template>

<style scoped>
.profile-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

@media (max-width: 600px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
  }
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

h1 {
  margin: 0;
  font-size: 2.5rem;
  line-height: 1.2;
}

.tagline {
  font-style: italic;
  color: var(--vp-c-text-2);
  margin-top: 0.5rem;
}

.socials {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  color: var(--vp-c-text-1);
  transition: color 0.2s;
}

.social-link:hover {
  color: var(--vp-c-brand);
}

.email-icon {
  font-size: 1.25rem;
  line-height: 1;
  display: inline-block;
}

/* Icon placeholders - in real app, use SVG or FontAwesome */
.icon-twitter::before { content: '🐦'; }
.icon-github::before { content: '🐙'; }
.icon-rss::before { content: ''; }
.bio-section {
  margin-bottom: 3rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 2rem;
}
</style>
