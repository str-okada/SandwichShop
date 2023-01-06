import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
// router must be registered before the app is mounted
// otherwise it won't work
