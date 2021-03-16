import React, { Component } from "react";
import * as Message from "./../constants/Message";
export default class CartItem extends Component {
  render() {
    let { cart } = this.props;
    return (
      <>
        <tr>
          <th scope="row">
            <img
              src={cart.product.image}
              alt=""
              className="img-fluid z-depth-0"
            />
          </th>
          <td>
            <h5>
              <strong>{cart.product.name}</strong>
            </h5>
          </td>
          <td>{cart.product.price}$</td>
          <td className="center-on-small-only">
            <span className="qty">{cart.quantity} </span>
            <div className="btn-group radio-group" data-toggle="buttons">
              <label
                className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                onClick={() => {
                  this.onChangeQuantityProduct(
                    cart.product,
                    cart.quantity === 1 ? 0 : -1
                  );
                }}
              >
                <a>—</a>
              </label>
              <label
                className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                onClick={() => {
                  this.onChangeQuantityProduct(cart.product, +1);
                }}
              >
                <a>+</a>
              </label>
            </div>
          </td>
          <td>{this.showSubTotal(cart.product.price, cart.quantity)}$</td>
          <td>
            <button
              type="button"
              className="btn btn-sm btn-primary waves-effect waves-light"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              data-original-title="Remove item"
              onClick={() => {
                this.onDeleteProductFromCart(cart.product);
              }}
            >
              X
            </button>
          </td>
        </tr>
      </>
    );
  }
  onChangeQuantityProduct = (product, quantity) => {
    let { onChangeQuantityProduct, onChangeMessage } = this.props;
    onChangeQuantityProduct(product, quantity);
    onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
  };
  onDeleteProductFromCart = (product) => {
    let { onDeleteProductFromCart, onChangeMessage } = this.props;
    onDeleteProductFromCart(product);
    onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  };
  showSubTotal = (price, quantity) => {
    let result = 0;
    if (price && quantity) {
      return (result = price * quantity);
    }
    return result;
  };
}
