import { createApp } from "vue";
import App from "./App.vue";
import '@/index.css'
import router from "@/router/index"
import { createPinia } from "pinia";
const pinia = createPinia()


const app = createApp(App)
app.use(router)
    .use(pinia)
    .mount("#app");
