import React from "react";
import styled from "styled-components";

const Message = styled.h1`
  margin-top: 20px;
  font-family: "Amita", cursive;
  font-size: x-large;
  font-style: italic;
  color: ${(props) => props.color.ceruleanBlue};
  animation: appear 3s linear;
  animation-fill-mode: forwards;

  @keyframes appear {
    0% {
      color: #fff;
    }
    100% {
      color: ${(props) => props.theme.darkCerulean};
    }
  }
`;

const ThankYou = () => {
  return (
    <div align="center">
      <Message>Thank You</Message>
    </div>
  );
};

export default ThankYou;
