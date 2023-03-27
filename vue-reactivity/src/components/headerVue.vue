<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: "headerVue",
  props: {
    title: String,
  },
};
</script>

<style scoped>
h1 {
  font-family: "Bebas Neue", cursive;
  font-size: 8rem;
}
</style>
