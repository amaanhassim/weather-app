<template>
  <v-sheet rounded class="p-[10px] h-48">
    <div class="h-full flex flex-col justify-between">
      <div class="flex gap-x-2.5 items-center">
        <v-icon icon="mdi-speedometer"></v-icon>
        <span>Pressure</span>
      </div>
      <div>
        <span>{{ getWeatherData.current.pressure_mb }} hPa</span>
      </div>
      <div>
        <span>{{ getPressureDescription }}</span>
      </div>
    </div>
  </v-sheet>
</template>

<script>
import { mapState } from "pinia";
import { useWeatherStore } from "@/store";
export default {
  name: "PressureForecast",
  computed: {
    ...mapState(useWeatherStore, ["getWeatherData"]),
    getPressureDescription() {
      if (this.getWeatherData.current.pressure_mb > 1022.689) {
        return "High pressure. Expect clear skies and calm weather";
      }

      if (
        this.getWeatherData.current.pressure_mb >= 1009.144 &&
        this.getWeatherData.current.pressure_mb <= 1022.689
      ) {
        return "Normal pressure. Expect steady weather";
      }

      if (this.getWeatherData.current.pressure_mb < 1009.144) {
        return "Low pressure. Expect warm air and rainstorms";
      }

      return "";
    },
  },
};
</script>

<style></style>
