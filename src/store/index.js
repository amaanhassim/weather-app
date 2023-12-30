import { defineStore } from "pinia";
import axios from "axios";

export const useWeatherStore = defineStore("weather", {
  state: () => ({ weatherData: {}, weatherLocation: "" }),
  getters: {
    getWeatherData: (state) => state.weatherData,
    getWeatherLocation: (state) => state.weatherLocation,
  },
  actions: {
    async fetchData() {
      console.log("in pinia");
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

    setWeatherLocation(location) {
      this.weatherLocation = location;
    },
  },
});
