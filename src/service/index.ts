import { log } from "@/utils/log";
import axios from "axios";

const serviceLog = log.sub("service");

const id = process.env.VUE_APP_INFURA_IPFS_PROJECT_ID;
const secret = process.env.VUE_APP_INFURA_IPFS_PROJECT_SECRET;
const authorizationValue = `Basic ${btoa(id + ":" + secret)}`;
serviceLog(authorizationValue);

axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = authorizationValue;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
