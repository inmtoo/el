<template>
  <div :class="['section-title', className]">
    <h2 class="section-title__title">{{ title }}</h2>
    <p v-if="subtitle" class="section-title__subtitle">{{ subtitle }}</p>
    <p v-if="author">
      <i
        >{{ author }}<br /><span v-if="position">{{ position }}</span></i
      >
    </p>
    <div class="section-title__btn">
      <UITheButton 
        v-if="video !== ''" 
        :className="'btn-primary btn-isvideo'"
        title="Смотреть про экраны" 
        :isVideo="video !== ''"
        @click="showVideo">
      </UITheButton>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSectionTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "",
    },
    position: {
      type: String,
      default: "",
    },
    video: {
      type: String,
      default: "",
    }
  },
  methods: {
    showVideo() {
      this.$emit("showVideo", this.video);
    }
  }
};
</script>
