import React, { Component } from "react";
// import CartResult from "./CartResult";
import CartItem from "./CartItem";

export default class Cart extends Component {
  render() {
    return (
      <>
        <section className="section">
          <div className="table-responsive">
            <table className="table product-table">
              <thead>
                <tr>
                  <th />
                  <th>Sản Phẩm</th>
                  <th>Giá</th>
                  <th>Số Lượng</th>
                  <th>Tổng Cộng</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.props.children}
                {/* <CartResult /> */}
              </tbody>
            </table>
          </div>
        </section>
      </>
    );
  }
}
