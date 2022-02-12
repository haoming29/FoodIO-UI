import { message } from "antd";
import axios from "axios";

const service = axios.create({
  baseURL: process.env.PUBLIC_URL,
});

if (process.env.NODE_ENV === "development") {
  // Change to your local BE server url
  service.defaults.baseURL = process.env.REACT_APP_BASE_URL;
}

export const requestInterceptor = async (config) => {
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
