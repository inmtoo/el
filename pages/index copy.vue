<template>
  <main class="main">
    <section class="main-promo">
      <div class="container">
        <div class="main-promo__row">
          <div class="main-promo__left">
            <p>Технологии контента</p>
            <h1>Рентал и площадка для съемок</h1>
            <UITheButton title="Написать в Телеграм"></UITheButton>
          </div>
          <div
            :class="[
              'main-promo__right',
              video ? ' main-promo__right--video' : '',
            ]"
          >
            <img src="/images/main.jpg" alt="" />

            <div v-if="video" class="main-promo__video-btn" @click="showVideo">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="#66cb01" 
                viewBox="-7 0 32 32" 
                version="1.1">
                <title>play</title>
                <path d="M0 6.688v18.906c0 0.344 0.156 0.625 0.469 0.813 0.125 0.094 0.344 0.125 0.5 0.125s0.281-0.031 0.438-0.125l16.375-9.438c0.313-0.219 0.5-0.5 0.5-0.844 0-0.313-0.188-0.594-0.5-0.813l-16.375-9.438c-0.563-0.406-1.406 0.094-1.406 0.813z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="st-section rent-block">
      <div class="container">
        <UITheSectionTitle
          :title="rentTitle"
          :subtitle="rentSubtitle"
        ></UITheSectionTitle>
        <div class="rent-block__row">
          <TheRentItem
            v-for="item in rentEquipments"
            :key="item.id"
            :item="item"
          ></TheRentItem>
        </div>
      </div>
    </section>

    <section class="st-section slider">
      <div class="container">
        <UITheSectionTitle
          :title="solutionsTitle"
          :subtitle="solutionsSubtitle"
        ></UITheSectionTitle>
        <TheSwiperPage
          :uniqueId="'solutions'"
          :items="solutionsItems"
          :options="solutionSliderOption"
          typeItem="item"
        ></TheSwiperPage>
      </div>
    </section>

    <!--<section class="st-section slider">
      <div class="container">
        <UITheSectionTitle
          :title="solutionsTitle2"
          :subtitle="solutionsSubtitle2"
        ></UITheSectionTitle>
        <TheSwiperPage
          :uniqueId="'solutions2'"
          :items="solutionsItems2"
          :options="solutionSliderOption2"
          typeItem="item"
        ></TheSwiperPage>
      </div>
    </section>-->

    <section class="st-section slider">
      <div class="container">
        <UITheSectionTitle
          :title="brandsTitle"
          :subtitle="brandsSubtitle"
        ></UITheSectionTitle>
        <TheSwiperPage
          :uniqueId="'brands'"
          :items="brandsItems"
          :options="brandsSliderOption"
          typeItem="brand"
        ></TheSwiperPage>
      </div>
    </section>

    <section class="st-section slider">
      <div class="container">
        <UITheSectionTitle
          :title="teamTitle"
          :subtitle="teamSubtitle"
        ></UITheSectionTitle>
        <TheSwiperPage
          :uniqueId="'reviews'"
          :items="team"
          :options="reviewsSliderOption"
          typeItem="teamItem"
        ></TheSwiperPage>
      </div>
    </section>

    <section class="st-section features">
      <div class="container">
        <UITheSectionTitle
          :title="featuresTitle"
          :subtitle="featuresSubtitle"
        ></UITheSectionTitle>
        <div class="features__row">
          <TheItem v-for="item in features" :item="item"></TheItem>"
        </div>
      </div>
    </section>

    <section class="st-section slider">
      <div class="container">
        <UITheSectionTitle
          :title="reviewsTitle"
          :subtitle="reviewsSubtitle"
        ></UITheSectionTitle>
        <TheSwiperPage
          :uniqueId="'reviews'"
          :items="reviews"
          :options="reviewsSliderOption"
          typeItem="reviewsItem"
        ></TheSwiperPage>
      </div>
    </section>

    <!--section class="st-section slider">
            <div class="container">
                <UITheSectionTitle :title="reviewsTitle2" :subtitle="reviewsSubtitle2"></UITheSectionTitle>
                <TheSwiperPage :items="reviews2" :options="reviewsSliderOption" typeItem="reviewsItem"></TheSwiperPage>
            </div>
        </section-->

    <section class="faq st-section">
      <div class="container">
        <UITheSectionTitle
          class="is-desktop"
          :title="'Ответы на частые вопросы'"
          :subtitle="'Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из латинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места».  '"
        ></UITheSectionTitle>
        <div class="faq__row">
          <div class="faq__form">
            <div class="faq__form-title">
              Не нашли ответа? Задайте свой вопрос
            </div>
            <form action="" ref="faqRef">
              <div class="faq__form-inputs">
                <div class="faq__form-input">
                  <input type="text" name="name" placeholder="ФИО" />
                </div>
                <div class="faq__form-input">
                  <input type="text" name="phone" placeholder="Телефон" />
                </div>
              </div>
              <div class="faq__form-input">
                <textarea name="" id="" placeholder="Сообщение"></textarea>
              </div>
              <div class="faq__form-checkbox">
                <input type="checkbox" name="ch" id="ch" />
                <label for="ch"
                >Согласие на
                <NuxtLink to="/privacy" class="faq__privacy-link"
                  >обработку данных</NuxtLink
                ></label
              >
              </div>
              <div class="faq__form-input">
                <UITheButton title="ОТПРАВИТЬ"></UITheButton>
              </div>
            </form>
          </div>
          <div class="faq__items">
            <UITheSectionTitle
              class="is-tablet"
              :title="'Ответы на частые вопросы'"
              :subtitle="'Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из латинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места».  '"
            ></UITheSectionTitle>
            <div
              v-for="item in faq"
              :class="['faq__item', faqShowIndex === item.id ? 'show' : '']"
            >
              <div class="faq__item-question">{{ item.question }}</div>
              <div class="faq__item-answer" v-if="faqShowIndex === item.id">
                {{ item.answer }}
              </div>
              <div class="faq__item-toggle" @click="faqShow(item.id)">
                <img src="/images/faq-ico.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="subscribe st-section">
      <div class="container">
        <div class="subscribe__wrap" ref="subscribeRef">
          <UITheSectionTitle
            :className="'section-title--center'"
            :title="'Подписывайтесь на нас'"
            :subtitle="'Узнавайте первыми о новых кейсах, решениях и спецпредложениях'"
          ></UITheSectionTitle>
          <div class="subscribe__social">
            <a href="#">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3202_755)">
                  <path
                    d="M0 15.36C0 8.1192 0 4.49884 2.24942 2.24942C4.49884 0 8.1192 0 15.36 0H16.64C23.8808 0 27.5011 0 29.7506 2.24942C32 4.49884 32 8.1192 32 15.36V16.64C32 23.8808 32 27.5011 29.7506 29.7506C27.5011 32 23.8808 32 16.64 32H15.36C8.1192 32 4.49884 32 2.24942 29.7506C0 27.5011 0 23.8808 0 16.64V15.36Z"
                    fill="#66cb01"
                  ></path>
                  <path
                    d="M17.0267 23.0534C9.73341 23.0534 5.57348 18.0534 5.40015 9.7334H9.05348C9.17348 15.8401 11.8667 18.4267 14.0001 18.9601V9.7334H17.4402V15.0001C19.5469 14.7734 21.7599 12.3734 22.5066 9.7334H25.9467C25.3733 12.9867 22.9733 15.3867 21.2667 16.3734C22.9733 17.1734 25.7068 19.2667 26.7468 23.0534H22.96C22.1467 20.5201 20.1202 18.5601 17.4402 18.2934V23.0534H17.0267Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_3202_755">
                    <rect width="32" height="32" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a href="#">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3202_754)">
                  <path
                    d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                    fill="#66cb01"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.24261 15.8312C11.9069 13.799 15.0172 12.4593 16.5734 11.812C21.0168 9.96384 21.9401 9.64279 22.5419 9.63219C22.6743 9.62986 22.9702 9.66266 23.1619 9.81821C23.3238 9.94956 23.3683 10.127 23.3896 10.2515C23.4109 10.376 23.4375 10.6597 23.4164 10.8814C23.1756 13.4114 22.1337 19.5509 21.6036 22.3846C21.3794 23.5836 20.9377 23.9856 20.5102 24.0249C19.581 24.1104 18.8755 23.4109 17.9756 22.821C16.5674 21.8979 15.7718 21.3232 14.4049 20.4225C12.8252 19.3815 13.8493 18.8093 14.7495 17.8743C14.9851 17.6296 19.079 13.9059 19.1582 13.5681C19.1681 13.5258 19.1773 13.3684 19.0838 13.2852C18.9902 13.2021 18.8521 13.2305 18.7525 13.2531C18.6113 13.2852 16.3616 14.7721 12.0036 17.7139C11.3651 18.1523 10.7867 18.366 10.2685 18.3548C9.69718 18.3424 8.59826 18.0318 7.78133 17.7662C6.77933 17.4405 5.98296 17.2683 6.05231 16.7152C6.08842 16.427 6.48519 16.1324 7.24261 15.8312Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_3202_754">
                    <rect width="32" height="32" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a href="#">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 24L2.187 17.837C1.146 16.033 0.599 13.988 0.6 11.891C0.603 5.335 5.93799 0 12.493 0C15.674 0.001 18.66 1.24 20.906 3.488C23.151 5.736 24.387 8.724 24.386 11.902C24.383 18.459 19.048 23.794 12.493 23.794C10.503 23.793 8.54198 23.294 6.80499 22.346L0.5 24ZM7.09699 20.193C8.77298 21.188 10.373 21.784 12.489 21.785C17.937 21.785 22.375 17.351 22.378 11.9C22.38 6.438 17.963 2.01 12.497 2.008C7.04499 2.008 2.61 6.442 2.608 11.892C2.607 14.117 3.25899 15.783 4.35399 17.526L3.35499 21.174L7.09699 20.193ZM18.484 14.729C18.41 14.605 18.212 14.531 17.914 14.382C17.617 14.233 16.156 13.514 15.883 13.415C15.611 13.316 15.413 13.266 15.214 13.564C15.016 13.861 14.446 14.531 14.273 14.729C14.1 14.927 13.926 14.952 13.629 14.803C13.332 14.654 12.374 14.341 11.239 13.328C10.356 12.54 9.75898 11.567 9.58598 11.269C9.41298 10.972 9.56798 10.811 9.71598 10.663C9.84998 10.53 10.013 10.316 10.162 10.142C10.313 9.97 10.362 9.846 10.462 9.647C10.561 9.449 10.512 9.275 10.437 9.126C10.362 8.978 9.76798 7.515 9.52098 6.92C9.27898 6.341 9.03398 6.419 8.85198 6.41L8.28198 6.4C8.08398 6.4 7.76198 6.474 7.48998 6.772C7.21799 7.07 6.44999 7.788 6.44999 9.251C6.44999 10.714 7.51498 12.127 7.66298 12.325C7.81198 12.523 9.75798 15.525 12.739 16.812C13.448 17.118 14.002 17.301 14.433 17.438C15.145 17.664 15.793 17.632 16.305 17.556C16.876 17.471 18.063 16.837 18.311 16.143C18.559 15.448 18.559 14.853 18.484 14.729Z"
                  fill="#66cb01"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <UIThePopupVideo
    v-if="video && isShowVideo"
    @close="closeVideo"
    :video="video"
  ></UIThePopupVideo>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TheRentItem from '~/components/UI/TheRentItem.vue';
