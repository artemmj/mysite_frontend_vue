import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/main.scss';
import prism from './plugins/prism';

const app = createApp(App);
app.use(router);
app.use(prism);
app.mount('#app');
