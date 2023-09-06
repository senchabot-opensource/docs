import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Senchabot",
  description: "Documentation",
  
  lastUpdated: true,
  cleanUrls: true,
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#20AB8C' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:site_name', content: 'Senchabot' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/senchabot.png', width: 24, height: 24 },

    i18nRouting: true,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/senchabot-opensource/' },
      { icon: 'discord', link: 'https://discord.com/invite/h3NqsbHW4a' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/senchabot' }
    ], //  available icons https://vitepress.dev/reference/default-theme-config#sociallinks
    
    nav: [
      { text: 'Developers', link: 'https://github.com/senchabot-opensource/monorepo' }
    ],
  },
    locales: {
      root: {
        label: 'English',
        lang: 'en',
        link: '/',
        themeConfig: {
          sidebar: [
            {
              items: [
                { text: 'Introduction', link: '/' },
                { text: 'Getting Started', link: '/getting-started' }
              ]
            },
            {
              text: 'Twitch',
              items: [
                { text: 'Getting Started', link: '/twitch-bot/getting-started' },
                { text: 'Komutlar', link: '/twitch-bot/getting-started' }
              ]
            },
            {
              text: 'Discord',
              items: [
                { text: 'Getting Started', link: '/discord-bot/getting-started' }
              ]
            },
          ],
      
        }
      },
      tr: {
        label: 'Turkce',
        lang: 'tr',
        link: '/tr',
        themeConfig: {
          sidebar: [
            {
              items: [
                { text: 'Giris', link: '/tr/' },
                { text: 'Baslamadan Once', link: '/tr/getting-started' }
              ]
            },
            {
              text: 'Twitch',
              items: [
                { text: 'Baslamadan Once', link: '/tr/twitch-bot/getting-started' }
              ]
            },
            {
              text: 'Discord',
              items: [
                { text: 'Baslamadan Once', link: '/tr/discord-bot/getting-started' }
              ]
            },
          ]
        }
      }
    }
})
