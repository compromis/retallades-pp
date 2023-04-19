<template>
  <section class="proposal">
    <div class="container">
      <div class="proposal-text">
        <p>No és moment per a tornar a les retallades de serveis públics.<br>És el moment de <strong><u>més polítiques per a les persones</u></strong>.</p>
      </div>

      <div class="cards">
        <AnimatedCard id="Proposal1">
          <div class="card-proposal">
            <h2>Consolidar la reforma fiscal del Botànic</h2>
            <p>Els impostos més baixos per a qui menys té, i una major aportació dels rics i rendes altes.</p>
            <a href="/" target="_blank" rel="noopener" class="card-snippet">
              <img src="~/assets/images/logos/levante.svg" alt="Levante" />
              <h3>Las rentas bajas valencianas son las que menos IRPF pagan de España</h3>
            </a>
          </div>
        </AnimatedCard>
        <AnimatedCard id="Proposal2">
          <div class="card-proposal">
            <h2>Enfortir els serveis públics</h2>
            <p>Invertir més recursos en sanitat, educació, serveis socials, vivenda i en totes les polítiques per a les persones.</p>
            <a href="/" target="_blank" rel="noopener" class="card-snippet">
              <img src="~/assets/images/logos/eldiario.svg" alt="eldiario.es" />
              <h3>La Generalitat Valenciana lidera la recuperación de la inversión en políticas sociales tras los recortes de la última dècada</h3>
            </a>
          </div>
        </AnimatedCard>
        <AnimatedCard id="Proposal3">
          <div class="card-proposal">
            <h2>Aconseguir un finançament just per invertit en tot el que importa</h2>
            <p>Perquè encara ens queda molt per fer!</p>
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
    font-size: 2rem;
    margin: 0 auto;
    line-height: 1.1;
    padding: 3rem 0;
  }

  strong {
    font-weight: 900;
  }

  u {
    text-decoration-thickness: 4px;
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
    font-size: 2.75rem;
  }

  p {
    font-size: 1.75rem;
    padding-right: 2rem;
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
</style>