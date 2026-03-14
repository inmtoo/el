<template>  
  <a class="brand-item" :href="item.link" ref="brandItemRef"> 
    <div class="brand-item__img">
      <img :src="item.image" :alt="item.title">
    </div>
  </a>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  item: Record<string, any>
}>()

const brandItemRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!brandItemRef.value) return

  const { $gsap } = useNuxtApp()

  $gsap.set(brandItemRef.value, { scale: 0.93, opacity: 0.9 })

  $gsap.to(brandItemRef.value, {
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: brandItemRef.value,
      start: 'top 80%',
      end: 'top 20%',
      scrub: true,
      fastScrollEnd: true
    }
  })
})
</script>