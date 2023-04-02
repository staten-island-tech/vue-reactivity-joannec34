<template>
  <headerVue title="8-Bit Bakery" />

  <section>
    <cartVue />
    <div class="gallery">
      <cardVue
        v-for="product in store.products"
        :key="product.name"
        :name="product.name"
        :price="product.price"
        :image="product.url"
      />
    </div>
  </section>
</template>

<script>
import { store } from "../store";
import headerVue from "../components/headerVue.vue";
import cardVue from "../components/cardVue.vue";
import cartVue from "../components/cartVue.vue";

export default {
  name: "homeVue",
  components: {
    headerVue,
    cardVue,
    cartVue,
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
  color: #8a6461;
  text-align: center;
  font-family: "DotGothic16", sans-serif;
  font-weight: 500;
}

body {
  background-color: #f8ece3;
}

h2 {
  font-size: 2rem;
}

section {
  display: flex;
  justify-content: center;
  margin: 4rem;
}

.gallery {
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
