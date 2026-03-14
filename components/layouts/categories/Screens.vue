<script setup lang="ts">
import Catalog from "~/components/blocks/Catalog.vue";
import { ref, onMounted } from "vue";
import TheRentItem from "~/components/UI/TheRentItem.vue";
import TheSwiperPage from "~/components/UI/TheSwiperPage.vue";
import { getCategories } from "~/api/categories";
import FAQ from "~/components/blocks/FAQ.vue";
import Projects from "~/components/blocks/Projects.vue";

defineProps({
  products: {
    type: Array,
    required: true,
  },
  subcategories: {
    type: Array,
    required: Array,
  },
  catName: {
    type: String,
    required: true,
  },
  catDescription: {
    type: String,
    required: true,
  },
  catThumbnail: {
    type: String,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

const breadcrumbs = [
  { title: "Главная", link: "/" },
  { title: "Аренда оборудования", link: "/catalog/" },
  { title: "LED-экраны", link: "" },
];

const page = defineModel<number>("page", { default: 1 });
const isShowVideo = ref(false);

const videoMain =
  "https://rutube.ru/play/embed/da36335391b54b0eaf0d75c7948ce06d/";
const video = ref("");

const ledTitle = "Создавайте масштаб и вовлечение!";
const ledSubtitle =
  "А наша команда поможет решить эту задачу с помощью UNILUMIN — вершины индустрии LED-экранов";
const ledItems = [
  {
    id: 1,
    title: "Для мероприятий",
    text: "Конгрессы, корпоративы, конференции, спортивные события, форумы, семинары, тренинги, презентации, благотворительные вечера, кинопоказы, премьеры, стендап, стримы, свадьбы, дни рождения",
    image: "/images/led/event.jpg",
  },
  {
    id: 2,
    title: "Выставки",
    text: "Видеостены, подвесные и напольные экраны, изогнутые конструкции, интеграция в дизайн стенда",
    image: "/images/products/exh.jpg",
  },
  {
    id: 3,
    title: "Контент с LED",
    text: "Реклама, кино, музыкальные клипы и коммерческий контент",
    image: "/images/led/content.jpg",
    link: "https://vladagroup-led.ru/",
  },
  {
    id: 4,
    title: "LED-фотозона",
    text: "Современный инструмент превращения любого события, будь то корпоратив, свадьба, выставка или презентация, в запоминающийся визуальный experience",
    image: "/images/products/photozone.jpg",
  },
];
const ledSliderOption = {
  slidesPerView: 1.2,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 2.5,
    },
  },
};

function showVideo(val) {
  video.value = val;
  isShowVideo.value = true;
}

function closeVideo() {
  isShowVideo.value = false;
}

const subscribeRef = ref<HTMLElement | null>(null);

function scrollToElem(className: string, behavior: ScrollBehavior = "smooth") {
  const el = document.querySelector(className);
  if (el) {
    const offsetTop = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: offsetTop,
      behavior,
    });
  } else {
    console.warn(`Element with class "${className}" not found.`);
  }
}

onMounted(() => {
  const { $gsap } = useNuxtApp();

  $gsap.set(subscribeRef.value, { scale: 0.84, opacity: 0.9 });

  $gsap.to(subscribeRef.value, {
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: "none",
    scrollTrigger: {
      trigger: subscribeRef.value,
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      fastScrollEnd: true,
    },
  });
});
</script>

<template>
  <div class="container">
    <UITheBreadcrumbs :items="breadcrumbs"></UITheBreadcrumbs>
  </div>
  <section class="main-promo">
    <div class="container">
      <div class="main-promo__row">
        <div class="main-promo__left">
          <p>Виртуальный продакшн</p>
          <h1>Аренда и монтаж LED-экранов для кино, рекламы, мероприятий</h1>
          <UITheButton
            title="Узнать цены"
            @click="scrollToElem('.footer')"
          ></UITheButton>
        </div>
        <div
          :class="[
            'main-promo__right',
            video ? ' main-promo__right--video' : '',
          ]"
        >
          <img
            src="/images/products/led.jpg"
            alt="Аренда и монтаж LED-экранов для кино, рекламы, мероприятий"
          />

          <div
            v-if="videoMain"
            class="main-promo__video-btn"
            @click="showVideo(videoMain)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ff8900"
              viewBox="-7 0 32 32"
              version="1.1"
            >
              <title>play</title>
              <path
                d="M0 6.688v18.906c0 0.344 0.156 0.625 0.469 0.813 0.125 0.094 0.344 0.125 0.5 0.125s0.281-0.031 0.438-0.125l16.375-9.438c0.313-0.219 0.5-0.5 0.5-0.844 0-0.313-0.188-0.594-0.5-0.813l-16.375-9.438c-0.563-0.406-1.406 0.094-1.406 0.813z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--<Catalog
    :products="products"
    :subcategories="subcategories"
    :total-pages="totalPages"
    v-model:page="page"
  />-->

  <section class="st-section slider">
    <div class="container">
      <UITheSectionTitle
        :title="ledTitle"
        :subtitle="ledSubtitle"
      ></UITheSectionTitle>
      <TheSwiperPage
        :uniqueId="'solutions'"
        :items="ledItems"
        :options="ledSliderOption"
        typeItem="item"
      ></TheSwiperPage>
    </div>
  </section>

  <section class="st-section info-block info-block--right">
    <div class="container">
      <div class="info-block__row">
        <div class="info-block__text">
          <UITheSectionTitle
            :title="'Добро пожаловать в мир виртуального продакшна'"
            :subtitle="'Если для вашего проекта требуются LED-экраны, то наша компания — ваш надежный партнер в решении этой задачи. Расскажите, что именно необходимо, а мы дадим решение и предложение. Кроме того, вы можете протестировать оборудование в нашем рентале в Москве.'"
            :author="'Команда Vlada Group'"
          ></UITheSectionTitle>

          <UITheButtonLink
            title="Больше об экранах"
            :className="'btn-secondary'"
            link="https:\/\/vladagroup-led.ru"
          ></UITheButtonLink>
        </div>
        <div class="info-block__img">
          <img src="/images/about-led.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>

  <UIThePopupVideo
    v-if="isShowVideo"
    @close="closeVideo"
    :video="video"
  ></UIThePopupVideo>
</template>

<style scoped lang="scss"></style>
