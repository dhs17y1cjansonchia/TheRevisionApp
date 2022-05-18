import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import Table from "@/views/Table.vue";
import Test from "@/views/ankicard.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Table',
    component: Table
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
];

export default new VueRouter({
  routes,
});
