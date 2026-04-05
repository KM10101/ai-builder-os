# Claude Code / Codex 分工

## 一个实用的默认分工

在不确定怎么分配任务时，可以先采用下面的默认策略：

- **Claude Code**：理解代码、拆任务、给方案、做 review
- **Codex**：按明确要求执行修改、补测试、快速迭代

这不是绝对规则，但作为默认起点很好用。

## 适合 Claude Code 的任务

- 阅读陌生模块
- 梳理调用链
- 总结现状
- 给改动计划
- 发现实现风险
- review 改动质量

## 适合 Codex 的任务

- 按计划改代码
- 实现小功能
- 修明确 bug
- 补测试
- 做批量小改动

## 一个常见工作流

1. 先让 Claude Code 理解现状并给方案
2. 再让 Codex 按方案执行
3. 最后让 Claude Code review 结果

## 注意

这个分工是为了帮助快速起手，不是硬规则。

真正重要的是：
- 哪个工具当前更适合你的任务
- 哪个工具在当前仓库里更稳定
- 哪个工具更符合你自己的协作习惯

## 关联内容

- [先理解，后改动](./understand-before-change)
- [代码理解模板](../prompts/understand-code)
- [代码 Review 模板](../prompts/review-change)
