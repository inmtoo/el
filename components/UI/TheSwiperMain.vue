<template>
  <swiper
    :slides-per-view="1.2"
    :space-between="20"
    :modules="modules"
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :breakpoints="{
      768: {
        slidesPerView: 1.12
      },
      992: {
        slidesPerView: 1.2
      }
    }"
  >
    <swiper-slide v-for="item, i in items" :key="i">
      <div class="main-slider__item">
        <div class="main-slider__item-left">
          <div class="main-slider__item-title">{{ item.title }}</div>
          <div class="main-slider__item-text">
            {{ item.text }}
          </div>
          <div class="main-slider__item-btn">
            <button class="btn btn-primary">Хочу!</button>
          </div>
        </div>
        <div class="main-slider__item-right">
          <img :src="item.img" alt="">
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
    }
  }
}
</script>