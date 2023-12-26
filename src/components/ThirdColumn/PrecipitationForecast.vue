<template>
  <v-sheet rounded class="p-[10px] h-48">
    <div class="h-full flex flex-col justify-between">
      <div class="flex gap-x-2.5 items-center">
        <v-icon icon="mdi-weather-pouring"></v-icon>
        <span>Precipitation</span>
      </div>
      <div>
        <span>0mm in the last 3h</span>
      </div>
      <div>
        <span>Conditions are dry</span>
      </div>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "PrecipitationForecast",
};
</script>

<style></style>
