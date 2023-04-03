<template>
  <button>{{ title }}</button>
</template>

<script>
export default {
  name: "buttonVue",
  props: {
    title: String,
  },
};
</script>

<style scoped>
button {
  font-size: 2rem;
  padding: 0.5rem;
  border: none;
  background-color: #fcfcf6;
}

button:hover {
  transform: scale(1.1);
  font-weight: bold;
}
</style>
