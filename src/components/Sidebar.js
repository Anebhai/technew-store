import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from "../context";

export default function Sidebar() {
  return (
    <ProductConsumer>
      {(value) => {
        console.log(value);
        const { sidebarOpen, handleSidebar, links } = value;
        return (
          <SideWrapper show={sidebarOpen}>
            <ul>
              {links.map((link) => (
                <li>
                  <Link
                    to={link.path}
                    onClick={handleSidebar}
                    className="sidebar-link"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </SideWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const SideWrapper = styled.nav`
  position: fixed;
  top: 61px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--mainGrey);
  z-index: 1;
  border-right: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};

  ul {
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebar-link {
    text-decoration: none;
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 2.5rem;
    background: transparent;
    transition: var(--mainTransition);
  }

  .sidebar-link:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 2.5rem 0.5rem 3.5rem;
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 20rem;
  }
`;
