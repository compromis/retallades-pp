<script setup>
const { locale } = useI18n()
</script>

<template>
  <section class="intro">
    <div class="intro-marquee">
      <ClientOnly>
        <MarqueeText :duration="35">
          <span class="intro-number">
            1.750.000.000 €
            <div class="logo-pp first"><img src="~/assets/images/logos/pp.svg" alt="" /></div>
            <img class="logo-pp second" src="~/assets/images/logos/pp.svg" alt="" />
            <img class="logo-pp third" src="~/assets/images/logos/pp.svg" alt="" />
            <img class="logo-pp fourth" src="~/assets/images/logos/pp.svg" alt="" />
            <img class="scissors first" src="~/assets/images/emojis/scissors.png" alt="" />
            <img class="scissors second" src="~/assets/images/emojis/scissors.png" alt="" />
            <img class="scissors third" src="~/assets/images/emojis/scissors.png" alt="" />
            <img class="scissors fourth" src="~/assets/images/emojis/scissors.png" alt="" />
          </span>
        </MarqueeText>
      </ClientOnly>
    </div>
    <div class="intro-text" v-if="locale === 'cas'">
      <p>
        Este es el <strong><u>recorte</u></strong> que ha anunciado el
        <span class="pp-wrapper">
          <img class="logo-pp" src="~/assets/images/logos/pp.svg" alt="" />
          <strong><u>Partido Popular</u></strong>
        </span>
        con una reforma fiscal para favorecer a los ricos 
        si gana las elecciones.
      </p>
      <p>Es mucho dinero, sí. Pero a veces cuesta hacerse una idea de lo que <strong><u>puede suponer para nuestras vidas</u></strong>.</p>
      <p>Te ayudamos a hacerte una idea...</p>
    </div>
    <div class="intro-text" v-else>
      <p>
        Esta és la <strong><u>retallada</u></strong> que ha anunciat el
        <span class="pp-wrapper">
          <img class="logo-pp" src="~/assets/images/logos/pp.svg" alt="" />
          <strong><u>Partit Popular</u></strong>
        </span> amb una reforma fiscal per a afavorir els rics
        en cas que guanye les eleccions.
      </p>
      <p>Son molts diners, sí. Però de vegades costa fer-se una idea del que <strong><u>pot suposar per a les nostres vides</u></strong>.</p>
      <p>T’ajudem a fer-te una idea...</p>
    </div>
  </section>
</template>

<style lang="scss">
.intro {
  color: $white;
  font-weight: bold;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &-marquee {
    height: clamp(15rem, 30vw, 40rem);
    margin-bottom: 4vh;
  }

  &-number {
    position: relative;
    display: inline-block;
    font-size: clamp(15rem, 30vw, 40rem);
    font-weight: 900;
    letter-spacing: -.02em;
    margin-left: 50vw;
    line-height: 1;
    transform: translateY(2rem);

    .logo-pp {
      position: absolute;
      width: 5vw;
      min-width: 60px;

      &.first {
        bottom: 15%;
        left: .5%;
        transform: rotate(-24deg);
      }

      &.second {
        bottom: 50%;
        left: 29%;
        transform: rotate(14deg);
      }

      &.third {
        bottom: 29%;
        left: 52%;
        transform: rotate(-24deg);
      }

      &.fourth {
        bottom: 35%;
        left: 86%;
        transform: rotate(14deg);
      }
    }

    .scissors {
      position: absolute;
      width: 5vw;
      min-width: 60px;

      &.first {
        top: 7%;
        left: 12%;
        transform: rotate(-64deg);
      }

      &.second {
        bottom: 9%;
        left: 43.5%;
        transform: rotate(114deg);
      }

      &.third {
        top: 17%;
        left: 65%;
        transform: rotate(34deg);
      }

      &.fourth {
        top: 26%;
        left: 98.5%;
        transform: rotate(54deg);
      }
    }
  }

  &-text {
    max-width: 50ch;
    text-align: center;
    font-size: clamp(1.25rem, 2.5vw, 2rem);
    margin: 0 auto;
    line-height: 1.1;
    padding: 0 2rem;

    strong {
      font-weight: 900;
    }

    u {
      text-decoration: underline;
      text-decoration-color: $yellow;
      text-decoration-thickness: .15em;
    }

    .logo-pp {
      height: 1.25em;
      margin-right: .25em;
    }

    .pp-wrapper {
      white-space: nowrap;
    }
  }
}

@include media-breakpoint-down(md) {
  .intro {
    &-marquee {
      margin: 10vh 0;
      transform: translateY(5vh);
    }

    &-text {
      line-height: 1.25;
    }
  }
}
</style>
