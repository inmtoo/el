<script setup lang="ts">

import TheSwiperPage from "~/components/UI/TheSwiperPage.vue";
import {getProjects} from "~/api/products";

const slideOptions = {
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
const projects = await getProjects();
</script>

<template>
    <section class="st-section slider">
        <div class="container">
            <UITheSectionTitle
                    title="Наши проекты"
                    subtitle="Создатель VLADAGROUP — Влада Озолина. Ее профессиональный путь в кино- и рекламной индустрии насчитывает десятки лет: за 25 лет она и ее команда реализовали более 500 проектов, сотрудничали с известными режиссерами и продюсерскими центрами, предоставляя профессиональную технику премиум-класса для съемок и обеспечивая высокий уровень сервиса на площадке. "
            ></UITheSectionTitle>
            <TheSwiperPage
                    :uniqueId="'reviews'"
                    :items="projects"
                    :options="slideOptions"
                    typeItem="item"
                    :classModifyImg="'--vertical'"
            ></TheSwiperPage>
        </div>
    </section>
</template>

<style scoped lang="scss">

</style>