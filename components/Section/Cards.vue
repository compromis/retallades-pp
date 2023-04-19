<template>
  <div class="container">
    <div class="cards">
      <AnimatedCard :number="-1000" id="Card1">
        Metgesses de família
      </AnimatedCard>
      <AnimatedCard :number="-500" id="Card2">
        Especialistes

        <template #emoji>
          <img class="emoji thinking" data-lag="0.1" src="~/assets/images/emojis/thinking-face.png" alt="" />
        </template>
      </AnimatedCard>
      <AnimatedCard :number="-2000" id="Card3">
        Infermers

        <template #emoji>
          <img class="emoji thermometer" data-lag="0.1" src="~/assets/images/emojis/face-with-thermometer.png" alt="" />
        </template>
      </AnimatedCard>
      <AnimatedCard :number="-5000" id="Card4">
        Mestres i professors
      </AnimatedCard>
      <AnimatedCard :number="-100" id="Card5">
        Escoles i instituts
      </AnimatedCard>
      <AnimatedCard :number="-20" id="Card6">
        Centres de salut
      </AnimatedCard>
      <AnimatedCard :number="-5" id="Card7">
        Residències de majors

        <template #emoji>
          <img class="emoji confounded" data-lag="0.1" src="~/assets/images/emojis/confounded-face.png" alt="" />
        </template>
      </AnimatedCard>
      <AnimatedCard :number="-10" id="Card8">
        Centres de dia

        <template #emoji>
          <img class="emoji eyebrows" data-lag="0.1" src="~/assets/images/emojis/face-with-raised-eyebrow.png" alt="" />
        </template>
      </AnimatedCard>
      <AnimatedCard text="No gratuïts" id="Card9">
        Llibres en primària, secundària i batxillerat
      </AnimatedCard>
      <AnimatedCard :number="-10000" id="Card10">
        Ajudes al lloguer

        <template #emoji>
          <img class="emoji steam" data-lag="0.1" src="~/assets/images/emojis/face-with-steam-from-nose.png" alt="" />
        </template>
      </AnimatedCard>
      <AnimatedCard :number="-6000" id="Card11">
        Beques universitàries

        <template #emoji>
          <img class="emoji expletive" data-lag="0.1" src="~/assets/images/emojis/face-with-symbols-on-mouth.png" alt="" />
        </template>
      </AnimatedCard>
      <AnimatedCard :number="-35000" even id="Card12">
        Ajudes a la dependència
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
</style>