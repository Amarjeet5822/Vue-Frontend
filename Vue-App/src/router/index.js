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
      { path: 'product', name: 'Product', component: () => import('../components/Home/Product.vue') },
      { path: 'single-product', name: 'SingleProduct', component: () => import('../components/Home/SingleProduct.vue') },
      { path: 'user', name: 'UserHome', component: () => import('../components/Home/User.vue') },
    ]
  },
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      { path: '', redirect: 'home' },
      { path: 'home', name: 'DashboardHome', component: () => import('../components/Dashboard/Home.vue') },
      { path: 'settings', name: 'DashboardSettings', component: () => import('../components/Dashboard/Settings.vue') },
      { path: 'user', name: 'DashboardUser', component: () => import('../components/Dashboard/User.vue') },
    ]
  },
  {
    path: "/settings",
    component: Settings,
    children: [
      { path: '', redirect: 'settings' },
      { path: 'settings', name: 'MyRefConcept', component: () => import('../components/Settings/MyRefConcept.vue') },
      { path: 'reactive-vue', name: 'ReactiveVue', component: () => import('../components/Settings/ReactiveVue.vue') },
      { path: 'watch-concept', name: 'WatchConcept', component: () => import('../components/Settings/WatchConcept.vue') },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
