<template>
  <span class="animated-number me-1" :id="id">
    {{ toNumber }}
  </span>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap' 
import scrollTrigger from 'gsap/ScrollTrigger'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  toNumber: {
    type: Number,
    required: true
  },
  fromNumber: {
    type: Number,
    default: 0
  },
  currency: {
    type: Boolean,
    default: false
  }
})

const animatedNumber = ref(null)

const numberFormat = (number) => {
  const currency = props.currency ? { style: 'currency', currency: 'EUR' } : null
  return new Intl.NumberFormat('es-ES', { maximumSignificantDigits: 3, ...currency }).format(parseInt(number))
}

onMounted(() => {
  gsap.registerPlugin(scrollTrigger)
  gsap.from(`#${props.id}`, {
    textContent: props.fromNumber,
    duration: 1.25,
    snap: { textContent: 1 },
    ease: 'Power1.easeIn',
    scrollTrigger: {
      trigger: `#${props.id}`,
      start: 'top bottom'
    },
    onUpdate: function() {
      this.targets()[0].innerHTML = numberFormat(Math.ceil(this.targets()[0].textContent))
    }
  })
})
</script>

<style lang="scss" scoped>
.animated-number {
  font-variant-numeric: tabular-nums;
}
</style>