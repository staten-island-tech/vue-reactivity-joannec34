<template>
  <div>
    <h1>{{ name }}</h1>
    <h2>${{ price }}</h2>
    <img :src="image" alt="" />
    <h2 v-if="stocked">{{ name }} is in stock</h2>
    <h2 v-else>{{ name }} is not in stock</h2>
    <button @click="addCount()">add to cart</button>
    <button @click="subCount()">remove from cart</button>
    <h2>{{ count }}</h2>
  </div>
</template>

<script>
export default {
  name: "cardVue",
  props: {
    name: String,
    price: Number,
    stocked: Boolean,
    image: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addCount() {
      this.count++;
    },
    subCount() {
      if (this.count != 0) {
        this.count--;
      }
    },
  },
};
</script>

<style scoped>
div {
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
