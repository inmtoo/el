<template>
  <div class="popup-backdrop" @click="closePopup"></div>
  <div class="video-popup">
    <div class="video-popup__close" @click="closePopup">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.8 28L0 25.2L11.2 14L0 2.8L2.8 0L14 11.2L25.2 0L28 2.8L16.8 14L28 25.2L25.2 28L14 16.8L2.8 28Z" fill="#353535"/>
      </svg>
    </div>
    <div class="video-popup__body">
      <iframe width="720" height="405" :src="video" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: String,
      default: ''
    }
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    }
  }
}
</script>