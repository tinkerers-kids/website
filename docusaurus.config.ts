import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Tinker-Mentoring für Kinder',
  tagline: 'Tinkern, Lernen, Wachsen – mit echten Tools und eigenen Projekten',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
    experimental_faster: true,
  },

  url: 'https://mentoring.kids.tinkerers.de',
  baseUrl: '/',

  organizationName: 'tinkerers-kids',
  projectName: 'website',

  onBrokenLinks: 'throw',

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      {
        docs: false, // Disable default docs, we'll use plugins
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'parents',
        path: 'docs-parents',
        routeBasePath: 'eltern',
        sidebarPath: './sidebars-parents.ts',
        editUrl: 'https://github.com/tinkerers-kids/website/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'teachers',
        path: 'docs-teachers',
        routeBasePath: 'mentoren',
        sidebarPath: './sidebars-teachers.ts',
        editUrl: 'https://github.com/tinkerers-kids/website/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'children',
        path: 'docs-children',
        routeBasePath: 'mentees',
        sidebarPath: './sidebars-children.ts',
        editUrl: 'https://github.com/tinkerers-kids/website/edit/main/',
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Tinker-Mentoring',
      logo: {
        alt: 'Tinker-Mentoring Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'parentsSidebar',
          docsPluginId: 'parents',
          position: 'left',
          label: 'Für Eltern',
        },
        {
          type: 'docSidebar',
          sidebarId: 'teachersSidebar',
          docsPluginId: 'teachers',
          position: 'left',
          label: 'Für Mentor:innen',
        },
        {
          type: 'docSidebar',
          sidebarId: 'childrenSidebar',
          docsPluginId: 'children',
          position: 'left',
          label: 'Für Mentees',
        },
        {
          href: 'https://github.com/tinkerers-kids/website',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dokumentation',
          items: [
            {
              label: 'Für Eltern',
              to: '/eltern/intro',
            },
            {
              label: 'Für Mentor:innen',
              to: '/mentoren/intro',
            },
            {
              label: 'Für Mentees',
              to: '/mentees/intro',
            },
          ],
        },
        {
          title: 'Ressourcen',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/tinkerers-kids/website',
            },
            {
              label: 'GitHub Issues',
              href: 'https://github.com/tinkerers-kids/website/issues',
            },
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/tinkerers-kids/website/discussions',
            },
          ],
        },
        {
          title: 'Rechtliches',
          items: [
            {
              label: 'Impressum',
              to: '/impressum',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Levin Keller. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
