<template>
  <main>
    <div class="background blue">
      <SectionNumber />
      <SectionCards />
    </div>
    <div class="background orange">
      <SectionProposal />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.background {
  font-family: $campaign-font;
  background-color: $blue;

  &.orange {
    background-color: $orange;
  }
}
</style>
