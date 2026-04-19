<template>
  <main class="main">
    <div class="container">
      <UITheBreadcrumbs :items="breadcrumbs"></UITheBreadcrumbs>
    </div>
    <section class="main-promo st-section">
      <div class="container">
        <div class="main-promo__row">
          <div class="main-promo__left">
            <h1>Зарядные станции для бизнеса под ключ по всей России</h1>
            <p class="main-promo__desc">
              Подберем и установим зарядную станцию под ключ с гарантией до 6
              лет
            </p>
            <UITheButtonLink
              title="Показать больше"
              link="/catalog?category=el-biz"
            />
          </div>
          <div class="main-promo__right">
            <img
              src="/images/main-biz.jpg"
              alt="Зарядные станции для бизнеса"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="st-section features">
      <div class="container">
        <UITheSectionTitle
          title="Каталог зарядных станций"
          subtitle="Выбор для Вас. Каталог электрозарядных станций для дома, паркингов, ТЦ, отелей и АЗС."
        />
        <div class="catalog-powers">
          <button
            type="button"
            class="catalog-powers__item"
            :class="{ active: selectedPower === '' }"
            @click="onSelectPower('')"
          >
            Все
          </button>
          <button
            v-for="power in powers"
            :key="power.slug || power.id"
            type="button"
            class="catalog-powers__item"
            :class="{ active: selectedPower === power.slug }"
            @click="onSelectPower(power.slug)"
          >
            {{ power.name }}
          </button>
        </div>
        <div class="features__row">
          <TheItem
            v-for="(item, index) in catalogItems"
            :key="index"
            :item="item"
          />
        </div>
        <div class="catalog-pagination">
          <Pagination v-model:page="currentPage" :max-page="totalPages" />
        </div>
        <!-- <div class="rent-block__more">
          <NuxtLink
            :to="catalogAllLink"
            class="rent-block__more-link btn btn-primary"
            >Показать все</NuxtLink
          >
        </div> -->
      </div>
    </section>

    <section class="st-section features">
      <div class="container">
        <UITheSectionTitle
          title="Преимущества"
          subtitle="Комплексные решения для бизнеса: от проектирования до обслуживания. Собственное производство, гарантия до 6 лет, монтаж в день обращения."
        />
        <div class="features__row">
          <TheItem
            v-for="(item, index) in advantagesItems"
            :key="index"
            :item="item"
          />
        </div>
      </div>
    </section>

    <Projects />

    <section class="st-section info-block info-block--right">
      <div class="container">
        <div class="info-block__row">
          <div class="info-block__text">
            <UITheSectionTitle
              title="Мы верим: будущее за электромобилями"
              subtitle="Наша миссия — сделать зарядку доступной и удобной для каждого. Станции EL — это не просто оборудование, это ваш уверенный шаг в технологичный и чистый мир"
              author="Юрий Светличный"
              position="Директор компании"
            />
          </div>
          <div class="info-block__img">
            <img src="/images/jur.jpg" alt="Юрий Светличный" />
          </div>
        </div>
      </div>
    </section>

    <FAQ :faq="faq" />
  </main>
</template>

<script setup lang="ts">
import FAQ from "~/components/blocks/FAQ.vue";
import Pagination from "~/components/partials/Pagination.vue";
import { useRoute } from "vue-router";
import { getPowers } from "~/api/powers";
import { getProducts } from "~/api/products";
import Projects from "~/components/blocks/Projects.vue";

const placeholderImg = "/images/main-promo.webp";

/** Подкатегория EL «Для бизнеса» */
const pageCategorySlug = "el-biz";

const breadcrumbs = [
  { title: "Главная", link: "/" },
  { title: "Автомобильные зарядные станции для бизнеса", link: "" },
];

const route = useRoute();

const totalPages = ref(1);
const totalProducts = ref(0);

function readPowerFromQuery(): string {
  const p = route.query.power;
  if (Array.isArray(p)) return String(p[0] ?? "");
  return p ? String(p) : "";
}

const selectedPower = ref(readPowerFromQuery());
const catalogItems = ref<Array<Record<string, any>>>([]);
const powers = ref<Array<Record<string, any>>>([]);

const catalogAllLink = computed(() => {
  const q: Record<string, string> = { category: pageCategorySlug };
  if (selectedPower.value) q.power = selectedPower.value;
  return { path: "/catalog", query: q };
});

