<template>
  <v-sheet rounded class="p-[10px] h-48">
    <div class="h-full flex flex-col justify-between">
      <div class="flex gap-x-2.5 items-center">
        <v-icon icon="mdi-virus"></v-icon>
        <span>Air pollution</span>
      </div>
      <div>
        <v-progress-linear
          v-model="progress"
          color="amber"
          height="25"
        ></v-progress-linear>
      </div>
      <div>
        <span>Air quality is good. </span>
      </div>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "AirPollution",
  data() {
    return {
      progress: 50,
    };
  },
};
</script>

<style></style>
