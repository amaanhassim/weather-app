<template>
  <v-card class="h-32">
    <v-card-item class="h-32">
      <div class="flex flex-col gap-y-6">
        <div class="flex gap-x-2.5">
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
          <span>Air quality is good.
            
          </span>
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
