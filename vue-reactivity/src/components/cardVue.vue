<template>
  <div class="cards">
    <h2>{{ name }}</h2>
    <h3>${{ price }}</h3>
    <img :src="image" alt="" />
    <p><buttonVue @click="addCart()" title="Add to Cart" /></p>
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
      store.total += this.price;
    },
  },
};
</script>

<style scoped>
.cards {
  background-color: #f9dce0;
  text-align: center;
  font-size: 4rem;
  padding-top: 1rem;
  margin: 1rem;
  height: 35rem;
  width: 30rem;
  border: solid #ad7d79 0.5rem;
  border-radius: 2rem;
}
img {
  height: 20rem;
  width: 20rem;
  object-position: center;
  object-fit: cover;
  border-radius: 1rem;
}

button:hover {
  transform: scale(1.1);
}
</style>
