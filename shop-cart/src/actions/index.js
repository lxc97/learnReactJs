import * as types from "./../constants/ActionType";

export const actAddToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity,
  };
};

export const actChangeMessage = (message) => {
  return {
    type: types.CHANGE_MESSAGE,
    message,
  };
};
export const actDeleteProduct = (product, message) => {
  return {
    type: types.DELETE_PRODUCT_FROM_CART,
    product,
    message,
  };
};

export const actChangeQuantityProduct = (product, quantity) => {
  return {
    type: types.CHANGE_QUANTITY_PRODUCT,
    product,
    quantity,
  };
};
