# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Project Is

**AI Builder OS** is a personal growth operating system — a structured documentation site (built with VitePress) for learning and building AI applications. It is not a traditional software project. The primary content is Markdown documentation in Chinese, organized into a learning system with experiments, projects, daily logs, and playbooks.

## Commands

```bash
npm install          # Install dependencies
npm run docs:dev     # Start dev server (available at displayed local address)
npm run docs:build   # Build static site to docs/.vitepress/dist/
npm run docs:preview # Preview production build
```

There are no test or lint commands.

## Architecture

The docs site is powered by **VitePress 1.6.3** with the `markdown-it-task-lists` plugin for checkbox support. Configuration lives in `docs/.vitepress/config.mjs`.

Documentation is organized into these sections under `docs/`:

| Directory | Purpose |
|-----------|---------|
| `system/` | Core design: vision, capability map, operating cycle |
| `roadmap/` | Phase-based learning plans |
| `guide/` | How to use the system, project structure, workflows |
| `playbooks/` | Reusable AI coding checklists and workflow guides |
| `experiments/` | Experiment records (use `experiment-template.md`) |
| `reviews/` | Weekly retrospectives (use `weekly-review-template.md`) |
| `daily/` | Daily progress logs |
| `projects/` | Project specs and notes |
| `notes/` | Learning notes and reference material |

## Naming Conventions

- File and directory names: **English only**, hyphen-separated (e.g., `my-file-name.md`)
- Document body content: Chinese is standard
- No spaces in filenames

## VitePress Navigation

When adding new pages, register them in `docs/.vitepress/config.mjs` under the appropriate `nav` or `sidebar` entry to make them discoverable in the site.
