<template>
  <main class="main">
    <section class="main-promo">
      <div class="container">
        <div class="main-promo__row">
          <div class="main-promo__left">
            <p>Зарядная инфраструктура</p>
            <h1>Зарядные станции для бизнеса и личного использования</h1>
            <p class="main-promo__desc">Мы предлагаем станции для дома, бизнеса и автосервиса.</p>
            <UITheButtonLink title="Подробнее" link="/catalog"></UITheButtonLink>
          </div>
          <div
            :class="[
              'main-promo__right',
              video ? ' main-promo__right--video' : '',
            ]"
          >
            <img
              src="/images/main-promo.webp"
              alt="Установка зарядных станций для электромобилей"
            />

            <div
              v-if="videoMain"
              class="main-promo__video-btn"
              @click="showVideo(videoMain)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#66cb01"
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

    <section class="st-section rent-block">
      <div class="container">
        <UITheSectionTitle
          title="Каталог зарядных станций"
          subtitle="Выбор для Вас. Каталог электрозарядных станций для дома, паркингов, ТЦ, отелей и АЗС."
        ></UITheSectionTitle>
        <div class="rent-block__row">
          <TheRentItem
            v-for="item in rentEquipments"
            :key="item.id"
            :item="item"
          ></TheRentItem>
        </div>
        <div class="rent-block__more">
          <NuxtLink to="/catalog" class="rent-block__more-link btn btn-primary">Показать все</NuxtLink>
        </div>
      </div>
    </section>

    <section class="st-section features">
      <div class="container">
        <UITheSectionTitle
          :title="advantagesTitle"
          :subtitle="advantagesSubtitle"
        ></UITheSectionTitle>
        <div class="features__row">
          <TheItem v-for="item in advantagesItems" :item="item" :key="item.id"></TheItem>
        </div>
      </div>
    </section>

    <section class="st-section features">
      <div class="container">
        <UITheSectionTitle
          :title="serviceTitle"
          :subtitle="serviceSubtitle"
        ></UITheSectionTitle>
        <div class="features__row">
          <TheItem v-for="item in serviceItems" :item="item" :key="item.id"></TheItem>
        </div>
      </div>
    </section>

    <section class="st-section slider" style="display: none">
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

    <section class="st-section slider" style="display: none">
      <div class="container">
        <UITheSectionTitle
          :title="ledTitle"
          :subtitle="ledSubtitle"
          :video="'https://rutube.ru/play/embed/da36335391b54b0eaf0d75c7948ce06d/'"
          @showVideo="showVideo"
        ></UITheSectionTitle>
        <TheSwiperPage
          :uniqueId="'solutions'"
          :items="ledItems"
          :options="ledSliderOption"
          typeItem="item"
        ></TheSwiperPage>
      </div>
    </section>    

    <Projects />

    <section style="display: none" class="st-section slider">
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

    <FAQ />

    <section class="subscribe st-section">
      <div class="container">
        <div class="subscribe__wrap" ref="subscribeRef">
          <UITheSectionTitle
            :className="'section-title--center'"
            :title="'Подпишитесь на нас в соцсетях'"
            :subtitle="'Будьте в курсе всех новостей и акций. Узнавайте первыми о новых моделях и полезных статьях об электромобилях'"
          ></UITheSectionTitle>
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

  <UIThePopupVideo
    v-if="isShowVideo"
    @close="closeVideo"
    :video="video"
  ></UIThePopupVideo>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import TheRentItem from "~/components/UI/TheRentItem.vue";
import TheSwiperPage from "~/components/UI/TheSwiperPage.vue";
import { getCategories } from "~/api/categories";
import FAQ from "~/components/blocks/FAQ.vue";
import Projects from "~/components/blocks/Projects.vue";

useHead({
  title: "Установим зарядную станцию под ключ | Установка и монтаж зарядных станций в Москве",
  meta: [
    {
      name: "keywords",
      content:
        "зарядные станции для электромобилей, установка зарядной станции, монтаж ЭЗС Москва, зарядка электромобиля под ключ",
    },
    {
      name: "description",
      content:
        "Подберем и установим зарядную станцию под ключ с гарантией до 6 лет. Полный цикл услуг, цены ниже на 30%, монтаж в день обращения. Работаем по всей России.",
    },
    {
      property: "og:title",
      content:
        "Установим зарядную станцию под ключ | Установка и монтаж зарядных станций в Москве",
    },
    {
      property: "og:description",
      content:
        "Подберем и установим зарядную станцию под ключ с гарантией до 6 лет. Полный цикл услуг, цены ниже на 30%, монтаж в день обращения.",
    },
    { property: "og:image", content: "/images/main-promo.webp" },
  ],
});

