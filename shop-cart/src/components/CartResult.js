import React, { Component } from "react";

export default class CartResult extends Component {
  render() {
    let { carts } = this.props;
    return (
      <>
        <tr>
          <td colSpan={3} />
          <td>
            <h4>
              <strong>Tổng Tiền</strong>
            </h4>
          </td>
          <td>
            <h4>
              <strong>{this.showTotalPrice(carts)}$</strong>
            </h4>
          </td>
          <td colSpan={3}>
            <button
              type="button"
              className="btn btn-primary waves-effect waves-light"
            >
              Complete purchase
              <i className="fa fa-angle-right right" />
            </button>
          </td>
        </tr>
      </>
    );
  }
  showTotalPrice = (carts) => {
    let result = 0;
    if (carts.length > 0) {
      for (let i = 0; i < carts.length; i++) {
        result += carts[i].product.price * carts[i].quantity;
      }
    }
    return result;
  };
}
