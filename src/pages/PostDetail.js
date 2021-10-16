import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as commentActions } from "../redux/modules/comment";

import { Grid, Button } from "../components/elements";
import Post from "../components/Post";
import CommentWrite from "../components/CommentWrite";
import { history } from "../redux/configStore";
// import CommentList from '../components/CommentList';

export default function PostDetail(props) {
  const user = useSelector((state) => state.user.user);
  const post = useSelector((state) => state.post.post);
  const comments = useSelector((state) => state.comment.list);
  const dispatch = useDispatch();
  const { postId } = useParams();
  const nickname = user?.nickname;

  const deletePost = () => {
    console.log(`postId ${postId} 삭제하러 가기!!!`);
    dispatch(postActions.deletePostMW(postId, nickname));
    // history.push("/");
  };

  React.useEffect(() => {
    dispatch(postActions.getPostById(postId));
  }, [dispatch, postId]);

  React.useEffect(() => {
    dispatch(commentActions.getCommentList(postId));
  }, [dispatch, postId]);

  return (
    <Grid>
      {post && <Post {...post} />}
      {user && post?.nickname === user?.nickname && (
        <Grid>
          <Button
            _onClick={() => {
              console.log(`postId ${postId} 수정하러 가기!!!`);
              history.push(`/write/${postId}`);
            }}
          >
            수정하기
          </Button>
          <Button _onClick={deletePost}>삭제하기</Button>
        </Grid>
      )}
      {/* 로그인 됐을 경우에만 CommentWrite 활성화 */}
      {user && <CommentWrite postId={postId} />}
      <CommentTable>
        <CommentTableHead>
          <tr>
            <th>닉네임</th>
            <th>코멘트</th>
            <th>등록일</th>
          </tr>
        </CommentTableHead>
        <CommentTableBody>
          {comments.length > 0 &&
            comments.map((comment) => {
              console.log("comment", comment);
              return (
                <tr>
                  <td>{comment.nickname}</td>
                  <td>{comment.comment}</td>
                  <td>{comment.commentTime}</td>
                </tr>
              );
            })}
          {comments.length < 1 && (
            <tr>
              <td colSpan={3}>등록된 코멘트가 없습니다!</td>
            </tr>
          )}
        </CommentTableBody>
      </CommentTable>
    </Grid>
  );
}

const CommentTable = styled.table`
  color: #333333;
  width: 100%;
`;

const CommentTableHead = styled.thead`
  tr {
    th {
      background-color: #0438ae;
      color: #fff10a;
      /* border: 1px solid #eeeeee; */
      height: 40px;
      text-align: center;
      vertical-align: middle;

      &:nth-child(2) {
        width: 50%;
      }
    }
  }
`;

const CommentTableBody = styled.tbody`
  width: 100%;

  tr {
    td {
      height: 40px;
      text-align: center;
      vertical-align: middle;
      &:first-child {
        border-left: 0;
      }

      &:last-child {
        border-right: 0;
      }
    }

    &:first-child {
      td {
        border-top: 0;
      }
    }
    &:nth-child(odd) {
      background-color: #f8f9fa;
    }
    &:nth-child(even) {
      background-color: #e9ecef;
    }
  }
`;
