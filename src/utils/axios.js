import axios from "axios";

const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:8000"
    : "/api";

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default API;