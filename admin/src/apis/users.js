import axios from "axios";

export default {
  fetchUsers: (data) => {
    return axios.get(`http://localhost:8080/api/users?key=${data.key}&page=${data.current}&pageSize=${data.pageSize}`);
  },
};
