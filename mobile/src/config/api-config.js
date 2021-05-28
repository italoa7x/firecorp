import axios from 'axios';
import asyncStorageService from '../services/async-storage';

const token = asyncStorageService.restoreToken();
export const configApi = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: token,
  },
});
