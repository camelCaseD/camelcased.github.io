import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.devtools = true;

let router = new VueRouter();

router.map({
  '/grid/:item': {
    component: {}
  }
});

router.start(App, 'app');
