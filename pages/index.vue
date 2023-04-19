<template>
  <main>
    <div class="background blue">
      <SectionNumber />
      <SectionCards />
    </div>
    <div class="background yellow">
      <SectionProposal />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.background {
  font-family: Roobert, sans-serif;
  background-color: $blue;

  &.yellow {
    background-color: $yellow;
  }
}
</style>
