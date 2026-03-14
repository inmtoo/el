<template>
  <div class="popup-video__backdrop" @click="emit('close')">
    <button class="popup-video__close">
      <span></span>
      <span></span>
    </button>
  </div>
  <div class="popup-video">    
    <iframe
      :src="video"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface Props {
  video: string;
}

interface Emits {
  (e: 'close'): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();
</script>