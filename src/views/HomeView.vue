<template>
  <div class="content-ct mt-2.5">
    <div class="col-1">
      <v-card>
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
    </div>
    <div class="col-2"></div>
    <div class="col-3"></div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
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
.content-ct {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 10px;
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
}

.col-3 {
  grid-area: col-3;
}

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
