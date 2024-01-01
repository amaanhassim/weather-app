<template>
  <v-sheet rounded class="p-[10px] h-48">
    <div class="h-full flex flex-col justify-between">
      <div class="flex gap-x-2.5 items-center">
        <v-icon icon="mdi-weather-pouring"></v-icon>
        <span>Precipitation</span>
      </div>
      <div>
        <span>{{ getWeatherData.current.precip_mm }} mm</span>
      </div>
      <div>
        <span>Conditions are {{ getCondition }}</span>
      </div>
    </div>
  </v-sheet>
</template>

<script>
import { mapState } from "pinia";
import { useWeatherStore } from "@/store";
export default {
  name: "PrecipitationForecast",
  computed: {
    ...mapState(useWeatherStore, ["getWeatherData"]),
    getCondition() {
      if (this.getWeatherData.current.precip_mm > 0) {
        return "wet";
      }

      return "dry";
    },
  },
};
</script>

<style></style>
