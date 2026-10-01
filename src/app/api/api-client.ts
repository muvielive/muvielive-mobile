import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://10.0.2.2:8000/api/v1',
  timeout: 30000,

  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});