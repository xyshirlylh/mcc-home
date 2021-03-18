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
    path: '/about-us',
    component: () => import('../views/home/About.vue'),
  },
  {
    path: '/all-news',
    component: () => import('../views/news/AllNews.vue'),
  },
  {
    path: '/news',
    component: () => import('../views/news/News.vue'),
  },
  {
    path: '/all-photos',
    component: () => import('../views/news/AllPhotos.vue'),
  },
  {
    path: '/test',
    component: () => import('../views/home/Test.vue'),
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
    component: () => import("../views/shared/Loading.vue"),
  },
  {
    path: '/project-detail',
    component: () => import("../views/real-estate/ProjectDetail.vue"),
  },
  {
    path: '/salary-caculator',
    component: () => import("../views/salary-caculator/SalaryCaculator.vue"),
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
});

export default router
