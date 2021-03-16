import { users } from "../apis";
import * as type from '../const/ActionTypes'

export const fetchUsers = (data) => (dispatch) => {
  dispatch({
    type: type.FETCH_USERS,
  });
  users
    .fetchUsers(data)
    .then((res) => {
      dispatch({
        type: type.FETCH_USERS_SUCCESS,
        payload: { users: res.data.data, total: res.data.total },
      });
    })
    .catch((err) => {
      console.log("err: ", err);
      dispatch({
        type: type.FETCH_USERS_FAIL,
      });
    });
};
