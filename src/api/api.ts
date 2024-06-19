import axios from "axios";

const baseURL = "http://localhost:3004/";
export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
