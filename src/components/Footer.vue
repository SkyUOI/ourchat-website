<template>
  <footer class="footer">
    <div class="container">
      <img :src="logoPath" alt="Ourchat Logo" height="40" />
      <p class="footer_text">{{ t('footer.text') }}</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  logoVariant: {
    type: String,
    default: 'color', // 'color' or 'white'
    validator: (value) => ['color', 'white'].includes(value)
  }
})

const { t } = useI18n()

const logoPath = computed(() => {
  return props.logoVariant === 'white'
    ? '/resources/images/white.png'
    : '/resources/images/logo.png'
})
</script>

<style scoped>
/* Footer styles are already in global style.css */
</style>