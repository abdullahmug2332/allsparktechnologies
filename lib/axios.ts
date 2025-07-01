import axios from "axios";
import { baseURL } from "@/API/baseURL";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
