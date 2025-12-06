<template>
  <div class="developer_card">
    <div class="card_header">
      <img :src="developer.avatar" :alt="developer.name" class="developer_avatar" />
      <h3 class="developer_name">{{ developer.name }}</h3>
      <p class="developer_role">{{ roleText }}</p>
    </div>
    <div class="card_body">
      <p class="developer_bio">{{ bioText }}</p>
      <div class="developer_skills">
        <span v-for="skill in developer.skills" :key="skill" class="skill_tag">
          {{ skill }}
        </span>
      </div>
      <div class="social_links">
        <a
          v-for="link in developer.socialLinks"
          :key="link.platform"
          :href="link.url"
          class="social_link"
          target="_blank"
        >
          <i :class="link.iconClass"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export interface SocialLink {
  platform: string
  url: string
  iconClass: string
}

export interface Developer {
  name: string
  avatar: string
  role?: string
  bio?: string
  roleKey: string
  bioKey: string
  skills: string[]
  socialLinks: SocialLink[]
}

const props = withDefaults(defineProps<{
  developer: Developer
}>(), {
  developer: () => ({
    name: '',
    avatar: '',
    role: '',
    bio: '',
    roleKey: '',
    bioKey: '',
    skills: [],
    socialLinks: []
  })
})

const { t } = useI18n()

const roleText = computed(() => {
  return props.developer.role || (props.developer.roleKey ? t(props.developer.roleKey) : '')
})

const bioText = computed(() => {
  return props.developer.bio || (props.developer.bioKey ? t(props.developer.bioKey) : '')
})
</script>

<style scoped>

</style>