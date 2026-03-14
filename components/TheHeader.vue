<template>
  <header class="header">
    <div class="container">
      <div class="header__row">
        <div class="header__logo">
          <a href="/">
            <img
              src="/images/logo.png"
              alt="Влад Групп — рентал и пространство для съемок"
            />
          </a>
        </div>

        <div class="header__right">
          <div class="header__btn">
            <UITheButton
              :title="'Связаться'"
              :class-name="'btn-secondary'"
              @click="openPopup"
            />
          </div>
          <div
            :class="['header__burger', { 'is-active': isShowMobileMenu }]"
            @click="toggleMobileMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav
          :class="['header__menu-mobile', { 'is-active': isShowMobileMenu }]"
        >
          <ul>
            <li><a href="/about">О компании</a></li>
            <li><a href="/catalog">Оборудование</a></li>
            <li><a href="/pavilion">Площадка для съемок</a></li>
            <li><a href="/event">Площадка для мероприятий</a></li>
            <li><a href="/privacy">Политика конфиденциальности</a></li>
            <li><a href="/contacts">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>

  <TheFeedBackPopup v-if="isOpenPopup" @close-popup="closePopup" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheFeedBackPopup from "./TheFeedBackPopup.vue";
import { useModal } from "~/composables/useModal";

const isShowMobileMenu = ref(false);

const isOpenPopup = useModal();

function toggleMobileMenu() {
  isShowMobileMenu.value = !isShowMobileMenu.value;
}

function openPopup() {
  isOpenPopup.value = true;
}

function closePopup() {
  isOpenPopup.value = false;
}
</script>

<style scoped>
/* Здесь можно добавить стили, если нужно */
</style>
