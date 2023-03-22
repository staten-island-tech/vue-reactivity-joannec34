<template>
  <headerVue title="hello" />
  <cartVue
    v-for="product in store.cart"
    :key="product.name"
    :name="product.name"
    :price="product.price"
    :count="product.count"
  ></cartVue>

  <div class="gallery">
    <cardVue
      v-for="product in store.products"
      :key="product.name"
      :name="product.name"
      :price="product.price"
      :image="product.url"
    />
    <buttonVue></buttonVue>
  </div>
</template>

<script>
import { store } from "../store";
import buttonVue from "../components/buttonVue.vue";
import cartVue from "../components/cartVue.vue";
import headerVue from "../components/headerVue.vue";
import cardVue from "../components/cardVue.vue";
import ButtonVue from "../components/buttonVue.vue";

export default {
  name: "homeVue",
  components: {
    cartVue,
    headerVue,
    cardVue,
    ButtonVue,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style>
body {
  background-color: palegoldenrod;
}

h1,
h2 {
  text-align: center;
}

.gallery {
  display: flex;
  justify-content: center;
}
</style>
