<template>
  <div class="content-ct mt-2.5">
    <div class="col-1">
      <current-temperature />
      <ten-day-forecast />
    </div>
    <div class="col-2">
      <div class="row-1-ct">
        <air-pollution />
        <sunset-sunrise />
      </div>
      <div class="row-2-ct">
        <hourly-forecast />
        <uv-index />
      </div>
      <div class="row-3-ct">
        <feels-like />
        <current-humidity />
        <current-visibility />
      </div>
    </div>
    <div class="col-3">
      <wind-direction />
      <precipitation-forecast />
      <pressure-forecast />
    </div>
  </div>
</template>

<script>
import CurrentTemperature from "@/components/FirstColumn/CurrentTemperature.vue";
import AirPollution from "@/components/SecondColumn/FirstRow/AirPollution.vue";
import SunsetSunrise from "@/components/SecondColumn/FirstRow/SunsetSunrise.vue";
import HourlyForecast from "@/components/SecondColumn/SecondRow/HourlyForecast.vue";
import UvIndex from "@/components/SecondColumn/SecondRow/UvIndex.vue";
import TenDayForecast from "@/components/FirstColumn/TenDayForecast.vue";
import FeelsLike from "@/components/SecondColumn/ThirdRow/FeelsLike.vue";
import CurrentHumidity from "@/components/SecondColumn/ThirdRow/CurrentHumidity.vue";
import CurrentVisibility from "@/components/SecondColumn/ThirdRow/CurrentVisibility.vue";
import WindDirection from "@/components/ThirdColumn/WindDirection.vue";
import PrecipitationForecast from "@/components/ThirdColumn/PrecipitationForecast.vue";
import PressureForecast from "@/components/ThirdColumn/PressureForecast.vue";
import { mapStores, mapState, mapActions } from "pinia";
import { useWeatherStore } from "@/store/index";
// import axios from "axios";
export default {
  components: {
    CurrentTemperature,
    AirPollution,
    SunsetSunrise,
    HourlyForecast,
    UvIndex,
    TenDayForecast,
    FeelsLike,
    CurrentHumidity,
    CurrentVisibility,
    WindDirection,
    PrecipitationForecast,
    PressureForecast,
  },
  name: "HomeView",
  data() {
    return {};
  },

  async created() {
    await this.fetchData();
    await this.fetchMarineData();
  },

  computed: {
    // gives access to this.weatherStore
    ...mapStores(useWeatherStore),
    // gives read access to this.weatherData and this.getWeatherData
    ...mapState(useWeatherStore, ["weatherData", "getWeatherData"]),
  },

  methods: {
    ...mapActions(useWeatherStore, ["fetchData", "fetchMarineData"]),
  },
};
</script>

<style scoped>
.content-ct {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 15px;
  grid-template-areas: "col-1 col-2 col-3";
}

.col-1 {
  grid-area: col-1;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}

.col-2 {
  grid-area: col-2;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}

.row-1-ct {
  display: grid;
  grid-template-columns: 450px auto;
  column-gap: 15px;
}

.row-2-ct {
  display: grid;
  grid-template-columns: 450px auto;
  column-gap: 15px;
}

.row-3-ct {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 15px;
}

.col-3 {
  grid-area: col-3;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}
</style>
