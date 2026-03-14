<template>
  <a 
    class="restaurant-menu__item small-item"
    @click.prevent ="activePopupItem(item)"
    href="#">
    <div class="restaurant-menu__item-img small-item__img">
      <img :src="item.img" :alt="item.title">
    </div>

    <div class="restaurant-menu__item-info small-item__info"> 
      <div class="restaurant-menu__item-name small-item__name">{{ item.title }}</div>
      <div class="restaurant-menu__item-text small-item__text">{{ item.text }}</div>

      <div class="restaurant-menu__item-bottom small-item__bottom">
        <div class="restaurant-menu__item-price small-item__price">{{ item.price }} ₽</div>
        <div class="restaurant-menu__item-count small-item__count">
          <span>-</span>
          <input type="text" name="count" value="1">
          <span>+</span>
        </div>
        <div class="restaurant-menu__item-basket small-item__basket">
          <a href="#">
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.9388 33.916C6.32549 33.916 5.7373 33.6724 5.30362 33.2387C4.86994 32.805 4.6263 32.2168 4.6263 31.6035C4.6263 30.9902 4.86994 30.402 5.30362 29.9683C5.7373 29.5347 6.32549 29.291 6.9388 29.291C7.55212 29.291 8.14031 29.5347 8.57399 29.9683C9.00766 30.402 9.2513 30.9902 9.2513 31.6035C9.2513 32.2168 9.00766 32.805 8.57399 33.2387C8.14031 33.6724 7.55212 33.916 6.9388 33.916ZM22.3555 33.916C21.7422 33.916 21.154 33.6724 20.7203 33.2387C20.2866 32.805 20.043 32.2168 20.043 31.6035C20.043 30.9902 20.2866 30.402 20.7203 29.9683C21.154 29.5347 21.7422 29.291 22.3555 29.291C22.9688 29.291 23.557 29.5347 23.9907 29.9683C24.4243 30.402 24.668 30.9902 24.668 31.6035C24.668 32.2168 24.4243 32.805 23.9907 33.2387C23.557 33.6724 22.9688 33.916 22.3555 33.916Z" fill="#353535" stroke="#353535" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M29.293 6.16634H3.08463L6.16797 23.1247M29.293 6.16634L26.2096 23.1247H6.16797M29.293 6.16634C29.5504 5.13805 30.8346 3.08301 33.918 3.08301M6.16797 23.1247H28.9384C31.6887 23.1247 33.1471 24.3287 33.1471 26.208C33.1471 28.0873 31.6887 29.2913 28.9384 29.2913H6.9388" stroke="#353535" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: {},
      required: true
    }
  },
  methods: {
    activePopupItem(item) {
      this.$emit('activePopupItem', item)
    }
  }  
}
</script>