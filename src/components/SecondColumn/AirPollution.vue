<template>
  <v-card height="140">
    <v-card-item>
      <div class="flex flex-col gap-y-5">
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
    </v-card-item>
  </v-card>
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
