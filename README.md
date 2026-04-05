# AI Builder OS

AI Builder OS 是一个面向个人 AI 编程实践的知识系统，用来沉淀 **模式（patterns）**、**提示词模板（prompts）**、**案例（cases）**、**技能（skills）** 与 **速查内容（reference）**。

这个项目现在的重点，不再是慢速推进的学习计划，而是：

- 把工作和学习中真实用到的方法沉淀下来
- 把 Claude Code、Codex 等工具的使用经验整理成可复用资产
- 形成可检索、可演进、可逐步封装为 skill 的个人系统

## 当前目标

这个仓库优先解决 4 件事：

1. **记录模式**：什么时候该怎么用 AI 编程工具
2. **沉淀模板**：把高频提示词整理成可复制的 prompt
3. **积累案例**：把真实任务经验变成可复盘的资产
4. **快速速查**：把常用命令、常见流程、检查清单放到手边

## 推荐内容分层

```text
ai-builder-os/
├── docs/
│   ├── index.md
│   ├── guide/
│   ├── patterns/
│   ├── prompts/
│   ├── practices/
│   ├── reference/
│   ├── cases/
│   ├── skills/
│   ├── playbooks/
│   ├── templates/
│   ├── system/
│   └── .vitepress/
├── .gitignore
├── package.json
└── README.md
```

## 各目录建议用途

### `docs/patterns/`
记录方法论与执行模式。

例如：
- 先理解后改动
- 小步修改，限制范围
- Claude Code 做理解 / Review，Codex 做执行
- 从案例中提炼模式

### `docs/prompts/`
放可直接复制和改造的提示词模板。

例如：
- 读代码模板
- 改小功能模板
- bug 排查模板
- review 模板

### `docs/practices/`
记录对外部实践的理解和吸收。

例如：
- superpowers
- get-shit-done
- oh-my-codex

### `docs/reference/`
速查内容。

例如：
- Claude Code 常用命令
- Codex 常用命令
- 会话操作速查
- 常见 prompt 片段

### `docs/cases/`
记录真实工作 / 学习案例。

建议每个案例回答：
- 背景是什么
- 用了什么工具
- 用了什么 prompt
- 哪里有效 / 无效
- 下次如何做得更好

### `docs/skills/`
记录已经成熟、值得封装的 skill 想法。

注意：当前阶段以记录为主，不急着全部实现。

### `docs/playbooks/`
放跨模式、偏执行清单的内容。

例如：
- AI coding preflight checklist
- review checklist
- safe refactor checklist

### `docs/templates/`
放统一模板。

例如：
- case 模板
- pattern 模板
- prompt 模板
- weekly review 模板

## 当前建议工作流

1. **先从真实任务里积累案例**
2. **从案例里提炼 prompt 模板**
3. **从 prompt 模板里抽象 pattern**
4. **当 pattern 稳定后，再考虑 skill 化**

## 本地运行

### 安装依赖

```bash
npm install
```

### 启动文档站

```bash
npm run docs:dev
```

### 构建站点

```bash
npm run docs:build
```

### 预览生产版本

```bash
npm run docs:preview
```

## GitHub 仓库

- <https://github.com/KM10101/ai-builder-os>

## 一句话原则

**先沉淀内容，再考虑工具；先形成自己的系统，再决定是否封装成 superpowers / skill。**
