export default {
  title: 'AI Builder OS',
  description: '一个用于学习和构建 AI 应用的个人成长操作系统。',
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '使用指南', link: '/guide/getting-started' },
      { text: '系统设计', link: '/system/vision' },
      { text: '路线图', link: '/roadmap/phase-1' }
    ],
    sidebar: [
      {
        text: '使用指南',
        items: [
          { text: '开始使用', link: '/guide/getting-started' },
          { text: '工作流', link: '/guide/workflow' },
          { text: '项目结构', link: '/guide/project-structure' }
        ]
      },
      {
        text: '系统设计',
        items: [
          { text: '项目愿景', link: '/system/vision' },
          { text: '能力地图', link: '/system/capability-map' },
          { text: '运转循环', link: '/system/operating-cycle' }
        ]
      },
      {
        text: '路线图',
        items: [
          { text: '第一阶段', link: '/roadmap/phase-1' }
        ]
      },
      {
        text: '模板',
        items: [
          { text: '周复盘模板', link: '/reviews/weekly-review-template' },
          { text: '实验模板', link: '/experiments/experiment-template' }
        ]
      }
    ],
    socialLinks: []
  }
}
