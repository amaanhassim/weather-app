import { defineStore } from "pinia";
import axios from "axios";

export const useWeatherStore = defineStore("weather", {
  state: () => ({ weatherData: {}, weatherLocation: "", marineData: {} }),
  getters: {
    getWeatherData: (state) => state.weatherData,
    getWeatherLocation: (state) => state.weatherLocation,
    getMarineData: (state) => state.marineData,
  },
  actions: {
    async fetchData() {
      await axios
        .get("https://api.weatherapi.com/v1/current.json", {
          params: {
            key: "c75acb44654e43abbe9223411232511",
            // need to pass city
            q: this.weatherLocation || "london",
            aqi: "yes",
          },
        })
        .then(({ data }) => {
          this.weatherData = data;
        })
        .catch(() => {
          window.alert("Unable to find location");
        });
    },

    async fetchMarineData() {
      await axios
        .get("https://api.weatherapi.com/v1/marine.json", {
          params: {
            key: "c75acb44654e43abbe9223411232511",
            // need to pass city
            q: this.weatherLocation || "london",
            days: 1,
          },
        })
        .then(({ data }) => {
          this.marineData = data;
        })
        .catch(() => {
          window.alert("Unable to find location");
        });
    },

    setWeatherLocation(location) {
      this.weatherLocation = location;
    },
  },
});
