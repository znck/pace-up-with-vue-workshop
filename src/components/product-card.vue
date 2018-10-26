<script>
export default {
  props: {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String, required: true },
    stocked: { type: Boolean, required: true },
    basePrice: { type: Number },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 0 },
    inWishlist: { type: Boolean, default: false },
  },
  computed: {
    inCart() {
      return this.quantity > 0
    }
  }
}
</script>

<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="image" :alt="title">
      </figure>
    </div>
    <div class="card-content">
      <div class="product">
        <div class="product-title">{{ title }}</div>
        <div class="price title">
          <strong>$ {{ price }}</strong>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a
        role="button"
        class="card-footer-item"
        @click.prevent="$emit(inWishlist ? 'remove-from-wishlist' : 'add-to-wishlist')"
      >
        <i class="fa" :class="[inWishlist ? 'fa-heart is-red' : 'fa-heart-o']"></i>
      </a>
      <a
        role="button"
        class="card-footer-item"
        v-if="!inCart"
        @click.prevent="$emit('add-to-cart')"
      >
        <i class="fa fa-cart-plus"></i>
      </a>
      <div v-else class="card-footer-item">
        <div class="field has-addons">
          <p class="control">
            <a class="button" @click.prevent="$emit('remove-from-cart')">
              <span>-</span>
            </a>
          </p>
          <p class="control">
            <a class="button" @click.prevent>{{ quantity }}</a>
          </p>
          <p class="control">
            <a class="button" @click.prevent="$emit('add-to-cart')">
              <span>+</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.product {
  display: flex;
}

.product-title {
  flex: 1;
  margin: 0;
}
</style>
