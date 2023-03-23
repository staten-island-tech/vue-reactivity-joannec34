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
    addCart() {},
  },
};
</script>

<style></style>
