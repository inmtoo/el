<script setup lang="ts">
const props = defineProps({
    maxPage: {
        type: Number,
        required: true
    }
});
const page = defineModel<number>("page", {default: 1});

const startLeftPage = computed(() => {
    let start = page.value - 1;
    if (start < 1) start = 1;

    return start;
});

const endLeftPage = computed(() => {
    let end = startLeftPage.value + 1;
    if (end > props.maxPage) end = props.maxPage;

    return end;
});
const isShowEllipses = computed(() => props.maxPage - endLeftPage.value > 2);

const pages = computed(() => {
    const arr: Array<number | string> = [startLeftPage.value];
    if (endLeftPage.value > startLeftPage.value) arr.push(endLeftPage.value);

    if ((+props.maxPage - 1) > +arr.at(-1)!) {
        arr.push(props.maxPage - 1);
    }
    if (+props.maxPage > +arr.at(-1)!) arr.push(props.maxPage);

    if (isShowEllipses.value) arr.splice(2, 0, "...");

    return arr;
});
</script>

<template>
    <div class="pagination">
        <div class="pagination__prev">
            <a @click.prevent="page -= 1"
               :href="useRouter().resolve({path: useRoute().path, query: {page: page - 1}}).href" v-if="page > 1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21"
                     fill="none">
                    <path d="M1.5 10.5L10.5 1.5M1.5 10.5L10.5 19.5M1.5 10.5L22.5 10.5" stroke="#353535"
                          stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
        <div class="pagination__list">
            <div class="pagination__link" :class="{active: p === page}" v-for="p in pages" :key="p">
                <a href="#" v-if="p === '...'">...</a>
                <a @click.prevent="page = (p as number)" v-else
                   :href="useRouter().resolve({path: useRoute().path, query: {page: p}}).href">
                    {{ p }}
                </a>
            </div>
        </div>
        <div class="pagination__next">
            <a @click.prevent="page += 1"
               :href="useRouter().resolve({path: useRoute().path, query: {page: page + 1}}).href" v-if="page < maxPage">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21"
                     fill="none">
                    <path d="M22.5 10.5L13.5 1.5M22.5 10.5L13.5 19.5M22.5 10.5L1.5 10.5" stroke="#353535"
                          stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>