async function loadCatalogItems() {
  const page = Number(route.query.page) || 1;
  const per_page = 8;

  const data = await getProducts({
    page,
    per_page,
    category: pageCategorySlug,
    power: selectedPower.value || undefined,
  });

  const products = data?.products || [];
  totalProducts.value = Math.max(0, Number(data?.total_items) || 0);
  totalPages.value = Math.max(1, Number(data?.total_pages) || 1);

  catalogItems.value = products.map((item: any) => {
    const powerAttr = item.attributes?.find(
      (attr: any) => attr.slug === "pa_moshhnost",
    );
    const powerName =
      powerAttr?.options?.map((option: any) => option.name).join(", ") ?? "";

    return {
      id: item.id,
      title: item.name || item.title || "Зарядная станция",
      text: powerName ? `Мощность: ${powerName}` : "",
      image: item.image || placeholderImg,
      link: item.slug ? `/product/${item.slug}` : "/catalog",
    };
  });
}

powers.value = await getPowers({ category: "el-biz" });

function getPowerValue(power: any): number {
  const raw = String(power?.name ?? "");
  const match = raw.match(/[\d.,]+/);
  if (!match) return Number.MAX_SAFE_INTEGER;
  return Number(match[0].replace(",", "."));
}

powers.value = [...powers.value].sort(
  (a, b) => getPowerValue(a) - getPowerValue(b),
);

const currentPage = ref(Number(route.query.page) || 1);

watch(
  () => [route.query.page, route.query.power],
  async () => {
    selectedPower.value = readPowerFromQuery();
    const p = Number(route.query.page) || 1;
    if (currentPage.value !== p) currentPage.value = p;
    await loadCatalogItems();
  },
  { immediate: true },
);

watch(currentPage, (p) => {
  const q = Number(route.query.page) || 1;
  if (p !== q && p >= 1 && p <= totalPages.value) {
    navigateTo({
      path: route.path,
      query: { ...route.query, page: String(p) },
    });
  }
});

async function onSelectPower(slug: string) {
  selectedPower.value = slug;

  const next: Record<string, string | string[]> = {
    ...route.query,
    page: "1",
  };
  if (slug) next.power = slug;
  else delete next.power;

  await navigateTo({ path: route.path, query: next });
}

const advantagesItems = [
  {
    id: 1,
    title: "Быстрая установка",
    text: "Монтаж в день обращения. Выезд специалиста, замер, проект и установка под ключ.",
    image: "/images/services/montazh.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Гарантия и сервис",
    text: "Гарантия до 6 лет. Собственный сервис-центр, обмен и возврат в течение 365 дней.",
    image: "/images/services/podmena.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Выгодные условия",
    text: "Цены ниже на 30%. Собственное производство и прямые поставки. Подбор под бюджет.",
    image: "/images/features/guarantee.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Настройка и ввод в эксплуатацию",
    text: "Согласование документации, подключение к платформам, настройка доступа и учёта",
    image: "/images/services/vvod.jpg",
    link: "#",
  },
];

const projectItems = [
  {
    id: 1,
    title: "Проект 1",
    text: "Паркинг бизнес-центра. 12 зарядных станций AC 22 кВт, интеграция с системой доступа.",
    image: placeholderImg,
    link: "#",
  },
  {
    id: 2,
    title: "Проект 2",
    text: "Сеть АЗС. Установка DC-станций 150 кВт. Подключение к платформам оплаты.",
    image: placeholderImg,
    link: "#",
  },
  {
    id: 3,
    title: "Проект 3",
    text: "Отель. Зарядные точки для гостей. Монтаж и настройка учёта по номерам.",
    image: placeholderImg,
    link: "#",
  },
  {
    id: 4,
    title: "Проект 4",
    text: "Торговый центр. Парковка с зарядной инфраструктурой. Проектирование и поставка под ключ.",
    image: placeholderImg,
    link: "#",
  },
];

