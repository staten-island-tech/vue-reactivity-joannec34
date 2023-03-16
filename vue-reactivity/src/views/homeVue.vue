<template>
  <headerVue title="hello" />
  <buttonVue></buttonVue>

  <div class="cards">
    <cardVue
      v-for="product in products"
      :key="product.name"
      :name="product.name"
      :price="product.price"
      :stocked="product.stocked"
      :image="product.url"
    />
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
          url: "https://www.shutterstock.com/image-photo/red-apple-isolated-on-white-600w-1727544364.jpg",
          price: 2,
          stocked: true,
        },
        {
          name: "orange",
          url: "https://thumbs.dreamstime.com/b/sliced-orange-fruit-leaves-isolated-white-23331258.jpg",
          price: 3,
          stocked: false,
        },
        {
          name: "banana",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/2324px-Banana-Single.jpg",
          price: 4,
          stocked: true,
        },
        {
          name: "broccoli",
          url: "https://i5.walmartimages.com/asr/c721459d-3826-4461-9e79-c077d5cf191e_3.ca214f10bb3c042f473588af8b240eca.jpeg",
          price: 5,
          stocked: false,
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
