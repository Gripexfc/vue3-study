import { createApp } from 'vue';
import App from './App.vue';
import request from '@/api/request';
//不能使用.ts文件结尾,打包会失效
import router from '@/router/index'
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App)
app.config.globalProperties.$request = request;
app.use(router);
app.use(pinia);
app.mount('#app')
