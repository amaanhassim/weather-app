<template>
  <v-sheet rounded height="265" class="p-[10px]">
    <div v-if="false" class="h-full flex justify-center items-center">
      <v-progress-circular
        :size="70"
        :width="7"
        color="purple"
        indeterminate
      ></v-progress-circular>
    </div>
    <div class="h-full flex flex-col justify-between" v-else>
      <div class="flex justify-between">
        <span>{{ dayOfTheWeek[currentDate.getDay()] }}</span>
        <span>{{ getTime }}</span>
      </div>
      <div>
        <span>{{ getWeatherData?.location?.name }}</span>
        <v-icon icon="mdi-airplane"></v-icon>
      </div>
      <div class="flex justify-center">
        <span class="text-7xl font-[900]">
          {{ getWeatherData?.current?.temp_c }}&deg;
        </span>
      </div>
      <div>
        <v-icon icon="mdi-weather-rainy"></v-icon>
      </div>
      <div>H: 11&deg; L: 10&deg;</div>
    </div>
  </v-sheet>
</template>

<script>
import { mapStores, mapState } from "pinia";
import { useWeatherStore } from "@/store/index";
export default {
  name: "CurrentTemperature",
  data() {
    return {
      currentDate: new Date(),
      dayOfTheWeek: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    };
  },
  computed: {
    // gives access to this.weatherStore
    ...mapStores(useWeatherStore),
    // gives read access to this.weatherData and this.getWeatherData
    ...mapState(useWeatherStore, ["weatherData", "getWeatherData"]),
    getTime() {
      return this.currentDate
        .toLocaleTimeString([], {
          hour12: true,
        })
        .toUpperCase();
    },
  },
};
</script>

<style scoped></style>
