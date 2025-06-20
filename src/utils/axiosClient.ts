import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://213.180.0.35:47909', // base URL for your API
  headers: {
    'Accept': 'application/json',
  },
});

export default axiosClient;