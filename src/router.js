import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SubReddits from './views/SubReddits.vue';
import SubReddit from './views/SubReddit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/r/:name',
      name: 'SubReddit',
      component: SubReddit,
    },
    {
      path: '/subreddits',
      name: 'SubReddits',
      component: SubReddits,
    },
  ],
});
