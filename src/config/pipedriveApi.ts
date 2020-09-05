import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gabriel4.pipedrive.com/v1/',
});

export default api;
