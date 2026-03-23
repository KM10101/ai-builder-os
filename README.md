# AI Builder OS

AI Builder OS 是一个面向个人长期成长的系统，用来支持 AI 应用开发方向的学习、实践、复盘与能力积累。

这个项目希望同时解决三件事：

- 用结构化方式学习 AI 应用开发相关知识
- 在学习过程中持续做实验、做项目、做沉淀
- 记录能力成长轨迹，形成长期可复用的资产

## Project Goals

这个项目不是一次性的学习计划，而是一个可以长期迭代的成长系统。

它应该帮助你：

- 保持清晰的学习方向
- 把理论知识和实际项目连接起来
- 沉淀可复用的代码、方法和文档资产
- 提升 AI 辅助开发效率与工作流成熟度
- 形成可见的能力成长证据

## Project Structure

```text
ai-builder-os/
├── docs/
│   ├── .vitepress/
│   │   └── config.mjs
│   ├── guide/
│   │   ├── getting-started.md
│   │   ├── project-structure.md
│   │   └── workflow.md
│   ├── system/
│   │   ├── vision.md
│   │   ├── capability-map.md
│   │   └── operating-cycle.md
│   ├── roadmap/
│   │   └── phase-1.md
│   ├── reviews/
│   │   └── weekly-review-template.md
│   ├── experiments/
│   │   └── experiment-template.md
│   └── index.md
├── .gitignore
├── package.json
└── README.md
```

## Why Markdown + VitePress

这个项目使用 Markdown 作为内容源，使用 VitePress 作为展示层。

这样做的好处是：

- 内容编写简单，维护成本低
- 文件天然适合 Git 管理
- 文档可以直接转成可阅读的网页
- 后续可以逐步演进成更完整的产品

## How to Run Locally

### 1. 安装依赖

```bash
npm install
```

### 2. 启动本地文档站点

```bash
npm run docs:dev
```

然后打开终端里显示的本地地址即可。

### 3. 构建静态站点

```bash
npm run docs:build
```

### 4. 预览生产版本

```bash
npm run docs:preview
```

## Current Scope of Version 0.1

0.1 版本的重点，是先把这个成长系统本身搭起来。

当前版本包含：

- 项目愿景
- 能力地图
- 学习与执行循环
- 第一阶段路线图
- 实验模板
- 周复盘模板
- 本地文档站点

## Suggested Next Steps

完成第一版骨架后，建议继续推进：

1. 细化能力地图
2. 明确前 2 到 4 周的学习目标
3. 创建第一条实验记录
4. 启动第一个小型 AI 应用项目
5. 开始持续写周复盘

## Naming Conventions

为了保持仓库整洁统一：

- 文件和目录名称使用英文
- 不使用空格
- 多单词之间使用连字符连接
- 命名尽量简洁且有描述性

文档正文内容可以使用中文。

## Future Evolution

这个项目后续可以逐步从：

- Markdown 知识库
- 演进为静态网站
- 再演进为半自动化成长系统
- 最后变成真正的个人学习与能力追踪产品
