<template>
  <v-sheet rounded class="p-[5px] h-[125px]">
    <div class="h-full flex flex-col justify-between">
      <div class="flex gap-x-2">
        <v-icon icon="mdi-weather-sunset"></v-icon>
        <span>Sunset</span>
      </div>
      <div>
        <span> 4:38 PM </span>
      </div>
      <div>
        <span>Sunrise: 7:08PM</span>
      </div>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "SunsetSunrise",
};
</script>

<style></style>
