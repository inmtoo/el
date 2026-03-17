<template>
    <main class="main">
        <section class="st-section blog">
          <div class="container">
            <UITheSectionTitle :title="'Блог'" :subtitle="'Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из латинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места».'"></UITheSectionTitle>
            <div class="blog__list">
              <div 
                class="blog__item"
                v-for="item in blog">
                <div class="blog__item-photo"><img :src="item.img" :alt="item.title"></div>
                <div class="blog__item-info">
                  <div class="blog__item-title">{{ item.title }}</div>
                  <div class="blog__item-text">{{ item.text }}</div>
                  <div class="blog__item-btn">
                    <button class="btn btn-primary">Подробнее</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="pagination">
              <div class="pagination__prev">
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                    <path d="M1.5 10.5L10.5 1.5M1.5 10.5L10.5 19.5M1.5 10.5L22.5 10.5" stroke="#353535" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
              <div class="pagination__list">
                <div class="pagination__link"><a href="#">1</a></div>
                <div class="pagination__link active"><a href="#">2</a></div>
                <div class="pagination__link"><a href="#">...</a></div>
                <div class="pagination__link"><a href="#">16</a></div>
              </div>
              <div class="pagination__next">
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                    <path d="M22.5 10.5L13.5 1.5M22.5 10.5L13.5 19.5M22.5 10.5L1.5 10.5" stroke="#353535" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>


    </main>
</template>

<script setup lang="ts">

const blog = [
  {
    id: 1,
    title: 'Название публикации',
    text: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. Незаменимый помощник любого дизайнера, вебмастера и проектировщика. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст',
    img: '/images/blog1.png'
  },
  {
    id: 2,
    title: 'Название публикации',
    text: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. Незаменимый помощник любого дизайнера, вебмастера и проектировщика. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст',
    img: '/images/blog2.png'
  },
  {
    id: 3,
    title: 'Название публикации',
    text: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. Незаменимый помощник любого дизайнера, вебмастера и проектировщика. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст',
    img: '/images/blog1.png'
  },
  {
    id: 4,
    title: 'Название публикации',
    text: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. Незаменимый помощник любого дизайнера, вебмастера и проектировщика. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст',
    img: '/images/blog2.png'
  },
  {
    id: 5,
    title: 'Название публикации',
    text: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. Незаменимый помощник любого дизайнера, вебмастера и проектировщика. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст',
    img: '/images/blog1.png'
  },
  {
    id: 6,
    title: 'Название публикации',
    text: 'Онлайн-генератор случайного текста, правильный Lorem Ipsum на русском языке. Незаменимый помощник любого дизайнера, вебмастера и проектировщика. ... Прародителем текста-рыбы является известный "Lorem Ipsum" — латинский текст',
    img: '/images/blog2.png'
  }
]

</script>

<style lang="scss"></style>