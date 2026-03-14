<template>
  <a :href="item.link" class="rent-block__item rent-item" ref="rentItemRef">
    <div class="rent-block__item-img rent-item__img">
      <img :src="item.image" alt="">
    </div>
    <div class="rent-block__item-title rent-item__title">{{ item.title }}</div>
  </a>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  item: Record<string, any>
}>()

const rentItemRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!rentItemRef.value) return

  const { $gsap } = useNuxtApp()

  $gsap.set(rentItemRef.value, { scale: 0.93, opacity: 0.9 })

  $gsap.to(rentItemRef.value, {
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: rentItemRef.value,
      start: 'top 80%',
      end: 'top 20%',
      scrub: true,
      fastScrollEnd: true
    }
  })
})
</script>