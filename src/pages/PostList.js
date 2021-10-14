import React, { Fragment } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { actionCreators as postActions } from "../redux/modules/post";

import { Grid } from "../components/elements";

const PostList = () => {
  const postList = useSelector((state) => state.post.list);
  const dispatch = useDispatch();


  return (
    <Grid>
      메인 페이지
    </Grid>
  );
}

export default PostList;
