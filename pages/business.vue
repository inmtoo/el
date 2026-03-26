<template>
  <main class="main">
    <section class="main-promo st-section">
      <div class="container">
        <div class="main-promo__row">
          <div class="main-promo__left">
            <h1>Зарядные станции для бизнеса</h1>
            <p class="main-promo__desc">
              Наше решение для вашего бизнеса
            </p>
            <UITheButtonLink title="Показать больше" link="/catalog" />
          </div>
          <div class="main-promo__right">
            <img
              src="/images/main-promo.webp"
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
        <div class="rent-block__more">
          <NuxtLink :to="catalogAllLink" class="rent-block__more-link btn btn-primary">Показать все</NuxtLink>
        </div>
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

    <section class="st-section features">
      <div class="container">
        <UITheSectionTitle
          title="Проекты"
          subtitle="Реализованные объекты по всей России: паркинги бизнес-центров, отели, АЗС, общественные парковки. Проектирование, поставка и монтаж под ключ."
        />
        <div class="features__row">
          <TheItem
            v-for="(item, index) in projectItems"
            :key="index"
            :item="item"
          />
        </div>
      </div>
    </section>

    <section class="st-section info-block info-block--right">
      <div class="container">
        <div class="info-block__row">
          <div class="info-block__text">
            <UITheSectionTitle
              title="Текст от директора"
              subtitle="Мы верим, что электрический транспорт - это будущее. И наша миссия - сделать его доступным и удобным для каждого. Наши зарядные станции — это не просто устройства, это ваш шаг в зелёное будущее."
              author="Иван Иванов"
              position="Директор компании"
            />
          </div>
          <div class="info-block__img">
            <img src="/images/info-block.webp" alt="Директор компании" />
          </div>
        </div>
      </div>
    </section>

    <FAQ :faq="faq" />

    <section class="subscribe st-section">
      <div class="container">
        <div class="subscribe__wrap">
          <UITheSectionTitle
            :className="'section-title--center'"
            :title="'Наши партнеры'"
            :subtitle="'Сотрудничаем с производителями и операторами зарядной инфраструктуры. Готовы обсудить партнёрство и совместные проекты.'"
          />
          <div class="subscribe__social">
            <a href="https://rutube.ru/channel/71798736/">
              <svg
                width="32"
                height="32"
                viewBox="0 0 881 805"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M633.019 123.532H25V779.556H194.229V566.129H518.504L666.46 779.556H855.952L692.803 565.146C743.475 557.28 779.953 538.589 802.248 509.085C824.538 479.58 835.689 432.367 835.689 369.422V320.244C835.689 282.868 831.64 253.363 824.544 230.742C817.447 208.121 805.286 188.447 788.06 170.745C769.818 154.024 749.555 142.223 725.233 134.357C700.911 127.473 670.508 123.532 633.019 123.532ZM605.659 421.553H194.229V268.113H605.659C628.96 268.113 645.175 272.043 653.282 278.932C661.39 285.815 666.46 298.6 666.46 317.291V372.37C666.46 392.038 661.39 404.822 653.282 411.705C645.175 418.589 628.966 421.542 605.659 421.542V421.553Z"
                  stroke="#66cb01"
                  stroke-width="50"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M821.866 16C844.02 16.0001 862 33.9719 862 56.1455C862 78.3192 844.02 96.2919 821.866 96.292C799.684 96.292 781.708 78.3151 781.708 56.1455C781.709 33.976 799.684 16 821.866 16Z"
                  stroke="#66cb01"
                  stroke-width="32"
                />
              </svg>
            </a>

            <a href="https://t.me/vladagroup1">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_biz_754)">
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
                  <clipPath id="clip0_biz_754">
                    <rect width="32" height="32" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a href="https://dzen.ru/id/6908a3e82e906c2a4ac90f19">
              <svg
                width="32"
                height="32"
                viewBox="0 0 546 546"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M325.65 325.65C282.75 369.915 279.63 425.1 275.925 546C388.635 546 466.44 545.61 506.61 506.61C545.61 466.44 546 384.93 546 275.925C425.1 279.825 369.915 282.75 325.65 325.65ZM0 275.925C0 384.93 0.39 466.44 39.39 506.61C79.56 545.61 157.365 546 270.075 546C266.175 425.1 263.25 369.915 220.35 325.65C176.085 282.75 120.9 279.63 0 275.925ZM270.075 0C157.56 0 79.56 0.39 39.39 39.39C0.39 79.56 0 161.07 0 270.075C120.9 266.175 176.085 263.25 220.35 220.35C263.25 176.085 266.37 120.9 270.075 0ZM325.65 220.35C282.75 176.085 279.63 120.9 275.925 0C388.635 0 466.44 0.39 506.61 39.39C545.61 79.56 546 161.07 546 270.075C425.1 266.175 369.915 263.25 325.65 220.35Z"
                  fill="#66cb01"
                />
                <path
                  d="M546 275.925V270.075C425.1 266.175 369.915 263.25 325.65 220.35C282.75 176.085 279.63 120.9 275.925 0H270.075C266.175 120.9 263.25 176.085 220.35 220.35C176.085 263.25 120.9 266.37 0 270.075V275.925C120.9 279.825 176.085 282.75 220.35 325.65C263.25 369.915 266.37 425.1 270.075 546H275.925C279.825 425.1 282.75 369.915 325.65 325.65C369.915 282.75 425.1 279.63 546 275.925Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import FAQ from "~/components/blocks/FAQ.vue";
