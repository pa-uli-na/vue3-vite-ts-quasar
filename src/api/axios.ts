import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
// import router from "@/router";
// import store from "@/store";
import { Notify } from "quasar";

async function onResponseRejected(error: any) {
  if (!error || !error.response) {
    throw Error("Error occured. Missing error.response");
  }

  const { status, statusText } = error.response;

  switch (status) {
    case 401:
      Notify.create({ type: "system", message: "You are not logged in." });
      // await store.dispatch("logout");
      // await router.push({ path: "/login" });
      break;
    case 500:
      Notify.create({
        type: "system",
        message: `${statusText}. Please, contact with support.`,
      });

      throw error;
    default:
      Notify.create({ type: "system", message: statusText });
      throw error;
  }
}

function getAxios(config?: AxiosRequestConfig): AxiosInstance {
  const api = axios.create({ ...config });
  api.interceptors.response.use((response) => response, onResponseRejected);
  return api;
}

export default getAxios;
