import axios from 'axios';
import qs from 'qs';

const request = axios.create({
  timeout: 5000,
  withCredentials: true,
});

request.interceptors.request.use(
  (config) => {
    if (config.method.toUpperCase() == 'GET') {
      config.params = { ...config.data };
    } else if (config.method.toUpperCase() == 'POST') {
      config.headers['content-type'] = 'appliaction/x-www-form-urlencoded';
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  },
);

request.interceptors.response.use(
  (res) => {
    if (res.statusText == 'OK') {
      return res.data;
    }
  },
  (err) => {
    Promise.reject(err);
  },
);

export default (method, url, data = {}) => {
  if (method.toUpperCase() == 'GET') {
    return request.get(url, {
      params: data,
    });
  } else if (method.toUpperCase() == 'POST') {
    return request.post(url, data);
  }
};
