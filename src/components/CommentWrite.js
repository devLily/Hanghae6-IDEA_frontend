import React, { Fragment } from "react";
import styled from "styled-components";
import { Grid, Image, Text, Button, Input } from "./elements";

export default function CommentWrite(props) {
<<<<<<< HEAD
  return <Fragment></Fragment>;
=======
  return (
    <React.Fragment>
      <Grid padding="16px" is_flex>
        <Input
          placeholder="댓글 내용을 입력해주세요 :)"
          _onChange={() => {}}
          value=""
          is_Submit
        />
        <Button
          width="50px"
          margin="0px 2px 0px 2px"
        // _onClick={write}
        >
          작성
        </Button>
      </Grid>
    </React.Fragment>
  );
>>>>>>> 60ac55797b59900453ed884bbf15b5b5ed37b8b0
}
