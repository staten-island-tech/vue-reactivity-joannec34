<template>
  <headerVue title="hello" />
  <div>
    <cartVue
      v-for="product in store.cart"
      :key="product.name"
      :name="product.name"
      :price="product.price"
    />
  </div>

  <div class="gallery">
    <cardVue
      v-for="product in store.products"
      :key="product.name"
      :name="product.name"
      :price="product.price"
      :image="product.url"
    />
  </div>
</template>

<script>
import { store } from "../store";
import cartVue from "../components/cartVue.vue";
import headerVue from "../components/headerVue.vue";
import cardVue from "../components/cardVue.vue";

export default {
  name: "homeVue",
  components: {
    cartVue,
    headerVue,
    cardVue,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style>
html,
body,
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 62.5%;
  text-align: center;
  font-family: "Roboto", sans-serif;
}

body {
  background-color: palegoldenrod;
}

.gallery {
  display: flex;
  justify-content: center;
}
</style>
