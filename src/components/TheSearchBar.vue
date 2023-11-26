<template>
  <div class="mt-2 flex justify-end">
    <div class="flex gap-x-2.5 items-center">
      <v-text-field
        hide-details
        label="City"
        class="w-60"
        variant="outlined"
        density="compact"
      ></v-text-field>
      <v-btn
        class="icon-btn"
        density="comfortable"
        icon="mdi-weather-night"
        variant="outlined"
      ></v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSearchBar",
};
</script>

<style scoped>
.icon-btn {
  border-radius: 0;
}
</style>
