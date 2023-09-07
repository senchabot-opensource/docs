// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import Footer from './components/Footer.vue'
import './style.css'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'sidebar-nav-after': () => h(Footer)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
