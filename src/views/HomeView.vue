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
    </div>
    <div class="col-2"></div>
    <div class="col-3"></div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.content-ct {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1 fr;
  grid-template-rows: 1fr;
  gap: 0px 10px;
  grid-template-areas: "col-1 col-2 col-3";
}

.col-1 {
  grid-area: col-1;
}

.col-2 {
  grid-area: col-2;
}

.col-3 {
  grid-area: col-3;
}
</style>