import TheItem from '~/components/TheItem.vue';
import TheSwiperPage from '~/components/UI/TheSwiperPage.vue';
import {getCategories} from "~/api/categories";


const rentTitle = 'Аренда оборудования';
const rentSubtitle = 'У нас внушительный парк техники. Вы можете протестировать камеры и свет прямо у нас на площадке. Также мы поможем с подбором оборудования для вашего проекта.';

const rentEquipments = ref();
await Promise.all([
    getCategories()
        .then(data => {
            rentEquipments.value = data.map(el => {
                return {
                    id: el.id,
                    title: el.name,
                    image: el.thumbnail,
                    link: `/category/${el.slug}`
                };
            });
        })
]);

const solutionsTitle = 'Съемочное пространство';
const solutionsSubtitle = 'Для вас компактный, но просторный и оборудованный павильон для съемок рекламы, кино и клипов';
const solutionsItems = [
    {
        id: 1,
        title: 'Для съемок рекламы',
        image: '/images/products/place1.jpg',
        link: '#'
    },
    {
        id: 2,
        title: 'Рекламный четверг',
        image: '/images/products/place2.jpg',
        link: '#'
    },
    {
        id: 3,
        title: 'Твой первый фильм',
        image: '/images/products/place3.jpg',
        link: '#'
    },
    {
        id: 4,
        title: 'Абонемент для бренда',
        image: '/images/products/place4.jpg',
        link: '#'
    },
    {
        id: 5,
        title: 'Рекламный четверг',
        image: '/images/products/place1.jpg',
        link: '#'
    },
    {
        id: 6,
        title: 'Абонемент для бренда',
        image: '/images/products/place1.jpg',
        link: '#'
    },
];
const solutionSliderOption = {
    slidesPerView: 1.2,
    spaceBetween: 20,
    breakpoints: {
        768: {
            slidesPerView: 1.5,
        },
        1024: {
            slidesPerView: 2.5,
        },
    }
};

