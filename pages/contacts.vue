<template>
  <main class="main">
    <div class="container">
      <UITheBreadcrumbs :items="breadcrumbs"></UITheBreadcrumbs>
    </div>
    <section class="info-block info-block--right">
      <div class="container">
        <div class="info-block__row">
          <div class="info-block__text">
            <UITheSectionTitle
              :title="'Добро пожаловать EL'"
              :subtitle="'Ниже контактная информация, и вы можете в рабочее время с нами связаться. Приезжайте в офис для знакомства, записывайтесь на тест оборудования или заказывайте его на свой проект.'"
              :author="'Юрий Светличный,'"
              :position="'Создатель бренда EL'"
            ></UITheSectionTitle>

            <UITheButton
              title="Познакомиться ближе"
              :className="'btn-primary'"
              @click="scrollToElem('.footer')"
            ></UITheButton>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
const breadcrumbs = [
  { title: "Главная", link: "/" },
  { title: "Контакты", link: "" },
];

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
</script>
