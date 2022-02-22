import axios from "axios";
const BASE_URL = "https://restcountries.com/v2/all";

export default axios.create({
  baseURL: BASE_URL,
});
