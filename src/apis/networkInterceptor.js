import axios from 'axios';

const NetworkInterceptor = ({
  responseType() {
    axios.interceptors.response.use((response) => {
      return response;
    }, (error) => {
      return Promise.reject(error);
    });
  },
});

export default NetworkInterceptor;
