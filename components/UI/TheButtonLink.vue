<template>
  <a :href="link" :class="['btn', className]" target="_blank">{{ title }}</a>
</template>
<script>
  export default {
    name: "TheButton",
    props: {
      title: {
        type: String,
        default: "Кнопка",
      },
      className: {
        type: String,
        default: "btn-primary",
      },
      link: {
        type: String,
        default: "https://t.me/cdrent",
      },
    },
  };
</script>
