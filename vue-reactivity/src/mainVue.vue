<template>
  <secondVue msg="hello" />
  <secondVue msg="goodbye" />
</template>

<script>
import secondVue from "./components/secondVue.vue";

export default {
  name: "mainVue",
  components: {
    secondVue,
  },
  data() {
    return {
      people:"ur mom", "ur dad",
      places: "house"
    };
  },
};
</script>

<style></style>
