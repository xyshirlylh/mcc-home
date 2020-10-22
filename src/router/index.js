import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import RealEstate from "../views/real-estate/RealEstate";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/real-estate',
    name: 'RealEstate',
    component: RealEstate
  }
];

const router = new VueRouter({
  routes
});

export default router
