<template>
  <div class="cards">
    <h2>{{ name }}</h2>
    <h3>${{ price }}</h3>
    <img :src="image" alt="" />
    <h4><buttonVue @click="addCart()" /></h4>
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
  font-size: 4rem;
  padding: 2rem;
  margin: 1rem;
  height: 35rem;
  width: 30rem;
}
img {
  height: 20rem;
  width: auto;
}
</style>
