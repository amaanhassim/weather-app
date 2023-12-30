<template>
  <v-sheet rounded class="p-[10px] h-48">
    <div class="h-full flex flex-col justify-between">
      <div class="flex gap-x-2.5 items-center">
        <v-icon icon="mdi-virus"></v-icon>
        <span>Air pollution</span>
      </div>
      <div>
        <v-progress-linear
          max="10"
          v-model="getAirQuality"
          :color="getColor()"
          height="25"
        ></v-progress-linear>
      </div>
      <div>
        <span>{{ airQualityAdvice }}</span>
      </div>
    </div>
  </v-sheet>
</template>

<script>
import { mapState } from "pinia";
import { useWeatherStore } from "@/store/index";
export default {
  name: "AirPollution",
  data() {
    return {
      progress: 3,
      airQualityAdvice: "",
    };
  },
  computed: {
    ...mapState(useWeatherStore, ["getWeatherData"]),
    getAirQuality() {
      return this.getWeatherData?.current?.air_quality?.["gb-defra-index"];
    },
  },
  methods: {
    getColor() {
      let color = "";
      if (
        this.getWeatherData?.current?.air_quality?.["gb-defra-index"] >= 1 &&
        this.getWeatherData?.current?.air_quality?.["gb-defra-index"] <= 3
      ) {
        color = "#090";
        this.airQualityAdvice = "Air quality is good";
      }

      if (
        this.getWeatherData?.current?.air_quality?.["gb-defra-index"] >= 4 &&
        this.getWeatherData?.current?.air_quality?.["gb-defra-index"] <= 6
      ) {
        color = "#f90";
        this.airQualityAdvice = "Air quality is moderate";
      }

      if (
        this.getWeatherData?.current?.air_quality?.["gb-defra-index"] >= 7 &&
        this.getWeatherData?.current?.air_quality?.["gb-defra-index"] <= 9
      ) {
        color = "red";
        this.airQualityAdvice = "Air quality is unhealthy for sensitive groups";
      }

      if (
        this.getWeatherData?.current?.air_quality?.["gb-defra-index"] === 10
      ) {
        color = "#909";
        this.airQualityAdvice = "Air quality is unhealthy";
      }
      return color;
    },
  },
};
</script>

<style></style>
