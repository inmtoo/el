<script setup lang="ts">
import { ref } from "vue";
import FormWrapper from "~/components/blocks/FormWrapper.vue";

const faqRef = ref<HTMLElement | null>(null);
const faq = [
  {
    id: 1,
    question: "Текст вопроса",
    answer:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
  },
  {
    id: 2,
    question: "Текст вопроса",
    answer:
      "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
  },
  {
    id: 3,
    question: "Текст вопроса",
    answer:
      "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>",
  },
  {
    id: 4,
    question: "Текст вопроса",
    answer:
      "<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>",
  },
  {
    id: 5,
    question: "Текст вопроса",
    answer:
      "<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.</p>",
  },
  {
    id: 6,
    question: "Текст вопроса",
    answer:
      "<p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.</p>",
  },
];
const faqShowIndex = ref<number | null>(null);

function faqShow(index: number) {
  if (index === faqShowIndex.value) faqShowIndex.value = null;
  else faqShowIndex.value = index;
}

onMounted(() => {
  const { $gsap } = useNuxtApp();

  $gsap.utils.toArray(".faq__item").forEach((item) => {
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
