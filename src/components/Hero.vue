<template>
  <div class="hero_section">
    <div class="bg_decoration"></div>
    <div class="bg_decoration"></div>

    <div class="hero_content">
      <div class="hero_logos">
        <img class="hero_logo" src="/resources/images/white.png" alt="Ourchat Icon" />
        <img class="hero_logo" src="/resources/images/logo_text.png" alt="Ourchat Text Logo" />
        <img class="hero_logo" src="/resources/images/green.png" alt="Ourchat Icon" />
      </div>

      <h1 class="hero_title">{{ t('hero.title') }}</h1>
      <p class="hero_subtitle">{{ t('hero.subtitle') }}</p>

      <div class="hero_buttons">
        <a href="https://ourchat.rtfd.io/" target="_blank">
          <button class="white_button">
            {{ t('hero.docs') }}
            <span class="iconfont">&#xe520;</span>
          </button>
        </a>
        <div class="download_dropdown">
          <button class="green_button">
            {{ t('hero.download') }}
            <span class="iconfont">&#xe606;</span>
          </button>
          <div class="dropdown_content">
            <a
              href="https://github.com/SkyUOI/OurChat/releases"
              target="_blank"
              >{{ t('hero.github') }}</a
            >
            <a
              href="https://gitee.com/SkyUOI/OurChat/releases"
              target="_blank"
              >{{ t('hero.gitee') }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
/* Styles are already in global style.css */
</style>