window.__ModuleLoader__.load({
  id: '@local/quick-panel',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const NS = 'quick-panel';
    const PANEL_ID = 'quick-panel';

    const EN = {
      panel: 'Quick Panel',
      title: 'Quick Panel',
      subtitle: 'A left-sidebar entry provided by a local plugin.',
      'time.heading': 'Current time',
      'time.note': 'Updates every second',
      'time.zone': 'Time zone: {zone}',
      'time.locale': 'en-US',
      'actions.heading': 'Quick actions',
      'actions.note': 'Jump anywhere in the harness without leaving this panel.',
      'actions.newSession': 'New session',
      'actions.backToConversation': 'Back to conversation',
      'about.heading': 'About this plugin',
      'about.description': 'This local DSH plugin registers a sidebar entry and its own main panel. The sidebar icon and this page share one id, so the icon always opens this page.',
      'about.plugin': 'Plugin',
      'about.version': 'Version',
    };

    const ZH = {
      panel: '快捷面板',
      title: '快捷面板',
      subtitle: '由本地插件提供的左侧栏入口。',
      'time.heading': '当前时间',
      'time.note': '每秒刷新',
      'time.zone': '时区：{zone}',
      'time.locale': 'zh-CN',
      'actions.heading': '快捷操作',
      'actions.note': '无需离开此面板，直接跳到应用中的常用位置。',
      'actions.newSession': '新建会话',
      'actions.backToConversation': '返回对话',
      'about.heading': '关于此插件',
      'about.description': '这个本地 DSH 插件在左侧栏注册了一个入口，并拥有独立的主面板。侧栏图标与当前页面共用一个 ID，因此点击图标始终会打开此页。',
      'about.plugin': '插件',
      'about.version': '版本',
    };

    const CSS = `
.qp-page {
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
}
.qp-inner {
  max-width: 840px;
  margin: 0 auto;
  padding: 40px 32px 72px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
}
.qp-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 4px;
}
.qp-badge {
  width: 46px;
  height: 46px;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 13px;
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-brand-primary);
}
.qp-title {
  margin: 0;
  font-size: 22px;
  line-height: 1.3;
  font-weight: 600;
}
.qp-subtitle {
  margin: 3px 0 0;
  font-size: 13px;
  line-height: 1.5;
  color: var(--dsw-alias-label-secondary);
}
.qp-card {
  padding: 20px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 14px;
  background: var(--dsw-alias-bg-layer-1);
}
.qp-card-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}
.qp-card-title {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 600;
}
.qp-card-note {
  font-size: 12px;
  color: var(--dsw-alias-label-secondary);
}
.qp-clock {
  font-size: 42px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
}
.qp-date {
  margin-top: 8px;
  font-size: 14px;
  color: var(--dsw-alias-label-secondary);
}
.qp-zone {
  margin-top: 10px;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary);
}
.qp-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.qp-btn {
  appearance: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 15px;
  font: inherit;
  font-size: 13px;
  line-height: 1.4;
  color: var(--dsw-alias-label-primary);
  background: var(--dsw-alias-bg-layer-1);
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 9px;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
}
.qp-btn:hover {
  background: var(--dsw-alias-bg-layer-2);
}
.qp-btn:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary);
  outline-offset: 2px;
}
.qp-btn-accent {
  color: var(--dsw-alias-brand-primary);
  border-color: var(--dsw-alias-brand-primary);
}
.qp-hint {
  margin: 14px 0 0;
  font-size: 12px;
  line-height: 1.6;
  color: var(--dsw-alias-label-secondary);
}
.qp-about {
  margin: 0 0 14px;
  font-size: 13px;
  line-height: 1.65;
  color: var(--dsw-alias-label-secondary);
}
.qp-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 18px;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary);
}
.qp-meta code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 11px;
  padding: 1px 5px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 5px;
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-primary);
}
@media (max-width: 720px) {
  .qp-inner { padding: 28px 20px 56px; }
  .qp-clock { font-size: 34px; }
}
`;

    function PanelIcon(props) {
      const size = props && typeof props.size === 'number' ? props.size : 18;
      const active = Boolean(props && props.active);
      return h('svg', {
        viewBox: '0 0 24 24',
        width: size,
        height: size,
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.7,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        'aria-hidden': 'true',
        focusable: 'false',
        style: { display: 'block' },
      },
        active
          ? h('path', {
              d: 'M8.6 4.4H7A3.6 3.6 0 0 0 3.4 8v8A3.6 3.6 0 0 0 7 19.6h1.6z',
              fill: 'currentColor',
              stroke: 'none',
              opacity: 0.16,
            })
          : null,
        h('rect', { x: 3.4, y: 4.4, width: 17.2, height: 15.2, rx: 3.6 }),
        h('path', { d: 'M8.6 4.4v15.2' }),
        h('path', { d: 'M12.3 9.2h5.2M12.3 12.4h3.9M12.3 15.6h4.6' })
      );
    }

    function formatDate(locale, options, value) {
      try {
        return new Intl.DateTimeFormat(locale, options).format(value);
      } catch (_error) {
        return new Intl.DateTimeFormat(undefined, options).format(value);
      }
    }

    function useNow() {
      const [now, setNow] = React.useState(function () {
        return new Date();
      });
      React.useEffect(function () {
        const timer = setInterval(function () {
          setNow(new Date());
        }, 1000);
        return function () {
          clearInterval(timer);
        };
      }, []);
      return now;
    }

    function QuickPanelPage(props) {
      const t = props.t;
      const now = useNow();
      const locale = t('time.locale');
      const dateText = formatDate(locale, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }, now);
      const timeText = formatDate(locale, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }, now);
      let zone = 'UTC';
      try {
        zone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
      } catch (_error) {}

      const startSession = props.onNewSession;
      const backToConversation = props.onBackToConversation;

      return h('div', { className: 'qp-page' },
        h('style', null, CSS),
        h('div', { className: 'qp-inner' },
          h('header', { className: 'qp-header' },
            h('span', { className: 'qp-badge' }, h(PanelIcon, { size: 22 })),
            h('div', null,
              h('h1', { className: 'qp-title' }, t('title')),
              h('p', { className: 'qp-subtitle' }, t('subtitle'))
            )
          ),
          h('section', { className: 'qp-card', 'aria-labelledby': 'qp-time-heading' },
            h('div', { className: 'qp-card-head' },
              h('h2', { className: 'qp-card-title', id: 'qp-time-heading' }, t('time.heading')),
              h('span', { className: 'qp-card-note' }, t('time.note'))
            ),
            h('div', { className: 'qp-clock' }, timeText),
            h('div', { className: 'qp-date' }, dateText),
            h('div', { className: 'qp-zone' }, t('time.zone', { zone: zone }))
          ),
          h('section', { className: 'qp-card', 'aria-labelledby': 'qp-actions-heading' },
            h('div', { className: 'qp-card-head' },
              h('h2', { className: 'qp-card-title', id: 'qp-actions-heading' }, t('actions.heading'))
            ),
            h('div', { className: 'qp-actions' },
              h('button', {
                type: 'button',
                className: 'qp-btn qp-btn-accent',
                onClick: function () {
                  if (typeof startSession === 'function') startSession();
                },
              }, t('actions.newSession')),
              h('button', {
                type: 'button',
                className: 'qp-btn',
                onClick: function () {
                  if (typeof backToConversation === 'function') backToConversation();
                },
              }, t('actions.backToConversation'))
            ),
            h('p', { className: 'qp-hint' }, t('actions.note'))
          ),
          h('section', { className: 'qp-card', 'aria-labelledby': 'qp-about-heading' },
            h('h2', { className: 'qp-card-title', id: 'qp-about-heading' }, t('about.heading')),
            h('p', { className: 'qp-about' }, t('about.description')),
            h('div', { className: 'qp-meta' },
              h('span', null, t('about.plugin'), ' ', h('code', null, '@local/quick-panel')),
              h('span', null, t('about.version'), ' ', h('code', null, '1.0.0'))
            )
          )
        )
      );
    }

    function apply(ctx) {
      ctx.effect(function () {
        return ctx.locale.register(NS, { zh: ZH, en: EN });
      }, 'quick-panel: dictionaries');
      const t = ctx.locale.bind(NS);

      const actions = function () {
        return {
          onNewSession: function () {
            ctx.uiWorkspace.startSession();
          },
          onBackToConversation: function () {
            ctx.layout.selectPanel(null);
          },
        };
      };

      ctx.slots.inject('main', function () {
        return ctx.slots.register({
          name: 'main',
          key: PANEL_ID,
          locale: NS,
          inject: actions,
        }, QuickPanelPage);
      });

      ctx.slots.inject('sidebar.panellist', function () {
        return ctx.slots.register({
          name: 'sidebar.panellist',
          id: PANEL_ID,
          order: 30,
          locale: NS,
          label: function () {
            return t('panel');
          },
        }, PanelIcon);
      });
    }

    return {
      inject: ['slots', 'locale', 'layout', 'uiWorkspace'],
      apply: apply,
    };
  },
});
