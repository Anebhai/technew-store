import React from "react";
import styled from "styled-components";

export default function Title({ title, centre }) {
  return (
    <Titlewrapper className="row" centre={centre}>
      <div className="col">
        <h2 className="text-title">{title}</h2>
        <div className="title-underline" />
      </div>
    </Titlewrapper>
  );
}

const Titlewrapper = styled.div`
  text-align: ${(props) => (props.centre ? "centre" : "left")};

  .title-underline {
    width: 7rem;
    height: 0.25rem;
    background: var(--primaryColor);
    margin: ${(props) => (props.centre ? "0 auto" : "0")};
  }
`;
