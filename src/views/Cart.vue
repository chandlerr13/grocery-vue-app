<template>
<div>
  <div class="wrapper">
    <h1>Your Cart</h1>
    <img src="../assets/shopping_cart.png" id="cartImg" >
  </div>
  <div v-if="cartEmpty" class="wrapper">
    <p id="empty">~ Cart is empty ~</p>
  </div>
  <div v-else>
    <CartList :cartItems="getItems" />
  </div>
</div>
</template>

<script>
import CartList from "../components/CartList.vue";
export default {
  name: 'Cart',
  components: {
    CartList
  },
  computed: {
    getItems() {
      return this.$root.$data.cart;
    },
    cartEmpty() {
      return this.$root.$data.cart.length == 0;
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#empty {
  font-style: italic;
}

#cartImg {
  width: 100px;
  margin: 25px;
}

</style>