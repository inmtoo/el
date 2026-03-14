<template>
  <section class="restaurant-menu">
    <div class="container">
      <div class="restaurant-menu__tabs">
        <div 
          v-for="item, i in tabs" 
          :key="i" 
          :class="['restaurant-menu__tab', activeTabFood === item.nav && 'active']"
          @click="activeTabFoodNav(item.nav)">
          {{ item.title }}
        </div>          
      </div>

      <div v-if="activeTabFoodItems.length" class="restaurant-menu__items">
        <TheMenuItem
          v-for="item, i in activeTabFoodItems"
          :key="i"
          :item="item"
          @activePopupItem="$emit('activePopupItem', item)"
        >
        </TheMenuItem>
      </div>
      <div v-else class="restaurant-menu__items">
        <div class="restaurant-menu__item">Пусто</div>
      </div>
    </div>
  </section>
</template>

<script>
import TheMenuItem from './TheMenuItem.vue';

export default {
  components: {
    TheMenuItem
  },
  props: {
    tabs: {
      type: Array,
      default: [],
      required: true
    },
    activeTabFoodItems: {
      type: String,
      default: [],
      required: true
    },
    activeTabFood: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    activeTabFoodNav(nav) {
      this.$emit('activeTabFoodNav', nav)
    },    
    activePopupItem(item) {
      this.$emit('activePopupItem', item)
    }
  }
}
</script>