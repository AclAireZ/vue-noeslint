<template>
  <div>
    <v-container>
      <v-row no-gutters class="custom-background rounded-lg">
        <div class="text-container">
          <h1>Dessert</h1>
          <v-btn color="pink" style="color: white; font-family: cursive">
            see now</v-btn
          >
        </div>
      </v-row>

      <productitem />
      <!-- <v-row no-gutters class="custom-background rounded-lg">
        <Slide3d /> </v-row
    > -->
    </v-container>
  </div>
</template>

<script>
// import Slide3d from "../components/market/SlideCard.vue";
import productitem from "../components/market/ProductItem.vue";
// import CoverImageVue from "../components/market/CoverImage.vue";
export default {
  components: {
    // Slide3d,
    productitem,
    // CoverImageVue,
  },
};
</script>

<style>
.custom-background {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/banner.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 45vh;
}

.text-container {
  text-align: center;
}

h1 {
  color: white;
  font-family: cursive;
  font-size: 50px;
}
</style>
