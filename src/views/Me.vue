<!-- eslint-disable -->
<template>
  <div>
    <h1>hello voke</h1>
    <v-btn color="green" @click="callAlert()"> callAlert </v-btn>
    <catcard />
    <gradecal />
  </div>
</template>

<script>
import { EventBus } from "@/EvenBus";
import gradecal from "./GradeCal.vue";
import catcard from "../components/CardImg.vue";
export default {
  components: {
    gradecal,
    catcard,
  },
  mounted() {
    EventBus.$on("callA", this.callAlert);
  },
  methods: {
    callAlert() {
      alert("HAHAHA");
    },
  },
};
</script>

<style></style>
