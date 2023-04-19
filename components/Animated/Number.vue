<script setup>
const { $gsap } = useNuxtApp()

const props = defineProps({
  trigger: {
    type: String,
    required: true
  },
  to: {
    type: Number,
    required: true
  },
  from: {
    type: Number,
    default: 0
  }
})

const numberFormat = (number) => {
  return new Intl.NumberFormat('es-ES', { maximumSignificantDigits: 3 }).format(parseInt(number))
}

const number = ref(null)

onMounted(() => {
  $gsap.from('#' + props.trigger + ' .animated-number', {
    textContent: props.from,
    duration: 1.25,
    snap: { textContent: 1 },
    ease: 'Power1.easeIn',
    scrollTrigger: {
      trigger: '#' + props.trigger + ' .animated-number',
      start: 'top bottom',
      end: "+=400",
      scrub: true
    },
    onUpdate: function() {
      this.targets()[0].innerHTML = numberFormat(Math.ceil(this.targets()[0].textContent))
    }
  })
})
</script>

<template>
  <span class="animated-number" ref="number">
    {{ to }}
  </span>
</template>

<style lang="scss" scoped>
.animated-number {
  font-variant-numeric: tabular-nums;
}
</style>