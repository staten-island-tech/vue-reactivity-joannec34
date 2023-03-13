<template>
  <headerVue title="hello" />
  <div class="cards">
    <cardVue title="animals" student="cynthia" />
    <cardVue title="animals2" student="natalie" />
  </div>

  <button @click="authState" v-if="loggedIn">log out</button>
  <button @click="authState" v-else>log in</button>
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
  data() {
    return {
      loggedIn: false,
    };
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

<style>
.cards {
  display: flex;
  justify-content: center;
}
</style>
