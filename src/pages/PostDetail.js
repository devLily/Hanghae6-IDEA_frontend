import React, { Fragment } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import { Grid } from "../components/elements";
import Post from "../components/Post";
import CommentWrite from "../components/CommentWrite";
import reactRouterDom from "react-router-dom";

export default function PostDetail(props) {
  const post = useSelector((state) => state.post.post);
  const dispatch = useDispatch();
  const { postId } = useParams();

  React.useEffect(() => {
    dispatch(postActions.getPostById(postId));
  }, [dispatch, postId]);

  return (
    <Grid>
      {post && <Post {...post} />}
      {/* 로그인 됐을 경우에만 CommentWrite 활성화 */}
      {/* <CommentWrite /> */}
    </Grid>
  );
}
