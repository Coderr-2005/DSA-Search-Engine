import axios from "axios";

const api = axios.create({
  baseURL: "https://algoatlas-backend-8cyw.onrender.com/api",
});

api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }

  return config;
});

export default api;