import { getPowers } from "~/api/powers";
import { getProducts } from "~/api/products";

const placeholderImg = "/images/main-promo.webp";

const selectedPower = ref("");
const catalogItems = ref<Array<Record<string, any>>>([]);
const powers = ref<Array<Record<string, any>>>([]);

const catalogAllLink = computed(() => {
  const slug = selectedPower.value;
  if (slug) {
    return { path: "/catalog", query: { power: slug } };
  }

  return "/catalog";
});

async function loadCatalogItems() {
  const data = await getProducts({
    page: 1,
    per_page: 8,
    power: selectedPower.value || undefined,
  });

  const products = data?.products || [];

  catalogItems.value = products.map((item: any) => {
    const powerAttr = item.attributes?.find((attr: any) => attr.slug === "pa_moshhnost");
    const powerName = powerAttr?.options?.map((option: any) => option.name).join(", ") ?? "";

    return {
      id: item.id,
      title: item.name || item.title || "Зарядная станция",
      text: powerName ? `Мощность: ${powerName}` : "",
      image: item.image || placeholderImg,
      link: item.slug ? `/product/${item.slug}` : "/catalog",
    };
  });
}

powers.value = await getPowers();

function getPowerValue(power: any): number {
  const raw = String(power?.name ?? "");
  const match = raw.match(/[\d.,]+/);
  if (!match) return Number.MAX_SAFE_INTEGER;
  return Number(match[0].replace(",", "."));
}

powers.value = [...powers.value].sort((a, b) => getPowerValue(a) - getPowerValue(b));

await loadCatalogItems();

async function onSelectPower(slug: string) {
  selectedPower.value = slug;
  await loadCatalogItems();
}

const advantagesItems = [
  {
    id: 1,
    title: "Быстрая установка",
    text: "Монтаж в день обращения. Выезд специалиста, замер, проект и установка под ключ.",
    image: placeholderImg,
    link: "#",
  },
  {
    id: 2,
    title: "Гарантия и сервис",
    text: "Гарантия до 6 лет. Собственный сервис-центр, обмен и возврат в течение 365 дней.",
    image: placeholderImg,
    link: "#",
  },
  {
    id: 3,
    title: "Выгодные условия",
    text: "Цены ниже на 30%. Собственное производство и прямые поставки. Подбор под бюджет.",
    image: placeholderImg,
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
