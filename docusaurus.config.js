// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/oceanicNext');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');

// /** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Otterize',
    url: 'https://docs.otterize.com',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.svg',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'otterize', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    plugins: [
        [
            'docusaurus-plugin-includes',
            {},
        ],
        [
            'docusaurus-plugin-hotjar',
            {}
        ],
        [
            '@docusaurus/plugin-google-gtag',
            {
                trackingID: 'G-2EG876ZREF',
                anonymizeIP: false,
            },
        ]
    ],
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/otterize/docs/edit/main/',
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            algolia: {
                apiKey: '0f80eacea40a917650f73d6eee3e9bb3',
                indexName: 'otterize',
                appId: '69PZ47MO2R',
                algoliaOptions: {}
            },
            hotjar: {
                applicationId: '3152141',
            },
            navbar: {
                logo: {
                    alt: 'Otterize',
                    src: 'img/otterize-logo-dark.svg',
                    srcDark: 'img/otterize-logo-light.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'getting-started/README',
                        position: 'left',
                        label: 'Documentation',
                    },
                    {
                        href: 'https://github.com/otterize',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Join us on Slack',
                                href: '...',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Otterize',
                                to: 'https://otterize.com',
                            },
                            {
                                label: 'Blog',
                                to: 'https://otterize.com/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/otterize',
                            },
                        ],
                    },
                ],
                copyright: `Built with Docusaurus`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
