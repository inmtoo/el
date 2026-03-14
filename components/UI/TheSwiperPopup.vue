<template>
  <swiper
    :slides-per-view="3"
    :space-between="8"
    :modules="modules"
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :breakpoints="{
      768: {
        slidesPerView: 4,
        spaceBetween: 16
      }
    }"
  >
    <swiper-slide class="item-popup__thumb-item">
      <div class="item-popup__thumb-item-photo" @click="currentImg = item.img"><img :src="item.img" alt=""></div>
    </swiper-slide>
    <swiper-slide v-for="slide, i in item.images" :key="i" class="item-popup__thumb-item">
      <div class="item-popup__thumb-item-photo" @click="setCurrentImg(slide)"><img :src="slide" alt=""></div>
    </swiper-slide>
  </swiper>
</template>

<script>

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    item: {
      type: Object,
      default: {},
      required: true
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
    setCurrentImg(img) {
      this.$emit('setCurrentImg', img);
    }
  }
}
</script>