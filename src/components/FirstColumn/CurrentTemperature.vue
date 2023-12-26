<template>
  <v-sheet rounded height="265" class="p-[10px]">
    <div v-if="false" class="h-full flex justify-center items-center">
      <v-progress-circular
        :size="70"
        :width="7"
        color="purple"
        indeterminate
      ></v-progress-circular>
    </div>
    <div class="h-full flex flex-col justify-between" v-else>
      <div class="flex justify-between">
        <span>Sunday</span>
        <span>12:39:22 PM</span>
      </div>
      <div>
        <span>Copenhagen</span>
        <v-icon icon="mdi-airplane"></v-icon>
      </div>
      <div class="flex justify-center">
        <span class="text-7xl font-[900]">10&deg;</span>
      </div>
      <div>
        <v-icon icon="mdi-weather-rainy"></v-icon>
      </div>
      <div>H: 11&deg; L: 10&deg;</div>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "CurrentTemperature",
};
</script>

<style scoped></style>
