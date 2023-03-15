<template>
  <div>
    <h1>{{ name }}</h1>
    <h2>${{ price }}</h2>
    <img :src="image" alt="" />
    <h2 v-if="stocked">{{ name }} is in stock</h2>
    <h2 v-else>{{ name }} is not in stock</h2>
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
  computed: {
    getImage: function () {
      return this.image;
    },
  },
};
</script>

<style scoped>
div {
  background-color: aqua;
  padding: 20px;
  margin: 20px;
}
img {
  height: 100px;
  width: auto;
}
</style>
