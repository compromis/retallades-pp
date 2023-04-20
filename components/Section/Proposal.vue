<script setup>
const { locale } = useI18n()
</script>

<template>
  <section class="proposal">
    <div class="container">
      <div class="proposal-text" v-if="locale === 'cas'">
        <p>No és moment per a tornar a les retallades de serveis públics.</p>
        <p>És el moment de <strong><u>més polítiques per a les persones</u></strong>.</p>
      </div>
      <div class="proposal-text" v-else>
        <p>No és moment per a tornar a les retallades de serveis públics.</p>
        <p>És el moment de <strong><u>més polítiques per a les persones</u></strong>.</p>
      </div>

      <div class="cards">
        <AnimatedCard id="Proposal1">
          <div class="card-proposal">
            <h2>{{ $t('proposal.first.title') }}</h2>
            <p>{{ $t('proposal.first.text') }}</p>
            <a href="/" target="_blank" rel="noopener" class="card-snippet">
              <img src="~/assets/images/logos/levante.svg" alt="Levante" />
              <h3>Las rentas bajas valencianas son las que menos IRPF pagan de España</h3>
            </a>
          </div>
        </AnimatedCard>
        <AnimatedCard id="Proposal2">
          <div class="card-proposal">
            <h2>{{ $t('proposal.second.title') }}</h2>
            <p>{{ $t('proposal.second.text') }}</p>
            <a href="/" target="_blank" rel="noopener" class="card-snippet">
              <img src="~/assets/images/logos/eldiario.svg" alt="eldiario.es" />
              <h3>La Generalitat Valenciana lidera la recuperación de la inversión en políticas sociales tras los recortes de la última dècada</h3>
            </a>
          </div>
        </AnimatedCard>
        <AnimatedCard id="Proposal3">
          <div class="card-proposal">
            <h2>{{ $t('proposal.third.title') }}</h2>
            <p>{{ $t('proposal.third.text') }}</p>
            <a href="/" target="_blank" rel="noopener" class="card-snippet">
              <img src="~/assets/images/logos/valenciaplaza.svg" alt="Valencia Plaza" />
              <h3>Baldoví promete reactivar la vía judicial para reclamar una financiación autonómica justa</h3>
            </a>
          </div>
        </AnimatedCard>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@700&display=swap');

.proposal {
  padding: 3rem 0 15rem;

  &-text {
    color: $white;
    max-width: 50ch;
    text-align: center;
    font-size: clamp(1.25rem, 2.5vw, 2rem);
    margin: 0 auto;
    line-height: 1.1;
    padding: 3rem 2rem;
  }

  strong {
    font-weight: 900;
  }

  u {
    text-decoration-thickness: .15em;
  }
}

.cards {
  display: grid;
  gap: 4rem;
}

.card-proposal {
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  gap: 2rem;

  h2 {
    font-size: clamp(2rem, 2vw, 2.75rem);
  }

  p {
    font-size: clamp(1.5rem, 1.5vw, 1.75rem);
    padding-right: 2rem;
    margin: 0;
  }

  .card-snippet {
    color: inherit;
    text-decoration: none;
    transition: .25s ease;
    font-family: 'Source Serif Pro', serif;
    background: $gray-100;
    margin: calc(var(--card-padding) * -1);
    padding: var(--card-padding);
    border-radius: 0 var(--card-radius) var(--card-radius) 0;

    img {
      height: 1.25rem;
      margin-bottom: .5rem;
      margin-top: -.5rem;
    }

    h3 {
      font-family: 'Source Serif Pro', serif;
      font-size: 2rem;
    }

    &:hover {
      opacity: .75;
    }
  }
}

@include media-breakpoint-down(md) {
  .proposal {
    padding: 0 0 5rem;
  }

  .card-proposal {
    grid-template-columns: 1fr;
    gap: 1rem;

    .card-snippet {
      margin-top: 0;
      border-radius: 0 0 var(--card-radius) var(--card-radius);
    }
  }
}
</style>