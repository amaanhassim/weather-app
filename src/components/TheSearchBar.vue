<template>
  <div class="mt-2 flex justify-end">
    <div class="flex gap-x-2.5 items-center">
      <v-text-field
        hide-details
        label="City"
        class="w-60"
        variant="outlined"
        density="compact"
        v-model="setLocation"
        @keyup.enter="fetchWeatherData"
      ></v-text-field>
      <v-btn
        class="icon-btn"
        density="comfortable"
        icon="mdi-weather-night"
        variant="outlined"
      ></v-btn>
    </div>
  </div>
</template>

<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useWeatherStore } from "@/store/index";
export default {
  name: "TheSearchBar",
  computed: {
    ...mapStores(useWeatherStore),
    ...mapState(useWeatherStore, ["getWeatherLocation"]),
    setLocation: {
      get() {
        return this.getWeatherLocation;
      },
      set(location) {
        this.setWeatherLocation(location);
      },
    },
  },
  methods: {
    ...mapActions(useWeatherStore, [
      "setWeatherLocation",
      "fetchData",
      "fetchMarineData",
    ]),
    async fetchWeatherData() {
      await this.fetchData();
      await this.fetchMarineData();
    },
  },
};
</script>

<style scoped>
.icon-btn {
  border-radius: 0;
}
</style>
