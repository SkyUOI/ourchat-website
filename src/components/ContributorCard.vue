<template>
  <div class="contributor_card">
    <img :src="contributor.avatar" :alt="contributor.name" class="contributor_avatar" />
    <h3 class="contributor_name">{{ contributor.name }}</h3>
    <p class="contributions">{{ contributor.contributions }}</p>
  </div>
</template>

<script setup>
defineProps({
  contributor: {
    type: Object,
    required: true,
    default: () => ({
      name: '',
      avatar: '',
      contributions: ''
    })
  }
})
</script>

<style scoped>
/* Styles are already in global style.css */
</style>