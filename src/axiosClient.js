
import axios from 'axios';

const axiosClient = axios.create({
  baseURL : 'https://zomato-pulse-backend.onrender.com',
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})

export default axiosClient;