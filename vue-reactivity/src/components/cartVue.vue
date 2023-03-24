<template>
  <h2>{{ name }}, {{ price }}</h2>
</template>

<script>
import { store } from "../store";

export default {
  name: "cartVue",
  data() {
    return {
      store,
    };
  },
  props: {
    name: String,
    price: Number,
  },
};
</script>
