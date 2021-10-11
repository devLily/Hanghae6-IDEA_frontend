import React, {Fragment} from "react";
import { Grid, Text, Button, Image } from "../components/elements"
import styled from "styled-components";

export default function Header(props) {
  return (
            <Grid is_flex padding="4px 16px">
              <Grid>
               <Images src="/images/IdeaLogo.png" alt="logo" />
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
