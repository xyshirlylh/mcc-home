import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/real-estate',
    component: () => import('../views/real-estate/RealEstate')
  },
  {
    path: '/construction',
    component: () => import('../views/construction/Construction')
  },
  {
    path: "/loading",
    name: "Loading",
    component: () => import("../views/Loading.vue"),
  },
];

const router = new VueRouter({
  routes
});

export default router
