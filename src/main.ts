import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import i18n, { setLanguage } from './i18n'

// Set initial HTML lang attribute
const savedLanguage = localStorage.getItem('preferredLanguage') || 'en'
const lang = savedLanguage === 'zh' ? 'zh' : 'en'
setLanguage(lang)

createApp(App).use(router).use(i18n).mount('#app')