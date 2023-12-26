<template>
  <v-sheet rounded class="p-[10px] h-48">
    <div>
      <div class="flex gap-x-2">
        <v-icon icon="mdi-weather-windy"></v-icon>
        <span>Wind</span>
      </div>
      <div>
        <the-compass :degrees="90" />
      </div>
    </div>
  </v-sheet>
</template>

<script>
import TheCompass from "../TheCompass.vue";
export default {
  components: { TheCompass },
  name: "WindDirection",
};
</script>

<style></style>