const solutionsTitle2 = 'Блок с товарами (с ценами)';
const solutionsSubtitle2 = 'Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из латинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места».  ';
const solutionsItems2 = [
    {
        id: 1,
        title: 'Абонемент для бренда',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vest',
        image: '/images/promo_image.webp',
        link: '#',
        price: 15000
    },
    {
        id: 2,
        title: 'Рекламный четверг',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vest',
        image: '/images/promo_image.webp',
        link: '#',
        price: 15000
    },
    {
        id: 3,
        title: 'Твой первый фильм',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vest',
        image: '/images/promo_image.webp',
        link: '#',
        price: 15000
    },
    {
        id: 4,
        title: 'Абонемент для бренда',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vest',
        image: '/images/promo_image.webp',
        link: '#',
        price: 15000
    },
    {
        id: 5,
        title: 'Рекламный четверг',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vest',
        image: '/images/promo_image.webp',
        link: '#',
        price: 15000
    },
    {
        id: 6,
        title: 'Абонемент для бренда',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vest',
        image: '/images/promo_image.webp',
        link: '#',
        price: 15000
    },
];
const solutionSliderOption2 = {
    slidesPerView: 1.2,
    spaceBetween: 20,
    breakpoints: {
        768: {
            slidesPerView: 1.5,
        },
        1024: {
            slidesPerView: 2.5,
        },
    }
};

