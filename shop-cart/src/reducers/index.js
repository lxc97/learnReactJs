import { combineReducers } from "redux";
import products from "./products";
import carts from "./carts";
import message from "./message";
const myReducer = combineReducers({
  products,
  carts,
  message,
});
export default myReducer;
