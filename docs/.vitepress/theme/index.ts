// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import '@theme/style.css'
import '@theme/custom.css'

import {
	DiscordButton,
	DiscordButtons,
	DiscordEmbed,
	DiscordEmbedField,
	DiscordEmbedFields,
	DiscordInteraction,
	DiscordMarkdown,
	DiscordMention,
	DiscordMessage,
	DiscordMessages,
	DiscordReaction,
	DiscordReactions,
	install as DiscordMessageComponents,
} from '@discord-message-components/vue';
import '@discord-message-components/vue/dist/style.css';

import Footer from './components/Footer.vue'
import ApplicationCommands from './components/ApplicationCommands.vue'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'sidebar-nav-after': () => h(Footer)
    })
  },
  enhanceApp({ app }) {
    app.use(DiscordMessageComponents, {
      profiles: {
        user: {
          author: 'Test User',
          avatar: "https://i.imgur.com/9HlPIUx.jpg",
        },
        bot: {
          author: 'Senchabot',
          avatar: "https://avatars.githubusercontent.com/u/125701962",
          bot: true,
        },
      },
    });
  
    app.component('ApplicationCommands', ApplicationCommands);
    
    app.component('DiscordButton', DiscordButton);
    app.component('DiscordButtons', DiscordButtons);
    app.component('DiscordEmbed', DiscordEmbed);
    app.component('DiscordEmbedField', DiscordEmbedField);
    app.component('DiscordEmbedFields', DiscordEmbedFields);
    app.component('DiscordInteraction', DiscordInteraction);
    app.component('DiscordMarkdown', DiscordMarkdown);
    app.component('DiscordMention', DiscordMention);
    app.component('DiscordMessage', DiscordMessage);
    app.component('DiscordMessages', DiscordMessages);
    app.component('DiscordReaction', DiscordReaction);
    app.component('DiscordReactions', DiscordReactions);
  }
}
