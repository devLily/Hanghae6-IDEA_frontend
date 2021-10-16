import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import PostListItem from '../components/PostListItem';
import { actionCreators as postActions } from '../redux/modules/post';
import { actionCreators as wishActions } from '../redux/modules/wish';

import styled from 'styled-components';

export default function WishList(props) {
  const { list: postList } = useSelector((state) => state.post);
  const myPostList = postList.filter((post) => post.isWished);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // 사용자 정보가 있을 때만 wishList 요청
    if (user) {
      dispatch(wishActions.getWishList());
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (!postList.length) {
      dispatch(postActions.getPostList());
    }
  }, [dispatch]);

  if (!myPostList?.length) {
    return (
      <h1>
        등록된 wish Item이 없습니다, <br />
        게시물의 하트를 눌러 마음에 드는 소품을 추가해보세요!
      </h1>
    );
  }

  return (
    <WishListContainer>
      <Title>위시리스트</Title>
      <WishListWrap>
        {myPostList.map((post) => {
          return <PostListItem key={post.postId} post={post} />;
        })}
      </WishListWrap>
    </WishListContainer>
  );
}

const WishListContainer = styled.div`
  display: block;
  width: calc(100% - 120px);
  max-width: 100%;
  margin: 0 auto;
  padding: 50px 0;
  height: calc(100vh - 70px);

  @media only screen and (max-width: 768px) {
    width: calc(100% - 30px);
  }
`;

const WishListWrap = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const SnackBar = styled.div`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);

  opacity: 0;
  pointer-events: none;

  transition: bottom 0.5s opacity 0.5s;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
`;
