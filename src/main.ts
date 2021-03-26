import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/route';
import {installWidgets } from '@/widgets'



const app = createApp(App).use(store).use(router);
installWidgets(app)
app.mount('#app');
