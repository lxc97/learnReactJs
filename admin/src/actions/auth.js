import { auth } from "../apis";
import { saveToken } from "../utils/localStorageHandler";
import * as type from '../const/ActionTypes'
// import store from '../store'

export const login = (data) => (dispatch) => {
  dispatch({
    type: type.LOGIN,
  });
  // console.log('starting login: ', data)
  auth
    .login(data)
    .then((res) => {
      console.log("res: ", res);
      // store.dispatch({
      //     type: "LOGIN_SUCCESS"
      // })
      dispatch({
        type: type.LOGIN_SUCCESS,
        payload: { token: res.data.token },
      });
      saveToken(res.data.token)
      window.location="/"
    })
    .catch((err) => {
      console.log("err: ", err);
      // store.dispatch({
      //     type: "LOGIN_FAIL"
      // })
      dispatch({
        type: type.LOGIN_FAIL,
      });
    });
};
