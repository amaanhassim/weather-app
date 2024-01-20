<template>
  <div class="flex flex-col gap-y-[15px]">
    <the-search-bar />
    <router-view />
  </div>
</template>

<script>
import TheSearchBar from "@/components/TheSearchBar.vue";
export default {
  components: { TheSearchBar },
  name: "App",
};
</script>

<style></style>
