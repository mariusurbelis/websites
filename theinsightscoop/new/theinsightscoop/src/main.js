import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// Import the styles directly. (Or you could add them via script tags.)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "./app.scss";

Vue.use(BootstrapVue);

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHeadphones);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
    render: h => h(App)
}).$mount("#app");
