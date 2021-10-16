import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Grid, Image, Text, Button, Input } from './elements';
import CommentList from './CommentList';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as commentActions } from '../redux/modules/comment';
export default function CommentWrite(props) {
  const dispatch = useDispatch();
  const commentUser = useSelector((state) => state.user.user);
  //console.log(commentUser);
  const [comment, setComments] = React.useState('');
  const write = () => {
    if (comment === '') {
      window.alert('선플로 부탁해요');
      return;
    }
    console.log(props.postId, comment, commentUser.nickname);
    dispatch(
      commentActions.addCommentItem(props.postId, comment, commentUser.nickname)
    );

    dispatch(commentActions.getCommentList(props.postId));
  };

  return (
    <React.Fragment>
      <Grid padding="16px" is_flex>
        <Input
          placeholder="댓글 내용을 입력해주세요"
          _onChange={(e) => {
            setComments(e.target.value);
          }}
          value={comment}
          // is_Submit
        />
        <Button width="50px" margin="0px 2px 0px 2px" _onClick={write}>
          작성
        </Button>
      </Grid>
      <Grid>
        <CommentList />
      </Grid>
    </React.Fragment>
  );
}
