import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import PostListItem from "../components/PostListItem";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as wishActions } from "../redux/modules/wish";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";

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
    dispatch(postActions.getPostList());
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
    // <PostListContainer>
    //   <SliderWrap>
    //     <Slider {...slickSettings}>
    //       {wishList.map((post) => {
    //         return <Post key={post.postId} post={post} />;
    //       })}
    //     </Slider>
    //   </SliderWrap>
    // </PostListContainer>
  );

  // return(
  //   <Wrap>
  //     <IconWrap>
  //       <FaChevronLeft size={30} onClick/>
  //     </IconWrap>
  //       <Post/>
  //       <Post/>
  //       <Post/>
  //     <IconWrap>
  //       <FaChevronRight size={30} onClick/>
  //     </IconWrap>
  //   </Wrap>
  // );
}

const WishListContainer = styled.div`
  display: block;
  height: calc(100vh - 70px);
`;

const WishListWrap = styled.ul`
  display: flex;
  align-items: center;
`;

const WishListItem = styled.li`
  width: 25%;
`;

const SliderWrap = styled.div`
  max-width: 900px;
  margin: 0 auto;

  .slick-prev,
  .slick-next {
    width: 30px;
    height: 30px;

    &::before {
      color: #0438ae;
      font-size: 30px;
    }
  }
  .slick-dots {
    li {
      button {
        &::before {
          color: #0438ae;
        }
      }
    }
  }
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
`;
