// Language translations for Ourchat website
const translations = {
    en: {
        // Navigation
        "nav.docs": "Documentation",
        "nav.github": "GitHub",
        
        // Hero section
        "hero.title": "Connect Every Important Moment",
        "hero.subtitle": "Ourchat is a secure, efficient instant messaging app that keeps you connected with friends and family, sharing every wonderful moment in life.",
        "hero.docs": "View Documentation",
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
        "developer.senlinjun.bio": "Responsible for Ourchat client development",
        
        // Footer
        "footer.text": "© 2025 Ourchat - Connect Every Important Moment"
    },
    zh: {
        // Navigation
        "nav.docs": "查看文档",
        "nav.github": "GitHub",
        
        // Hero section
        "hero.title": "连接每一个重要时刻",
        "hero.subtitle": "Ourchat是一款安全、高效的即时通讯应用，让您与亲朋好友保持联系，分享生活中的每一个精彩瞬间。",
        "hero.docs": "查看文档",
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
        "developer.senlinjun.bio": "负责Ourchat客户端开发",
        
        // Footer
        "footer.text": "© 2025 Ourchat - 连接每一个重要时刻"
    }
};

// Language switching functionality
let currentLanguage = 'en'; // Default to English

function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-cn' : 'en';
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update language switcher button text
    const langButton = document.getElementById('language-switcher');
    if (langButton) {
        langButton.textContent = lang === 'en' ? '中文' : 'English';
    }
    
    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLanguage);
});
