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
    path: "/loading",
    name: "Loading",
    component: () => import("../views/Loading.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
