import axios from "axios";
import { host } from "./API_urls"

const instance = axios.create({
  baseURL: host + '/en/api/',
});

export const headerConfig = () => {
  return {
    Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
    "Content-Type": "application/json",
  }
}

export default instance;