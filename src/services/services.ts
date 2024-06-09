import axios from 'axios';
const axiosClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/cutamar",
  headers: {
    Accept: "application/json",
  },
});

export default axiosClient; 