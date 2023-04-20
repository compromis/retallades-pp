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
      end: "+=800",
      scrub: true,
    },
  })
})
</script>

<template>
  <article :class="['card', { 'padded': text || number }]" :id="id">
    <div class="card-inner">
      <span class="card-number" v-if="number || text">
        <span v-if="number">
          <AnimatedNumber :from="0" :to="number" :trigger="id" />
          <img src="~/assets/images/icons/triangle.svg" class="stonks" alt="" />
        </span>
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
    font-size: clamp(1.75rem, 4.5vw, 2.5rem);
    position: absolute;
    top: 0;
    right: 1.5rem;
    transform: translateY(-50%);
    
    & > span {
      letter-spacing: -.03em;
      display: flex;
      align-items: center;
    }

    .stonks {
      height: .85em;
      transform: rotate(180deg);
      margin-left: .25em;
    }
  }

  &-text {
    font-size: clamp(2rem, 2.5vw, 2.5rem);
    letter-spacing: -.03em;
    line-height: 1.1;
  }
}
</style>