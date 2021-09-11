import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入重置样式
import "./common/reset.css";

createApp(App).use(store).use(router).mount("#app");
