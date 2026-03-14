<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layout: 'default'
    }
  }
}
</script>