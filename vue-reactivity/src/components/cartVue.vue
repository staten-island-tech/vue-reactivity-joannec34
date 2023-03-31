<template>
  <h2>{{ name }}</h2>
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
  },
};
</script>

<style scoped></style>
