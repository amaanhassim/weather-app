<template>
  <the-search-bar />
  <router-view />
</template>

<script>
import TheSearchBar from "@/components/TheSearchBar.vue";
export default {
  components: { TheSearchBar },
  name: "App",
};
</script>

<style></style>
