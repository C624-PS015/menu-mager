import axios from 'axios';
import Cookies from 'js-cookie';

export const instance = axios.create({
  baseURL: process.env.BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
  return config;
});
