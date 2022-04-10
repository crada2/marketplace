import axios from "axios";

const BASE_URL = "http://localhost:8080";

const get = async (endpoint) => {
  const res = await axios.get(`${BASE_URL}${endpoint}`);
  return res.data.content;
};

const api = {
  get,
};

export default api;
