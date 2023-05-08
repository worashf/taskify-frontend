import axios from "axios";
const baseURL = `http://localhost:6000/${api / v1}`;

const axiosInstance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});
export default axiosInstance;
