import jsonBigint from "json-bigint";
import qs from "qs";
import getAxios from "../../axios";
import { AxiosInstance, AxiosRequestConfig } from "axios";
import { ErrorResponse } from "./types";
const jsonBigintInstance = jsonBigint({ useNativeBigInt: true });

export function getDataAxios(config?: AxiosRequestConfig): AxiosInstance {
  const api = getAxios({
    baseURL: String(import.meta.env.VITE_API_FAKE_STORE),
    // withCredentials: true,

    transformResponse: (data) => {
      if (data) {
        try {
          return jsonBigintInstance.parse(data);
        } catch (e) {
          throw Error(`Error message: ${(e as ErrorResponse).message}`);
        }
      }
    },
    paramsSerializer: (params) =>
      qs.stringify(params, { arrayFormat: "repeat" }),
    ...config,
  });
  return api;
}
