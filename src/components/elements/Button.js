import React from "react";

import { Grid } from "./index";
import styled from "styled-components";

export default function Button(props) {
  const { text } = props;

  return (
    <Grid>
      <button>{text}</button>
    </Grid>
  );
}

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: "100%",
};
