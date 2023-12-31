import { createRouter } from "vue-router";
import { createWebHashHistory } from "vue-router";
import { useWeatherStore } from "@/store";

import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    // before entering the component fetch the weather data
    beforeEnter: async () => {
      const store = useWeatherStore();
      await store.fetchData();
      await store.fetchMarineData();
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  //on route change scorll back to the top of the page if not already at the top
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
