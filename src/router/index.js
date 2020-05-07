import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/hospital",
  },
  {
    path: "/hospital",
    name: "Hospital",
    component: () => import("../components/hospital"),
  },
  {
    path: "/organization",
    name: "Organization",
    component: () => import("../components/organization"),
  },
  {
    path: "/shopDetail",
    name: "ShopDetail",
    component: () => import("../components/shopDetail"),
  },
  {
    path: "/all",
    name: "All",
    component: () => import("../components/all"),
  },
  {
    path: "/doctorDetail",
    name: "DoctorDetail",
    component: () => import("../components/doctorDetail"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
