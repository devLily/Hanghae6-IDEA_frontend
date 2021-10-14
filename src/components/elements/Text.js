import React from "react";
import styled from "styled-components";

export default function Text(props) {
<<<<<<< HEAD
  const { bold, color, size, lineHeight, children } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    lineHeight: lineHeight,
  };
  return <P {...styles}>{children}</P>;
}
=======
  const { bold, color, size, children, width } = props;

  const styles = {bold: bold, color: color, size: size, width: width};
  return (
      <P {...styles}>
          {children}
      </P>
  )
};
>>>>>>> 60ac55797b59900453ed884bbf15b5b5ed37b8b0

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
<<<<<<< HEAD
  lineHeight: 1.2,
=======
  width: false,
>>>>>>> 60ac55797b59900453ed884bbf15b5b5ed37b8b0
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
<<<<<<< HEAD
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  line-height: ${(props) => props.lineHeight};
=======
  font-weight: ${(props) => (props.bold? "600" : "400")};
  width: ${(props) => (props.width? props.width : "")};
>>>>>>> 60ac55797b59900453ed884bbf15b5b5ed37b8b0
`;
