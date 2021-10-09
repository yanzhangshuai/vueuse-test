import Vue from 'vue';
import Router, { Route, RouteConfig } from 'vue-router';
import { Ref, ref, UnwrapRef } from '@vue/composition-api';

let router: Router;
let currentRoute: Ref<UnwrapRef<Route>>;


const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/page/home/index.vue'),
    children: [
      {
        path: '',
        redirect: 'demo1',
      },
      {
        path: 'demo1',
        component: () => import('@/page/home/demo1/index.vue')
      },
      {
        path: 'demo2',
        component: () => import('@/page/home/demo2/index.vue')
      }
    ]
  }
];

export function setupRouter(): Readonly<Router> {
  Vue.use(Router);
  
  const router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior: () => ({ x: 0, y: 0 }),
  });
  
  //TODO:
  //  这几行代码影响了
  currentRoute = ref({ ...router.currentRoute });
  router.beforeEach((to: Route, _, next) => {
    to && (currentRoute.value = to);
    next();
  });
  
  return router;
}

export function useRouter(): Readonly<Router> {
  return router;
}

export function useRoute(): Ref<UnwrapRef<Route>> {
  return currentRoute;
}