const faq = [
  {
    id: 1,
    question: "Какую зарядную станцию выбрать для бизнеса: AC или DC?",
    answer:
      "<p>Выбор зависит от сценария использования. AC-станции (медленные) подходят для: офисов жилых комплексов отелей паркингов Автомобиль стоит долго, зарядка идёт постепенно. DC-станции (быстрые) подходят для: АЗС торговых центров трасс коммерческих площадок с потоком Если задача — зарабатывать на трафике, чаще выбирают DC. Если задача — сервис для клиентов или арендаторов, достаточно AC.</p>",
  },
  {
    id: 2,
    question: "Какие разъёмы бывают у зарядных станций?",
    answer:
      "<p>Для AC-станций чаще всего используется Type 2: в виде розетки или встроенного кабеля с коннектором Оба варианта применяются, выбор зависит от удобства и условий эксплуатации. Для DC-станций наиболее востребованы: CCS2 GB/T CHAdeMO реже CCS1 С учётом высокой доли китайских электромобилей на рынке, GB/T сегодня крайне востребован и во многих проектах обязателен. Оптимальные конфигурации: CCS2 + […]</p>",
  },
  {
    id: 3,
    question: "Сколько стоит установка зарядной станции под ключ?",
    answer:
      "<p>Стоимость зависит не только от оборудования. В итоговую цену входят: зарядная станция доставка монтаж кабельная линия автоматика и защита проектирование согласования пусконаладка AC-проекты могут быть относительно недорогими. DC-проекты — это уже серьёзные инвестиции, где ключевую роль играет стоимость подключения и инфраструктуры.</p>",
  },
  {
    id: 4,
    question: "Какая мощность нужна и хватит ли её на объекте?",
    answer:
      "<p>Это ключевой вопрос перед покупкой. Необходимо определить: есть ли свободная мощность откуда можно подключиться выдержит ли сеть одну или несколько станций требуется ли увеличение мощности Для AC это часто решается на существующих мощностях. Для DC — почти всегда требуется точный расчёт и проверка.</p>",
  },
  {
    id: 5,
    question: "Нужны ли согласования для установки?",
    answer:
      "<p>Да, в большинстве случаев. Сложность зависит от объекта: частная территория — проще ТЦ, БЦ, АЗС — средняя сложность жилые комплексы и паркинги — сложнее Могут потребоваться: согласование с УК или собственником проект согласование с сетевой организацией.</p>",
  },
  {
    id: 6,
    question: "Можно ли установить зарядную станцию в подземном паркинге?",
    answer:
      "<p>Да, можно, но с ограничениями. Прямого запрета нет. Важно: проверить возможность подключения, согласовать с УК или собственником, учесть особенности подземной инфраструктуры.</p>",
  },
  {
    id: 7,
    question: "Можно ли зарабатывать на зарядной станции и какая окупаемость?",
    answer:
      "<p>Да, можно, но это зависит от локации. На окупаемость влияют: поток автомобилей мощность станции тариф доступность и удобство конкуренция рядом Без трафика даже дорогая станция не окупается. При хорошей локации проект может быть прибыльным и масштабируемым.</p>",
  },
  {
    id: 8,
    question: "Можно ли подключить приложение, оплату и удалённое управление?",
    answer:
      "<p>Да. Современные станции поддерживают: оплату через приложение RFID-карты удалённый мониторинг управление тарифами статистику зарядных сессий Для коммерческих проектов используется протокол OCPP, который позволяет управлять станциями через сервер и масштабировать сеть.</p>",
  },
  {
    id: 9,
    question: "Какое обслуживание требуется после установки?",
    answer:
      "<p>После запуска станция требует: удалённого мониторинга технического обслуживания диагностики обновления ПО ремонта при необходимости Важно заранее определить, кто отвечает за обслуживание и в какие сроки устраняются неисправности.</p>",
  },
  {
    id: 10,
    question: "Сколько коннекторов может быть у DC-станции?",
    answer:
      "<p>DC-станции бывают: с 1 пистолетом с 2 пистолетами с 3 пистолетами с 4 пистолетами Выбор зависит от: потока автомобилей доступной мощности модели бизнеса Для небольших объектов достаточно 1–2 коннекторов. Для загруженных локаций используют многопостовые решения с распределением мощности.</p>",
  },
  {
    id: 11,
    question: "Можно ли начать с одной станции и потом масштабироваться?",
    answer:
      "<p>Да, это разумный подход. Сначала можно: протестировать локацию понять загрузку оценить экономику Дальше масштабировать проект. Важно заранее предусмотреть: запас по мощности место под новые станции совместимость оборудования и ПО.</p>",
  },
];

useHead({
  title: "Зарядные станции для бизнеса | B2B",
  meta: [
    {
      name: "description",
      content:
        "Зарядные станции для бизнеса: паркинги, ТЦ, отели, АЗС. Каталог продукции, проекты, преимущества. Монтаж под ключ, гарантия до 6 лет.",
    },
  ],
});
</script>

<style scoped lang="scss">
.faq__privacy-link {
  color: #66cb01;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
}
.faq__items p {
  margin-bottom: 0.5rem;
}
.faq__items a {
  color: var(--textColor);
}
</style>
