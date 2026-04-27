import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vitepress'

const SITE_URL = 'https://docs.senchabot.com'

function generateSitemap(siteConfig: any) {
  const pages = (siteConfig.pages as string[])
    .map((path) => {
      const url = path.replace(/^\//, '').replace(/\.md$/, '').replace(/\/index$/, '')
      const loc = url === '' ? SITE_URL : `${SITE_URL}/${url}`
      return `  <url>\n    <loc>${loc}</loc>\n  </url>`
    })
    .join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages}\n</urlset>`
  writeFileSync(resolve(siteConfig.outDir, 'sitemap.xml'), sitemap)
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Senchabot',
      url: 'https://senchabot.com',
      logo: 'https://senchabot.com/senchabot-logo.svg',
      sameAs: [
        'https://twitter.com/senchabot',
        'https://github.com/senchabot-opensource',
        'https://discord.com/invite/qUxwcjRzND',
        'https://www.youtube.com/@Senchabot',
      ],
    },
    {
      '@type': 'WebSite',
      name: 'Senchabot Documentation',
      url: SITE_URL,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Senchabot',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        ratingCount: '100',
      },
    },
  ],
}

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

  buildEnd: generateSitemap,

  transformHead({ pageData, siteConfig }) {
    const pagePath = pageData.relativePath.replace(/\.md$/, '').replace(/\/index$/, '')
    const canonicalUrl = pagePath === '' ? SITE_URL : `${SITE_URL}/${pagePath}`
    const pageTitle = pageData.frontmatter.title || siteConfig.site.title
    const pageDescription = pageData.frontmatter.description || siteConfig.site.description

    const head: any[] = [
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['meta', { property: 'og:title', content: `${pageTitle} | Senchabot Docs` }],
      ['meta', { property: 'og:description', content: pageDescription }],
      ['meta', { property: 'twitter:title', content: `${pageTitle} | Senchabot Docs` }],
      ['meta', { property: 'twitter:description', content: pageDescription }],
    ]

    // Inject JSON-LD only on the home page
    if (pageData.relativePath === 'index.md') {
      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(structuredData),
      ])
    }

    return head
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'meta',
      {
        name: 'description',
        content:
          'A multi-platform Twitch, Kick, and Discord bot for content creators to manage their communities.'
      }
    ],
    ['meta', { name: 'theme-color', content: '#20AB8C' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Senchabot' }],
    ['meta', { property: 'og:url', content: SITE_URL }],
    [
      'meta',
      {
        property: 'og:image',
        content: `${SITE_URL}/og-image.svg`
      }
    ],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'A multi-platform Twitch, Kick, and Discord bot for content creators to manage their communities.'
      }
    ],
    ['meta', { name: 'twitter:site', content: '@senchabot' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: `${SITE_URL}/og-image.svg`
      }
    ],
    ['meta', { name: 'robots', content: 'index,follow' }],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-ZXSVB4HQJH'
      }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ZXSVB4HQJH');`
    ]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/svg/senchabot-nobg-1.svg', width: 24, height: 24 },

    i18nRouting: true,

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/invite/qUxwcjRzND' },
      {
        icon: 'youtube',
        link: 'https://www.youtube.com/@Senchabot'
      },
      {
        icon: 'twitter',
        link: 'https://twitter.com/senchabot'
      }
    ], //  available icons https://vitepress.dev/reference/default-theme-config#sociallinks

    nav: [
      {
        text: 'Developers',
        link: 'https://github.com/senchabot-opensource'
      }
    ],
    // Footer
    footer: {
      message: `<span>Released under the  <a href="https://github.com/senchabot-opensource/monorepo/blob/dev/LICENSE">GPL-3.0 License</a></span>`,
      copyright: `<span>Copyright © ${new Date().getFullYear()} <a href="https://senchabot.com">Senchabot</a></span><span><a href="https://senchabot.com/terms-of-service" target="_blank" rel="noopener">Terms of Service</a> • <a href="https://senchabot.com/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a></span>`
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
          // Twitch - EN
          {
            text: 'Twitch Bot',
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
                collapsed: false,
                items: [
                  {
                    text: 'Custom API System',
                    link: '/twitch-bot/custom-api-system'
                  },
                  {
                    text: 'Command Timer System',
                    link: '/twitch-bot/command-timer-system'
                  }
                ]
              },
              {
                text: 'Planned (Not Active)',
                collapsed: true,
                items: [
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
          // Discord - EN
          {
            text: 'Discord Bot',
            collapsed: false,
            items: [
              {
                text: 'Getting Started',
                link: '/discord-bot/getting-started'
              },
              { text: 'Commands', link: '/discord-bot/commands' },
              {
                text: 'Custom Commands',
                link: '/discord-bot/custom-commands'
              },
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
                  },
                  {
                    text: 'Custom API System',
                    link: '/discord-bot/custom-api-system'
                  }
                  // {
                  //   text: "Reminder System",
                  //   link: "/discord-bot/reminder-system",
                  // },
                ]
              },
              {
                text: 'Planned',
                collapsed: true,
                items: [
                  {
                    text: 'YouTube Commands',
                    link: '/discord-bot/commands#planned'
                  }
                ]
              },
              {
                text: 'Variables',
                link: '/discord-bot/variables'
              }
            ]
          },
          {
            text: 'Kick Bot',
            collapsed: false,
            items: [
              {
                text: 'Getting Started',
                link: '/kick-bot/getting-started'
              },
              {
                text: 'Commands',
                link: '/kick-bot/commands'
              },
              {
                text: 'Custom Commands',
                link: '/kick-bot/custom-commands'
              },
              {
                text: 'Modules',
                collapsed: false,
                items: [
                  {
                    text: 'Custom API System',
                    link: '/kick-bot/custom-api-system'
                  },
                  {
                    text: 'Command Timer System',
                    link: '/kick-bot/command-timer-system'
                  }
                ]
              },
              {
                text: 'Variables',
                link: '/kick-bot/variables'
              }
            ]
          },
        ]
      }
    },
    // TR - Turkish
    tr: {
      label: 'Türkçe',
      lang: 'tr',
      link: '/tr/',
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
            text: 'Twitch Bot',
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
                collapsed: false,
                items: [
                  {
                    text: 'Custom API Sistemi',
                    link: '/tr/twitch-bot/custom-api-system'
                  },
                  {
                    text: 'Komut Zamanlayıcı Sistemi',
                    link: '/tr/twitch-bot/command-timer-system'
                  }
                ]
              },
              {
                text: 'Planlandı (Aktif Değil)',
                collapsed: true,
                items: [
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
            text: 'Discord Bot',
            collapsed: false,
            items: [
              {
                text: 'Başlamadan Önce',
                link: '/tr/discord-bot/getting-started'
              },
              { text: 'Komutlar', link: '/tr/discord-bot/commands' },
              {
                text: 'Özel Komutlar',
                link: '/tr/discord-bot/custom-commands'
              },
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
                  },
                  {
                    text: 'Custom API Sistemi',
                    link: '/tr/discord-bot/custom-api-system'
                  }
                  // {
                  //   text: "Hatırlatıcı Sistemi",
                  //   link: "/tr/discord-bot/reminder-system",
                  // },
                ]
              },
              {
                text: 'Planlandı',
                collapsed: true,
                items: [
                  {
                    text: 'YouTube Komutları',
                    link: '/tr/discord-bot/commands#planned'
                  }
                ]
              },
              {
                text: 'Değişkenler',
                link: '/tr/discord-bot/variables'
              }
            ]
          },
          {
            text: 'Kick Bot',
            collapsed: false,
            items: [
              {
                text: 'Başlamadan Önce',
                link: '/tr/kick-bot/getting-started'
              },
              {
                text: 'Komutlar',
                link: '/tr/kick-bot/commands'
              },
              {
                text: 'Özel Komutlar',
                link: '/tr/kick-bot/custom-commands'
              },
              {
                text: 'Modüller',
                collapsed: false,
                items: [
                  {
                    text: 'Custom API Sistemi',
                    link: '/tr/kick-bot/custom-api-system'
                  },
              {
                text: 'Komut Zamanlayıcı Sistemi',
                link: '/tr/kick-bot/command-timer-system'
              }
                ]
              },
              {
                text: 'Değişkenler',
                link: '/tr/kick-bot/variables'
              }
            ]
          }
          // Variables - Twitch & Discord - TR
          // { text: "Değişkenler", link: "/variables" },
        ]
      }
    }
  }
})
