import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import './index.css'
import "@fontsource/poppins/400.css";

const app = createApp(App);
app.use(router);
app.mount("#app");