<template>  
  <a class="reviews-item" :href="item.link" ref="reviewItemRef"> 
    <div class="reviews-item__img">
      <img :src="item.image" :alt="item.title">
    </div>
    <div v-if="!item.video" class="reviews-item__info">
      <div class="reviews-item__name" v-if="item.name">{{ item.name }}</div>
      <div class="reviews-item__text" v-if="item.text">{{ item.text }}</div>      
    </div>  
    <div v-else class="reviews-item__info reviews-item__info--row">
      <div class="reviews-item__descr">
        <div class="reviews-item__name" v-if="item.name">{{ item.name }}</div>
        <div class="reviews-item__text" v-if="item.text">{{ item.text }}</div>   
      </div>   
      <div class="reviews-item__video">
        <svg width="72" height="72" viewBox="0 0 94 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <foreignObject x="-173.968" y="-173.968" width="441.935" height="419.935"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(86.98px);clip-path:url(#bgblur_0_6005_538_clip_path);height:100%;width:100%"></div></foreignObject><rect data-figma-bg-blur-radius="173.968" width="94" height="72" rx="13.0476" fill="#e3e3e3"/>
          <path d="M56.3208 35.6137C57.2264 36.2299 57.2264 37.7701 56.3208 38.3863L41.0377 48.7832C40.1321 49.3993 39 48.6291 39 47.3969L39 26.6031C39 25.3709 40.1321 24.6007 41.0377 25.2168L56.3208 35.6137Z" fill="#66cb01"/>
          <defs>
          <clipPath id="bgblur_0_6005_538_clip_path" transform="translate(173.968 173.968)"><rect width="94" height="72" rx="13.0476"/>
          </clipPath></defs>
        </svg>
      </div>
    </div>  
  </a>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  item: Record<string, any>
}>()

const reviewItemRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!reviewItemRef.value) return

  const { $gsap } = useNuxtApp()

  $gsap.set(reviewItemRef.value, { scale: 0.93, opacity: 0.9 })

  $gsap.to(reviewItemRef.value, {
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: reviewItemRef.value,
      start: 'top 80%',
      end: 'top 20%',
      scrub: true,
      fastScrollEnd: true
    }
  })
})
</script>