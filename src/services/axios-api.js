import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://evening-cove-51744.herokuapp.com',
});

export const setAuthorizationToken = token => {
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common.Authorization;
  }
};

export const fetchData = (method, url, data) => {
  const result = instance[method](url, data);
  return result;
};

export default instance;
