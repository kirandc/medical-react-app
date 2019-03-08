import axios from 'axios';
import { toast } from 'react-toastify';
import { SERVICE_URL } from './Constants';

const axiosInitializer = {
  config: () => {
    axios.defaults.baseURL = SERVICE_URL;

    // Request interceptor
    axios.interceptors.request.use(function (config) {
      return config;
    }, function (error) {
       return Promise.reject(error);
    });


    // Response interceptor
    axios.interceptors.response.use(function (response) {

      // Show success toast message
      if(response.data && response.data.message) {
        toast.success(response.data.message)
      }

      return response;
    }, function (error) {

      return Promise.reject(error);
    });
  }
};

export default axiosInitializer;
