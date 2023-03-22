<template>
  <div class="cards">
    <h1>{{ name }}</h1>
    <h2>${{ price }}</h2>
    <img :src="image" alt="" />
  </div>
</template>

<script>
import { store } from "../store";

export default {
  name: "cardVue",
  props: {
    name: String,
    price: Number,
    image: String,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style scoped>
.cards {
  background-color: lightpink;
  text-align: center;
  padding: 20px;
  margin: 20px;
  height: 400px;
  width: 200px;
}
img {
  height: 100px;
  width: auto;
}
</style>
