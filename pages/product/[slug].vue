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
              <div class="product__big-photo-info">
                <div class="product__big-photo-power">
                  {{ product.power }}
                </div>
                <div class="product__big-photo-connection">
                  {{ product.connection }}
                </div>
                <div class="product__big-photo-current">
                  {{ product.current }}
                </div>
              </div>
            </div>
            <div class="product__thumbs">
              <a
                v-for="thumb in product.thumbs"
                @click.prevent="setProductPhoto(thumb.originalUrl)"
                href="#"
              >
                <img :src="thumb.thumbUrl" alt="" />
              </a>
            </div>
          </div>

          <div class="product__info">
            <h1 v-html="product.productName"></h1>
            <!-- <div class="product__info-descr" v-html="description"></div> -->
            <div v-if="product.charsHtml" class="product__info-params">
              <div class="product__info-params-title">Функционал станции</div>
              <div
                class="product__info-descr"
                v-html="product.charsHtml"
              ></div>
            </div>
            <!-- <div
              class="product__info-compound"
              v-if="product.compound.length > 0"
            >
              Состав: <span>{{ product.compound.join(", ") }}</span>
            </div> -->
            <div
              class="product__info-slider"
              v-if="product.ingredients.length > 0"
            >
              <TheSwiperProduct :items="product.ingredients"></TheSwiperProduct>
            </div>       
          </div>
        </div>

        <div class="product-tabs">
          <button v-if="description.trim() !== ''" type="button" :class="activeProductTab === 'description' ? 'product-tabs__btn btn btn-primary' : 'product-tabs__btn btn'" @click="activeProductTab = 'description'">
            Описание
          </button>
          <button v-if="techCharsDescriptionHtml.trim() !== '' || tableCharsHtml.trim() !== '' || shortDescriptionHtml.trim() !== ''" type="button" :class="activeProductTab === 'characters' ? 'product-tabs__btn btn btn-primary' : 'product-tabs__btn btn'" @click="activeProductTab = 'characters'">
            Технические характеристики
          </button>
          <button v-if="complHtml.trim() !== ''" type="button" :class="activeProductTab === 'complect' ? 'product-tabs__btn btn btn-primary' : 'product-tabs__btn btn'" @click="activeProductTab = 'complect'">
            Комплектация
          </button>
          <button v-if="documentation.length > 0" type="button" :class="activeProductTab === 'documentation' ? 'product-tabs__btn btn btn-primary' : 'product-tabs__btn btn'" @click="activeProductTab = 'documentation'">
            Документация
          </button>
          <button v-if="brands.length > 0" type="button" :class="activeProductTab === 'compatibility' ? 'product-tabs__btn btn btn-primary' : 'product-tabs__btn btn'" @click="activeProductTab = 'compatibility'">
            Совместимость
          </button>
        </div>

        <div v-show="activeProductTab === 'description' && description.trim() !== ''" class="product-tabs__wrap">
          <div class="product-tabs__content" v-html="description"></div>
        </div>
        <div v-show="activeProductTab === 'characters'" class="product-tabs__wrap">
          <div class="product-tabs__content" v-html="techCharsDescriptionHtml"></div>
          <div class="product-tabs__content" v-html="tableCharsHtml"></div>
          <div class="product-tabs__content" v-html="shortDescriptionHtml"></div>
        </div>
        <div v-show="activeProductTab === 'complect'" class="product-tabs__wrap">
          <div class="product-tabs__content" v-html="complHtml"></div>
        </div>
        <div v-show="activeProductTab === 'documentation'" class="product-tabs__wrap">
          <div class="product-tabs__content product-tabs__content--documentation">
            <a v-for="doc in documentation" :href="doc.url" target="_blank">
              <span>
                <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_5078_5029)">
                  <path d="M22.6516 13.0161V0.724121L8.51562 14.8601H20.8056C22.1356 14.8601 22.6516 14.3441 22.6516 13.0161ZM30.0356 29.8371C30.2926 29.6411 30.5516 27.9721 31.0646 25.4631C31.5796 22.9551 30.9346 21.4131 29.5876 21.6081C28.2356 21.7981 27.9166 23.3411 28.0456 24.9501C28.1726 26.5561 29.0076 28.3561 29.5226 29.3861C29.5226 29.3861 29.7796 30.0291 30.0356 29.8371ZM23.7326 42.8241C23.2966 42.9861 20.3926 43.8541 18.6576 45.5241C16.9196 47.1971 17.0476 48.6741 17.8206 49.1881C18.5906 49.7011 20.7766 48.1591 22.1286 46.5531C23.4786 44.9431 24.3786 43.3371 24.3786 43.0811C24.3786 42.8241 24.2506 42.6311 23.7326 42.8241ZM28.5596 40.0591C29.8416 39.5451 34.4706 38.5151 34.4706 38.5151C34.4706 38.5151 31.4516 34.9171 31.0636 34.2091C31.0636 34.2091 29.2636 38.9001 28.5606 40.0591H28.5596Z" fill="#66CB01"/>
                  <path d="M50.7842 0H25.3852V14.66C25.3844 15.4378 25.0752 16.1836 24.5254 16.7338C23.9756 17.284 23.23 17.5937 22.4522 17.595H7.82422V57.607C7.82501 58.2412 8.07725 58.8493 8.52564 59.2979C8.97402 59.7465 9.58197 59.9989 10.2162 60H50.7842C51.4185 59.9989 52.0264 59.7465 52.4748 59.2979C52.9232 58.8493 53.1754 58.2412 53.1762 57.607V2.391C53.1754 1.75694 52.9231 1.14909 52.4747 0.700832C52.0262 0.252576 51.4183 0.000529212 50.7842 0ZM42.9602 44.621C40.6952 44.313 37.9432 41.959 35.6112 39.905C35.5555 39.8838 35.4968 39.8713 35.4372 39.868C35.0592 39.868 30.8532 41.08 27.6562 41.988C22.9862 50.339 18.3322 52.723 16.1482 49.96C15.0002 48.505 15.4432 45.073 20.9712 42.5C22.0822 41.988 23.6282 41.38 25.4302 40.83C26.9702 38.033 28.5232 34.17 29.3932 31.882C27.9752 29.169 26.8232 26.31 26.6932 24.952C26.4352 22.249 27.5932 19.805 29.9082 19.805C32.8582 19.805 35.0492 22.635 31.5912 32.583C32.6692 34.351 34.1262 36.495 35.8072 38.197C38.7122 37.643 41.6162 37.472 42.8232 37.544C46.9832 37.795 47.8482 39.738 47.9752 41.217C48.1052 42.696 46.2392 45.073 42.9602 44.621Z" fill="#66CB01"/>
                  <path d="M42.5097 38.8997C40.9577 38.7997 36.9157 39.3497 37.3647 39.5417C37.3647 39.5417 40.6437 41.8597 42.5697 42.1147C44.5027 42.3707 45.2097 41.5367 45.2097 40.7007C45.2097 39.8647 44.5027 39.0287 42.5097 38.8997Z" fill="#66CB01"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_5078_5029">
                  <rect width="60" height="60" fill="white" transform="translate(0.5)"/>
                  </clipPath>
                  </defs>
                </svg>
              </span>
              {{ doc.title }}
            </a>
          </div>
        </div>
        <div v-show="activeProductTab === 'compatibility'" class="product-tabs__wrap">
          <div class="product-tabs__content product-tabs__content--compatibility">
            <span v-for="brand in brands" :key="brand.id">
              {{ brand.name }}
            </span>
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

