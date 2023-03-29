<template>
  <button>Add to Cart</button>
</template>

<script>
export default {
  name: "buttonVue",
};
</script>

<style scoped>
button {
  padding: 0.5rem;
  background-color: cornflowerblue;
  border: none;
  transition: 0.2s;
}

button:hover {
  transform: scale(1.1);
  background-color: aqua;
}
</style>
