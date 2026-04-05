import markdownItTaskLists from "markdown-it-task-lists";

export default {
  title: "AI Builder OS",
  description: "一个用于沉淀 Claude Code、Codex 与 AI 编程实践的个人操作系统。",
  lang: "zh-CN",
  markdown: {
    config(md) {
      md.use(markdownItTaskLists, {
        enabled: true,
        label: true,
        labelAfter: true,
      });
    },
  },
  lastUpdated: true,
  themeConfig: {
    lastUpdated: {
      text: "最后更新于",
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/project-structure" },
      { text: "Patterns", link: "/patterns/understand-before-change" },
      { text: "Prompts", link: "/prompts/understand-code" },
      { text: "Reference", link: "/reference/claude-code-commands" },
    ],
    sidebar: [
      {
        text: "开始使用",
        items: [
          { text: "项目结构", link: "/guide/project-structure" },
          { text: "使用方式", link: "/guide/workflow" },
        ],
      },
      {
        text: "Patterns",
        items: [
          {
            text: "先理解，后改动",
            link: "/patterns/understand-before-change",
          },
          {
            text: "小步修改，限制范围",
            link: "/patterns/bounded-change",
          },
          {
            text: "Claude Code / Codex 分工",
            link: "/patterns/claude-code-codex-split",
          },
        ],
      },
      {
        text: "Prompts",
        items: [
          { text: "代码理解模板", link: "/prompts/understand-code" },
          {
            text: "小功能实现模板",
            link: "/prompts/implement-small-feature",
          },
          { text: "代码 Review 模板", link: "/prompts/review-change" },
        ],
      },
      {
        text: "Practices",
        items: [
          { text: "Superpowers 实践笔记", link: "/practices/superpowers" },
          { text: "Get Shit Done 实践笔记", link: "/practices/get-shit-done" },
          { text: "Oh My Codex 实践笔记", link: "/practices/oh-my-codex" },
        ],
      },
      {
        text: "Reference",
        items: [
          {
            text: "Claude Code 常用命令速查",
            link: "/reference/claude-code-commands",
          },
          { text: "Codex 常用命令速查", link: "/reference/codex-commands" },
          {
            text: "常用 Prompt 片段速查",
            link: "/reference/common-prompt-snippets",
          },
        ],
      },
      {
        text: "Cases",
        items: [{ text: "Cases 首页", link: "/cases/README" }],
      },
      {
        text: "Skills",
        items: [{ text: "技能孵化清单", link: "/skills/incubation-backlog" }],
      },
      {
        text: "Templates",
        items: [
          { text: "案例模板", link: "/templates/case-template" },
          { text: "Pattern 模板", link: "/templates/pattern-template" },
          { text: "Prompt 模板", link: "/templates/prompt-template" },
          { text: "周复盘模板", link: "/reviews/weekly-review-template" },
        ],
      },
      {
        text: "系统说明",
        items: [
          { text: "项目愿景", link: "/system/vision" },
          { text: "能力地图", link: "/system/capability-map" },
          { text: "运转循环", link: "/system/operating-cycle" },
        ],
      },
      {
        text: "历史内容",
        items: [
          { text: "第一阶段路线图", link: "/roadmap/phase-1" },
          { text: "第一周计划", link: "/roadmap/first-week-plan" },
          { text: "项目首页", link: "/projects/" },
        ],
      },
    ],
    socialLinks: [],
  },
};
