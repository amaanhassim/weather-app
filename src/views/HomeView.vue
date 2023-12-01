<template>
  <div class="content-ct mt-2.5">
    <div class="col-1">
      <current-temperature />
    </div>
    <div class="col-2">
      <div class="row-1">
        <air-pollution />
        <v-card>
          <v-card-item>
            <div>
              <v-icon icon="mdi-weather-sunset"></v-icon>
              <span>Sunset</span>
            </div>
            <div>
              <span> 4:38PM </span>
            </div>
            <div>
              <span>Sunrise: 7:08PM</span>
            </div>
          </v-card-item>
        </v-card>
      </div>
    </div>
    <div class="col-3"></div>
  </div>
</template>

<script>
import CurrentTemperature from "@/components/FirstColumn/CurrentTemperature.vue";
import AirPollution from "@/components/SecondColumn/AirPollution.vue";
export default {
  components: { CurrentTemperature, AirPollution },
  name: "HomeView",
  data() {
    return {};
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

.row-1 {
  display: grid;
  grid-template-columns: 450px auto;
  column-gap: 10px;
}

.col-3 {
  grid-area: col-3;
}
</style>
