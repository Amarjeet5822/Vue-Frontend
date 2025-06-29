// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Settings from "../views/Settings.vue";

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      { path: '', redirect: 'product' },
      { path: 'product', component: () => import('../components/Home/Product.vue') },
      { path: 'single-product', component: () => import('../components/Home/SingleProduct.vue') },
      { path: 'user', component: () => import('../components/Home/User.vue') },
    ]
  },
  { 
    path: "/dashboard", 
    component: Dashboard,
    children: [
      { path: '', redirect: 'home' },
      { path: 'home', component: () => import('../components/Dashboard/Home.vue') },
      { path: 'settings', component: () => import('../components/Dashboard/Settings.vue') },
      { path: 'user', component: () => import('../components/Dashboard/User.vue') },
    ]
  },
  { 
    path: "/settings",  
    component: Settings ,
    children: [
      { path: '', redirect: 'settings' },
      { path: 'settings', component: () => import('../components/Settings/MyRefConcept.vue') },
      { path: 'reactive-vue', component: () => import('../components/Settings/ReactiveVue.vue') },
      { path: 'watch-concept', component: () => import('../components/Settings/WatchConcept.vue') },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
