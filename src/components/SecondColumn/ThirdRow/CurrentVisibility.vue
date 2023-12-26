<template>
  <v-sheet rounded class="p-[10px] h-48">
    <div class="h-full flex flex-col justify-between">
      <div class="flex gap-x-2">
        <v-icon icon="mdi-eye-outline"></v-icon>
        <span>Visibility</span>
      </div>
      <div>
        <span>10 km</span>
      </div>
      <div>
        <span>Its perfectly clear right now</span>
      </div>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "CurrentVisibility",
};
</script>

<style></style>
