<template>
  <v-card height="265">
    <v-card-item>
      <div class="flex justify-between">
        <span>Sunday</span>
        <span>12:39:22 PM</span>
      </div>
      <div>
        <span>Copenhagen</span>
        <v-icon icon="mdi-airplane"></v-icon>
      </div>
      <div class="flex justify-center">
        <span class="text-7xl font-[900]">10&deg;</span>
      </div>
      <div>
        <v-icon icon="mdi-weather-rainy"></v-icon>
      </div>
      <div>H: 11&deg; L: 10&deg;</div>
    </v-card-item>
  </v-card>

  <v-card>
    <v-card-item>
      <v-icon icon="mdi-calendar-month-outline"></v-icon>
      <span>10-Day Forecast</span>
      <div class="mt-3.5">
        <div class="day-forcast-ct" v-for="day in days" :key="day">
          <span>{{ day }}</span>
          <v-icon icon="mdi-weather-rainy"></v-icon>
          <div class="temp-range-ct">
            <span>8&deg;</span>
            <v-slider></v-slider>
            <span>10&deg;</span>
          </div>
        </div>
      </div>
    </v-card-item>
  </v-card>
</template>

<script>
export default {
  name: "CurrentTemperature",
  data() {
    return {
      days: [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
      ],
    };
  },
};
</script>

<style scoped>
.day-forcast-ct {
  display: grid;
  grid-template-columns: 35px auto 1fr;
  column-gap: 20px;
}

.temp-range-ct {
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 5px;
}
</style>
