<template>
  <div class="home">
    <buttonVue></buttonVue>
    <headerVue title="hello" />

    <div class="cards">
      <cardVue title="animals" student="cynthia" />
      <cardVue title="animals2" student="natalie" />
    </div>
  </div>
</template>

<script>
import buttonVue from "../components/buttonVue.vue";
import headerVue from "../components/headerVue.vue";
import cardVue from "../components/cardVue.vue";

export default {
  name: "homeVue",
  components: {
    buttonVue,
    headerVue,
    cardVue,
  },
  data() {
    return {
      products: [
        {
          name: "apple",
          price: 2,
        },
        {
          name: "orange",
          price: 3,
        },
        {
          name: "banana",
          price: 4,
        },
      ],
    };
  },
};
</script>

<style>
.cards {
  display: flex;
  justify-content: center;
}
</style>
