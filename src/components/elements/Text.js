import React from "react";
import styled from "styled-components";

export default function Text(props) {
  const { bold, color, size, children, width } = props;

  const styles = {bold: bold, color: color, size: size, width: width};
  return (
      <P {...styles}>
          {children}
      </P>
  )
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  width: false,
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold? "600" : "400")};
  width: ${(props) => (props.width? props.width : "")};
`;
