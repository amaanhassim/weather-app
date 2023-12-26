<template>
  <v-sheet rounded class="p-[10px] h-48">
    <div class="h-full flex flex-col justify-between">
      <div class="flex gap-x-2">
        <v-icon icon="mdi-thermometer-low"></v-icon>
        <span>Feels like</span>
      </div>
      <div>
        <span>7&deg;</span>
      </div>
      <div>
        <span>Feels colder than the actual temperature</span>
      </div>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "FeelsLike",
};
</script>

<style></style>
