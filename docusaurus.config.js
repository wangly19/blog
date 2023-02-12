// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'wangly\'blog',
  tagline: 'edit...',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // id: 'docs', // omitted => default instance
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: '面试题系列',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'frontend',
        path: 'frontend',
        routeBasePath: 'frontend',
        sidebarPath: require.resolve('./sidebarsDemo.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'basic',
        path: 'basic',
        routeBasePath: 'basic',
        sidebarPath: require.resolve('./sidebarsBasic.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'wangly\'blog',
        items: [
          // {
          //   type: 'doc',
          //   position: 'right',
          //   docId: 'intro',
          //   label: '其他',
          // },
          // {
          //   to: '/frontend/intro',
          //   position: 'right',
          //   label: '前端技术',
          //   activeBaseRegex: `/frontend/`,
          // },
          // {
          //   to: '/basic/intro',
          //   position: 'right',
          //   label: '基础知识',
          //   activeBaseRegex: `/basic/`,
          // },
          {
            to: '/question',
            label: '面试题',
            position: 'right',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'right',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
