import axios from "axios";

export default {
  login: (data) => {
    return axios.post("http://localhost:8080/api/login", data);
  },
};
