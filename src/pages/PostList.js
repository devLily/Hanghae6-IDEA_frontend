import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Slider from "react-slick";

import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as wishActions } from "../redux/modules/wish";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PostListItem from "../components/PostListItem";

export default function PostList(props) {
  const { list: postList } = useSelector((state) => state.post);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const slickSettings = {
    dots: true, // pagination dot
    infinite: true, // 끝이없음.
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  console.log("postList", postList);

  useEffect(() => {
    // 사용자 정보가 있을 때만 wishList 요청
    if (user) {
      dispatch(wishActions.getWishList());
    }
  }, [dispatch, user]);

  useEffect(() => {
    dispatch(postActions.getPostList());
  }, [dispatch]);

  if (!postList?.length) {
    return null;
  }

  // 거실=1, 침실=2, 주방=3, 화장실=4, 기타=5
  return (
    <PostListContainer>
      <SliderWrap>
        <Slider {...slickSettings}>
          {postList.map((post) => {
            return <PostListItem key={post.postId} post={post} />;
          })}
        </Slider>
      </SliderWrap>
    </PostListContainer>
  );
}

const PostListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);
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
