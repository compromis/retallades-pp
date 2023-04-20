<script setup>
import BNav from '@compromis/blobby/components/nav/BNav.vue'
import BNavItem from '@compromis/blobby/components/nav/BNavItem.vue'
import BFooter from '@compromis/blobby/components/footer/BFooter.vue'

const { $ScrollSmoother } = useNuxtApp()
const route = useRoute()
const { locale } = useI18n()

onMounted(() => {
  $ScrollSmoother.create({
    smooth: 0.5,
    effects: true,
    normalizeScroll: true
  })
})
</script>

<template>
  <div>
    <b-nav no-spacer collapse-at="lg">
      <template #logo-append>
        <nuxt-link to="/">Retallades PP</nuxt-link>
      </template>
      <template #basic-nav>
        <li class="nav-menu-item d-md-none">
          <nuxt-link :to="switchLocalePath('val')" v-if="locale === 'cas'">VAL</nuxt-link>
          <nuxt-link :to="switchLocalePath('cas')" v-else>CAS</nuxt-link>
        </li>
        <li class="nav-menu-item d-none d-md-flex">
          <nuxt-link :to="switchLocalePath('val')" v-if="locale === 'cas'">Valencià</nuxt-link>
          <nuxt-link :to="switchLocalePath('cas')" v-else>Castellano</nuxt-link>
        </li>
      </template>
    </b-nav>
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <nuxt-page />

        <div class="footer-wrapper">
          <div class="container">
            <b-footer variant="white" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/fonts";

h1, h2, h3, h4, h5, h6 {
  letter-spacing: -.03em;
}
</style>