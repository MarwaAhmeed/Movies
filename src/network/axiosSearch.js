import axios from "axios";

export const axiosInstance2 = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie",
  params : {
    'api_key':"dcd1bd74b712d35627a8d6c3078ef226"
  }
});

// Add a request interceptor
axiosInstance2.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // console.log(config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance2.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log(response)
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // Show ERROR Handler Message
    return Promise.reject(error);
  }
);
