<template>
  <div>
    <v-container>
      <v-row no-gutters> <CoverImageVue /> </v-row>

      <productitem />
      <v-row no-gutters class="custom-background rounded-lg">
        <Slide3d /> </v-row
    ></v-container>
  </div>
</template>

<script>
import Slide3d from "../components/market/SlideCard.vue";
import productitem from "../components/market/ProductItem.vue";
import CoverImageVue from "../components/market/CoverImage.vue";
export default {
  components: {
    Slide3d,
    productitem,
    CoverImageVue,
  },
};
</script>

<style>
.custom-background {
  background-image: url("../assets/ygg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 45vh;
}
</style>
