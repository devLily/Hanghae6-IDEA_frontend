import React from "react";
import { Link } from "react-router-dom";
import { Grid, Text, Button, Image } from "../components/elements"
import styled from "styled-components";

export default function Header(props) {
  return (
            <Grid is_flex padding="4px 16px">
              <Grid>
                <Link to="/">
                  <Images src="/images/IdeaLogo.png" alt="logo" />
                </Link>
              </Grid>

              <Wrap>
                <Button margin="10px" text="login"/>
                <Button text="signup"/>
              </Wrap>
            </Grid>
  );
}

const Images = styled.img`
  width: 150px;
  height: 70px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
