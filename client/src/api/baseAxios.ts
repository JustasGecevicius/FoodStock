import axios from 'axios';

const baseAxios = axios.create({
  baseURL: 'https://192.168.1.13:3000',
  withCredentials: true,
});

export default baseAxios;
