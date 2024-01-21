import axios from "axios";

const instance = axios.create({
  baseURL : 'http://localhost:3000/api/v1'
})
const useAxiosPrivet = () => {

  instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("access-token");
    config.headers.authorization = `Bearer ${token}`
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  // 401 and 403 error handle:
  instance.interceptors.response.use(function (response) {
    return response;
  }, async (error) => {
    const status = error.response.status;
    if (status === 401 || status === 403) {
      console.log(status);
    }

    return Promise.reject(error);
  });

  return instance
};

export default useAxiosPrivet;
