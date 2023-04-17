import axios from "axios";

export const instance = axios.create({
  baseURL: "https://reqres.in/",
  headers: {
    "Content-Type": "application/json"
  }
});
