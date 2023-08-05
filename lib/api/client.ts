import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://54.79.60.180:8080";
const accessToken = localStorage.getItem("token");
const refreshToken = localStorage.getItem("refreshToken");

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

const tokenConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
    "Authorization-refresh": `Bearer ${refreshToken}`,
  },
};

const client = axios.create(axiosConfig);
const userClient = axios.create(tokenConfig);

export { client, userClient };
