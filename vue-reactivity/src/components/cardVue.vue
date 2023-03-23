<template>
  <div class="cards">
    <h1>{{ name }}</h1>
    <h2>${{ price }}</h2>
    <img :src="image" alt="" />
    <p><buttonVue></buttonVue></p>
  </div>
</template>

<script>
import buttonVue from "../components/buttonVue.vue";

export default {
  name: "cardVue",
  components: {
    buttonVue,
  },
  props: {
    name: String,
    price: Number,
    image: String,
  },
};
</script>

<style scoped>
.cards {
  background-color: lightpink;
  text-align: center;
  padding: 20px;
  margin: 20px;
  height: 300px;
  width: 200px;
}
img {
  height: 100px;
  width: auto;
}
</style>
