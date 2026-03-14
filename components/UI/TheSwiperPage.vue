<template>
  <div class="slider-container" :id="`swiper-container-${uniqueId}`">
    <button :class="`swiper-button-prev swiper-button-prev-${uniqueId}`" @click.prevent></button>
    <swiper
      :slides-per-view="options.slidesPerView"
      :space-between="options.spaceBetween"
      :modules="modules"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      :loop="true"
      :navigation="{
        nextEl: `.swiper-button-next-${uniqueId}`,
        prevEl: `.swiper-button-prev-${uniqueId}`,
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :breakpoints="options.breakpoints"
    >
      <swiper-slide v-for="item, i in items" :key="i">
        <TheReviewsItem v-if="typeItem === 'reviewsItem'" :item="item"></TheReviewsItem>
        <TheBrandItem v-else-if="typeItem === 'brand'" :item="item"></TheBrandItem>
        <TheItem v-else :item="item" :classModifyImg="classModifyImg"></TheItem>
      </swiper-slide>
    </swiper>
    <button :class="`swiper-button-next swiper-button-next-${uniqueId}`" @click.prevent></button>
  </div>
</template>

<script>
import TheItem from '~/components/TheItem.vue';
import TheReviewsItem from '~/components/TheReviewsItem.vue';
import TheBrandItem from '~/components/TheBrandItem.vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation'; // Убедитесь, что стили для навигации подключены

export default {
  components: {
    Swiper,
    SwiperSlide,
    TheReviewsItem,
    TheItem,
    TheBrandItem
  },
  props: {
    items: {
      type: Array, // Изменено на Array, так как используется v-for
      default: () => [],
      required: true
    },
    options: {
      type: Object,
      default: () => ({}),
      required: true
    },
    typeItem: {
      type: String,
      default: 'item'
    },
    uniqueId: {
      type: String,
      default: ''
    },
    classModifyImg: {
      type: String,
      default: ''
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
  },
  mounted() {
    console.log(this.uniqueId)
  }
}
</script>

<style>
  .swiper-slide {
    height: initial;
  }
</style>