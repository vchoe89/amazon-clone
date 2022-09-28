import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/clone-f0714/us-central1/api",
});

export default instance;
