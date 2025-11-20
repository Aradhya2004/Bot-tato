import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import { router } from './router'
import './style.css'
import App from './App.vue'

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

createApp(App).use(router).use(pinia).mount('#app')
