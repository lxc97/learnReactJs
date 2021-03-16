import * as types from "./../constants/ActionType";
let data = JSON.parse(localStorage.getItem("CART"));
let initialState = data ? data : [];
const carts = (state = initialState, action) => {
  let { product, quantity } = action;
  let index = -1;
  switch (action.type) {
    case types.ADD_TO_CART:
      index = state.findIndex((x) => x.product.id === product.id);
      if (index === -1) {
        state.push({
          product,
          quantity,
        });
      } else {
        state[index].quantity += 1;
      }
      localStorage.setItem("CART", JSON.stringify(state));

      return [...state];

    case types.DELETE_PRODUCT_FROM_CART:
      index = state.findIndex((x) => x.product.id === product.id);
      if (index !== -1) {
        state.splice(index, 1);
        return [...state];
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case types.CHANGE_QUANTITY_PRODUCT:
      index = state.findIndex((x) => x.product.id === product.id);
      if (index !== -1) {
        state[index].quantity += quantity;
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};

export default carts;
