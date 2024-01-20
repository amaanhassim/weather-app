<template>
  <v-sheet border rounded class="p-[10px] h-48">
    <div class="h-full flex flex-col justify-between">
      <div class="flex gap-x-2">
        <v-icon icon="mdi-weather-windy"></v-icon>
        <span>Wind</span>
      </div>
      <div>
        <span>{{ getWeatherData.current.wind_dir }}</span>
      </div>
      <div>
        <span>Speed: {{ getWeatherData.current.wind_kph }} kph</span>
      </div>
    </div>
  </v-sheet>
</template>

<script>
import { mapState } from "pinia";
import { useWeatherStore } from "@/store";

export default {
  name: "WindDirection",
  computed: {
    ...mapState(useWeatherStore, ["getWeatherData"]),
  },
};
</script>

<style></style>
