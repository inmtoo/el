<script setup lang="ts">
import {ref} from "vue";
import {getFAQ} from "~/api/products";
import FormWrapper from "~/components/blocks/FormWrapper.vue";

const faqRef = ref<HTMLElement | null>(null);
const faq = await getFAQ();
const faqShowIndex = ref<number | null>(null);

function faqShow(index: number) {
    if (index === faqShowIndex.value) faqShowIndex.value = null;
    else faqShowIndex.value = index;
}

onMounted(() => {
    const {$gsap} = useNuxtApp();

    $gsap.utils.toArray(".faq__item").forEach((item) => {
        $gsap.set(item, {scale: 0.8, opacity: 0.9});

        $gsap.to(item, {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "none",
            scrollTrigger: {
                trigger: item,
                start: "top 100%",
                end: "top 70%",
                scrub: true,
                fastScrollEnd: true,
            },
        });
    });

    $gsap.set(faqRef.value, {scale: 0.93, opacity: 0.9});

    $gsap.to(faqRef.value, {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "none",
        scrollTrigger: {
            trigger: faqRef.value,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            fastScrollEnd: true,
        },
    });
});
</script>

<template>
    <section class="faq st-section">
        <div class="container">
            <UITheSectionTitle
                    class="is-desktop"
                    :title="'Ответы на частые вопросы'"
                    :subtitle="'Если вы хотите о чем-то нас спросить, звоните, пишите в мессенджеры, на почту или через форму ниже '"
            ></UITheSectionTitle>
            <div class="faq__row">
                <div class="faq__form">
                    <div class="faq__form-title">
                        Не нашли ответа? Задайте свой вопрос
                    </div>
                    <FormWrapper v-slot="{data, send}">
                        <form action="" ref="faqRef">
                            <div class="faq__form-inputs">
                                <div class="faq__form-input">
                                    <input v-model="data.name" type="text" name="name" placeholder="Как Вас зовут?"/>
                                </div>
                                <div class="faq__form-input">
                                    <input v-model="data.phone" type="text" name="phone" placeholder="Телефон"/>
                                </div>
                            </div>
                            <div class="faq__form-input">
                                <textarea v-model="data.message" name="" id="" placeholder="Сообщение"></textarea>
                            </div>
                            <div class="faq__form-checkbox">
                                <input type="checkbox" name="ch" id="ch"/>
                                <label for="ch"
                                    >Согласие на
                                    <NuxtLink to="/privacy" class="faq__privacy-link"
                                        >обработку данных</NuxtLink
                                    ></label
                                >
                            </div>
                            <div class="faq__form-input">
                                <UITheButton title="ОТПРАВИТЬ" @click.prevent="send"></UITheButton>
                            </div>
                        </form>
                    </FormWrapper>
                </div>
                <div class="faq__items">
                    <UITheSectionTitle
                            class="is-tablet"
                            :title="'Ответы на частые вопросы'"
                            :subtitle="'Если вы хотите о чем-то нас спросить, звоните, пишите в мессенджеры, на почту или через форму ниже. '"
                    ></UITheSectionTitle>
                    <div
                            v-for="item in faq"
                            :class="['faq__item', faqShowIndex === item.id ? 'show' : '']"
                    >
                        <div class="faq__item-question">{{ item.question }}</div>
                        <div class="faq__item-answer" v-if="faqShowIndex === item.id" v-html="item.answer"></div>
                        <div class="faq__item-toggle" @click="faqShow(item.id)">
                            <img src="/images/faq-ico.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.faq__privacy-link {
  color: #ff8900;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
}
</style>