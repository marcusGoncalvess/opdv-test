import axios from 'axios';

const api = axios.create({
  baseURL: 'https://opdv-test.herokuapp.com/',
});

export default api;
