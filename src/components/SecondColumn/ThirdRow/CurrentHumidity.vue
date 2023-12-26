<template>
  <v-sheet rounded class="p-[10px] h-48">
    <div class="h-full flex flex-col justify-between">
      <div class="flex gap-x-2">
        <v-icon icon="mdi-water"></v-icon>
        <span>Humidity</span>
      </div>
      <div>
        <span>74&deg;</span>
      </div>
      <div>
        <span>High Humidity. It might feel humid and uncomfortable.</span>
      </div>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "CurrentHumidity",
};
</script>

<style></style>
