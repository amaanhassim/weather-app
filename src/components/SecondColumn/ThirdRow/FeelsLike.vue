<template>
  <v-sheet border rounded class="p-[10px] h-48">
    <div class="h-full flex flex-col justify-between">
      <div class="flex gap-x-2">
        <v-icon icon="mdi-thermometer-low"></v-icon>
        <span>Feels like</span>
      </div>
      <div>
        <span>{{ this.getWeatherData.current?.feelslike_c }}&deg;</span>
      </div>
      <div>
        <span>{{ getDescription }}</span>
      </div>
    </div>
  </v-sheet>
</template>

<script>
import { mapState } from "pinia";
import { useWeatherStore } from "@/store";
export default {
  name: "FeelsLike",
  computed: {
    ...mapState(useWeatherStore, ["getWeatherData"]),
    getDescription() {
      if (
        this.getWeatherData.current?.feelslike_c >
        this.getWeatherData.current?.temp_c
      ) {
        return "Feels warmer than the actual temperature";
      } else if (
        this.getWeatherData.current?.feelslike_c <
        this.getWeatherData.current?.temp_c
      ) {
        return "Feels colder than the actual temperature";
      }

      return "";
    },
  },
};
</script>

<style></style>
