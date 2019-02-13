import axios from 'axios';

const PROD_URL = 'http//';

const axiosProvider = axios.create({
  baseURL: PROD_URL
});

axiosProvider.interceptors.response.use(
  (response) => {
    console.log(response)
    return new Promise(async (resolve, reject) => {
        resolve(response);
    });
  },
  (err) => {
    console.log(err)
    return new Promise(async (resolve, reject) => {
        resolve(err)
    });
  }
);

export default axiosProvider;
