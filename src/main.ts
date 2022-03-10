import { createApp } from "vue";
import App from "./App.vue";
import router from "../src/router";
import { store } from "../src/store";

// quasar
import { Quasar, Notify, Dialog } from "quasar";
import lang from "quasar/lang/pl";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Quasar, {
  plugins: { Notify, Dialog },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  lang: lang,
});

app.mount("#app");
