import React, { Component, createContext } from "react";
import { linkData } from "./linkData";

const ProductContext = createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    sidecartOpen: false,
    cartItems: 0,
    links: linkData,
  };
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  handleSidecart = () => {
    this.setState({ sidecartOpen: !this.state.sidecartOpen });
  };

  openCart = () => {
    this.setState({ sidecartOpen: true });
  };
  closeCart = () => {
    this.setState({ sidecartOpen: false });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleSideCart: this.handleSidecart,
          openCart: this.openCart,
          closeCart: this.closeCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
