import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";

export default function Sidecart() {
  return (
    <>
      <ProductConsumer>
        {(value) => {
          const { sidecartOpen, cart, closeCart } = value;
          return (
            <CartWrapper show={sidecartOpen} onClick={closeCart}>
              <h3>cart items wlal mein</h3>
            </CartWrapper>
          );
        }}
      </ProductConsumer>
    </>
  );
}

const CartWrapper = styled.nav`
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  height: 100%;

  z-index: 1;
  background: var(--mainGrey);
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  @media (min-width: 576px) {
    width: 20rem;
  }
`;
