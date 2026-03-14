<template>
  <main class="main" v-if="useRoute().params.slug !== 'ekrany'">
    <div class="container">
      <UITheBreadcrumbs :items="breadcrumbs"></UITheBreadcrumbs>
    </div>
    <section class="main-promo main-promo--category">
      <div class="container">
        <div class="main-promo__row">
          <div class="main-promo__left">
            <h1>{{ catName }}</h1>
            <p v-html="catDescription"></p>
            <UITheButton
              title="Запись на тест"
              @click="openPopup"
            ></UITheButton>
          </div>
          <div class="main-promo__right">
            <img :src="catThumbnail" alt="" />
          </div>
        </div>
      </div>
    </section>

    <Catalog
      :products="products"
      :subcategories="subcategories"
      :total-pages="totalPages"
      v-model:page="page"
    />

    <!--<FAQ />-->

    <section class="subscribe st-section">
      <div class="container">
        <div class="subscribe__wrap" ref="subscribeRef">
          <UITheSectionTitle
            :className="'section-title--center'"
            :title="'Подписывайтесь на нас'"
            :subtitle="'Узнавайте первыми о новых кейсах, решениях и спецпредложениях'"
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
                  stroke="#FF8900"
                  stroke-width="50"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M821.866 16C844.02 16.0001 862 33.9719 862 56.1455C862 78.3192 844.02 96.2919 821.866 96.292C799.684 96.292 781.708 78.3151 781.708 56.1455C781.709 33.976 799.684 16 821.866 16Z"
                  stroke="#FF8900"
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
                    fill="#ff8900"
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
                  fill="#FF8900"
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
  <Screens
    v-else
    v-model:page="page"
    :subcategories="subcategories"
    :products="products"
    :cat-name="catName"
    :cat-description="catDescription"
    :cat-thumbnail="catThumbnail"
    :total-pages="totalPages"
  />
</template>

<script setup lang="ts">
import { getCategories, getCategoryBySlug } from "~/api/categories";
import { getProducts } from "~/api/products";
import FAQ from "~/components/blocks/FAQ.vue";
import Screens from "~/components/layouts/categories/Screens.vue";
import Catalog from "~/components/blocks/Catalog.vue";

const isOpenPopup = useModal();

function openPopup() {
  isOpenPopup.value = true;
}

function closePopup() {
  isOpenPopup.value = false;
}

const catName = ref("Каталог");
const catThumbnail = ref("");
const catDescription = ref(
  `Если вам нужна консультация по выбору оборудования для проекта, свяжитесь с нами. Также вы можете протестировать камеры и свет в нашем рентале. `
);

useHead({
  title: catName,
  meta: [
    { name: "keywords", content: catName },
    { name: "description", content: catDescription },
    { property: "og:title", content: catName },
    { property: "og:description", content: catDescription },
    { property: "og:image", content: catThumbnail },
  ],
});

const totalPages = ref(1);
const page = ref(+useRoute().query.page || 1);
const limit = 16;

const subcategories = ref([]);
const products = ref([]);

function getData() {
  return getProducts({
    page: page.value,
    per_page: limit,
    category: useRoute().params.slug || "",
  }).then((data) => {
    products.value = data.products.map((el) => {
      return {
        id: el.id,
        title: el.name,
        image: el.image,
        price: "",
        link: `/product/${el.slug}`,
      };
    });
    totalPages.value = data.total_pages;
  });
}

const promises = [getData()];

const breadcrumbs = [
  { title: "Главная", link: "/" },
  { title: "Аренда съемочного оборудования", link: "/catalog" },
];
if (useRoute().params.slug) {
  promises.push(
    getCategoryBySlug(useRoute().params.slug).then((data) => {
      catName.value = data.name;
      catThumbnail.value = data.thumbnail;
      if (data.description) catDescription.value = data.description;

      data.parent_tree.forEach((el: any) => {
        breadcrumbs.push({
          title: el.name,
          link: `/category/${el.slug}`,
        });
      });
      breadcrumbs.push({
        title: data.name,
        link: "",
      });
    }),
    getCategories({ parent: useRoute().params.slug }).then((data) => {
      subcategories.value = data.map((el) => {
        return {
          id: el.id,
          title: el.name,
          image: el.thumbnail,
          link: `/category/${el.slug}`,
        };
      });
    })
  );
}

await Promise.all(promises);

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

watch(page, () => getData());
</script>

<style lang="scss"></style>
