<template>
  <section class="intro">
    <ClientOnly>
      <MarqueeText :repeat="10" :duration="35">
        <span class="intro-number">1.749.426.180 €</span>
      </MarqueeText>
    </ClientOnly>
    <div class="intro-text">
      <p>Esta és la <strong><u>retallada</u></strong> del Pressupost que ha anunciat el Partit Popular en cas que guanye les eleccions.</p>
      <p>Son molts diners, sí. Però de vegades costa fer-se una idea del que <strong><u>pot suposar per a les nostres vides</u></strong>.</p>
      <p>T’ajudem a fer-te una idea...</p>
    </div>
  </section>
</template>

<style lang="scss">
.intro {
  display: flex;
  color: $white;
  font-weight: bold;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &-number {
    font-size: clamp(15rem, 30vw, 40rem);
    font-weight: 900;
    letter-spacing: -.02em;
    margin-left: 50vw;
    line-height: 1.25;
  }

  &-text {
    max-width: 40ch;
    text-align: center;
    font-size: 2rem;
    margin: 0 auto;
    line-height: 1.1;

    strong {
      font-weight: 900;
    }

    u {
      text-decoration: underline;
      text-decoration-color: $yellow;
      text-decoration-thickness: 4px;
    }
  }
}
</style>
