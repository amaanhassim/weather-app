<template>
  <v-sheet rounded class="p-[10px] h-48">
    <div class="h-full flex flex-col justify-between">
      <div class="flex gap-x-2.5 items-center">
        <v-icon icon="mdi-speedometer"></v-icon>
        <span>Pressure</span>
      </div>
      <div>
        <span>997 hPa</span>
      </div>
      <div>
        <span>Conditions are dry.</span>
      </div>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "PressureForecast",
};
</script>

<style></style>
