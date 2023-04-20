import { title, description, keywords, url } from './content/meta'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: title.val,
      htmlAttrs: { lang: 'ca' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: description.val },
        { hid: 'keywords', name: 'keywords', content: keywords.val },
        { hid: 'robots', name: 'robots', content: 'index, follow' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'og:locale', property: 'og:locale', content: 'ca' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:description', property: 'og:description', content: description.val },
        { hid: 'og:image', property: 'og:image', content: url.val + 'images/ogimage.png' },
        { hid: 'og:url', property: 'og:url', content: url.val },
        { hid: 'twitter:site', property: 'twitter:site', content: '@compromis' },
        { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:title', property: 'twitter:title', content: title.val },
        { hid: 'twitter:description', property: 'twitter:description', content: description.val },
        { hid: 'twitter:image', property: 'twitter:image', content: url.val + 'images/ogimage.png' },
        { hid: 'twitter:url', property: 'twitter:url', content: url.val }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://compromis.net/sub/icons/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://compromis.net/sub/icons/favicon32.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'https://compromis.net/sub/icons/favicon192.png' },
        { rel: 'stylesheet', href: 'https://compromis.net/sub/fonts/manrope.css?variable' },
      ],
    }
  },

  css: ['@compromis/blobby/scss/blobby.scss'],

  modules: [
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      { code: 'val', file: 'val.js', name: 'Valencià', isCatchallLocale: true },
      { code: 'cas', file: 'cas.js', name: 'Castellano' }
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'val'
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "~/assets/scss/variables";
            @import "@compromis/blobby/scss/variables";
            @import "bootstrap/scss/functions";
            @import "bootstrap/scss/variables";
            @import "bootstrap/scss/maps";
            @import "bootstrap/scss/mixins";
          `
        }
      }
    }
  }
})
