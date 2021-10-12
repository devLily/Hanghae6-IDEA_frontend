import React, { Fragment } from "react";
import styled from "styled-components";
import { Grid, Image, Text, Button, Input } from "./elements";

export default function CommentWrite(props) {
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
}
