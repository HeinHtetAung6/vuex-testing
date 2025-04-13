<template>
  <ShopList />
  <hr>
  <ShoppingCart />
</template>

<script>
import ShopList from './components/ShopList.vue'
import ShoppingCart from './components/ShoppingCart.vue';

export default {
  name: 'App',
  components: {
    ShopList,
    ShoppingCart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
