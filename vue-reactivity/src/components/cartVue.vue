<template>
  <div class="cart">
    <buttonVue v-if="toggled" @click="toggleCart" title="Hide Cart" />
    <buttonVue v-else @click="toggleCart" title="Show Cart" />
    <buttonVue @click="resetCart" title="Reset Cart" />
    <div v-if="toggled">
      <cartItems
        v-for="product in store.cart"
        :key="product.name"
        :name="product.name"
        :price="product.price"
      />
    </div>
    <h2 id="total">TOTAL: ${{ store.total }}</h2>
  </div>
</template>

<script>
import { store } from "../store";
import cartItems from "../components/cartItems.vue";
import buttonVue from "../components/buttonVue.vue";

export default {
  name: "cartVue",
  data() {
    return {
      store,
      toggled: false,
    };
  },
  components: {
    cartItems,
    buttonVue,
  },
  methods: {
    toggleCart: function () {
      if (this.toggled === false) {
        this.toggled = true;
      } else this.toggled = false;
    },
    resetCart: function () {
      store.total = 0;
      store.cart = [];
    },
  },
};
</script>

<style scoped>
.cart {
  background-color: #fcfcf6;
  width: 20%;
  height: auto;
  border: solid #ad7d79 0.5rem;
  border-radius: 2rem;
  padding-top: 1rem;
}

#total {
  margin-top: 2rem;
}

h2,
button {
  font-size: 2rem;
  margin: 2rem;
}
</style>
