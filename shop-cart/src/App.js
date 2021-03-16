import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MessageContainer from "./containers/MessageContainer";
import CartContainer from "./containers/CartContainer";
import ProductsContainer from "./containers/ProductsContainer";

class App extends Component {
  render() {
    return (
      <div>
        {/* Header */}
        <Header />
        <main id="mainContainer">
          <div className="container">
            {/* Products */}
            <ProductsContainer />
            {/* Message */}
            <MessageContainer />
            {/* Cart */}
            <CartContainer />
          </div>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
