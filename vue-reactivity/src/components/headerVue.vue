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
  font-size: 8rem;
}
.top-bar {
  display: flex;
  justify-content: center;
}

h1 {
  font-weight: bold;
}
</style>
