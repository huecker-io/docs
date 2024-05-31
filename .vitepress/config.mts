import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "ru-RU",
  title: "Хуёкер",
  titleTemplate: ":title • Хуёкер",
  description: "Open-Source прокси для использования Docker из заблокированных стран",
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#1d63ed' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#1d63ed' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ],
  srcDir: './src',
  outDir: './dist',
  appearance: 'dark',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Искать',
            buttonAriaLabel: 'Искать'
          },
          modal: {
            displayDetails: 'Показать детали',
            resetButtonTitle: 'Сброс',
            backButtonTitle: 'Назад',
            noResultsText: 'Ничего не найдено по запросу',
            footer: {
              selectText: 'Открыть',
              selectKeyAriaLabel: 'Открыть',
              navigateText: 'Навигация',
              navigateUpKeyAriaLabel: 'Выше',
              navigateDownKeyAriaLabel: 'Ниже',
              closeText: 'Закрыть',
              closeKeyAriaLabel: 'Закрыть'
            }
          }
        }
      }
    },

    lastUpdated: {
      text: 'Обновлено',
    },

    outline: {
      label: "На этой странице",
    },

    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },

    darkModeSwitchLabel: 'Тема',

    lightModeSwitchTitle: 'Переключиться на светлую тему',

    darkModeSwitchTitle: 'Переключиться на тёмную тему',

    sidebarMenuLabel: 'Меню',

    returnToTopLabel: 'Наверх',

    langMenuLabel: 'Сменить язык',

    logo: {
      light: "/logo_light.svg",
      dark: "/logo_dark.svg",
    },

    nav: [
      { text: 'Зачем', link: '/reasons' },
      { text: 'Как использовать', link: '/use' },
      { text: 'Поддержать', link: '/support' }
    ],

    sidebar: [
      {
        text: 'Документация',
        items: [
          { text: 'Зачем', link: '/reasons' },
          { text: 'Использование', link: '/use' },
          { text: 'Другие прокси', link: '/others' },
          { text: 'Поддержать', link: '/support' },
          { text: 'Автор', link: '/author' },
        ]
      }
    ],

    footer: {
      message: 'Опубликовано под лицензией Apache-2.0',
      copyright: 'Создатель <a href="https://github.com/altfoxie" target="_blank">@altfoxie</a>, сайт и лого <a href="https://github.com/glebgorokhov" target="_blank">@glebgorokhov</a>'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/altfoxie/huecker' }
    ]
  }
})
