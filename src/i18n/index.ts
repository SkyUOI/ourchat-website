import { createI18n } from "vue-i18n";

// Import translation messages
const messages = {
  en: {
    // Navigation
    "nav.docs": "Documentation",
    "nav.github": "GitHub",

    // Hero section
    "hero.title": "Connect Every Important Moment",
    "hero.subtitle":
      "OurChat is a secure, efficient instant messaging app that keeps you connected with friends and family, sharing every wonderful moment in life.",
    "hero.docs": "View Documentation",
    "hero.webClient": "Try Web Client",
    "hero.download": "Download Now",
    "hero.github": "Download from GitHub",
    "hero.gitee": "Download from Gitee",

    // Developers section
    "developers.title": "Core Developers",
    "developer.limuy.role": "Backend Developer",
    "developer.limuy.bio": "Main backend developer",
    "developer.omo.role": "Backend Developer",
    "developer.omo.bio": "Responsible for encryption and security development",
    "developer.senlinjun.role": "Client Developer",
    "developer.senlinjun.bio": "Responsible for OurChat client development",

    // Footer
    "footer.text": "© 2025 OurChat - Connect Every Important Moment",
  },
  zh: {
    // Navigation
    "nav.docs": "查看文档",
    "nav.github": "GitHub",

    // Hero section
    "hero.title": "连接每一个重要时刻",
    "hero.subtitle":
      "OurChat是一款安全、高效的即时通讯应用，让您与亲朋好友保持联系，分享生活中的每一个精彩瞬间。",
    "hero.docs": "查看文档",
    "hero.webClient": "体验网页版",
    "hero.download": "立即下载",
    "hero.github": "Github下载",
    "hero.gitee": "Gitee下载",

    // Developers section
    "developers.title": "主要开发者",
    "developer.limuy.role": "服务端开发",
    "developer.limuy.bio": "服务端主要开发者",
    "developer.omo.role": "服务端开发",
    "developer.omo.bio": "主要负责信息加密等内容开发",
    "developer.senlinjun.role": "客户端开发",
    "developer.senlinjun.bio": "负责OurChat客户端开发",

    // Footer
    "footer.text": "© 2025 OurChat - 连接每一个重要时刻",
  },
};

// Create i18n instance
const i18n = createI18n({
  legacy: false, // use Composition API
  locale: localStorage.getItem("preferredLanguage") || "en",
  fallbackLocale: "en",
  messages,
});

// Helper function to change language
export function setLanguage(lang: "en" | "zh"): void {
  i18n.global.locale.value = lang;
  localStorage.setItem("preferredLanguage", lang);
  document.documentElement.lang = lang === "zh" ? "zh-cn" : "en";
}

export default i18n;
