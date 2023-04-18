<template>
  <section class="intro">
    <ClientOnly>
      <MarqueeText :repeat="10" :duration="35">
        <span class="intro-number">1.234.455.544€</span>
      </MarqueeText>
    </ClientOnly>
  </section>
</template>

<style lang="scss">
.intro {
  color: $white;
  font-weight: bold;

  &-number {
    font-size: clamp(15rem, 30vw, 40rem);
    font-weight: 900;
    letter-spacing: -.02em;
    margin-left: 50vw;
  }
}
</style>
