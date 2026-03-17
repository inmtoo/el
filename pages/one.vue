<template>
  <main class="main">
    <div class="container"><UITheBreadcrumbs :items="breadcrumbs"></UITheBreadcrumbs></div>
    <section class="product">
      <div class="container">
        <div class="product__row">
          <div class="product__photos">
            <div class="product__big-photo">
              <img :src="product.productPhoto" alt="">
            </div>
            <div class="product__thumbs">
              <a v-for="thumb in product.thumbs" @click.prevent="setProductPhoto(thumb.originalUrl)" href="#">
                <img :src="thumb.thumbUrl" alt="">
              </a>
              
              <a class="product__thumbs--video" href="#" @click.prevent="showVideo">
                <img src="/images/promo_image.webp" alt="">
                <svg width="94" height="72" viewBox="0 0 94 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <foreignObject x="-173.968" y="-173.968" width="441.935" height="419.935"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(86.98px);clip-path:url(#bgblur_0_6005_538_clip_path);height:100%;width:100%"></div></foreignObject><rect data-figma-bg-blur-radius="173.968" width="94" height="72" rx="13.0476" fill="#FFECE3"/>
                  <path d="M56.3208 35.6137C57.2264 36.2299 57.2264 37.7701 56.3208 38.3863L41.0377 48.7832C40.1321 49.3993 39 48.6291 39 47.3969L39 26.6031C39 25.3709 40.1321 24.6007 41.0377 25.2168L56.3208 35.6137Z" fill="#66cb01"/>
                  <defs>
                  <clipPath id="bgblur_0_6005_538_clip_path" transform="translate(173.968 173.968)"><rect width="94" height="72" rx="13.0476"/>
                  </clipPath></defs>
                </svg>
              </a>
            </div>
          </div>

          <div class="product__info">
            <h1>{{ product.productName }}</h1>
            <div class="product__info-descr">{{ product.productText }}</div>
            <div class="product__info-compound">Состав: <span>{{ product.compound.join(', ') }}</span></div>
            <div class="product__info-slider">
              <TheSwiperProduct :items="product.ingredients"></TheSwiperProduct>
            </div>
            <div class="product__info-row">
              <div class="product__info-count">
                <span>-</span>
                <input type="text" name="count" value="1">
                <span>+</span>
              </div>
              <div class="product__info-price">{{ product.productPrice }} ₽</div>
            </div>
            <button class="btn btn-primary">В корзину</button>
          </div>
        </div>
      </div>
    </section>

   <FAQ/>

  </main>
</template> 

<script>
import TheSwiperProduct from '~/components/UI/TheSwiperProduct.vue';
import FAQ from "~/components/blocks/FAQ.vue";

export default {
  components: {
      FAQ,
    TheSwiperProduct
  },
  data() {
    return {
      product: {
        productId: 232323,
        productName: 'Название оборудования',
        productText: 'Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из латинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места».  ',
        compound: ['Ингридиент 1', 'Ингридиент 2', 'Ингридиент 3'],
        ingredients: [
          {
            id: 1,
            title: 'Ингридиент 1',
            photo: '/images/promo_image.webp',
            price: 300
          },
          {
            id: 2,
            title: 'Ингридиент 2',
            photo: '/images/promo_image.webp',
            price: 300
          },
          {
            id: 3,
            title: 'Ингридиент 3',
            photo: '/images/promo_image.webp',
            price: 300
          },
          {
            id: 4,
            title: 'Ингридиент 4',
            photo: '/images/promo_image.webp',
            price: 300
          },
          {
            id: 5,
            title: 'Ингридиент 5',
            photo: '/images/promo_image.webp',
            price: 300
          },
          {
            id: 6,
            title: 'Ингридиент 6',
            photo: '/images/promo_image.webp',
            price: 300
          },
          {
            id: 7,
            title: 'Ингридиент 7',
            photo: '/images/promo_image.webp',
            price: 300
          },
          {
            id: 8,
            title: 'Ингридиент 8',
            photo: '/images/promo_image.webp',
            price: 300
          }
        ],
        productPrice: 1200,
        productPhoto: '/images/promo_image.webp',
        thumbs: [
          {
            id: 1,
            thumbUrl: '/images/promo_image.webp',
            originalUrl: '/images/promo_image.webp'
          },
          {
            id: 2,
            thumbUrl: '/images/promo_image.webp',
            originalUrl: '/images/promo_image.webp'
          },
          {
            id: 3,
            thumbUrl: '/images/promo_image.webp',
            originalUrl: '/images/promo_image.webp'
          }
        ],
        breadcrumbs: [
          {title: 'Главная', link: '/'}, 
          {title: 'Назавние категории', link: '/'},
          {title: 'Назавние товара', link: ''}
        ]
      },
    }
  },
  methods: {
    setProductPhoto(url) {
      this.productPhoto = url
    },
    showVideo() {
      this.isShowVideo = true
      this.frameVideo = 'https://rutube.ru/play/embed/ee57f54070845302d31d98dc3972f73c/'
    },
  }
}
</script>

<style lang="scss"></style>