<template>
  <div>
    <Navbar />
    <Hero />
    <div class="container">
      <section class="developers_section">
        <h2 class="section_title">{{ t('developers.title') }}</h2>
        <div class="main_developers">
          <DeveloperCard
            v-for="developer in developers"
            :key="developer.name"
            :developer="developer"
          />
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
// @ts-ignore
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import DeveloperCard from '../components/DeveloperCard.vue'
import Footer from '../components/Footer.vue'
import type { Developer } from '../components/DeveloperCard.vue'

const { t } = useI18n()

const developers: Developer[] = [
  {
    name: 'Limuy',
    avatar: 'https://avatars.githubusercontent.com/u/97649454?v=4',
    roleKey: 'developer.limuy.role',
    bioKey: 'developer.limuy.bio',
    skills: ['Rust', 'Redis'],
    socialLinks: [
      {
        platform: 'github',
        url: '#',
        iconClass: 'fab fa-github'
      }
    ]
  },
  {
    name: 'OMO',
    avatar: 'https://avatars.githubusercontent.com/u/150120115?v=4',
    roleKey: 'developer.omo.role',
    bioKey: 'developer.omo.bio',
    skills: ['Rust', 'E2EE'],
    socialLinks: [
      {
        platform: 'github',
        url: '#',
        iconClass: 'fab fa-github'
      }
    ]
  },
  {
    name: 'senlinjun',
    avatar: 'https://avatars.githubusercontent.com/u/78007298?v=4',
    roleKey: 'developer.senlinjun.role',
    bioKey: 'developer.senlinjun.bio',
    skills: ['Flutter', 'Dart', 'Python', 'UI'],
    socialLinks: [
      {
        platform: 'github',
        url: '#',
        iconClass: 'fab fa-github'
      }
    ]
  }
]
</script>

<style scoped>

</style>