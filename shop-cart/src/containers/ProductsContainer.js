import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import ProductItem from "../components/ProductItem";
import message from "../reducers/message";
import { actAddToCart, actChangeMessage } from "./../actions/index";

class ProductsContainer extends Component {
  render() {
    let { products } = this.props;
    return (
      <>
        <Product>{this.showProductItem(products)}</Product>
      </>
    );
  }

  showProductItem = (products) => {
    let result = null;
    let { onAddToCart, onChangeMessage } = this.props;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            onAddToCart={onAddToCart}
            onChangeMessage={onChangeMessage}
          />
        );
      });
    }
    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
