import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Text, Grid } from './elements';
export default function CommentList(props) {
  const { comment } = props;

  if (comment) {
    return (
      <Fragment>
        <Grid is_flex>
          <div>
            <Text bold> {comment.nickname} </Text>
          </div>
          <div>
            <Text> {comment.comment}</Text>
          </div>
          <div>
            <Text> {comment.commentTime} </Text>
          </div>
        </Grid>
      </Fragment>
    );
  }

  return null;
}