const reviewsTitle = 'Отзывы';
const reviewsSubtitle = 'Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из латинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места».  ';
const reviews = [
    {
        id: 1,
        name: 'Иванов Иван',
        text: 'Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из латинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места».  ',
        image: '/images/person1.jpg'
    },
    {
        id: 2,
        name: 'Иванова Лариса',
        text: 'Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из лятинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места».  ',
        image: '/images/person2.jpg',
        video: true
    },
    {
        id: 3,
        name: 'Васечкин Василий',
        text: 'Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из лятинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места».  ',
        image: '/images/person3.jpg'
    },
    {
        id: 4,
        name: 'Марфа Васильевна',
        text: 'Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из лятинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места».  ',
        image: '/images/person4.jpg'
    },
];
const reviewsTitle2 = 'Отзывы c видео';
const reviewsSubtitle2 = 'Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из латинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места».  ';
const reviews2 = [
    {
        id: 1,
        name: 'Иванов Иван',
        text: 'Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из латинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места».  ',
        image: '/images/person1.jpg',
        video: true
    },
    {
        id: 2,
        name: 'Иванова Лариса',
        text: 'Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из лятинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места».  ',
        image: '/images/person2.jpg',
        video: true
    },
    {
        id: 3,
        name: 'Васечкин Василий',
        text: 'Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из лятинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места».  ',
        image: '/images/person3.jpg',
        video: true
    },
    {
        id: 4,
        name: 'Марфа Васильевна',
        text: 'Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из лятинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места».  ',
        image: '/images/person4.jpg',
        video: true
    }
];
const reviewsSliderOption = {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
};

const teamTitle = 'Отзывы';
const teamSubtitle = 'Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из латинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места».  ';
const team = [
    {
        id: 1,
        name: 'Иванов Иван',
        text: 'Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из латинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места».  ',
        image: '/images/person1.jpg'
    },
    {
        id: 2,
        name: 'Иванова Лариса',
        text: 'Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из лятинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места».  ',
        image: '/images/person2.jpg',
        video: true
    },
    {
        id: 3,
        name: 'Васечкин Василий',
        text: 'Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из лятинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места».  ',
        image: '/images/person3.jpg'
    },
    {
        id: 4,
        name: 'Марфа Васильевна',
        text: 'Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из лятинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места».  ',
        image: '/images/person4.jpg'
    },
];

