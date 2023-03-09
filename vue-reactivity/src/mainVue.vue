<template>
  <headerVue title="hello" />
  <cardVue title="animals" />
</template>

<script>
import headerVue from "./components/headerVue.vue";
import cardVue from "./components/cardVue.vue";
export default {
  name: "mainVue",
  components: {
    headerVue,
    cardVue,
  },
};
</script>

<style></style>
