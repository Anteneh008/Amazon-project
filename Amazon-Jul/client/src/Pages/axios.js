import axios from "axios";

const instance = axios.create({
  // https://amazon-project.cyclic.app
  // http://127.0.0.1:5001/feb-22892/us-central1/api

  baseURL: "https://pink-fuzzy-duckling.cyclic.app",
});

export default instance;
