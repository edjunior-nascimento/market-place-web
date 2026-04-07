
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.seusistema.com', // URL base da API
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
