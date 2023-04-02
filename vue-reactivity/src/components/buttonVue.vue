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
  font-size: 1.5rem;
  padding: 1rem;
  border: none;
  background-color: #fcfcf6;
  border-radius: 1rem;
}
</style>
