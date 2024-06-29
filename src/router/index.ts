import { createRouter, createWebHistory } from 'vue-router';
import type { RouteLocationGeneric, RouteRecordRedirectOption } from 'vue-router';
import MainView from '../views/MainView.vue';

const redirectShare: RouteRecordRedirectOption = (to: RouteLocationGeneric) => {
  const github_asset_id = String(to.params.github_asset_id).match(/^\d+/)?.[0]; // 丢弃非法字符
  if (!github_asset_id) {
    return {
      path: '/'
    };
  }
  else{
    window.location.href = `https://github.com/user-attachments/files/${github_asset_id}/sub.json`;
    return {
      path: '/'
    };
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/share/:github_asset_id',
      redirect: redirectShare,
    },
  ]
});

export default router;
