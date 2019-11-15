import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import paths from "./paths";

function route(path, view, name, ) {
  return {
    name,
    view,
    path,
    component: resovle => import(`@/views/${view}.vue`).then(resovle)
  };
}

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: paths
    .map(path => route(path.path, path.view, path.name, path.props))
    .concat([{
      path: "*",
      redirect: "/"
    }]),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
});

export default router