import markdownItTaskLists from 'markdown-it-task-lists'

export default {
  title: 'AI Builder OS',
  description: '一个用于学习和构建 AI 应用的个人成长操作系统。',
  lang: 'zh-CN',
  markdown: {
    config(md) {
      md.use(markdownItTaskLists, { enabled: true, label: true, labelAfter: true })
    }
  },
  lastUpdated: true,
  themeConfig: {
    lastUpdated: {
      text: '最后更新于'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '使用指南', link: '/guide/getting-started' },
      { text: '系统设计', link: '/system/vision' },
      { text: '路线图', link: '/roadmap/phase-1' },
      { text: '每日记录', link: '/daily/' }
    ],
    sidebar: [
      {
        text: '使用指南',
        items: [
          { text: '开始使用', link: '/guide/getting-started' },
          { text: '工作流', link: '/guide/workflow' },
          { text: '项目结构', link: '/guide/project-structure' },
          { text: '每日计划与执行记录', link: '/guide/daily-planning' }
        ]
      },
      {
        text: '系统设计',
        items: [
          { text: '项目愿景', link: '/system/vision' },
          { text: '能力地图', link: '/system/capability-map' },
          { text: '初始能力基线', link: '/system/initial-capability-baseline' },
          { text: '运转循环', link: '/system/operating-cycle' }
        ]
      },
      {
        text: '路线图',
        items: [
          { text: '第一阶段', link: '/roadmap/phase-1' },
          { text: '第一周计划', link: '/roadmap/first-week-plan' }
        ]
      },
      {
        text: '学习笔记',
        items: [
          { text: 'LLM 应用基础概念笔记', link: '/notes/llm-application-basics' }
        ]
      },
      {
        text: '每日记录',
        items: [
          { text: '每日记录首页', link: '/daily/' },
          { text: '2026 Week 13', link: '/daily/2026-week-13/' },
          { text: '2026-03-24', link: '/daily/2026-week-13/2026-03-24' },
          { text: '2026-03-25', link: '/daily/2026-week-13/2026-03-25' },
          { text: '2026-03-26', link: '/daily/2026-week-13/2026-03-26' },
          { text: '2026-03-27', link: '/daily/2026-week-13/2026-03-27' },
          { text: '2026-03-28', link: '/daily/2026-week-13/2026-03-28' },
          { text: '2026-03-29', link: '/daily/2026-week-13/2026-03-29' }
        ]
      },
      {
        text: '模板',
        items: [
          { text: '周复盘模板', link: '/reviews/weekly-review-template' },
          { text: '实验模板', link: '/experiments/experiment-template' }
        ]
      },
      {
        text: '项目与实验',
        items: [
          { text: '项目首页', link: '/projects/' },
          { text: '网页内容总结工具', link: '/projects/web-content-summarizer' },
          { text: '第一个小项目方向建议', link: '/experiments/first-project-direction' }
        ]
      }
    ],
    socialLinks: []
  }
}
