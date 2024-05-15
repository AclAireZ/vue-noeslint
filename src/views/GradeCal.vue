<template>
  <div>
    <v-row justify="center" no-gutters>
      <v-card max-height="200" max-width="500" color="yellow"
        ><v-col cols="12" class="d-flex flex-column align-center">
          <h1>Grade calculate</h1>

          <v-text-field v-model="points" label="ur grade" filled></v-text-field>
          <v-btn color="green" @click="calculate(points)"> cal </v-btn>
          <v-btn color="green" @click="callA()"> callAlert </v-btn>
        </v-col>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import { EventBus } from "@/EvenBus";
export default {
  data() {
    return {
      points,
    };
  },
  // mounted() {
  //   EventBus.$on("callA", this.callA);
  // },
  methods: {
    calculate(points) {
      console.log(points);
      if (points >= 80 && points <= 100) {
        alert("A");
      } else if (points >= 70 && points <= 79) {
        alert("B");
      } else if (points >= 60 && points <= 69) {
        alert("C");
      } else if (points >= 50 && points <= 59) {
        alert("D");
      } else if (points >= 0 && points <= 49) {
        alert("F");
      } else {
        alert("Grade should be between 0 to 100");
      }
    },
    callA() {
      EventBus.$emit("callA");
    },
  },
};
</script>

<style>
.align-center {
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
