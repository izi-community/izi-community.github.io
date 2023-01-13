// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "iZi | Info",
  tagline: "iZi is a gamified edutainment platform allowing users to solve knowledge Quests and earn rewards",
  url: "https://info.izi.community",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "izi-community", // Usually your GitHub org/user name.
  projectName: "izi-community.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "vi",
    locales: ["en", "vi"],
    path: "i18n",
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
        calendar: "gregory",
        path: "en",
      },
      vi: {
        label: "Tiếng Việt",
        direction: "ltr",
        htmlLang: "vi-VN",
        calendar: "gregory",
        path: "vi",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/izi-community/izi-community.github.io/tree/main",
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/izi-community/izi-community.github.io/tree/main",
          sortPosts: "descending",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "iZi",
        logo: {
          alt: "iZi Logo",
          src: "img/izi.svg",
          href: "https://izi.community",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "Tutorial",
          // },
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/izi-community",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Home",
                href: "https://izi.community",
              },
              // {
              //   label: "Create",
              //   href: "https://creator.izi.community",
              // },
              {
                label: "Play",
                href: "https://play.izi.community",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/+epuW-tSjzis5ZDA9",
              },
              {
                label: "Substack",
                href: "https://izicommunity.substack.com",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/izi.community",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/iZicommunity",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} iZi.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
