<template>
  <main class="main">
    <div class="container">
      <UITheBreadcrumbs :items="breadcrumbs"></UITheBreadcrumbs>
    </div>
    <section class="product">
      <div class="container">
        <div class="product__row">
          <div class="product__photos">
            <div class="product__big-photo">
              <img :src="product.productPhoto" alt="" />
            </div>
            <div class="product__thumbs">
              <a
                v-for="thumb in product.thumbs"
                @click.prevent="setProductPhoto(thumb.originalUrl)"
                href="#"
              >
                <img :src="thumb.thumbUrl" alt="" />
              </a>

              <!--                            <a class="product__thumbs&#45;&#45;video" href="#" @click.prevent="showVideo">-->
              <!--                                <img src="/images/promo_image.webp" alt="">-->
              <!--                                <svg width="94" height="72" viewBox="0 0 94 72" fill="none"-->
              <!--                                     xmlns="http://www.w3.org/2000/svg">-->
              <!--                                    <foreignObject x="-173.968" y="-173.968" width="441.935" height="419.935">-->
              <!--                                        <div xmlns="http://www.w3.org/1999/xhtml"-->
              <!--                                             style="backdrop-filter:blur(86.98px);clip-path:url(#bgblur_0_6005_538_clip_path);height:100%;width:100%"></div>-->
              <!--                                    </foreignObject>-->
              <!--                                    <rect data-figma-bg-blur-radius="173.968" width="94" height="72" rx="13.0476"-->
              <!--                                          fill="#FFECE3"/>-->
              <!--                                    <path d="M56.3208 35.6137C57.2264 36.2299 57.2264 37.7701 56.3208 38.3863L41.0377 48.7832C40.1321 49.3993 39 48.6291 39 47.3969L39 26.6031C39 25.3709 40.1321 24.6007 41.0377 25.2168L56.3208 35.6137Z"-->
              <!--                                          fill="#DFB57A"/>-->
              <!--                                    <defs>-->
              <!--                                        <clipPath id="bgblur_0_6005_538_clip_path"-->
              <!--                                                  transform="translate(173.968 173.968)">-->
              <!--                                            <rect width="94" height="72" rx="13.0476"/>-->
              <!--                                        </clipPath>-->
              <!--                                    </defs>-->
              <!--                                </svg>-->
              <!--                            </a>-->
            </div>
          </div>

          <div class="product__info">
            <h1 v-html="product.productName"></h1>
            <div class="product__info-descr" v-html="product.productText"></div>
            <div
              class="product__info-compound"
              v-if="product.compound.length > 0"
            >
              Состав: <span>{{ product.compound.join(", ") }}</span>
            </div>
            <div
              class="product__info-slider"
              v-if="product.ingredients.length > 0"
            >
              <TheSwiperProduct :items="product.ingredients"></TheSwiperProduct>
            </div>

            <div class="product__info-params" v-if="product.params.length > 0">
              <div class="product__info-params-title">Характеристики</div>
              <ul>
                <li v-for="param in product.params">
                  <div class="product__info-params-name">
                    {{ param.paramName }}:
                  </div>
                  <div class="product__info-params-value">
                    {{ param.paramValue }}
                  </div>
                </li>
              </ul>
            </div>

            <!--                        <div class="product__info-row">-->
            <!--                            <div class="product__info-count">-->
            <!--                                <span>-</span>-->
            <!--                                <input type="text" name="count" value="1">-->
            <!--                                <span>+</span>-->
            <!--                            </div>-->
            <!--                            <div class="product__info-price">{{ product.productPrice }} ₽</div>-->
            <!--                        </div>-->
            <!--                        <button class="btn btn-primary">В корзину</button>-->
          </div>
        </div>
      </div>
    </section>

    <section class="st-section slider">
      <div class="container">
        <UITheSectionTitle
          :title="'Рекомендуем'"
          :subtitle="'Обратите также внимание на следующие позиции из нашего каталога:'"
        ></UITheSectionTitle>
        <TheSwiperPage
          :uniqueId="'recomendeds'"
          :items="recomendedProducts"
          :options="recomendedProductsOption2"
          typeItem="item"
        ></TheSwiperPage>
      </div>
    </section>

    <FAQ />
  </main>
</template>

<script setup lang="ts">
import TheSwiperProduct from "~/components/UI/TheSwiperProduct.vue";
import TheSwiperPage from "~/components/UI/TheSwiperPage.vue";
import { getProductBySlug } from "~/api/products";
import FAQ from "~/components/blocks/FAQ.vue";

const title = ref("");
const description = ref("");
const image = ref("");

useHead({
  title: title,
  meta: [
    { name: "keywords", content: title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
  ],
});

const data = await getProductBySlug(useRoute().params.slug!);
title.value = data.name;
description.value = data.description;
image.value = data.image;

const breadcrumbs = [
  { title: "Главная", link: "/" },
  { title: "Каталог", link: "/catalog" },
];
if (data.categories && data.categories.length > 0) {
  const cat = data.categories[0];
  cat.parent_tree.forEach((el: any) => {
    breadcrumbs.push({
      title: el.name,
      link: `/category/${el.slug}`,
    });
  });
  breadcrumbs.push({
    title: cat.name,
    link: `/category/${cat.slug}`,
  });
}
breadcrumbs.push({
  title: data.name,
  link: "",
});

const product = ref({
  productId: data.id,
  productName: data.name,
  productText: data.description.replaceAll("\r\n", "<br>").replaceAll("\r", "<br>").replaceAll("\n", "<br>"),
  compound: [],
  ingredients: [],
  productPrice: data.price,
  productPhoto: data.image,
  thumbs: [
    {
      id: -1,
      thumbUrl: data.image,
      originalUrl: data.image,
    },
    ...data.gallery.map((el: any, i: number) => {
      return {
        id: i,
        thumbUrl: el,
        originalUrl: el,
      };
    }),
  ],
  params: [
    // {
    //   paramId: 1,
    //   paramName: "Параметр 1",
    //   paramValue: "Значение 1",
    // },
    // {
    //   paramId: 2,
    //   paramName: "Параметр 2",
    //   paramValue: "Значение 2",
    // },
    // {
    //   paramId: 3,
    //   paramName: "Параметр 3",
    //   paramValue: "Значение 3",
    // },
    // {
    //   paramId: 4,
    //   paramName: "Параметр 4",
    //   paramValue: "Значение 4",
    // },
    // {
    //   paramId: 5,
    //   paramName: "Параметр 5",
    //   paramValue: "Значение 5",
    // },
    // {
    //   paramId: 6,
    //   paramName: "Параметр 6",
    //   paramValue: "Значение 6",
    // },
  ],
});

const recomendedProductsOption2 = {
  slidesPerView: 1.5,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 3.5,
    },
    1024: {
      slidesPerView: 5,
    },
  },
};

const recomendedProducts = data.recommended.map((el: any) => {
  return {
    id: el.id,
    image: el.image,
    title: el.name,
    text: "",
    link: `/product/${el.slug}`,
  };
});

function setProductPhoto(url) {
  product.value.productPhoto = url;
}

function showVideo() {
  this.isShowVideo = true;
  this.frameVideo =
    "https://rutube.ru/play/embed/ee57f54070845302d31d98dc3972f73c/";
}
</script>

<style lang="scss"></style>
