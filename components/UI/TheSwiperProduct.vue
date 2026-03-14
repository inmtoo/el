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
    <swiper-slide v-for="item, i in items" :key="i" class="product__info-slider-item product__info-item">
      <div class="product__info-item-wrap">
        <div class="product__info-item-photo"><img :src="item.photo" alt=""></div>
        <div class="product__info-item-name">{{ item.title }}</div>
        <div class="product__info-item-row">
          <div class="product__info-item-count">
            <span>-</span>
            <input type="text" name="count" value="1">
            <span>+</span>
          </div>
          <div class="product__info-item-price">{{ item.price }} ₽</div>
        </div>

      </div>
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
    items: {
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