<template>
  <v-sheet class="h-[125px] p-[5px]" rounded>
    <div class="h-full hour-forcast-ctn">
      <div class="flex flex-col items-center justify-between">
        <span>Now</span>
        <v-icon icon="mdi-weather-pouring"></v-icon>
        <span>9&deg;</span>
      </div>
      <div class="flex flex-col items-center justify-between">
        <span>15</span>
        <v-icon icon="mdi-weather-pouring"></v-icon>
        <span>10&deg;</span>
      </div>
      <div class="flex flex-col items-center justify-between">
        <span>16</span>
        <v-icon icon="mdi-weather-pouring"></v-icon>
        <span>11&deg;</span>
      </div>
      <div class="flex flex-col items-center justify-between">
        <span>17</span>
        <v-icon icon="mdi-weather-pouring"></v-icon>
        <span>11&deg;</span>
      </div>
      <div class="flex flex-col items-center justify-between">
        <span>18</span>
        <v-icon icon="mdi-weather-lightning"></v-icon>
        <span>11&deg;</span>
      </div>
      <div class="flex flex-col items-center justify-between">
        <span>19</span>
        <v-icon icon="mdi-weather-partly-lightning"></v-icon>
        <span>11&deg;</span>
      </div>
      <div class="flex flex-col items-center justify-between">
        <span>20</span>
        <v-icon icon="mdi-weather-windy"></v-icon>
        <span>9&deg;</span>
      </div>
      <div class="flex flex-col items-center justify-between">
        <span>21</span>
        <v-icon icon="mdi-weather-pouring"></v-icon>
        <span>9&deg;</span>
      </div>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "HourlyForecast",
};
</script>

<style scoped>
.hour-forcast-ctn {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
</style>
