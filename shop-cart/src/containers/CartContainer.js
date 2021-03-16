import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import Cart from "./../components/Cart";
import * as Message from "./../constants/Message";
import {
  actDeleteProduct,
  actChangeMessage,
  actChangeQuantityProduct,
} from "./../actions/index";

class CartContainer extends Component {
  render() {
    let { carts } = this.props;
    return (
      <>
        <Cart>
          {this.showCartItem(carts)}
          {this.showTotalPrice(carts)}
        </Cart>
      </>
    );
  }

  showCartItem = (carts) => {
    let {
      onDeleteProductFromCart,
      onChangeMessage,
      onChangeQuantityProduct,
    } = this.props;
    let result = (
      <tr>
        <th>
          <h5>{Message.MSG_CART_EMPTY}</h5>
        </th>
      </tr>
    );
    if (carts.length > 0) {
      result = carts.map((cart, index) => {
        return (
          <CartItem
            key={index}
            cart={cart}
            onDeleteProductFromCart={onDeleteProductFromCart}
            onChangeMessage={onChangeMessage}
            onChangeQuantityProduct={onChangeQuantityProduct}
          />
        );
      });
    }
    return result;
  };
  showTotalPrice = (carts) => {
    let result = null;
    if (carts.length > 0) {
      return <CartResult carts={carts} />;
    }
    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    carts: state.carts,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductFromCart: (product) => {
      dispatch(actDeleteProduct(product));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },
    onChangeQuantityProduct: (product, quantity) => {
      dispatch(actChangeQuantityProduct(product, quantity));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
