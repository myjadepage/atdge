import Vue from "vue";
import VueRouter from "vue-router";
import Report from "../views/Report.vue";
import CampMake from "../views/CampMake.vue";
import CampPage from "../views/CampPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Report",
    component: Report,
  },
  {
    path: "/CampMake",
    name: "CampMake",
    component: CampMake,
  },
  {
    path: "/CampPage",
    name: "CampPage",
    component: CampPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
