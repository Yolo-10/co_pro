import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/', component: '@/layouts', routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/list', component: '@/pages/list' }]
    },
  ],
  fastRefresh: {},
});
