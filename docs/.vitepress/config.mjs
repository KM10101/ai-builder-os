export default {
  title: 'AI Builder OS',
  description: 'A personal growth operating system for learning and building AI applications.',
  lang: 'en-US',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'System', link: '/system/vision' },
      { text: 'Roadmap', link: '/roadmap/phase-1' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Workflow', link: '/guide/workflow' },
          { text: 'Project Structure', link: '/guide/project-structure' }
        ]
      },
      {
        text: 'System',
        items: [
          { text: 'Vision', link: '/system/vision' },
          { text: 'Capability Map', link: '/system/capability-map' },
          { text: 'Operating Cycle', link: '/system/operating-cycle' }
        ]
      },
      {
        text: 'Roadmap',
        items: [
          { text: 'Phase 1', link: '/roadmap/phase-1' }
        ]
      },
      {
        text: 'Templates',
        items: [
          { text: 'Weekly Review Template', link: '/reviews/weekly-review-template' },
          { text: 'Experiment Template', link: '/experiments/experiment-template' }
        ]
      }
    ],
    socialLinks: []
  }
}
