import { createApp } from "vue";
import "@fontsource/lato";
import "./style.css";
import App from "./App.vue";
import router from "./plugins/router";

createApp(App).use(router).mount("#app");
