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
        :icon="buttonModeIcon"
        variant="outlined"
        @click="changeTheme()"
      ></v-btn>
    </div>
  </div>
</template>

<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useWeatherStore } from "@/store/index";
export default {
  name: "TheSearchBar",
  data() {
    return {
      buttonModeIcon: "mdi-weather-night",
    };
  },
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
    changeTheme() {
      if (this.$vuetify.theme.global.name === "light") {
        this.$vuetify.theme.global.name = "dark";
        this.buttonModeIcon = "mdi-weather-night";
        return;
      }
      this.$vuetify.theme.global.name = "light";
      this.buttonModeIcon = "mdi-weather-sunny";
    },
  },
};
</script>

<style scoped>
.icon-btn {
  border-radius: 0;
}
</style>
