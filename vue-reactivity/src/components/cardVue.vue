<template>
  <div>
    <h1>{{ title }}</h1>
    <h2 v-if="graduated">{{ student }}</h2>
    <h2 v-else>{{ student }} did not graduate</h2>
    <ul>
      <li v-for="animal in animals" :key="animal">{{ animal }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "cardVue",
  props: {
    title: String,
    student: String,
  },
  data() {
    return {
      //students: ["cynthia", "natalie"],
      graduated: false,
      animals: ["cat", "dog", "rat"],
    };
  },
};
</script>

<style scoped>
div {
  background-color: aqua;
  padding: 20px;
  margin: 20px;
}
</style>
