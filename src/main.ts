import '@fontsource/lato';
import { createApp } from 'vue';
import App from './App.vue';
import pinia from './plugins/pinia';
import router from './plugins/router';
import './style.scss';

createApp(App).use(pinia).use(router).mount('#app');
