import React, { Component, createContext } from "react";
import { linkData } from "./linkData";
import { socialData } from "./socialData";

const ProductContext = createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    sidecartOpen: false,
    cartItems: 0,
    links: linkData,
    socialLinks: socialData,
    cart: [],
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
          handleSidecart: this.handleSidecart,
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
