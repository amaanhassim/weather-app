<template>
  <v-sheet rounded class="p-[5px]">
    <div>
      <v-icon icon="mdi-weather-sunny"></v-icon>
      <span>UV index</span>
    </div>
    <div class="flex flex-col">
      <span>1</span>
      <span>Low</span>
      <v-progress-linear
        color="amber"
        height="10"
        v-model="uvIndex"
      ></v-progress-linear>
      <span>No protection needed.</span>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "UvIndex",
  data() {
    return {
      uvIndex: 20,
    };
  },
};
</script>

<style></style>
