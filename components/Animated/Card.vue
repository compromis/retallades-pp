<script setup>
const { $gsap } = useNuxtApp()

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    default: null
  },
  text: {
    type: String,
    default: null
  }
})

const card = ref(null)

onMounted(() => {
  $gsap.from('#' + props.id + ' .card-inner', {
    opacity: 0,
    y: 50,
    scale: 0.85,
    ease: 'Elastic.easeOut',
    scrollTrigger: {
      trigger: '#' + props.id + ' .card-inner',
      start: 'top bottom',
      end: "+=1000",
      scrub: true,
    },
  })
})
</script>

<template>
  <article :class="['card', {'padded': text || number}]" :id="id">
    <div class="card-inner">
      <span class="card-number" v-if="number || text">
        <AnimatedNumber v-if="number" :from="0" :to="number" :trigger="id" />
        <span v-else>{{ text }}</span>
      </span>
      
      <div class="card-text">
        <slot />
      </div>

      <slot name="emoji" />
    </div>
  </article>
</template>

<style lang="scss">
.card {
  &-inner {
    --card-padding: 2rem;
    --card-radius: 1.25rem;
    background: $white;
    padding: var(--card-padding);
    border-radius: var(--card-radius);
    position: relative;
    min-height: 200px;
    display: flex;
    align-items: flex-end;
  }

  &.padded .card-inner {
    padding-right: 20%;
  }

  &-number {
    background: $red;
    color: $white;
    border-radius: .75rem;
    padding: .25rem 1rem;
    font-weight: 900;
    font-size: 2.5rem;
    position: absolute;
    top: 0;
    right: 1.5rem;
    transform: translateY(-50%);
    letter-spacing: -.03em;
  }

  &-text {
    font-size: 2.5rem;
    letter-spacing: -.03em;
    line-height: 1.1;
  }
}
</style>