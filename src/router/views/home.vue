<script>
import Layout from '@layouts/main'
import ProductCard from '@components/product-card'
import { productsGetters, cartSummaryGetters, wishlistGetters } from '@state/helpers'

export default {
  components: { Layout, ProductCard },
  computed: {
    ...productsGetters,
    ...cartSummaryGetters,
    ...wishlistGetters
  }
}
</script>

<template>
  <Layout>
    <div class="columns is-multiline">
      <div v-for="product in products.slice(0, 30)" class="column is-3-desktop is-4-tablet">
        <ProductCard
          v-bind="product"
          :key="product.id"
          :quantity="productQuantityInCart(product)"
          :in-wishlist="isProductInWishlist(product)"
        />
      </div>
    </div>
  </Layout>
</template>
