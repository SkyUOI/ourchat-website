<template>
  <div>
    <Navbar :show-language-switcher="false" />
    <div class="page_header">
      <h1 class="page_title">开发团队</h1>
      <p class="page_subtitle">认识Ourchat背后才华横溢的开发者和贡献者们</p>
    </div>
    <div class="container">
      <section class="developers_section">
        <h2 class="section_title">主要开发者</h2>
        <div class="main_developers">
          <DeveloperCard
            v-for="developer in mainDevelopers"
            :key="developer.name"
            :developer="developer"
          />
        </div>
      </section>
      <section class="contributors_section">
        <h2 class="section_title">贡献者</h2>
        <div class="contributors_grid">
          <ContributorCard
            v-for="contributor in contributors"
            :key="contributor.name"
            :contributor="contributor"
          />
        </div>
      </section>
    </div>
    <Footer logo-variant="white" />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import DeveloperCard from '../components/DeveloperCard.vue'
import ContributorCard from '../components/ContributorCard.vue'
import Footer from '../components/Footer.vue'

const mainDevelopers = [
  {
    name: '张明',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    role: '首席架构师 & 全栈开发',
    bio: '拥有10年软件开发经验，专注于分布式系统和即时通讯技术。负责Ourchat的整体架构设计和核心技术开发。',
    skills: ['Node.js', 'WebRTC', 'MongoDB', '微服务'],
    socialLinks: [
      { platform: 'github', url: '#', iconClass: 'fab fa-github' },
      { platform: 'twitter', url: '#', iconClass: 'fab fa-twitter' },
      { platform: 'linkedin', url: '#', iconClass: 'fab fa-linkedin' }
    ]
  },
  {
    name: '李思',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    role: '前端技术主管',
    bio: '前端开发专家，专注于创建优雅且高性能的用户界面。主导了Ourchat的UI/UX设计和前端架构实现。',
    skills: ['Vue.js', 'React', 'TypeScript', 'UI/UX设计'],
    socialLinks: [
      { platform: 'github', url: '#', iconClass: 'fab fa-github' },
      { platform: 'twitter', url: '#', iconClass: 'fab fa-twitter' },
      { platform: 'dribbble', url: '#', iconClass: 'fab fa-dribbble' }
    ]
  },
  {
    name: '王强',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    role: '后端开发专家',
    bio: '后端系统专家，擅长高并发系统和数据库优化。负责Ourchat的消息推送系统和数据库架构设计。',
    skills: ['Java', 'Python', 'Redis', 'MySQL'],
    socialLinks: [
      { platform: 'github', url: '#', iconClass: 'fab fa-github' },
      { platform: 'stackoverflow', url: '#', iconClass: 'fab fa-stack-overflow' },
      { platform: 'medium', url: '#', iconClass: 'fab fa-medium' }
    ]
  }
]

const contributors = [
  {
    name: '陈晓',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    contributions: 'UI组件开发'
  },
  {
    name: '杨雪',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    contributions: '文档编写'
  },
  {
    name: '赵阳',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    contributions: '测试工程师'
  },
  {
    name: '刘云',
    avatar: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    contributions: 'API开发'
  },
  {
    name: '黄杰',
    avatar: 'https://images.unsplash.com/photo-1629467057571-42d22d8f0cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    contributions: '性能优化'
  },
  {
    name: '郑华',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    contributions: '安全顾问'
  },
  {
    name: '周林',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    contributions: '移动端适配'
  },
  {
    name: '钱勇',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    contributions: 'Bug修复'
  }
]
</script>

<style scoped>
/* Page-specific styles are already in global style.css */
</style>