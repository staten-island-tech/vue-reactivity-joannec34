<template>
    <h1>{{ title }}</h1>
    <h2 v-if="graduated">{{ student }}</h2>
    <h2 v-else>{{ student }} did not graduate</h2>
    <ul>
      <li v-for="animal in animals" :key="animal">{{ animal }}</li>
    </ul>
  </template>
  
  <script>
  export default {
    name: "cardVue",
    props: {
      title: String,
    },
    data() {
      return {
        student: "cynthia",
        graduated: false,
        animals: ["cat", "dog", "rat"],
      };
    },
  };
  </script>
  
  <style scoped></style>
  