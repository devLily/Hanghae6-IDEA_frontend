import React, { Fragment } from "react";
import styled from "styled-components";

import { Grid } from "../components/elements";
import Post from "../components/Post";
import CommentWrite from "../components/CommentWrite";

export default function PostDetail(props) {


  return (
    <Grid>
      <Post  />
      {/* 로그인 됐을 경우에만 CommentWrite 활성화 */}
      <CommentWrite /> 
    </Grid>
  );
}