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
    <section id="portfolio" class="st-section slider">
        <div class="container">
            <UITheSectionTitle
                    title="Портфолио"
                    subtitle="Установка зарядных станций по всей России: паркинги, ТЦ, отели, АЗС, частные объекты. Проектирование, монтаж и пусконаладка под ключ. "
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