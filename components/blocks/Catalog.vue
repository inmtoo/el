<script setup lang="ts">

import TheItem from "~/components/TheItem.vue";
import Pagination from "~/components/partials/Pagination.vue";
import TheRentItem from "~/components/UI/TheRentItem.vue";

defineProps({
    subcategories: {
        type: Array,
        default: []
    },
    products: {
        type: Array,
        default: []
    },
    totalPages: {
        type: Number,
        default: 1
    }
});

const page = defineModel("page", {default: 1});
</script>

<template>
    <section class="st-section rent-block" v-if="subcategories.length > 0">
        <div class="container">
            <!--                <UITheSectionTitle :title="catName" subtitle=""></UITheSectionTitle>-->
            <UITheSectionTitle
                    :title="'Группы оборудования'"
                    subtitle=""
            ></UITheSectionTitle>
            <div class="rent-block__row">
                <TheRentItem v-for="item in subcategories" :item="item"></TheRentItem>
            </div>
        </div>
    </section>

    <section class="st-section catalog" v-if="subcategories.length === 0">
        <div class="container">
            <UITheSectionTitle
                    :title="'Список оборудования'"
                    subtitle=""
            ></UITheSectionTitle>
            <div class="catalog__row">
                <div class="catalog__item" v-for="item in products">
                    <TheItem :item="item"></TheItem>
                </div>
            </div>
            <Pagination v-if="totalPages > 1" v-model:page="page" :max-page="totalPages"/>
        </div>
    </section>
</template>

<style scoped lang="scss">

</style>