<template>
  <h2>{{ name }}</h2>
</template>

<script>
import { store } from "../store";

export default {
  name: "cartItems",
  data() {
    return {
      store,
      toggled: false,
    };
  },
  props: {
    name: String,
  },
};
</script>

<style scoped></style>
