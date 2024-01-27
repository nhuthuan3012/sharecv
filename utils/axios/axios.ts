//#region IMPORT
import axios from "axios";
import https from "https";
import { stringify } from "querystring";

import { API_URL } from "@/config/_constant";

import { formatParams } from "./func";
import { getAccessCookies } from "@/common/helpers/setCookies";

//#endregion

export const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "ngrok-skip-browser-warning": "69420",
    "Content-Type":"application/json"
  },
  // timeout: 0,
  paramsSerializer: {
    serialize: (params) => stringify(params),
  },
  validateStatus: (status) => {
    const strStatus = status.toString();

    return strStatus.startsWith("2") || strStatus === "404";
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export const subaxiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type":"application/x-www-form-urlencoded"
  },
  // timeout: 0,
  paramsSerializer: {
    serialize: (params) => stringify(params),
  },
  validateStatus: (status) => {
    const strStatus = status.toString();

    return strStatus.startsWith("2") || strStatus === "404";
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

axiosClient.interceptors.request.use((config) => {
  if(getAccessCookies()){
    config.headers["Authorization"] = "Bearer " + getAccessCookies();
  }
  // if (config.method === "post") {
  //   // if (config.data instanceof FormData) {
  //   //   return config;
  //   // }

  //   // let dataPayload = config?.data;

  //   // if (typeof dataPayload === "string") {
  //   //   dataPayload = JSON.parse(dataPayload);
  //   // }

  //   // if (dataPayload) {
  //   //   const params = formatParams(dataPayload);

  //   //   return { ...config, data: params };
  //   // }
  //   return config;
  // }
  return config;
});

export const isCancel = axios.isCancel;

