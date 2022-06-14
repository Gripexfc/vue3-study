import { createApp } from 'vue';
import App from './App.vue';
import request from '@/api/request.ts';
import router from '@/router/index.js'
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App)
app.config.globalProperties.$request = request;
app.use(router);
app.use(pinia);
app.mount('#app')
