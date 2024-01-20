<template>
  <v-sheet border rounded class="p-[10px] h-48">
    <div class="h-full flex flex-col justify-between">
      <div class="flex gap-x-2">
        <v-icon icon="mdi-eye-outline"></v-icon>
        <span>Visibility</span>
      </div>
      <div>
        <span>{{ getWeatherData.current.vis_km }} km</span>
      </div>
      <div>
        <span>Its perfectly clear right now</span>
      </div>
    </div>
  </v-sheet>
</template>

<script>
import { mapState } from "pinia";
import { useWeatherStore } from "@/store";
export default {
  name: "CurrentVisibility",
  computed: {
    ...mapState(useWeatherStore, ["getWeatherData"]),
  },
};
</script>

<style></style>