const advantagesTitle = "Наши преимущества";
const advantagesSubtitle =
  "Полный цикл услуг, собственное производство и импорт. Работаем по всей России.";

const advantagesItems = [
  {
    id: 1,
    title: "Опыт более 10 лет",
    text: "Проектируем и устанавливаем зарядную инфраструктуру для бизнеса и частных клиентов",
    image: "/images/features/features1.jpg",
    link: "#",
    target: "_self",
  },
  {
    id: 2,
    title: "Гибкие условия",
    text: "Цены ниже на 30%, монтаж в день обращения, гарантия до 6 лет",
    image: "/images/features/features2.jpg",
    link: "#",
    target: "_self",
  },
  {
    id: 3,
    title: "Качественное обслуживание",
    text: "Консультации 9:00–21:00, согласование с УК/ТСЖ, собственный сервис-центр",
    image: "/images/features/features3.jpg",
    link: "#",
    target: "_self",
  },
];

const serviceTitle = "Сервис";
const serviceSubtitle =
  "От проектирования и поставки до монтажа, настройки и обслуживания зарядных станций.";

const serviceItems = [
  {
    id: 1,
    title: "Монтаж оборудования",
    text: "Установка зарядных станций на объекте с подключением и пусконаладкой",
    image: "/images/services/led.jpg",
    link: "/catalog",
    target: "_self",
  },
  {
    id: 2,
    title: "Настройка и ввод в эксплуатацию",
    text: "Подключение к платформам, настройка доступа и учёта",
    image: "/images/services/apst.jpg",
    link: "/catalog",
    target: "_self",
  },
  {
    id: 3,
    title: "Техническое обслуживание",
    text: "Регулярное ТО, диагностика, ремонт в собственном сервис-центре",
    image: "/images/services/cameras.jpg",
    link: "/catalog",
    target: "_self",
  },
  {
    id: 4,
    title: "Замена вышедшего из строя",
    text: "Подменное оборудование на время ремонта, обмен и возврат 365 дней",
    image: "/images/services/place.jpg",
    link: "/catalog",
    target: "_self",
  },
];

const rentEquipments = ref();
await Promise.all([
  getCategories().then((data) => {
    rentEquipments.value = data.map((el) => {
      return {
        id: el.id,
        title: el.name,
        image: el.thumbnail,
        link: `/category/${el.slug}`,
      };
    });
  }),
]);

const solutionsTitle = "Пространство для съемок и мероприятий";
const solutionsSubtitle =
  "Оборудованная площадка с возможностью настройки под свои задачи";
const solutionsItems = [
  {
    id: 1,
    title: "Съемки кино",
    text: "Трансформируйте компактный павильон под свои сцены. Камеры, свет, экраны уже на месте.",
    image: "/images/space/cinema.jpg",
  },
  {
    id: 2,
    title: "Съемки рекламы",
    text: "Просторный и оборудованный павильон для создания потрясающего визуала",
    image: "/images/space/ad.jpg",
  },
  {
    id: 3,
    title: "Запись подкастов",
    text: "Аренда небольших пространств для записи аудио и видео полкастов",
    image: "/images/products/podcast.jpg",
  },
  {
    id: 4,
    title: "Проведение мероприятий",
    text: "Более 300 кв.м. с LED-экранами, профессиональным светом. А еще есть парковка и пространство на крыше.",
    image: "/images/space/event.jpg",
  },
  {
    id: 5,
    title: "Съемки клипов",
    text: "Стильные ролики с минимальными затратами на оборудованную локацию",
    image: "/images/products/clip.jpg",
  },
];
const solutionSliderOption = {
  slidesPerView: 1.2,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      loop: true,
    },
    1024: {
      slidesPerView: 2.5,
      loop: true,
    },
  },
};

const ledTitle = "LED-экраны в аренду";
const ledSubtitle =
  "Требуется масштаб и вовлечение? Мы решим эту задачу! В наличии топовые экраны UNILUMIN.";
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

const reviewsTitle = "Отзывы";
const reviewsSubtitle =
  "Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из латинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места». ";