const brandsTitle = 'Наши клиенты';
const brandsSubtitle = 'Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из латинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места».  ';
const brandsItems = [
    {
        id: 1,
        image: '/images/brand1.jpg',
        link: '#'
    },
    {
        id: 2,
        image: '/images/brand2.jpg',
        link: '#'
    },
    {
        id: 3,
        image: '/images/brand3.jpg',
        link: '#'
    },
    {
        id: 4,
        image: '/images/brand4.jpg',
        link: '#'
    },
    {
        id: 5,
        image: '/images/brand5.jpg',
        link: '#'
    },
    {
        id: 6,
        image: '/images/brand6.jpg',
        link: '#'
    },
    {
        id: 7,
        image: '/images/brand1.jpg',
        link: '#'
    },
    {
        id: 8,
        image: '/images/brand2.jpg',
        link: '#'
    },
    {
        id: 9,
        image: '/images/brand3.jpg',
        link: '#'
    },
    {
        id: 10,
        image: '/images/brand4.jpg',
        link: '#'
    },
    {
        id: 11,
        image: '/images/brand5.jpg',
        link: '#'
    },
    {
        id: 12,
        image: '/images/brand6.jpg',
        link: '#'
    }
]
const brandsSliderOption = {
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 6,
        },
    }
};

const featuresTitle = 'Блок с товарами (с ценами)';
const featuresSubtitle = 'Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из латинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места».  ';
const featuresItems = [
  {
    id: 1,
    title: 'Какое то преимущество',
    text: 'Lorem Ipsum. Описание в пару строк данного преимущества',
    image: '/images/promo_image.webp'
  },
  {
    id: 2,
    title: 'Какое то преимущество',
    text: 'Lorem Ipsum. Описание в пару строк данного преимущества',
    image: '/images/promo_image.webp'
  },
  {
    id: 3,
    title: 'Какое то преимущество',
    text: 'Lorem Ipsum. Описание в пару строк данного преимущества',
    image: '/images/promo_image.webp'
  },
  {
    id: 4,
    title: 'Какое то преимущество',
    text: 'Lorem Ipsum. Описание в пару строк данного преимущества',
    image: '/images/promo_image.webp'
  },    
];

const faq = [
    {
        id: 1,
        question: 'What is the best way to get started?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit'
    },
    {
        id: 2,
        question: 'What is the best way to get started?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit'
    },
    {
        id: 3,
        question: 'What is the best way to get started?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit'
    },
    {
        id: 4,
        question: 'What is the best way to get started?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit'
    },
    {
        id: 5,
        question: 'What is the best way to get started?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit'
    }
];
const faqShowIndex = ref(null);

const video = 'https://rutube.ru/play/embed/e82d9e9b73cead7bb3933e78f955e13d/';
const isShowVideo = ref(false);


function faqShow(index) {
    if (index === faqShowIndex.value) faqShowIndex.value = null
    else faqShowIndex.value = index
}

function showVideo() {
    isShowVideo.value = true
}

function closeVideo() {
    isShowVideo.value = false
}

const faqRef = ref<HTMLElement | null>(null)
const subscribeRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const { $gsap } = useNuxtApp();

  $gsap.utils.toArray('.faq__item').forEach(item => {
    $gsap.set(item, { scale: 0.80, opacity: 0.9 })

    $gsap.to(item, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: item,
        start: 'top 100%',
        end: 'top 70%',
        scrub: true,
        fastScrollEnd: true
      }
    })
  })

  $gsap.set(faqRef.value, { scale: 0.93, opacity: 0.9 })

  $gsap.to(faqRef.value, {
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: faqRef.value,
      start: 'top 80%',
      end: 'top 20%',
      scrub: true,
      fastScrollEnd: true
    }
  })

  $gsap.set(subscribeRef.value, { scale: 0.84, opacity: 0.9 })

  $gsap.to(subscribeRef.value, {
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: subscribeRef.value,
      start: 'top 80%',
      end: 'top 20%',
      scrub: true,
      fastScrollEnd: true
    }
  })

})
</script>

<style scoped>
.faq__privacy-link {
  color: #66cb01;
  text-decoration: underline;
}
.faq__privacy-link:hover {
  text-decoration: none;
}
</style>
