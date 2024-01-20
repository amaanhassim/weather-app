<template>
  <v-sheet border rounded class="h-48 p-[10px]">
    <div class="flex gap-x-2">
      <v-icon icon="mdi-weather-sunny"></v-icon>
      <span>UV index</span>
    </div>
    <div class="flex flex-col">
      <span>{{ getWeatherData.current.uv }}</span>
      <span>{{ this.exposureCategory }}</span>
      <v-progress-linear
        max="11"
        :color="getColour()"
        height="10"
        v-model="getWeatherData.current.uv"
      ></v-progress-linear>
      <span>{{ exposureDescription }}</span>
    </div>
  </v-sheet>
</template>

<script>
import { mapState } from "pinia";
import { useWeatherStore } from "@/store";
export default {
  name: "UvIndex",
  data() {
    return {
      exposureCategory: "",
      exposureDescription: "",
    };
  },
  computed: {
    ...mapState(useWeatherStore, ["getWeatherData"]),
  },
  methods: {
    getColour() {
      if (
        this.getWeatherData.current.uv >= 1 &&
        this.getWeatherData.current.uv <= 2
      ) {
        this.exposureCategory = "Low";
        this.exposureDescription = "No protection needed";
        return "#090";
      } else if (
        this.getWeatherData.current.uv >= 3 &&
        this.getWeatherData.current.uv <= 5
      ) {
        this.exposureCategory = "Moderate";
        this.exposureDescription = "Wear sunscreen";
        return "#f90";
      } else if (
        this.getWeatherData.current.uv >= 6 &&
        this.getWeatherData.current.uv <= 7
      ) {
        this.exposureCategory = "High";
        this.exposureDescription = "Take precautions";
        return "orange";
      } else if (
        this.getWeatherData.current.uv >= 8 &&
        this.getWeatherData.current.uv <= 10
      ) {
        this.exposureCategory = "Very High";
        this.exposureDescription = "Take precautions";
        return "red";
      }

      this.exposureCategory = "Extreme";
      this.exposureDescription = "Take precautions";
      return "#909";
    },
  },
};
</script>

<style></style>