const reviews = [
  {
    id: 1,
    name: "Иванов Иван",
    text: "Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из латинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места». ",
    image: "/images/person1.jpg",
  },
  {
    id: 2,
    name: "Иванова Лариса",
    text: "Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из лятинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места». ",
    image: "/images/person2.jpg",
    video: true,
  },
  {
    id: 3,
    name: "Васечкин Василий",
    text: "Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из лятинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места». ",
    image: "/images/person3.jpg",
  },
  {
    id: 4,
    name: "Марфа Васильевна",
    text: "Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из лятинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места». ",
    image: "/images/person4.jpg",
  },
];
const reviewsTitle2 = "Отзывы c видео";
const reviewsSubtitle2 =
  "Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из латинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места». ";
const reviews2 = [
  {
    id: 1,
    name: "Иванов Иван",
    text: "Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из латинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места». ",
    image: "/images/person1.jpg",
    video: true,
  },
  {
    id: 2,
    name: "Иванова Лариса",
    text: "Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из лятинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места». ",
    image: "/images/person2.jpg",
    video: true,
  },
  {
    id: 3,
    name: "Васечкин Василий",
    text: "Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из лятинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места». ",
    image: "/images/person3.jpg",
    video: true,
  },
  {
    id: 4,
    name: "Марфа Васильевна",
    text: "Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из лятинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места». ",
    image: "/images/person4.jpg",
    video: true,
  },
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
  },
};

const teamTitle = "Наша команда";
const teamSubtitle =
  "Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из латинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места». ";
const team = [
  {
    id: 1,
    name: "Влада Озолина",
    text: "Основатель ",
    image: "/images/team/team1.jpg",
  },
  {
    id: 2,
    name: "Александра Егорьева",
    text: "Совладелец ",
    image: "/images/team/team2.jpg",
    video: true,
  },
  {
    id: 3,
    name: "Элина Ванецян",
    text: "Финансовый директор ",
    image: "/images/team/team3.jpg",
  },
  {
    id: 4,
    name: "Мария Иванова",
    text: "Директор света. ",
    image: "/images/team/team4.jpg",
  },
];

const brandsTitle = "Наши клиенты";
const brandsSubtitle =
  "Lorem Ipsum (читается как «Лорем Ипсум») — текст-заглушка, текст-«рыба». Состоит из латинских слов и фраз, но не несёт особого смысла. Также называется «плейсхолдер» — буквально «держатель места». ";
const brandsItems = [
  {
    id: 1,
    image: "/images/brand1.jpg",
    link: "#",
  },
  {
    id: 2,
    image: "/images/brand2.jpg",
    link: "#",
  },
  {
    id: 3,
    image: "/images/brand3.jpg",
    link: "#",
  },
  {
    id: 4,
    image: "/images/brand4.jpg",
    link: "#",
  },
  {
    id: 5,
    image: "/images/brand5.jpg",
    link: "#",
  },
  {
    id: 6,
    image: "/images/brand6.jpg",
    link: "#",
  },
  {
    id: 7,
    image: "/images/brand1.jpg",
    link: "#",
  },
  {
    id: 8,
    image: "/images/brand2.jpg",
    link: "#",
  },
  {
    id: 9,
    image: "/images/brand3.jpg",
    link: "#",
  },
  {
    id: 10,
    image: "/images/brand4.jpg",
    link: "#",
  },
  {
    id: 11,
    image: "/images/brand5.jpg",
    link: "#",
  },
  {
    id: 12,
    image: "/images/brand6.jpg",
    link: "#",
  },
];
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
  },
};

const featuresTitle = "Почему выбирают нас";
const featuresSubtitle =
  "Полный цикл услуг, собственное производство и импорт. Работаем без посредников по всей России.";
const featuresItems = [
  {
    id: 1,
    title: "Цены ниже на 30%",
    text: "Прямые поставки и собственное производство оборудования",
    image: "/images/features/features1.jpg",
  },
  {
    id: 2,
    title: "Монтаж в день обращения",
    text: "Быстрый выезд, замер, проект и установка под ключ",
    image: "/images/features/features2.jpg",
  },
  {
    id: 3,
    title: "Гарантия до 6 лет",
    text: "Собственный сервис-центр, обмен и возврат 365 дней",
    image: "/images/features/features3.jpg",
  },
  {
    id: 4,
    title: "Поддержка 9:00–21:00",
    text: "Консультации и помощь с согласованием документации",
    image: "/images/features/features4.jpg",
  },
];

const isShowVideo = ref(false);

const videoMain =
  "https://rutube.ru/play/embed/1a6370b94c09a960043d6161694e143e/";
const video = ref("");

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
