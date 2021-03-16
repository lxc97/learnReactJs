import * as type from '../const/ActionTypes'
const initialState = {
  isLogin: false,
  token: "",
  message: "",
  loading: false
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case type.LOGIN: 
      return {
        ...state,
        message: "",
        loading: true
      }
    case type.LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        message: "login success",
        loading: false,
        username: action.payload.username,
        token: action.payload.token
      };
    case type.LOGIN_FAIL:
      return {
        ...state,
        isLogin: false,
        message: "login fail",
        loading: false
      };
  }
  return state;
}
