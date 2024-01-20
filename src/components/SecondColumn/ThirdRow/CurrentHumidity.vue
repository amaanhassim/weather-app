<template>
  <v-sheet border rounded class="p-[10px] h-48">
    <div class="h-full flex flex-col justify-between">
      <div class="flex gap-x-2">
        <v-icon icon="mdi-water"></v-icon>
        <span>Humidity</span>
      </div>
      <div>
        <span>{{ getWeatherData.current.humidity }}&deg;</span>
      </div>
      <div>
        <span>{{ getHumidityDescription }}</span>
      </div>
    </div>
  </v-sheet>
</template>

<script>
import { useWeatherStore } from "@/store";
import { mapState } from "pinia";
export default {
  name: "CurrentHumidity",
  computed: {
    ...mapState(useWeatherStore, ["getWeatherData"]),
    getHumidityDescription() {
      if (this.getWeatherData.current.humidity <= 30) {
        return "Too dry. Uncomfortable conditions.";
      } else if (
        this.getWeatherData.current.humidity > 30 &&
        this.getWeatherData.current.humidity <= 50
      ) {
        return "Optimal humidity. Comfortable conditions.";
      }

      return "High Humidity. Uncomfortable conditions.";
    },
  },
};
</script>

<style></style>
