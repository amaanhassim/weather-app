<template>
  <v-sheet rounded class="p-[10px] h-48" :loading="true">
    <div class="h-full flex flex-col justify-between">
      <div class="flex gap-x-2">
        <v-icon icon="mdi-weather-sunset"></v-icon>
        <span>Sunset</span>
      </div>
      <div>
        <span>
          {{ getMarineData?.forecast?.forecastday[0].astro.sunrise }}
        </span>
      </div>
      <div>
        <span
          >Sunrise:
          {{ getMarineData?.forecast?.forecastday[0].astro.sunset }}</span
        >
      </div>
    </div>
  </v-sheet>
</template>

<script>
import { useWeatherStore } from "@/store";
import { mapState } from "pinia";
export default {
  name: "SunsetSunrise",
  computed: {
    ...mapState(useWeatherStore, ["getMarineData"]),
  },
  methods: {
    getSunrise() {
      console.log(this.getMarineData);
      return "4:38 PM";
    },
  },
};
</script>

<style></style>
