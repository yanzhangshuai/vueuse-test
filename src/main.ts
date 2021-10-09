import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import { setupRouter } from '@/router';
import App from '@/page/app.vue';

Vue.use(VueCompositionAPI);

const router = setupRouter();
new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
