<template>
  <button @click="authState" v-if="loggedIn">log out</button>
  <button @click="authState" v-else>log in</button>
</template>

<script>
export default {
  name: "buttonVue",
  data() {
    return { loggedIn: false };
  },
  methods: {
    authState: function () {
      if (this.loggedIn === false) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    },
  },
};
</script>

<style></style>
