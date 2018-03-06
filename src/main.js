import Vue from 'vue';
import App from './App.vue';
import MachinesList from './MachinesList.vue';
import MachinesMap from './MachinesMap.vue';
import VueRouter from 'vue-router';
import Machine from './Machine.vue';
import Route from './route'
Vue.use(VueRouter)


Vue.component('machineslist', MachinesList);
Vue.component('mapmachine', MachinesMap);
Vue.component('machine', Machine);

const router = new VueRouter({
  routes: Route
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
