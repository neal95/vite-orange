// i18n
import i18n from '@/plugins/i18n';

// tailwindcss
import '@/styles/tailwind.css';

// vue-router
import router from '@/router/index';

// pinia
import pinia from '@/plugins/pinia';

// 黑暗模式
import '@/styles/dark-mode.css';

import App from './App.vue';

// 实例化
const app = createApp(App);
app.use(i18n);
app.use(pinia);
app.use(router);
app.mount('#app');
