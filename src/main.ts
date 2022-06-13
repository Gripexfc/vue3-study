import { createApp } from 'vue';
import App from './App.vue';
import request from './api/request.ts';

const app = createApp(App)
app.config.globalProperties.$request = request;
app.mount('#app')
