import React from "react";

import { Grid } from "./index";
import styled from "styled-components";

export default function Button(props) {
<<<<<<< HEAD
  const { text } = props;

  return (
  <Grid>
    <button>{text}</button>
  </Grid>
=======
  const { text, children, _onClick, is_float, margin, width, padding } = props;

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>{text ? text : children}</ElButton>
    </React.Fragment>
>>>>>>> 60ac55797b59900453ed884bbf15b5b5ed37b8b0
  );
}

Button.defaultProps = {
  text: false,
  children: null,
<<<<<<< HEAD
  _onClick: () => {},
=======
  _onClick: () => { },
>>>>>>> 60ac55797b59900453ed884bbf15b5b5ed37b8b0
  is_float: false,
  margin: false,
  width: '100%',
};
<<<<<<< HEAD
=======

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: #212121;
  color: #ffffff;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
`;
>>>>>>> 60ac55797b59900453ed884bbf15b5b5ed37b8b0
