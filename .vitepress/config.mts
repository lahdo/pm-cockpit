import { defineConfig } from 'vitepress'
import markdownItTaskLists from 'markdown-it-task-lists'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PM Cockpit",
  srcDir: 'content',
  description: "One stop shop for PMs",
  base: '/',
  markdown: {
    config: (md) => {
      md.use(markdownItTaskLists)
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Project Foundations',
        items: [
          { text: 'Project Management', link: '/1.project-foundations/1.project-management.md' },
          { text: 'Stakeholders Engagement', link: '/1.project-foundations/2.stakeholders-engagement' },
          { text: 'Meeting Management', link: '/1.project-foundations/3.meeting-management.md' },
          { text: 'Documentation Management', link: '/1.project-foundations/4.documentation.md' }
        ]
      },
      {
        text: 'Technical Architecture & Design',
        items: [
          { text: 'Architecture', link: '/2.technical-architecture-and-design/1.architecture.md' },
          { text: 'Performance Optimization', link: '/2.technical-architecture-and-design/2.performance-optimization.md' },
          { text: 'User Experience (UX) and Design', link: '/2.technical-architecture-and-design/3.user-experience.md' },
          { text: 'Cloud and Infrastructure', link: '2.technical-architecture-and-design//4.cloud-and-infrastructure.md' }
        ]
      },
      {
        text: 'Development Practices & Standards',
        items: [
          { text: 'Coding Standards', link: '/3.development-practices/1.coding-standards.md' },
          { text: 'Code Reviews', link: '/3.development-practices/2.code-reviews.md' },
          { text: 'Technical Debt', link: '/3.development-practices/3.technical-debt.md' },
          { text: 'Version Control', link: '/3.development-practices/4.version-control.md' }
        ]
      },
      {
        text: 'Continuous Integration & Deployment',
        items: [
          { text: 'CI/CD', link: '/4.ci-cd/1.ci-cd.md' },
          { text: 'Release Management', link: '/4.ci-cd/2.release-management.md' },
          { text: 'Configuration Management', link: '/4.ci-cd/3.configuration-management.md' },
          { text: 'Infrastructure Management', link: '/4.ci-cd/4.infrastructure-management.md' },
          { text: 'Test Automation', link: '/4.ci-cd/5.test-automation.md' }
        ]
      },
            {
        text: 'Quality & Security Assurance',
        items: [
          { text: 'Quality Assurance', link: '/5-qualitry-and-security/1.quality-assurance.md' },
          { text: 'Security', link: '/5-qualitry-and-security/2.security.md' },
          { text: 'Defect management', link: '/5-qualitry-and-security/3.defect-management.md' },
          { text: 'DevSecOps', link: '/5-qualitry-and-security/4.dev-sec-ops.md' },
          { text: 'Test Case management', link: '/5-qualitry-and-security/5.test-case-management' },
          { text: 'Test Scenario management', link: '/5-qualitry-and-security/6.test-scenario-management' },
          { text: 'Test Strategy', link: '/5-qualitry-and-security/7.test-strategy.md' }
        ]
      },
            {
        text: 'Agile & Process Management',
        items: [
          { text: 'Agile practices', link: '/6.agile-and-process-management/1.agile-practices.md' },
          { text: 'Documentation Management', link: '/6.agile-and-process-management/2.documentation-management' },
          { text: 'People Management', link: '/6.agile-and-process-management/3.people-management.md' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