const activeProductTab = ref<"description" | "characters" | "complect" | "documentation" | "compatibility">(
  "description",
);

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

breadcrumbs.push({
  title: data.name,
  link: "",
});

const funkczionalStanczii = data.meta_data?.funkczional_stanczii;
const formatResponseText = (value: unknown) => {
  if (typeof value !== "string" || !value.trim()) return "";
  const tempResponseText = /<[^>]+>/.test(value);
  if (tempResponseText) return value;
  return value
    .replaceAll("\r\n\r\n", "<br>")
    .replaceAll("\r\n", "<br>")
    .replaceAll("\r", "<br>")
    .replaceAll("\n", "<br>");
};
const charsHtml = formatResponseText(funkczionalStanczii);

// Данные для таба характеристик
const techCharsDescription = data.meta_data?.["opisanie_tehnicheskih_har-tik"];
const techCharsDescriptionHtml = typeof techCharsDescription === "string" && techCharsDescription.trim()
  ? techCharsDescription
    .replaceAll("\r\n\r\n", "<br>")
    .replaceAll("\r\n", "<br>")
    .replaceAll("\r", "<br>")
    .replaceAll("\n", "<br>")
  : "";

const tableChars = data.attributes;
const tableCharsHtml = `<table class="product-tab__content-short-table">${(tableChars ?? [])
  .map(
    (el: any) => `
    <tr>
      <th>${el.name}</th>
      <td>${(el.options ?? [])
        .map((option: any) => option)
        .join(", ")}</td>
    </tr>
  `,
  )
  .join("")}</table>`;

const shortDescription = data.short_description;
const shortDescriptionHtml = typeof shortDescription === "string" && shortDescription.trim()
  ? shortDescription
    .replaceAll("\r", "")
    .replaceAll("\n", "")
  : "";
// Конец данных для таба характеристик

// Данные для таба комплектации
const compl = data.meta_data?.["komplektacziya"];
const complHtml = typeof compl === "string" && compl.trim()
  ? compl
    .replaceAll("\r", "")
    .replaceAll("\n", "")
  : "";
// Конец данных для таба комплектации

// Данные для таба документации
const documentation: any[] = data.files ?? [];
// Конец данных для таба документации

// Данные для таба совместимости
const brands: any[] = data.car_brands ?? [];
// Конец данных для таба совместимости

// Получение атрибута мощности
const powerAttr = data.attributes?.find(
  (attr: any) => attr.slug === "pa_moshhnost",
);
const powerName =
  powerAttr?.options?.map((option: any) => option).join(", ") ?? "";

// Получение атрибута соединения
const connectionAttr = data.attributes?.find(
  (attr: any) => attr.slug === "pa_razem-zaryadki",
);

const connectionName =
  connectionAttr?.options?.map((option: any) => option).join(", ") ?? "";

// Получение атрибута типа тока
const currentAttr = data.attributes?.find(
  (attr: any) => attr.slug === "pa_tip-toka",
);
const currentName =
  currentAttr?.options?.map((option: any) => option).join(", ") ?? "";


const product = ref({
  productId: data.id,
  productName: data.name,
  charsHtml,
  productText: data.description.replaceAll("\r\n", "<br>").replaceAll("\r", "<br>").replaceAll("\n", "<br>"),
  compound: [],
  ingredients: [],
  power: powerName,
  connection: connectionName,
  current: currentName,
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
