<template>
  <div class="cards">
    <h1>{{ name }}</h1>
    <h2>${{ price }}</h2>
    <img :src="image" alt="" />
    <p><buttonVue @click="addCart()" /></p>
  </div>
</template>

<script>
import { store } from "../store";
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
  data() {
    return {
      store,
    };
  },
  methods: {
    addCart() {
      store.cart.push({
        name: this.name,
        price: this.price,
      });
    },
    totalCost() {},
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
