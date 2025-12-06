<template>
  <div class="nav_bar" :class="{ scrolled: isScrolled }" id="navBar">
    <a
      ><img src="/resources/images/logo.png" alt="OurChat Logo" class="logo"
    /></a>
    <div class="nav_buttons">
      <button
        v-if="showLanguageSwitcher"
        id="language-switcher"
        class="nav_button language-switcher"
        @click="toggleLanguage"
      >
        {{ languageButtonText }}
      </button>
      <a href="https://ourchat.rtfd.io/" target="_blank">
        <span class="iconfont nav_button">&#xe520;</span>
      </a>
      <a href="https://github.com/SkyUOI/OurChat" target="_blank">
        <span class="iconfont nav_button">&#xe885;</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import { setLanguage } from "../i18n";

const props = withDefaults(defineProps<{
  showLanguageSwitcher?: boolean
}>(), {
  showLanguageSwitcher: true,
});

const { locale } = useI18n();
const isScrolled = ref(false);

const toggleLanguage = (): void => {
  const newLang = locale.value === "en" ? "zh" : "en";
  setLanguage(newLang);
};

const languageButtonText = computed(() => {
  return locale.value === "en" ? "中文" : "English";
});

const handleScroll = (): void => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // Initial check
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>

</style>
