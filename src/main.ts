// i18n
import { createI18n } from 'vue-i18n';
import messages from '@intlify/vite-plugin-vue-i18n/messages';

// tailwindcss
import '@/styles/tailwind.css';

// vue-router
import router from '@/router/index';

// pinia
import pinia from '@/store/index';

import App from './App.vue';

const i18n = createI18n({
  locale: 'en',
  messages,
});

// 实例化
const app = createApp(App);
app.use(i18n);
app.use(pinia);
app.use(router);
app.mount('#app');
