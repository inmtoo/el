<script setup lang="ts">
import { ref } from "vue";
import FormWrapper from "~/components/blocks/FormWrapper.vue";

const props = defineProps<{
  faq: Array<Record<string, any>>;
}>();

const faqRef = ref<HTMLElement | null>(null);

const faqShowIndex = ref<number | null>(null);

function faqShow(index: number) {
  if (index === faqShowIndex.value) faqShowIndex.value = null;
  else faqShowIndex.value = index;
}

onMounted(() => {
  const { $gsap } = useNuxtApp();

  const faqItems = $gsap.utils.toArray(".faq__item") as Element[];
  faqItems.forEach((item) => {
    $gsap.set(item, { scale: 0.8, opacity: 0.9 });

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

  $gsap.set(faqRef.value, { scale: 0.93, opacity: 0.9 });

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
        :subtitle="'Если вы хотите о чём-то нас спросить, звоните, пишите в мессенджеры, на почту или через форму ниже '"
      />
      <div class="faq__row">
        <div class="faq__form">
          <div class="faq__form-title">
            Не нашли ответа? Задайте свой вопрос
          </div>
          <FormWrapper v-slot="{ data, send }">
            <form action="" ref="faqRef">
              <div class="faq__form-inputs">
                <div class="faq__form-input">
                  <input
                    v-model="data.name"
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                  />
                </div>
                <div class="faq__form-input">
                  <input
                    v-model="data.phone"
                    type="text"
                    name="phone"
                    placeholder="Телефон"
                  />
                </div>
              </div>
              <div class="faq__form-input">
                <textarea
                  v-model="data.message"
                  name=""
                  id=""
                  placeholder="Сообщение"
                ></textarea>
              </div>
              <div class="faq__form-checkbox">
                <input type="checkbox" name="ch" id="ch" />
                <label for="ch">
                  Согласие на
                  <NuxtLink to="/privacy" class="faq__privacy-link">
                    обработку данных
                  </NuxtLink>
                </label>
              </div>
              <div class="faq__form-input">
                <UITheButton title="ОТПРАВИТЬ" @click.prevent="send" />
              </div>
            </form>
          </FormWrapper>
        </div>
        <div class="faq__items">
          <UITheSectionTitle
            class="is-tablet"
            :title="'Ответы на частые вопросы'"
            :subtitle="'Если вы хотите о чём-то нас спросить, звоните, пишите в мессенджеры, на почту или через форму ниже. '"
          />
          <div
            v-for="item in faq"
            :key="item.id"
            :class="['faq__item', faqShowIndex === item.id ? 'show' : '']"
          >
            <div class="faq__item-question">{{ item.question }}</div>
            <div
              v-if="faqShowIndex === item.id"
              class="faq__item-answer"
              v-html="item.answer"
            />
            <div class="faq__item-toggle" @click="faqShow(item.id)">
              <img src="/images/faq-ico.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.faq__privacy-link {
  color: #66cb01;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
}
</style>
