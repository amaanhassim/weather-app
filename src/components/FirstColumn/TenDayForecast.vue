<template>
  <v-sheet border rounded class="p-[10px] h-48">
    <v-icon icon="mdi-calendar-month-outline"></v-icon>
    <span>10-Day Forecast</span>
    <div class="mt-3.5">
      <div class="day-forcast-ct" v-for="day in days" :key="day">
        <span>{{ day }}</span>
        <v-icon icon="mdi-weather-rainy"></v-icon>
        <div class="temp-range-ct">
          <span>8&deg;</span>
          <v-slider disabled></v-slider>
          <span>10&deg;</span>
        </div>
      </div>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "TenDayForecast",
  data() {
    return {
      days: ["Mon", "Tue", "Wed"],
    };
  },
};
</script>

<style scoped>
.day-forcast-ct {
  display: grid;
  grid-template-columns: 35px auto 1fr;
  column-gap: 20px;
  border-bottom: 1px white;
}

.temp-range-ct {
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 5px;
}
</style>
