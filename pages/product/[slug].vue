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

    <FAQ :faq="faq" />
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

const faq = [
  {
    id: 1,
    question: "Какую зарядную станцию выбрать для дома или паркинга?",
    answer:
      "<p>В большинстве случаев подходит AC-станция (медленная зарядка). Она: дешевле проще в установке подходит для ежедневной зарядки По мощности: 3,5–7 кВт — если ограничена сеть 11–22 кВт — если есть достаточная мощность ( 22 кВт с переменного тока принимают только 5% электромобилей ) DC-станции для частного использования почти не применяются из-за высокой стоимости и требований.</p>",
  },
  {
    id: 2,
    question: "Какая мощность нужна для зарядки автомобиля?",
    answer:
      "<p>Мощность зависит от двух вещей: возможностей электросети возможностей автомобиля Важно: если автомобиль принимает 7 кВт — станция на 22 кВт быстрее его не зарядит. Поэтому сначала смотрят характеристики автомобиля, а потом подбирают станцию.</p>",
  },
  {
    id: 3,
    question: "Какие разъёмы нужны для зарядки?",
    answer:
      "<p>У каждого электромобиля свой тип разъёма, поэтому станция подбирается под конкретную модель. Встречаются: Type 2 CCS2 GB/T CCS1 CHAdeMO Главное правило: сначала определить разъём автомобиля — потом выбирать станцию. Если разъёмы не совпадают, можно использовать переходники, но это не всегда удобно для постоянного использования.</p>",
  },
  {
    id: 4,
    question: "Можно ли заряжать электромобиль от обычной розетки?",
    answer:
      "<p>Да, можно. Но это временное решение. Минусы: очень медленно нагрузка на проводку возможен перегрев Для регулярной зарядки лучше установить отдельную станцию.</p>",
  },
  {
    id: 5,
    question: "Можно ли установить зарядку в подземном паркинге?",
    answer:
      "<p>Да, можно, но с ограничениями. Что важно: прямого запрета нет ниже первого подземного уровня — только медленная зарядка требуется согласование с управляющей компанией На практике согласование может быть сложным, поэтому проект лучше прорабатывать заранее.</p>",
  },
  {
    id: 6,
    question: "Сколько стоит установка зарядной станции?",
    answer:
      "<p>Стоимость зависит от: выбранной станции длины кабеля сложности монтажа необходимости согласований Простая установка — дешевле. Если требуется прокладка кабеля и доработка сети — стоимость увеличивается.</p>",
  },
  {
    id: 7,
    question: "Нужно ли увеличивать мощность?",
    answer:
      "<p>Иногда — да. Это зависит от: текущей мощности выбранной станции общей нагрузки в доме Если мощности не хватает, можно: ограничить мощность станции использовать балансировку нагрузки увеличить выделенную мощность</p>",
  },
  {
    id: 8,
    question: "Что такое DLB и зачем она нужна?",
    answer:
      "<p>DLB (динамическая балансировка нагрузки) — это система, которая регулирует мощность зарядной станции в зависимости от нагрузки в сети. Проще: если в доме включены приборы, станция автоматически снижает мощность, чтобы не перегрузить сеть. Когда DLB нужна: ограниченная мощность квартира или паркинг несколько зарядных станций нет возможности увеличить мощность Что даёт: защита от перегрузки стабильная работа сети.</p>",
  },
  {
    id: 9,
    question: "Безопасна ли зарядка дома?",
    answer:
      "<p>Да, если всё сделано правильно. Обязательно: отдельная линия автомат защиты УЗО качественный монтаж Основной риск — не в станции, а в электропроводке.</p>",
  },
  {
    id: 10,
    question: "Сколько времени занимает зарядка?",
    answer:
      "<p>Примерно: от розетки — 10–20 часов от AC-станции — 3–8 часов на быстрых DC — 20–60 минут Для дома обычно достаточно ночной зарядки.</p>",
  },
  {
    id: 11,
    question: "Нужен ли интернет и приложение?",
    answer:
      "<p>Не обязательно. Станция может работать: без интернета без приложения Но дополнительные функции дают: управление через телефон контроль зарядки статистику</p>",
  },
  {
    id: 12,
    question: "Можно ли использовать одну станцию на несколько машин?",
    answer:
      "<p>Да. Варианты: заряжать по очереди установить несколько станций использовать распределение мощности установить зарядку с двумя пистолетами</p>",
  },
];

const data = await getProductBySlug(String(useRoute().params.slug));
title.value = data.name;
description.value = data.description;
image.value = data.image;

const breadcrumbs = [
  { title: "Главная", link: "/" },
  { title: "Каталог зарядных станций", link: "/catalog" },
];
// if (data.categories && data.categories.length > 0) {
//   const cat = data.categories[0];
//   cat.parent_tree.forEach((el: any) => {
//     breadcrumbs.push({
//       title: el.name,
//       link: `/category/${el.slug}`,
//     });
//   });
//   breadcrumbs.push({
//     title: cat.name,
//     link: `/category/${cat.slug}`,
//   });
// }
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

function setProductPhoto(url: string) {
  product.value.productPhoto = url;
}

// function showVideo() {
//   this.isShowVideo = true;
//   this.frameVideo =
//     "https://rutube.ru/play/embed/ee57f54070845302d31d98dc3972f73c/";
// }
</script>

<style lang="scss"></style>
