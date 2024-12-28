import axios from "axios";
import { getCookie, setCookie } from "../utils/cookie";
import { Router } from "next/navigation";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    if (accessToken !== null && accessToken !== undefined) {
      request.headers.Authorization = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    if (error === null || error === undefined) {
      throw new Error("error is null or undefined");
    }
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const orginialRequest = error.config;
    if (error.response.status === 401 && !orginialRequest._retry) {
      orginialRequest._retry = true;

      const res = await getNewTokens();
      if (res?.response?.status === 201) {
        setCookie("accessToken", res?.response?.data.accessToken, 30);
        setCookie("refreshToken", res?.response?.data.refreshToken, 360);
        return api(orginialRequest);
      } else {
        setCookie("accessToken", "", 0);
        setCookie("refreshToken", "", 0);
        Router.push("/");
      }
    }
    return Promise.reject(error.response.data);
  }
);

export default api;

const getNewTokens = async () => {
  const refreshToken = getCookie("refreshToken");
  if (!refreshToken) return;

  try {
    const response = await api.post("auth/refresh-token", {
      refreshToken,
    });
    return { response };
  } catch (error) {
    return { error };
  }
};
