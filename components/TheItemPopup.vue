<template>
  <div class="popup-backdrop" @click="closePopup"></div>
  <div class="item-popup">
    <div class="item-popup__close" @click="closePopup">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.8 28L0 25.2L11.2 14L0 2.8L2.8 0L14 11.2L25.2 0L28 2.8L16.8 14L28 25.2L25.2 28L14 16.8L2.8 28Z" fill="#353535"/>
      </svg>
    </div>
    <div class="item-popup__title">{{ item.title }}</div>
    <div class="item-popup__photo">
      <img :src="!currentImg ? item.img : currentImg" alt="">
    </div>
    <div class="item-popup__thumbnails">
      <TheSwiperPopup :item="item" @setCurrentImg="setCurrentImg"/>
    </div>
    <div class="item-popup__info">
      <div class="item-popup__descr">{{ item.descr }}</div>
      <div class="item-popup__ingredients">
        <strong>Игредиенты:</strong> {{ item.ingredients.join(', ') }}        
      </div>
    </div>
  </div>
</template>
<script>
import TheSwiperPopup from '~/components/UI/TheSwiperPopup.vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';

export default {
  components: {
    Swiper,
    SwiperSlide,
    TheSwiperPopup
  },
  props: {
    item: {
      type: Object,
      default: {},
      required: true
    }
  },
  data() {
    return {
      currentImg: ''
    }
  },  
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y]
    };
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    },
    setCurrentImg(img) {
      this.currentImg = img;
    } 
  }
}
</script>