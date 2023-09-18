import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    ssr: { 
        noExternal: ['@discord-message-components/vue'] 
    } 
  },
  title: 'Senchabot',
  description: 'Documentation',

  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'description', content: 'All Bots and Stream overlays, Manage from one place! 100% Open source Discord and Twitch bot' }],
    ['meta', { name: 'theme-color', content: '#20AB8C' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:site_name', content: 'Senchabot' }],
    ['meta', { name: 'og:image', content: 'https://avatars.githubusercontent.com/u/125701962' }],
    ['meta', { name: 'og:description', content: 'All Bots and Stream overlays, Manage from one place! 100% Open source Discord and Twitch bot' }],
    ['meta', { name: 'twitter:site', content: '@senchabot' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:description', content: 'All Bots and Stream overlays, Manage from one place! 100% Open source Discord and Twitch bot' }],
    ['meta', { name: 'twitter:image', content: 'https://avatars.githubusercontent.com/u/125701962' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/svg/senchabot-nobg-1.svg', width: 24, height: 24 },

    i18nRouting: true,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/senchabot-opensource/' },
      { icon: 'discord', link: 'https://discord.com/invite/h3NqsbHW4a' },
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/company/senchabot'
      }
    ], //  available icons https://vitepress.dev/reference/default-theme-config#sociallinks

    nav: [
      {
        text: 'Developers',
        link: 'https://github.com/senchabot-opensource/monorepo'
      }
    ],
    // Footer
    footer: {
      message: `<span>Released under the  <a href="https://github.com/senchabot-opensource/monorepo/blob/dev/LICENSE">GPL-3.0 License</a></span>`,
      copyright: `<span>Copyright © ${new Date().getFullYear()} <a href="https://github.com/senchabot-opensource">Senchabot</a></span><span><a href="https://senchabot.app/terms" target="_blank" rel="noopener">Terms of Service</a> • <a href="https://senchabot.app/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a></span>`
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          tr: {
            translations: {
              button: {
                buttonText: 'Arama',
                buttonAriaLabel: 'Arama'
              },
              modal: {
                displayDetails: 'Ayrıntılı listeyi görüntüle',
                resetButtonTitle: 'Arama kriterlerini temizleyin',
                backButtonTitle: 'Aramayı kapat',
                noResultsText: 'Hiçbir sonuç bulunamadı',
                footer: {
                  selectText: 'navigasyon için',
                  navigateText: 'seçmek için',
                  navigateUpKeyAriaLabel: 'yukarı ok',
                  navigateDownKeyAriaLabel: 'aşağı ok',
                  closeText: 'kapatmak için'
                }
              }
            }
          }
        }
      }
    },

    editLink: {
      pattern:
        'https://github.com/senchabot-opensource/docs/edit/main/docs/:path'
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/',
      themeConfig: {
        sidebar: [
          // Sidebar Top
          // {
          //   items: [
          //     { text: "Introduction", link: "/" },
          //     { text: "Getting Started", link: "/getting-started" },
          //   ],
          // },
          // Twitch
          {
            text: 'Twitch',
            collapsed: false,
            items: [
              {
                text: 'Getting Started',
                link: '/twitch-bot/getting-started'
              },
              {
                text: 'Commands',
                link: '/twitch-bot/commands'
              },
              {
                text: 'Custom Commands',
                link: '/twitch-bot/custom-commands'
              },
              {
                text: 'Modules',
                collapsed: true,
                items: [
                  {
                    text: 'Custom API System',
                    link: '/twitch-bot/custom-api-system'
                  },
                  {
                    text: 'Command Timer System',
                    link: '/twitch-bot/command-timer-system'
                  },
                  {
                    text: 'Reminder System',
                    link: '/twitch-bot/reminder-system'
                  },
                  {
                    text: 'Note Taking System',
                    link: '/twitch-bot/note-taking-system'
                  }
                ]
              },
              {
                text: 'Variables',
                link: '/twitch-bot/variables'
              }
            ]
          },
          // Discord
          {
            text: 'Discord',
            collapsed: false,
            items: [
              {
                text: 'Getting Started',
                link: '/discord-bot/getting-started'
              },
              { text: 'Commands', link: '/discord-bot/commands' },
              // { text: "Custom Commands", link: "/discord-bot/custom-commands" },
              {
                text: 'Modules',
                collapsed: true,
                items: [
                  {
                    text: 'Live Stream Announcements',
                    link: '/discord-bot/live-stream-announcements'
                  },
                  {
                    text: 'Live Stream Events',
                    link: '/discord-bot/live-stream-events'
                  }
                  // {
                  //   text: "Custom API System",
                  //   link: "/discord-bot/custom-api-system",
                  // },
                  // {
                  //   text: "Reminder System",
                  //   link: "/discord-bot/reminder-system",
                  // },
                ]
              }
              // {
              //   text: "Variables",
              //   link: "/discord-bot/variables",
              // },
            ]
          }
          // Variables - Twitch & Discord
          // { text: "Variables", link: "/variables" },
        ]
      }
    },
    // TR - Turkish
    tr: {
      label: 'Türkçe',
      lang: 'tr',
      link: '/tr',
      themeConfig: {
        docFooter: {
          prev: 'Önceki sayfa',
          next: 'Sonraki sayfa'
        },
        outlineTitle: 'Bu sayfadaki',
        lastUpdatedText: 'Son güncelleme',
        editLink: {
          pattern:
            'https://github.com/senchabot-opensource/docs/edit/main/docs/:path',
          text: 'Bu sayfayı düzenle'
        },

        sidebar: [
          // Sidebar Top - TR
          // {
          //   items: [
          //     { text: 'Giriş', link: '/tr/' },
          //     { text: 'Başlamadan Önce', link: '/tr/getting-started' }
          //   ]
          // },
          // Twitch - TR
          {
            text: 'Twitch',
            collapsed: false,
            items: [
              {
                text: 'Başlamadan Önce',
                link: '/tr/twitch-bot/getting-started'
              },
              {
                text: 'Komutlar',
                link: '/tr/twitch-bot/commands'
              },
              {
                text: 'Özel Komutlar',
                link: '/tr/twitch-bot/custom-commands'
              },
              {
                text: 'Modüller',
                collapsed: true,
                items: [
                  {
                    text: 'Custom API Sistemi',
                    link: '/tr/twitch-bot/custom-api-system'
                  },
                  {
                    text: 'Komut Zamanlayıcı Sistemi',
                    link: '/tr/twitch-bot/command-timer-system'
                  },
                  {
                    text: 'Hatırlatıcı Sistemi',
                    link: '/tr/twitch-bot/reminder-system'
                  },
                  {
                    text: 'Not Sistemi',
                    link: '/tr/twitch-bot/note-taking-system'
                  }
                ]
              },
              {
                text: 'Değişkenler',
                link: '/tr/twitch-bot/variables'
              }
            ]
          },
          // Discord - TR
          {
            text: 'Discord',
            collapsed: false,
            items: [
              {
                text: 'Başlamadan Önce',
                link: '/tr/discord-bot/getting-started'
              },
              { text: 'Komutlar', link: '/tr/discord-bot/commands' },
              // {
              //   text: "Özel Komutlar",
              //   link: "/tr/discord-bot/custom-commands",
              // },
              {
                text: 'Modüller',
                collapsed: true,
                items: [
                  {
                    text: 'Canlı Yayın Duyuruları',
                    link: '/tr/discord-bot/live-stream-announcements'
                  },
                  {
                    text: 'Canlı Yayın Etkinlikleri',
                    link: '/tr/discord-bot/live-stream-events'
                  }
                  // {
                  //   text: "Custom API Sistemi",
                  //   link: "/tr/discord-bot/custom-api-system",
                  // },
                  // {
                  //   text: "Hatırlatıcı Sistemi",
                  //   link: "/tr/discord-bot/reminder-system",
                  // },
                ]
              }
              // {
              //   text: "Değişkenler",
              //   link: "/tr/discord-bot/variables",
              // },
            ]
          }
          // Variables - Twitch & Discord - TR
          // { text: "Değişkenler", link: "/variables" },
        ]
      }
    }
  }
})
