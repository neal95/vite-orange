import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';
import NProgress from '@/plugins/NProgress';
import exceptionRoutes from '@/router/route.exception';
import asyncRoutes from '@/router/route.async';
import commonRoutes from '@/router/route.common';

const routes: Array<RouteRecordRaw> = [
  // 无鉴权的业务路由 ex:登录
  ...commonRoutes,
  // 带鉴权的业务路由
  ...asyncRoutes,
  // 异常页必须放在路由匹配规则的最后
  ...exceptionRoutes,
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

// 全局前置路由守卫
router.beforeEach((to, from, next) => {
  NProgress.start();
  console.log('全局路由前置守卫：to,from\n', to, from);
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
  next();
});

// 全局后置路由守卫
router.afterEach((to, from, failure) => {
  console.log('全局路由后置守卫：to,from\n', to, from);
  NProgress.done();
});

export default router;
