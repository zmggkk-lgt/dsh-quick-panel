<p align="center">
  <img src="icon.svg" width="88" height="88" alt="Quick Panel icon">
</p>

<h1 align="center">Quick Panel</h1>

<p align="center">A left-sidebar entry with its own main panel for <a href="https://github.com/deepseek-ai/deepseek-harness">DeepSeek Harness</a>.</p>

<p align="center">
  <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
  <img alt="DSH plugin" src="https://img.shields.io/badge/dsh-plugin-8A2BE2">
</p>

Quick Panel is a small, dependency-free DSH plugin. It registers one icon in the
left sidebar (`sidebar.panellist`) and one central page (`main`) under the same
id, `quick-panel`. The page contains a live clock, the active time zone, and
two shortcuts: **New session** and **Back to conversation**.

## Features

- **Left-sidebar entry** — a panel icon beside the shipped Plugins and Schedules
  entries; clicking it selects the Quick Panel page.
- **Live clock** — local time updated every second, with the localized date and
  the browser's IANA time zone.
- **Quick actions** — start a new session or return to the conversation without
  leaving the page.
- **Bilingual** — English and Chinese dictionaries follow the active DSH locale.
- **Theme-aware** — every color comes from `--dsw-alias-*` theme tokens, so the
  page matches light and dark themes.
- **No build step** — plain JavaScript, no bundler, no runtime dependencies
  besides the React instance provided by the host.

## Requirements

- A DSH build that exposes the `sidebar.panellist` and `main` slots
  (the 0.2.x desktop/web runtime used here).
- Nothing else at runtime. Node.js is only needed for development checks.

## Install

Clone the repository:

```sh
git clone https://github.com/zmggkk-lgt/dsh-quick-panel.git
```

Then install the checkout as a local DSH bundle. The package manifest
(`package.json`) declares `dsh.bundle.patch`, and the patch inserts one row:

```yaml
- insert:
    - id: quick-panel
      name: '@local/quick-panel'
```

In the DSH plugin manager, install the bundle from the cloned directory (the
`install_bundle` action accepts an absolute package directory). After
activation the Quick Panel icon appears in the left sidebar; refresh the page
if the new icon is not visible immediately.

To remove it, uninstall the `@local/quick-panel` bundle from the same manager.

## How it works

| File | Purpose |
|---|---|
| `package.json` | Bundle manifest: `dsh.bundle.patch`, `dsh.client`, exports, icon. |
| `cordis.patch.yml` | Inserts the `quick-panel` row into the profile patch. |
| `index.js` | Host half; intentionally empty because all behavior is in the browser. |
| `client.js` | Browser module: registers the sidebar icon and the main panel. |
| `locale/en.json`, `locale/zh.json` | Display metadata for the plugin manager. |

The client module registers two slot entries with the same id:

```js
ctx.slots.inject('main', () => ctx.slots.register({
  name: 'main',
  key: 'quick-panel',
  locale: 'quick-panel',
  inject: actions,
}, QuickPanelPage));

ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({
  name: 'sidebar.panellist',
  id: 'quick-panel',
  order: 30,
  locale: 'quick-panel',
  label: () => t('panel'),
}, PanelIcon));
```

Because `sidebar.panellist` ids address the matching `main` key, the icon and
the page stay in sync without any shared mutable state.

## Development

There is no compilation step. After editing `client.js`, reinstall the bundle or
restart DSH so the browser loads a fresh module generation.

Checks used for this repository:

```sh
node --check client.js
node --check index.js
node -e "JSON.parse(require('fs').readFileSync('package.json','utf8'))"
```

## 中文说明

Quick Panel 是一个无构建依赖的 DSH 插件：在左侧栏注册一个「快捷面板」图标，
并拥有独立主页面，提供实时时钟、当前时区、新建会话和返回对话。

安装方式：克隆仓库后，在 DSH 插件管理器中从该目录安装 bundle
（`install_bundle` 接受绝对包目录）。启用后左侧栏会出现快捷面板图标；
若未立即出现，刷新页面即可。

## License

[MIT](LICENSE)
