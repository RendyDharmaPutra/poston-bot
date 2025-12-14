import axios from "axios";
import { env } from "../../config/env";

/**
 * Axios client for making HTTP requests to the API.
 *
 * This client is configured with a base URL, timeout, and default headers.
 * It also includes request and response interceptors for handling errors.
 */
export const apiClient = axios.create({
  baseURL: env.API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Request interceptor.
 *
 * This interceptor is called before sending a request and can be used to modify the request configuration.
 * In this case, it simply returns the config as is.
 *
 * @param {AxiosRequestConfig} config - The request configuration.
 * @returns {AxiosRequestConfig} The modified request configuration.
 */
apiClient.interceptors.request.use(
  (config) => config,
  (error) => {
    throw error;
  }
);

/**
 * Response interceptor.
 *
 * This interceptor is called after receiving a response and can be used to modify the response.
 * In this case, it simply returns the response as is.
 *
 * @param {AxiosResponse} response - The response object.
 * @returns {AxiosResponse} The modified response object.
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error;
  }
);

export const authHeaders = (telegramId: number) => {
  return {
    "X-Telegram-Id": telegramId,
    "X-Bot-Secret": env.BOT_SECRET,
    "Content-Type": "application/json",
  };
};
