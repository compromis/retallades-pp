<template>
  <div class="container">
    <div class="cards">
      <AnimatedCard :number="-1000" id="Card1">
        {{ $t('card.doctors') }}
      </AnimatedCard>
      <AnimatedCard :number="-500" id="Card2">
        {{ $t('card.specialists') }}

        <template #emoji>
          <img class="emoji thinking" src="~/assets/images/emojis/thinking-face.png" alt="" />
        </template>
      </AnimatedCard>
      <AnimatedCard :number="-2000" id="Card3">
        {{ $t('card.nurses') }}

        <template #emoji>
          <img class="emoji thermometer" src="~/assets/images/emojis/face-with-thermometer.png" alt="" />
        </template>
      </AnimatedCard>
      <AnimatedCard :number="-5000" id="Card4">
        {{ $t('card.teachers') }}
      </AnimatedCard>
      <AnimatedCard :number="-100" id="Card5">
        {{ $t('card.schools') }}
      </AnimatedCard>
      <AnimatedCard :number="-20" id="Card6">
        {{ $t('card.clinics') }}
      </AnimatedCard>
      <AnimatedCard :number="-5" id="Card7">
        {{ $t('card.residence') }}

        <template #emoji>
          <img class="emoji confounded" src="~/assets/images/emojis/confounded-face.png" alt="" />
        </template>
      </AnimatedCard>
      <AnimatedCard :number="-10" id="Card8">
        {{ $t('card.daycare') }}

        <template #emoji>
          <img class="emoji eyebrows" src="~/assets/images/emojis/face-with-raised-eyebrow.png" alt="" />
        </template>
      </AnimatedCard>
      <AnimatedCard text="No gratuïts" id="Card9">
        {{ $t('card.textbooks') }}
      </AnimatedCard>
      <AnimatedCard :number="-10000" id="Card10">
        {{ $t('card.rent') }}

        <template #emoji>
          <img class="emoji steam" src="~/assets/images/emojis/face-with-steam-from-nose.png" alt="" />
        </template>
      </AnimatedCard>
      <AnimatedCard :number="-6000" id="Card11">
        {{ $t('card.grants') }}

        <template #emoji>
          <img class="emoji expletive" src="~/assets/images/emojis/face-with-symbols-on-mouth.png" alt="" />
        </template>
      </AnimatedCard>
      <AnimatedCard :number="-35000" id="Card12">
        {{ $t('card.dependence') }}
      </AnimatedCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cards {
  display: grid;
  gap: 6rem;
  grid-template-columns: 1fr 1fr;
  padding: 50px 0 200px;
}

.card {
  position: relative;
  z-index: 1;

  &:nth-child(even) {
    transform: translateY(50%);
  }
}

.emoji {
  display: block;
  position: absolute;
  z-index: 10;
  width: 130px;

  &.thinking {
    top: -3rem;
    left: -3rem;
  }

  &.thermometer {
    bottom: -3rem;
    right: -3rem;
  }

  &.confounded {
    top: -3rem;
    left: 5rem;
  }

  &.eyebrows {
    top: -3rem;
    left: 30%;
  }

  &.steam {
    bottom: -3rem;
    right: -3rem;
  }

  &.expletive {
    bottom: -3rem;
    right: -3rem;
  }
}

@include media-breakpoint-down(md) {
  .cards {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 0 75px;

    .emoji {
      width: 75px;

      &.thinking {
        top: -2.5rem;
        left: 3rem;
      }

      &.thermometer {
        bottom: -2.5rem;
        left: 5rem;
      }

      &.steam {
        top: -3rem;
        left: 3rem;
      }

      &.expletive {
        bottom: -1rem;
        right: 3rem;
      }
    }
  }

  .card {
    &:nth-child(even) {
      transform: translateY(0);
    }
  }
}
</style>