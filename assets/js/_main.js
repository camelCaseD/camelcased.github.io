import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import Item from './components/Item.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.devtools = true;

let router = new VueRouter();

router.map({
  '/grid/:item': {
    component: Item
  }
});

router.start(App, 'app');
