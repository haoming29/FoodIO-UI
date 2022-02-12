import { message } from "antd";
import axios from "axios";
import { TOKEN_STORAGE_NAME } from "../config";

const service = axios.create({
  baseURL: process.env.PUBLIC_URL,
});

if (process.env.NODE_ENV === "development") {
  // Change to your local BE server url
  // service.defaults.baseURL = process.env.REACT_APP_BASE_URL;
}

export const requestInterceptor = async (config) => {
  // All requests but getConfig require user logged in
  const getToken = () => {
    const storage = localStorage.getItem(TOKEN_STORAGE_NAME);
    const access_token = storage ? JSON.parse(storage).access_token : undefined;

    return access_token;
  };

  const token = getToken();

  config.headers.Authorization = "Bearer " + token;

  return config;
};

service.interceptors.request.use(requestInterceptor, async (error) =>
  Promise.reject(error)
);

service.interceptors.response.use(
  async (response) => {
    const { data } = response;
    return Promise.resolve(data);
  },
  async (error) => {
    if (!error.response) {
      message.error(error.toString());
      return Promise.reject({ error });
    }
    const { data, status, statusText } = error.response;
    if (status < 400) {
      return Promise.resolve(data);
    }
    message.error(`Error: ${status} ${data.name ?? statusText}`);
    return Promise.reject({ status, statusText });
  }
);

export default service;
