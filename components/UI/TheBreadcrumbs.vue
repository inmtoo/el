<template>
  <div class="breadcrumbs">
    <ul>
      <li v-for="item in items" :key="item.id">
        <div v-if="item.link"><a :href="item.link" v-html="item.title"></a><span class="breadcrumbs__spacer">→</span></div>
        <div v-else><span class="breadcrumbs__end" v-html="item.title"></span></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TheSectionTitle',
  props: {
    items: {
      type: Object,
      required: true
    }    
  },
}
</script>