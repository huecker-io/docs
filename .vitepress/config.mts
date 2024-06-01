import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    root: {
      label: "Русский",
      lang: "ru",
      title: "Хуёкер",
      titleTemplate: ":title • Хуёкер",
      description:
        "Open-source прокси для использования Docker Hub из заблокированных стран",
      themeConfig: {
        search: {
          options: {
            translations: {
              button: {
                buttonText: "Искать",
                buttonAriaLabel: "Искать",
              },
              modal: {
                displayDetails: "Показать детали",
                resetButtonTitle: "Сброс",
                backButtonTitle: "Назад",
                noResultsText: "Ничего не найдено по запросу",
                footer: {
                  selectText: "Открыть",
                  selectKeyAriaLabel: "Открыть",
                  navigateText: "Навигация",
                  navigateUpKeyAriaLabel: "Выше",
                  navigateDownKeyAriaLabel: "Ниже",
                  closeText: "Закрыть",
                  closeKeyAriaLabel: "Закрыть",
                },
              },
            },
          },
        },
        lastUpdated: {
          text: "Обновлено",
        },
        outline: {
          label: "На этой странице",
        },
        docFooter: {
          prev: "Предыдущая страница",
          next: "Следующая страница",
        },
        darkModeSwitchLabel: "Тема",
        lightModeSwitchTitle: "Переключиться на светлую тему",
        darkModeSwitchTitle: "Переключиться на тёмную тему",
        sidebarMenuLabel: "Меню",
        returnToTopLabel: "Наверх",
        langMenuLabel: "Сменить язык",
        nav: [
          { text: "Зачем", link: "/reasons" },
          { text: "Как использовать", link: "/use" },
          { text: "Поддержать", link: "/support" },
          { text: "Авторы", link: "/authors" },
        ],
        sidebar: [
          {
            text: "Документация",
            items: [
              { text: "Зачем", link: "/reasons" },
              { text: "Использование", link: "/use" },
              { text: "Другие прокси", link: "/others" },
              { text: "Поддержать", link: "/support" },
              { text: "Авторы", link: "/authors" },
            ],
          },
        ],
        footer: {
          message: "Опубликовано под лицензией Apache-2.0, сервер: dev",
          copyright:
            'Создано <a href="https://github.com/altfoxie" target="_blank">@altfoxie</a>, сайт и лого <a href="https://github.com/glebgorokhov" target="_blank">@glebgorokhov</a> <a href="https://github.com/altfoxie/vzlom-kazino" style="text-decoration:none;font-size: 1.3rem;">🎰</a>',
        },
      },
    },
    en: {
      label: "English",
      lang: "en",
      title: "Huecker",
      titleTemplate: ":title • Huecker",
      description:
        "Open-source proxy for using Docker Hub from blocked countries",
      themeConfig: {
        nav: [
          { text: "Reasons", link: "/en/reasons" },
          { text: "How to Use", link: "/en/use" },
          { text: "Support", link: "/en/support" },
          { text: "Authors", link: "/en/authors" },
        ],
        sidebar: [
          {
            text: "Documentation",
            items: [
              { text: "Reasons", link: "/en/reasons" },
              { text: "How to Use", link: "/en/use" },
              { text: "Other Proxies", link: "/en/others" },
              { text: "Support", link: "/en/support" },
              { text: "Authors", link: "/en/authors" },
            ],
          },
        ],
        footer: {
          message: "Published under Apache-2.0 license, server: dev",
          copyright:
            'Created by <a href="https://github.com/altfoxie" target="_blank">@altfoxie</a>, site and logo <a href="https://github.com/glebgorokhov" target="_blank">@glebgorokhov</a>',
        },
      },
    },
  },
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#1d63ed" },
    ],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "msapplication-TileColor", content: "#1d63ed" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
  ],
  srcDir: "./src",
  outDir: "./dist",
  appearance: "dark",
  lastUpdated: true,
  themeConfig: {
    siteTitle: false,
    search: {
      provider: "local",
      detailedView: true,
    },
    logo: {
      light: "/logo_light.svg",
      dark: "/logo_dark.svg",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/huecker-io/huecker" },
    ],
  },
});
