import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-f0714.cloudfunctions.net/api",
});

export default instance;
