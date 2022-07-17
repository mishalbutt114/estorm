import AsyncStorage from '@react-native-async-storage/async-storage';
import { variables } from '../constants/variables';

const axios = require('axios');
export const service = axios.create({
  baseURL: variables.baseUrl,
});

// Request intercepter
service.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// Response intercepter
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let message = '';
    if (error.response) {
      message = error.response.data.error;
    } else if (error.request) {
      message = 'Something went wrong, try again';
    } else {
      message = error.message;
    }
    return Promise.reject(message);
  },
);
