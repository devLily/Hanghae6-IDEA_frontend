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
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.post.list.post);
  console.log(postList);
  const postId = useParams().postId;

  // 스토어에서 user 상태 가져오기

  // postList가 있을 때만 post 찾기 
  const post = postList && postList.find((post) => post._id === postId);

  return (
    <Grid>
      {post && (<Post {...post} />)}
      {/* 로그인 됐을 경우에만 CommentWrite 활성화 */}
      {/* <CommentWrite /> */}
    </Grid>
  );
}