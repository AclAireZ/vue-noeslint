<template>
  <v-row no-gutters>
    <carousel-3d>
      <slide
        v-for="(slide, i) in slides"
        :index="i"
        :key="i"
        class="rounded-lg"
      >
        <template v-slot="{ index, isCurrent, leftIndex, rightIndex }">
          <img
            :data-index="index"
            :class="{
              current: isCurrent,
              onLeft: leftIndex >= 0,
              onRight: rightIndex >= 0,
            }"
            :src="slide.src"
          />
          <div>{{ slide.text }}</div>
        </template>
      </slide>
    </carousel-3d></v-row
  >
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      slides: [
        {
          index: 0,
          src: "https://picsum.photos/200/300?random=1",
        },
        {
          index: 1,
          src: "https://picsum.photos/200/300?random=2",
        },
        {
          index: 3,
          src: "https://picsum.photos/200/300?random=2",
        },
      ],
    };
  },
};
</script>

<style>
/* Add some basic styling if needed */
</style>
