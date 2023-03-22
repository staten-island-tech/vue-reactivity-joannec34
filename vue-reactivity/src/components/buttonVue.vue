<template>
  <button @click="addCart()">add to cart</button>
</template>

<script>
import { store } from "../store";

export default {
  name: "buttonVue",
  data() {
    return {
      store,
    };
  },
  methods: {
    addCart() {
      store.cart.push(store.products.name);
    },
  },
};
</script>

<style scoped></style>
